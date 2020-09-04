(window.webpackJsonp=window.webpackJsonp||[]).push([[938],{1498:function(s,a,t){"use strict";t.r(a);var e=t(69),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"快速入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速入门"}},[s._v("#")]),s._v(" 快速入门")]),s._v(" "),t("h2",{attrs:{id:"概览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[s._v("#")]),s._v(" 概览")]),s._v(" "),t("ul",[t("li",[s._v("快速入门")]),s._v(" "),t("li",[s._v("安装环境")]),s._v(" "),t("li",[s._v("IoTDB安装\n"),t("ul",[t("li",[s._v("从源代码生成\n"),t("ul",[t("li",[s._v("配置文件")])])])])]),s._v(" "),t("li",[s._v("IoTDB试用\n"),t("ul",[t("li",[s._v("启动IoTDB")]),s._v(" "),t("li",[s._v("操作IoTDB\n"),t("ul",[t("li",[s._v("使用Cli工具")]),s._v(" "),t("li",[s._v("IoTDB的基本操作")])])]),s._v(" "),t("li",[s._v("停止IoTDB")])])]),s._v(" "),t("li",[s._v("单独打包服务器")]),s._v(" "),t("li",[s._v("单独打包客户端")])]),s._v(" "),t("p",[s._v("本文将介绍关于IoTDB使用的基本流程，如果需要更多信息，请浏览我们官网的"),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Overview/What is IoTDB.html"}},[s._v("指引")]),s._v(".")],1),s._v(" "),t("h2",{attrs:{id:"安装环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装环境"}},[s._v("#")]),s._v(" 安装环境")]),s._v(" "),t("p",[s._v("安装前需要保证设备上配有JDK>=1.8的运行环境，并配置好JAVA_HOME环境变量。")]),s._v(" "),t("p",[s._v("设置最大文件打开数为65535。")]),s._v(" "),t("h2",{attrs:{id:"iotdb安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb安装"}},[s._v("#")]),s._v(" IoTDB安装")]),s._v(" "),t("p",[s._v("IoTDB支持多种安装途径。用户可以使用三种方式对IoTDB进行安装——下载二进制可运行程序、使用源码、使用docker镜像。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("使用源码：您可以从代码仓库下载源码并编译，具体编译方法见下方。")])]),s._v(" "),t("li",[t("p",[s._v("二进制可运行程序：请从Download页面下载最新的安装包，解压后即完成安装。")])]),s._v(" "),t("li",[t("p",[s._v("使用Docker镜像：dockerfile 文件位于 https://github.com/apache/incubator-iotdb/blob/master/docker/src/main")])])]),s._v(" "),t("h3",{attrs:{id:"iotdb下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb下载"}},[s._v("#")]),s._v(" IoTDB下载")]),s._v(" "),t("p",[s._v("您可以从这里下载程序："),t("RouterLink",{attrs:{to:"/Download/"}},[s._v("下载")])],1),s._v(" "),t("h3",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),t("p",[s._v('配置文件在"conf"文件夹下，包括：')]),s._v(" "),t("ul",[t("li",[s._v("环境配置模块 ("),t("code",[s._v("iotdb-env.bat")]),s._v(", "),t("code",[s._v("iotdb-env.sh")]),s._v("),")]),s._v(" "),t("li",[s._v("系统配置模块 ("),t("code",[s._v("iotdb-engine.properties")]),s._v(")")]),s._v(" "),t("li",[s._v("日志配置模块 ("),t("code",[s._v("logback.xml")]),s._v(").")])]),s._v(" "),t("p",[s._v("想要了解更多，请浏览"),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Server/Download.html"}},[s._v("Chapter3: Server")]),s._v("\n​")],1),s._v(" "),t("h2",{attrs:{id:"iotdb试用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb试用"}},[s._v("#")]),s._v(" IoTDB试用")]),s._v(" "),t("p",[s._v("用户可以根据以下操作对IoTDB进行简单的试用，若以下操作均无误，则说明IoTDB安装成功。")]),s._v(" "),t("h3",{attrs:{id:"启动iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动iotdb"}},[s._v("#")]),s._v(" 启动IoTDB")]),s._v(" "),t("p",[s._v("用户可以使用sbin文件夹下的start-server脚本启动IoTDB。")]),s._v(" "),t("p",[s._v("Linux系统与MacOS系统启动命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> nohup sbin/start-server.sh >/dev/null 2>&1 &\nor\n> nohup sbin/start-server.sh -c <conf_path> -rpc_port <rpc_port> >/dev/null 2>&1 &\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Windows系统启动命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> sbin\\start-server.bat -c <conf_path> -rpc_port <rpc_port>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v('"-c" and "-rpc_port" 都是可选的。')]),s._v(" "),t("li",[s._v('选项 "-c" 指定了配置文件所在的文件夹。')]),s._v(" "),t("li",[s._v('选项 "-rpc_port" 指定了启动的 rpc port。')]),s._v(" "),t("li",[s._v("如果两个选项同时指定，那么"),t("em",[s._v("rpc_port")]),s._v("将会覆盖"),t("em",[s._v("conf_path")]),s._v("下面的配置。")])]),s._v(" "),t("h3",{attrs:{id:"操作iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作iotdb"}},[s._v("#")]),s._v(" 操作IoTDB")]),s._v(" "),t("h4",{attrs:{id:"使用cli工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用cli工具"}},[s._v("#")]),s._v(" 使用Cli工具")]),s._v(" "),t("p",[s._v("IoTDB为用户提供多种与服务器交互的方式，在此我们介绍使用Cli工具进行写入、查询数据的基本步骤。")]),s._v(" "),t("p",[s._v('初始安装后的IoTDB中有一个默认用户：root，默认密码为root。用户可以使用该用户运行Cli工具操作IoTDB。Cli工具启动脚本为sbin文件夹下的start-cli脚本。启动脚本时需要指定运行ip、port、username和password。若脚本未给定对应参数,则默认参数为"-h 127.0.0.1 -p 6667 -u root -pw -root"')]),s._v(" "),t("p",[s._v("以下启动语句为服务器在本机运行，且用户未更改运行端口号的示例。")]),s._v(" "),t("p",[s._v("Linux系统与MacOS系统启动命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Windows系统启动命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动后出现如图提示即为启动成功。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h4",{attrs:{id:"iotdb的基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb的基本操作"}},[s._v("#")]),s._v(" IoTDB的基本操作")]),s._v(" "),t("p",[s._v("在这里，我们首先介绍一下使用Cli工具创建时间序列、插入数据并查看数据的方法。")]),s._v(" "),t("p",[s._v("数据在IoTDB中的组织形式是以时间序列为单位，每一个时间序列中有若干个数据-时间点对，每一个时间序列属于一个存储组。在定义时间序列之前，要首先使用SET STORAGE GROUP语句定义存储组。SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SET STORAGE GROUP TO root.ln\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("我们可以使用SHOW STORAGE GROUP语句来查看系统当前所有的存储组，SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SHOW STORAGE GROUP\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行结果为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------------+\n|                      Storage Group|\n+-----------------------------------+\n|                            root.ln|\n+-----------------------------------+\nstorage group number = 1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("存储组设定后，使用CREATE TIMESERIES语句可以创建新的时间序列，创建时间序列时需要定义数据的类型和编码方式。此处我们创建两个时间序列，SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN\nIoTDB> CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("为了查看指定的时间序列，我们可以使用SHOW TIMESERIES <Path>语句，其中<Path>表示时间序列对应的路径，默认值为空，表示查看系统中所有的时间序列。下面是两个例子：")]),s._v(" "),t("p",[s._v("使用SHOW TIMESERIES语句查看系统中存在的所有时间序列，SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SHOW TIMESERIES\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行结果为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-------------------------------+---------------+--------+--------+\n|                     Timeseries|  Storage Group|DataType|Encoding|\n+-------------------------------+---------------+--------+--------+\n|       root.ln.wf01.wt01.status|        root.ln| BOOLEAN|   PLAIN|\n|  root.ln.wf01.wt01.temperature|        root.ln|   FLOAT|     RLE|\n+-------------------------------+---------------+--------+--------+\nTotal timeseries number = 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("查看具体的时间序列root.ln.wf01.wt01.status的SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SHOW TIMESERIES root.ln.wf01.wt01.status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行结果为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+------------------------------+--------------+--------+--------+\n|                    Timeseries| Storage Group|DataType|Encoding|\n+------------------------------+--------------+--------+--------+\n|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|\n+------------------------------+--------------+--------+--------+\nTotal timeseries number = 1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("接下来，我们使用INSERT语句向root.ln.wf01.wt01.status时间序列中插入数据，在插入数据时需要首先指定时间戳和路径后缀名称：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("我们也可以向多个时间序列中同时插入数据，这些时间序列同属于一个时间戳：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("最后，我们查询之前插入的数据。使用SELECT语句我们可以查询指定的时间序列的数据结果，SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SELECT status FROM root.ln.wf01.wt01\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查询结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------+------------------------+\n|                   Time|root.ln.wf01.wt01.status|\n+-----------------------+------------------------+\n|1970-01-01T08:00:00.100|                    true|\n|1970-01-01T08:00:00.200|                   false|\n+-----------------------+------------------------+\nTotal line number = 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("我们也可以查询多个时间序列的数据结果，SQL语句如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SELECT * FROM root.ln.wf01.wt01\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查询结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------+--------------------------+-----------------------------+\n|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------+--------------------------+-----------------------------+\n|1970-01-01T08:00:00.100|                      true|                         null|\n|1970-01-01T08:00:00.200|                     false|                        20.71|\n+-----------------------+--------------------------+-----------------------------+\nTotal line number = 2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("输入quit或exit可退出Cli结束本次会话。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> quit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("或")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> exit\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("想要浏览更多IoTDB数据库支持的命令，请浏览"),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operation Manual/SQL Reference.html"}},[s._v("SQL Reference")]),s._v(".")],1),s._v(" "),t("h3",{attrs:{id:"停止iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止iotdb"}},[s._v("#")]),s._v(" 停止IoTDB")]),s._v(" "),t("p",[s._v("用户可以使用$IOTDB_HOME/sbin文件夹下的stop-server脚本停止IoTDB。")]),s._v(" "),t("p",[s._v("Linux系统与MacOS系统停止命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> $sbin/stop-server.sh\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("Windows系统停止命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> $sbin\\stop-server.bat\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"只建立客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#只建立客户端"}},[s._v("#")]),s._v(" 只建立客户端")]),s._v(" "),t("p",[s._v("在incubator-iotdb的根路径下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("> mvn clean package -pl cli -am -DskipTests\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("构建后，IoTDB客户端将位于文件夹“ cli / target / iotdb-cli- {project.version}”下。")])])}),[],!1,null,null,null);a.default=n.exports}}]);