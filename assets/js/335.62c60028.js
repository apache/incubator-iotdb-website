(window.webpackJsonp=window.webpackJsonp||[]).push([[335],{896:function(t,a,e){"use strict";e.r(a);var s=e(69),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jmx工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmx工具"}},[t._v("#")]),t._v(" JMX工具")]),t._v(" "),e("p",[t._v("Java VisualVM提供了一个可视化的界面，用于查看Java应用程序在Java虚拟机（JVM）上运行的详细信息，并对这些应用程序进行故障排除和分析。")]),t._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("p",[t._v("第一步：获得IoTDB-server。")]),t._v(" "),e("p",[t._v("第二步：编辑配置文件")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("IoTDB在本地\n查看"),e("code",[t._v("$IOTDB_HOME/conf/jmx.password")]),t._v("，使用默认用户或者在此添加新用户\n若新增用户，编辑"),e("code",[t._v("$IOTDB_HOME/conf/jmx.access")]),t._v("，添加新增用户权限")])]),t._v(" "),e("li",[e("p",[t._v("IoTDB不在本地\n编辑"),e("code",[t._v("$IOTDB_HOME/conf/iotdb-env.sh")]),t._v("\n修改以下参数：")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('JMX_LOCAL="false"\nJMX_IP="the_real_iotdb_server_ip"  # 填写实际IoTDB的IP地址\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("查看"),e("code",[t._v("$IOTDB_HOME/conf/jmx.password")]),t._v("，使用默认用户或者在此添加新用户\n若新增用户，编辑"),e("code",[t._v("$IOTDB_HOME/conf/jmx.access")]),t._v("，添加新增用户权限")]),t._v(" "),e("p",[t._v("第三步：启动IoTDB-server。")]),t._v(" "),e("p",[t._v("第四步：使用jvisualvm")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("确保安装jdk 8。jdk 8以上需要"),e("a",{attrs:{href:"https://visualvm.github.io/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载 visualvm"),e("OutboundLink")],1)])]),t._v(" "),e("li",[e("p",[t._v("打开jvisualvm")])]),t._v(" "),e("li",[e("p",[t._v("在左侧导航栏空白处右键 -> 添加JMX连接\n"),e("img",{staticStyle:{width:"100%","max-width":"300px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/81462914-5738c580-91e8-11ea-94d1-4ff6607e7e2c.png"}})])]),t._v(" "),e("li",[e("p",[t._v("填写信息进行登录，按下图分别填写，注意需要勾选”不要求SSL连接”。\n例如：\n连接：192.168.130.15:31999\n用户名：iotdb\n口令：passw!d\n"),e("img",{staticStyle:{width:"100%","max-width":"300px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/81462909-53a53e80-91e8-11ea-98df-0012380da0b2.png"}})])])])])}),[],!1,null,null,null);a.default=n.exports}}]);