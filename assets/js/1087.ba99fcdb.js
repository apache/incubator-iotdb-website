(window.webpackJsonp=window.webpackJsonp||[]).push([[1087],{1408:function(a,t,s){"use strict";s.r(t);var r=s(1),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[a._m(0),a._v(" "),a._m(1),a._v(" "),a._m(2),a._v(" "),s("p",[a._v("Grafana是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。Grafana支持Graphite，InfluxDB等国际主流时序时序数据库作为数据源。在IoTDB项目中，我们开发了Grafana展现IoTDB中时序数据的连接器IoTDB-Grafana，为您提供使用Grafana展示IoTDB数据库中的时序数据的可视化方法。")]),a._v(" "),a._m(3),a._v(" "),a._m(4),a._v(" "),a._m(5),a._v(" "),a._m(6),a._v(" "),a._m(7),a._v(" "),a._m(8),a._v(" "),s("p",[a._v("执行下面的命令：")]),a._v(" "),a._m(9),s("p",[a._v("然后重启Grafana服务器，在浏览器中登录Grafana，在“Add data source”页面中“Type”选项出现“SimpleJson”即为安装成功。")]),a._v(" "),a._m(10),a._v(" "),s("p",[a._v("进入Grafana的安装目录，使用以下命令启动Grafana：")]),a._v(" "),a._m(11),a._v(" "),a._m(12),a._m(13),a._v(" "),a._m(14),a._m(15),a._v(" "),a._m(16),a._m(17),a._v(" "),s("p",[a._v("参见"),s("a",{attrs:{href:"https://github.com/apache/incubator-iotdb",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/apache/incubator-iotdb"),s("OutboundLink")],1)]),a._v(" "),a._m(18),a._v(" "),a._m(19),a._m(20),a._v(" "),a._m(21),a._m(22),a._v(" "),a._m(23),a._m(24),a._v(" "),s("p",[a._v("Grafana以网页的dashboard形式为您展示数据，在使用时请您打开浏览器，访问http://<ip>:<port>")]),a._v(" "),s("p",[a._v("注：IP为您的Grafana所在的服务器IP，Port为Grafana的运行端口（默认3000）。默认登录的用户名和密码都是“admin”。")]),a._v(" "),a._m(25),a._v(" "),a._m(26),a._v(" "),a._m(27),a._v(" "),a._m(28),a._v(" "),s("p",[a._v("进入Grafana可视化页面后，可以选择添加时间序列，如图 6.9。您也可以按照Grafana官方文档进行相应的操作，详情可参看Grafana官方文档：http://docs.grafana.org/guides/getting_started/。")]),a._v(" "),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"}})])}),[function(){var a=this.$createElement,t=this._self._c||a;return t("h1",{attrs:{id:"iotdb-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana"}},[this._v("#")]),this._v(" IoTDB-Grafana")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"概要"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[this._v("#")]),this._v(" 概要")])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ul",[s("li",[a._v("IoTDB-Grafana\n"),s("ul",[s("li",[a._v("Grafana的安装与部署\n"),s("ul",[s("li",[a._v("安装")]),a._v(" "),s("li",[a._v("simple-json-datasource数据源插件安装")]),a._v(" "),s("li",[a._v("启动Grafana")])])]),a._v(" "),s("li",[a._v("IoTDB安装")]),a._v(" "),s("li",[a._v("IoTDB-Grafana连接器安装\n"),s("ul",[s("li",[a._v("启动IoTDB-Grafana")])])]),a._v(" "),s("li",[a._v("使用Grafana\n"),s("ul",[s("li",[a._v("添加IoTDB数据源")]),a._v(" "),s("li",[a._v("操作Grafana")])])])])])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"grafana的安装与部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grafana的安装与部署"}},[this._v("#")]),this._v(" Grafana的安装与部署")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[this._v("#")]),this._v(" 安装")])},function(){var a=this.$createElement,t=this._self._c||a;return t("ul",[t("li",[this._v("Grafana组件下载地址：https://grafana.com/grafana/download")]),this._v(" "),t("li",[this._v("版本 >= 4.4.1")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"simple-json-datasource数据源插件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#simple-json-datasource数据源插件安装"}},[this._v("#")]),this._v(" simple-json-datasource数据源插件安装")])},function(){var a=this.$createElement,t=this._self._c||a;return t("ul",[t("li",[this._v("插件名称: simple-json-datasource")]),this._v(" "),t("li",[this._v("下载地址: https://github.com/grafana/simple-json-datasource")])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("p",[a._v("具体下载方法是：到Grafana的插件目录中："),s("code",[a._v("{Grafana文件目录}\\data\\plugin\\")]),a._v("（Windows系统，启动Grafana后会自动创建"),s("code",[a._v("data\\plugin")]),a._v("目录）或"),s("code",[a._v("/var/lib/grafana/plugins")]),a._v(" （Linux系统，plugins目录需要手动创建）或"),s("code",[a._v("/usr/local/var/lib/grafana/plugins")]),a._v("（MacOS系统，具体位置参看使用"),s("code",[a._v("brew install")]),a._v("安装Grafana后命令行给出的位置提示。")])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Shell > git clone https://github.com/grafana/simple-json-datasource.git\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"启动grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动grafana"}},[this._v("#")]),this._v(" 启动Grafana")])},function(){var a=this.$createElement,t=this._self._c||a;return t("ul",[t("li",[this._v("Windows系统：")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Shell > bin\\grafana-server.exe\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("ul",[t("li",[this._v("Linux系统：")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Shell > sudo service grafana-server start\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("ul",[t("li",[this._v("MacOS系统：")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Shell > grafana-server --config=/usr/local/etc/grafana/grafana.ini --homepath /usr/local/share/grafana cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"iotdb安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb安装"}},[this._v("#")]),this._v(" IoTDB安装")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"iotdb-grafana连接器安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-grafana连接器安装"}},[this._v("#")]),this._v(" IoTDB-Grafana连接器安装")])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/incubator-iotdb.git\nmvn clean package -pl grafana -am -Dmaven.test.skip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" grafana\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("编译成功后，您需将"),t("code",[this._v("application.properties")]),this._v("文件从"),t("code",[this._v("conf/")]),this._v("目录复制到"),t("code",[this._v("target/")]),this._v("目录下，并在该文件中插入以下（编辑属性值）：")])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("# ip and port of IoTDB \nspring.datasource.url = jdbc:iotdb://127.0.0.1:6667/\nspring.datasource.username = root\nspring.datasource.password = root\nspring.datasource.driver-class-name=org.apache.iotdb.jdbc.IoTDBDriver\nserver.port = 8888\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"启动iotdb-grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动iotdb-grafana"}},[this._v("#")]),this._v(" 启动IoTDB-Grafana")])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" grafana/target/\njava -jar iotdb-grafana-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".war\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("   ____          _            __ _ _\n /"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / ___"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '")]),a._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_| | '")]),a._v("_ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/ _` "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/  ___"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  '  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("____"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" .__"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("__, "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" / / / /\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("___/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/_/_/_/\n :: Spring Boot ::        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v1.5.4.RELEASE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("h2",{attrs:{id:"使用grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用grafana"}},[this._v("#")]),this._v(" 使用Grafana")])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"添加iotdb数据源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加iotdb数据源"}},[this._v("#")]),this._v(" 添加IoTDB数据源")])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("点击左上角的“Grafana”图标，选择"),t("code",[this._v("Data Source")]),this._v("选项，然后再点击"),t("code",[this._v("Add data source")]),this._v("。\n"),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"}})])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",[this._v("在编辑数据源的时候，"),t("code",[this._v("Type")]),this._v("一栏选择"),t("code",[this._v("Simplejson")]),this._v("，"),t("code",[this._v("URL")]),this._v("一栏填写http://<ip>:<port>，IP为您的IoTDB-Grafana连接器所在的服务器IP，Port为运行端口（默认8888）。之后确保IoTDB已经启动，点击“Save & Test”，出现“Data Source is working”提示表示配置成功。\n"),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"}})])},function(){var a=this.$createElement,t=this._self._c||a;return t("h3",{attrs:{id:"操作grafana"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作grafana"}},[this._v("#")]),this._v(" 操作Grafana")])}],!1,null,null,null);t.default=e.exports}}]);