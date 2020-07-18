(window.webpackJsonp=window.webpackJsonp||[]).push([[1177],{1737:function(t,e,l){"use strict";l.r(e);var _=l(69),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"系统配置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#系统配置"}},[t._v("#")]),t._v(" 系统配置")]),t._v(" "),l("p",[t._v("为方便IoTDB Server的配置与管理，IoTDB Server为用户提供三种配置项，使得用户可以在启动服务器或服务器运行时对其进行配置。")]),t._v(" "),l("p",[t._v("三种配置项的配置文件均位于IoTDB安装目录："),l("code",[t._v("$IOTDB_HOME/conf")]),t._v("文件夹下,其中涉及server配置的共有3个文件，分别为："),l("code",[t._v("iotdb-env.sh")]),t._v(", "),l("code",[t._v("tsfile-format.properties")]),t._v(", "),l("code",[t._v("iotdb-engine.properties")]),t._v("。用户可以通过更改其中的配置项对系统运行的相关配置项进行配置。")]),t._v(" "),l("p",[t._v("配置文件的说明如下：")]),t._v(" "),l("ul",[l("li",[l("p",[l("code",[t._v("iotdb-env.sh")]),t._v("：环境配置项的默认配置文件。用户可以在文件中配置JAVA-JVM的相关系统配置项。")])]),t._v(" "),l("li",[l("p",[l("code",[t._v("tsfile-format.properties")]),t._v("：IoTDB文件层系统配置项的默认配置文件。用户可以在文件中配置IoTDB存储时TsFile文件的相关信息，如每次将内存中的数据写入到磁盘时的数据大小("),l("code",[t._v("group_size_in_byte")]),t._v(")，内存中每个列打一次包的大小("),l("code",[t._v("page_size_in_byte")]),t._v(")等。")])]),t._v(" "),l("li",[l("p",[l("code",[t._v("iotdb-engine.properties")]),t._v("：IoTDB引擎层系统配置项的默认配置文件。用户可以在文件中配置IoTDB引擎运行时的相关参数，如JDBC服务监听端口("),l("code",[t._v("rpc_port")]),t._v(")、overflow数据文件存储目录("),l("code",[t._v("overflow_data_dir")]),t._v(")等。")])])]),t._v(" "),l("h2",{attrs:{id:"环境配置项"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#环境配置项"}},[t._v("#")]),t._v(" 环境配置项")]),t._v(" "),l("p",[t._v("环境配置项主要用于对IoTDB Server运行的Java环境相关参数进行配置，如JVM相关配置。IoTDB Server启动时，此部分配置会被传给JVM。用户可以通过查看 "),l("code",[t._v("iotdb-env.sh")]),t._v("(或"),l("code",[t._v("iotdb-env.bat")]),t._v(")文件查看环境配置项内容。详细配置项说明如下：")]),t._v(" "),l("ul",[l("li",[t._v("LOCAL_JMX")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("LOCAL_JMX")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JMX监控模式，配置为yes表示仅允许本地监控，设置为no的时候表示允许远程监控")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("枚举String : “yes”, “no”")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("yes")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("JMX_PORT")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("JMX_PORT")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("JMX监听端口。请确认该端口不是系统保留端口并且未被占用。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int: [0,65535]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("31999")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("MAX_HEAP_SIZE")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("MAX_HEAP_SIZE")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB启动时能使用的最大堆内存大小。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("取决于操作系统和机器配置。在Linux或MacOS系统下默认为机器内存的四分之一。在Windows系统下，32位系统的默认值是512M，64位系统默认值是2G。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("HEAP_NEWSIZE")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("HEAP_NEWSIZE")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB启动时能使用的最小堆内存大小。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("取决于操作系统和机器配置。在Linux或MacOS系统下默认值为机器CPU核数乘以100M的值与MAX_HEAP_SIZE四分之一这二者的最小值。在Windows系统下，32位系统的默认值是512M，64位系统默认值是2G。。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("h2",{attrs:{id:"系统配置项"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#系统配置项"}},[t._v("#")]),t._v(" 系统配置项")]),t._v(" "),l("p",[t._v("系统配置项是IoTDB Server运行的核心配置，它主要用于设置IoTDB Server文件层和引擎层的参数，便于用户根据自身需求调整Server的相关配置，以达到较好的性能表现。系统配置项可分为两大模块：文件层配置项和引擎层配置项。用户可以通过查看"),l("code",[t._v("tsfile-format.properties")]),t._v(", "),l("code",[t._v("iotdb-engine.properties")]),t._v(",文件查看和修改两种配置项的内容。在0.8.*版本中字符串类型的配置项大小写敏感。")]),t._v(" "),l("h3",{attrs:{id:"文件层配置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#文件层配置"}},[t._v("#")]),t._v(" 文件层配置")]),t._v(" "),l("ul",[l("li",[t._v("compressor")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("compressor")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("数据压缩方法")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("枚举String : “UNCOMPRESSED”, “SNAPPY”")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UNCOMPRESSED")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("即时生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("group_size_in_byte")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("group_size_in_byte")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("每次将内存中的数据写入到磁盘时的最大写入字节数")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("134217728")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("即时生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("max_number_of_points_in_page")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("max_number_of_points_in_page")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("一个页中最多包含的数据点（时间戳-值的二元组）数量")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1048576")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("即时生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("max_string_length")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("max_string_length")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("针对字符串类型的数据，单个字符串最大长度，单位为字符")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("128")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("即时生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("page_size_in_byte")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("page_size_in_byte")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("内存中每个列写出时，写成的单页最大的大小，单位为字节")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("65536")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("即时生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("time_series_data_type")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("time_series_data_type")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("时间戳数据类型")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('枚举String: "INT32", "INT64"')])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int64")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("即时生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("time_encoder")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("time_encoder")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("时间列编码方式")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("枚举String: “TS_2DIFF”,“PLAIN”,“RLE”")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TS_2DIFF")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("即时生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("float_precision")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("float_precision")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("浮点数精度，为小数点后数字的位数")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("默认为2位。注意：32位浮点数的十进制精度为7位，64位浮点数的十进制精度为15位。如果设置超过机器精度将没有实际意义。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("即时生效")])])])]),t._v(" "),l("h3",{attrs:{id:"引擎层配置"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#引擎层配置"}},[t._v("#")]),t._v(" 引擎层配置")]),t._v(" "),l("ul",[l("li",[t._v("back_loop_period")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("back_loop_period")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("系统统计量触发统计的频率，单位为秒。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("5")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("data_dir")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("data_dir")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB数据存储路径，默认存放在和bin目录同级的data目录下。相对路径的起始目录与操作系统相关，建议使用绝对路径。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("data")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("enable_wal")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("enable_wal")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启写前日志，默认值为true表示开启，配置成false表示关闭")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Bool")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("fetch_size")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("fetch_size")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("批量读取数据的时候，每一次读取数据的数量。单位为数据条数，即不同时间戳的个数。某次会话中，用户可以在使用时自己设定，此时仅在该次会话中生效。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10000")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("force_wal_period_in_ms")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("force_wal_period_in_ms")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("写前日志定期刷新到磁盘的周期，单位毫秒，有可能丢失至多flush_wal_period_in_ms毫秒的操作。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("flush_wal_threshold")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("flush_wal_threshold")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("写前日志的条数达到该值之后，刷新到磁盘，有可能丢失至多flush_wal_threshold个操作")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("10000")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("merge_concurrent_threads")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("merge_concurrent_threads")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("乱序数据进行合并的时候最多可以用来进行merge的线程数。值越大，对IO和CPU消耗越多。值越小，当乱序数据过多时，磁盘占用量越大，读取会变慢。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("multi_dir_strategy")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("multi_dir_strategy")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB在tsfile_dir中为TsFile选择目录时采用的策略。可使用简单类名或类名全称。系统提供以下三种策略："),l("br"),t._v("1. SequenceStrategy：IoTDB按顺序从tsfile_dir中选择目录，依次遍历tsfile_dir中的所有目录，并不断轮循；"),l("br"),t._v("2. MaxDiskUsableSpaceFirstStrategy：IoTDB优先选择tsfile_dir中对应磁盘空余空间最大的目录；"),l("br"),t._v("3. MinFolderOccupiedSpaceFirstStrategy：IoTDB优先选择tsfile_dir中已使用空间最小的目录；"),l("br"),t._v("4. <UserDfineStrategyPackage>（用户自定义策略）"),l("br"),t._v("您可以通过以下方法完成用户自定义策略："),l("br"),t._v("1. 继承cn.edu.tsinghua.iotdb.conf.directories.strategy.DirectoryStrategy类并实现自身的Strategy方法；"),l("br"),t._v("2. 将实现的类的完整类名（包名加类名，UserDfineStrategyPackage）填写到该配置项；"),l("br"),t._v("3. 将该类jar包添加到工程中。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("MaxDiskUsableSpaceFirstStrategy")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("rpc_address")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("rpc_address")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v('"0.0.0.0"')])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("rpc_port")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("rpc_port")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("jdbc服务监听端口。请确认该端口不是系统保留端口并且未被占用。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("6667")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("time_zone")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("time_zone")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("服务器所处的时区，默认为北京时间（东八区）")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Time Zone String")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("+08:00")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("enable_stat_monitor")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("enable_stat_monitor")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("选择是否启动后台统计功能")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("concurrent_flush_thread")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("concurrent_flush_thread")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("当IoTDB将内存中的数据写入磁盘时，最多启动多少个线程来执行该操作。如果该值小于等于0，那么采用机器所安装的CPU核的数量。默认值为0。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("stat_monitor_detect_freq_in_second")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("stat_monitor_detect_freq_in_second")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("每隔一段时间（以秒为单位）检测当前记录统计量时间范围是否超过stat_monitor_retain_interval，并进行定时清理。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("600")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])]),t._v(" "),l("ul",[l("li",[t._v("stat_monitor_retain_interval_in_second")])]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("stat_monitor_retain_interval_in_second")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("系统统计信息的保留时间（以秒为单位），超过保留时间范围的统计数据将被定时清理。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("600")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务器生效")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);