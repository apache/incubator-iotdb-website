(window.webpackJsonp=window.webpackJsonp||[]).push([[526],{1096:function(t,e,a){"use strict";a.r(e);var _=a(69),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("集群模式目前是测试版！请谨慎在生产环境中使用。")])]),t._v(" "),a("h1",{attrs:{id:"集群设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群设置"}},[t._v("#")]),t._v(" 集群设置")]),t._v(" "),a("p",[t._v("安装环境请参考"),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.12.x/QuickStart/QuickStart.html"}},[t._v("快速上手/安装环境章节")])],1),t._v(" "),a("h2",{attrs:{id:"前提条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),a("p",[t._v("如果您在使用Windows系统，请安装MinGW，WSL或者git bash。")]),t._v(" "),a("h2",{attrs:{id:"集群环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群环境搭建"}},[t._v("#")]),t._v(" 集群环境搭建")]),t._v(" "),a("p",[t._v("您可以搭建伪分布式模式或是分布式模式的集群，伪分布式模式和分布式模式的主要区别是配置文件中"),a("code",[t._v("seed_nodes")]),t._v("的不同，配置项含义请参考"),a("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE%E9%A1%B9"}},[t._v("配置项")]),t._v("。\n启动其中一个节点的服务，需要执行如下命令：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unix/OS X")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" sbin/start-node.sh "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("printgc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("conf_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Windows")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("start-node.bat "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("printgc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("conf_path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("code",[t._v("printgc")]),t._v("表示在启动的时候，会开启GC日志。\n"),a("code",[t._v("<conf_path>")]),t._v("使用"),a("code",[t._v("conf_path")]),t._v("文件夹里面的配置文件覆盖默认配置文件。")]),t._v(" "),a("h2",{attrs:{id:"被覆盖的单机版选项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#被覆盖的单机版选项"}},[t._v("#")]),t._v(" 被覆盖的单机版选项")]),t._v(" "),a("p",[t._v("iotdb-engines.properties配置文件中的部分内容会不再生效：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("enable_auto_create_schema")]),t._v(" 不再生效，并被视为"),a("code",[t._v("false")]),t._v(". 应使用 iotdb-cluster.properties 中的"),a("br"),t._v(" "),a("code",[t._v("enable_auto_create_schema")]),t._v(" 来控制是否自动创建序列。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("is_sync_enable")]),t._v(" 不再生效，并被视为 "),a("code",[t._v("false")]),t._v(".")])])]),t._v(" "),a("h2",{attrs:{id:"配置项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),a("p",[t._v("为方便IoTDB Server的配置与管理，IoTDB Server为用户提供三种配置项，使得您可以在启动服务或服务运行时对其进行配置。")]),t._v(" "),a("p",[t._v("三种配置项的配置文件均位于IoTDB安装目录："),a("code",[t._v("$IOTDB_HOME/conf")]),t._v("文件夹下,其中涉及server配置的共有4个文件，分别为："),a("code",[t._v("iotdb-cluster.properties")]),t._v("、"),a("code",[t._v("iotdb-engine.properties")]),t._v("、"),a("code",[t._v("logback.xml")]),t._v(" 和 "),a("code",[t._v("iotdb-env.sh")]),t._v("(Unix系统)/"),a("code",[t._v("iotdb-env.bat")]),t._v("(Windows系统), 您可以通过更改其中的配置项对系统运行的相关配置项进行配置。")]),t._v(" "),a("p",[t._v("配置文件的说明如下：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("iotdb-env.sh")]),t._v("/"),a("code",[t._v("iotdb-env.bat")]),t._v("：环境配置项的默认配置文件。您可以在文件中配置JAVA-JVM的相关系统配置项。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("iotdb-engine.properties")]),t._v("：IoTDB引擎层系统配置项的默认配置文件。您可以在文件中配置IoTDB引擎运行时的相关参数。此外，用户可以在文件中配置IoTDB存储时TsFile文件的相关信息，如每次将内存中的数据写入到磁盘前的缓存大小("),a("code",[t._v("group_size_in_byte")]),t._v(")，内存中每个列打一次包的大小("),a("code",[t._v("page_size_in_byte")]),t._v(")等。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("logback.xml")]),t._v(": 日志配置文件，比如日志级别等。")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("iotdb-cluster.properties")]),t._v(": IoTDB集群所需要的一些配置。")])])]),t._v(" "),a("p",[a("code",[t._v("iotdb-engine.properties")]),t._v("、"),a("code",[t._v("iotdb-env.sh")]),t._v("/"),a("code",[t._v("iotdb-env.bat")]),t._v(" 两个配置文件详细说明请参考"),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.12.x/Appendix/Config-Manual.html"}},[t._v("附录/配置手册")]),t._v("，下面描述的配置项是在"),a("code",[t._v("iotdb-cluster.properties")]),t._v("文件中的，也可以直接查看"),a("a",{attrs:{href:"https://github.com/apache/iotdb/blob/master/cluster/src/assembly/resources/conf/iotdb-cluster.properties",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置文件"),a("OutboundLink")],1),t._v(" 中的注释。")],1),t._v(" "),a("ul",[a("li",[t._v("internal_ip")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("internal_ip")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IOTDB 集群各个节点之间内部通信的IP地址，比如心跳、snapshot快照、raft log等")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效，集群建立后不可再修改")])])])]),t._v(" "),a("ul",[a("li",[t._v("internal_meta_port")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("internal_meta_port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB meta服务端口，用于元数据组（又称集群管理组）通信，元数据组管理集群配置和存储组信息"),a("strong",[t._v("IoTDB将为每个meta服务自动创建心跳端口。默认meta服务心跳端口为"),a("code",[t._v("internal_meta_port+1")]),t._v("，请确认这两个端口不是系统保留端口并且未被占用")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9003")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效，集群建立后不可再修改")])])])]),t._v(" "),a("ul",[a("li",[t._v("internal_data_port")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("internal_data_port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB data服务端口，用于数据组通信，数据组管理数据模式和数据的存储"),a("strong",[t._v("IoTDB将为每个data服务自动创建心跳端口。默认的data服务心跳端口为"),a("code",[t._v("internal_data_port+1")]),t._v("。请确认这两个端口不是系统保留端口并且未被占用")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("40010")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效，集群建立后不可再修改")])])])]),t._v(" "),a("ul",[a("li",[t._v("open_server_rpc_port")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("open_server_rpc_port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否打开单机模块的rpc port，用于调试模式，如果设置为true，则单机模块的rpc port设置为"),a("code",[t._v("rpc_port (in iotdb-engines.properties) + 1")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效，集群建立后不可再修改")])])])]),t._v(" "),a("ul",[a("li",[t._v("seed_nodes")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("seed_nodes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("集群中节点的地址，"),a("code",[t._v("{IP/DOMAIN}:internal_meta_port")]),t._v("格式，用逗号分割；对于伪分布式模式，可以都填写"),a("code",[t._v("localhost")]),t._v("，或是"),a("code",[t._v("127.0.0.1")]),t._v(" 或是混合填写，但是不能够出现真实的ip地址；对于分布式模式，支持填写real ip 或是hostname，但是不能够出现"),a("code",[t._v("localhost")]),t._v("或是"),a("code",[t._v("127.0.0.1")]),t._v("。当使用"),a("code",[t._v("start-node.sh(.bat)")]),t._v("启动节点时，此配置意味着形成初始群集的节点，每个节点的"),a("code",[t._v("seed_nodes")]),t._v("应该一致，否则群集将初始化失败；当使用"),a("code",[t._v("add-node.sh(.bat)")]),t._v("添加节点到集群中时，此配置项可以是集群中已经存在的任何节点，不需要是用"),a("code",[t._v("start-node.sh(bat)")]),t._v("构建初始集群的节点。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("ul",[a("li",[t._v("rpc_thrift_compression_enable")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("rpc_thrift_compression_enable")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启thrift压缩通信，"),a("strong",[t._v("注意这个参数要各个节点保持一致，也要与客户端保持一致，同时也要与"),a("code",[t._v("iotdb-engine.properties")]),t._v("中"),a("code",[t._v("rpc_thrift_compression_enable")]),t._v("参数保持一致")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效，需要整个集群同时更改")])])])]),t._v(" "),a("ul",[a("li",[t._v("default_replica_num")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("default_replica_num")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("集群副本数")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效，集群建立后不可更改")])])])]),t._v(" "),a("ul",[a("li",[t._v("cluster_name")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("cluster_name")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("集群名称，集群名称用以标识不同的集群，"),a("strong",[t._v("一个集群中所有节点的cluster_name都应相同")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("default")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("ul",[a("li",[t._v("connection_timeout_ms")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("connection_timeout_ms")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("同一个raft组各个节点之间的心跳超时时间，单位毫秒")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("20000")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("ul",[a("li",[t._v("read_operation_timeout_ms")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("read_operation_timeout_ms")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("读取操作超时时间，仅用于内部通信，不适用于整个操作，单位毫秒")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("30000")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("ul",[a("li",[t._v("write_operation_timeout_ms")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("write_operation_timeout_ms")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("写入操作超时时间，仅用于内部通信，不适用于整个操作，单位毫秒")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("30000")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("ul",[a("li",[t._v("min_num_of_logs_in_mem")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("min_num_of_logs_in_mem")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("删除日志操作执行后，内存中保留的最多的提交的日志的数量。增大这个值将减少在CatchUp使用快照的机会，但也会增加内存占用量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("100")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("ul",[a("li",[t._v("max_num_of_logs_in_mem")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("max_num_of_logs_in_mem")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当内存中已提交的日志条数达到这个值之后，就会触发删除日志的操作，增大这个值将减少在CatchUp使用快照的机会，但也会增加内存占用量")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("1000")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("ul",[a("li",[t._v("log_deletion_check_interval_second")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("log_deletion_check_interval_second")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("检查删除日志任务的时间间隔，每次删除日志任务将会把已提交日志超过min_num_of_logs_in_mem条的最老部分删除，单位秒")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Int32")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("60")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("ul",[a("li",[t._v("enable_auto_create_schema")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("enable_auto_create_schema")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否支持自动创建schema，"),a("strong",[t._v("这个值会覆盖"),a("code",[t._v("iotdb-engine.properties")]),t._v("中"),a("code",[t._v("enable_auto_create_schema")]),t._v("的配置")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("BOOLEAN")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("ul",[a("li",[t._v("consistency_level")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("consistency_level")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("读一致性，目前支持3种一致性：strong、mid、weak。strong consistency每次操作都会尝试与Leader同步以获取最新的数据，如果失败（超时），则直接向用户返回错误； mid consistency每次操作将首先尝试与Leader进行同步，但是如果失败（超时），它将使用本地当前数据向用户提供服务； weak consistency不会与Leader进行同步，而只是使用本地数据向用户提供服务")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("strong、mid、weak")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("mid")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("ul",[a("li",[t._v("is_enable_raft_log_persistence")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("is_enable_raft_log_persistence")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启raft log持久化")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("BOOLEAN")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),a("h2",{attrs:{id:"开启gc日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开启gc日志"}},[t._v("#")]),t._v(" 开启GC日志")]),t._v(" "),a("p",[t._v("GC日志默认是关闭的。为了性能调优，用户可能会需要收集GC信息。\n若要打开GC日志，则需要在启动IoTDB Server的时候加上"),a("code",[t._v("printgc")]),t._v("参数：")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" sbin/start-node.sh printgc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("或者")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("sbin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("start-node.bat printgc\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("GC日志会被存储在"),a("code",[t._v("IOTDB_HOME/logs/")]),t._v("下面。")])])}),[],!1,null,null,null);e.default=l.exports}}]);