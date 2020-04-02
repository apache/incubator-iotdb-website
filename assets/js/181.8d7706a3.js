(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{501:function(e,t,i){"use strict";i.r(t);var o=i(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("IoTDB allows users to configure IoTDB system logs (such as log output level) by modifying the log configuration file. The default location of the system log configuration file is in $IOTDB_HOME/conf folder.")]),e._v(" "),i("p",[e._v("The default log configuration file is named logback.xml. The user can modify the configuration of the system running log by adding or changing the xml tree node parameters. It should be noted that the configuration of the system log using the log configuration file does not take effect immediately after the modification, instead, it will take effect after restarting the system. The usage of logback.xml is just as usual.")]),e._v(" "),i("p",[e._v("At the same time, in order to facilitate the debugging of the system by the developers and DBAs, we provide several JMX interface to dynamically modify the log configuration, and configure the Log module of the system in real time without restarting the system. For detailed usage, see "),i("router-link",{attrs:{to:"./../4-Deployment and Management/2-Configuration.html"}},[e._v("Dynamic System Log Configuration")]),e._v(" section.")],1),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("Here we use JConsole to connect with JMX.")]),e._v(" "),i("p",[e._v("Start the JConsole, establish a new JMX connection with the IoTDB Server (you can select the local process or input the IP and PORT for remote connection, the default operation port of the IoTDB JMX service is 31999). Fig 4.1 shows the connection GUI of JConsole.")]),e._v(" "),i("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577195-f94d7500-1ef3-11e9-999a-b4f67055d80e.png"}}),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("In the JMXConfigurator Window, there are 6 operation provided for you, as shown in fig 4.3. You can use there interface to perform operation.")]),e._v(" "),i("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577216-09fdeb00-1ef4-11e9-9005-542ad7d9e9e0.png"}}),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),i("p",[e._v("This method is to reload the default logback configuration file. The user can modify the default configuration file first, and then call this method to reload the modified configuration file into the system to take effect.")]),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("This method loads a logback configuration file with the specified path and name, and then makes it take effect. This method accepts a parameter of type String named p1, which is the path to the configuration file that needs to be specified for loading.")]),e._v(" "),e._m(7),e._v(" "),i("p",[e._v("This method is to obtain the current log level of the specified Logger. This method accepts a String type parameter named p1, which is the name of the specified Logger. This method returns the log level currently in effect for the specified Logger.")]),e._v(" "),e._m(8),e._v(" "),e._m(9)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"system-log"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-log"}},[this._v("#")]),this._v(" System log")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"dynamic-system-log-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-system-log-configuration"}},[this._v("#")]),this._v(" Dynamic System Log Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"connect-jmx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#connect-jmx"}},[this._v("#")]),this._v(" Connect JMX")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After connected, click "),t("code",[this._v("MBean")]),this._v(" and find "),t("code",[this._v("ch.qos.logback.classic.default.ch.qos.logback.classic.jmx.JMXConfigurator")]),this._v("(As shown in fig 4.2).\n"),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577204-fe122900-1ef3-11e9-9e89-2eb1d46e24b8.png"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"interface-instruction"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interface-instruction"}},[this._v("#")]),this._v(" Interface Instruction")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("reloadDefaultConfiguration")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("reloadByFileName")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("getLoggerEffectiveLevel")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("getLoggerLevel")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This method is to obtain the log level of the specified Logger. This method accepts a String type parameter named p1, which is the name of the specified Logger. This method returns the log level of the specified Logger.\nIt should be noted that the difference between this method and the "),t("code",[this._v("getLoggerEffectiveLevel")]),this._v(" method is that the method returns the log level that the specified Logger is set in the configuration file. If the user does not set the log level for the Logger. , then return empty. According to Logre's log-level inheritance mechanism, if a Logger is not displayed to set the log level, it will inherit the log level settings from its nearest ancestor. At this point, calling the "),t("code",[this._v("getLoggerEffectiveLevel")]),this._v(" method will return the log level in which the Logger is in effect; calling the methods described in this section will return null.")])}],!1,null,null,null);t.default=n.exports}}]);