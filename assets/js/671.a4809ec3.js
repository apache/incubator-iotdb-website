(window.webpackJsonp=window.webpackJsonp||[]).push([[671],{1231:function(e,a,t){"use strict";t.r(a);var s=t(69),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"jmx-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jmx-tool"}},[e._v("#")]),e._v(" JMX Tool")]),e._v(" "),t("p",[e._v("Java VisualVM is a tool that provides a visual interface for viewing detailed information about Java applications while they are running on a Java Virtual Machine (JVM), and for troubleshooting and profiling these applications.")]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("Step1: Fetch IoTDB-sever.")]),e._v(" "),t("p",[e._v("Step2: Edit configuration.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("IoTDB is LOCAL\nView "),t("code",[e._v("$IOTDB_HOME/conf/jmx.password")]),e._v(", and use default user or add new users here.\nIf new users are added, remember to edit "),t("code",[e._v("$IOTDB_HOME/conf/jmx.access")]),e._v(" and add new users' access")])]),e._v(" "),t("li",[t("p",[e._v("IoTDB is not LOCAL\nEdit "),t("code",[e._v("$IOTDB_HOME/conf/iotdb-env.sh")]),e._v(", and modify config below:")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('JMX_LOCAL="false"\nJMX_IP="the_real_iotdb_server_ip"  # Write the actual IoTDB IP address\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("View "),t("code",[e._v("$IOTDB_HOME/conf/jmx.password")]),e._v(", and use default user or add new users here.\nIf new users are added, remember to edit "),t("code",[e._v("$IOTDB_HOME/conf/jmx.access")]),e._v(" and add new users' access")]),e._v(" "),t("p",[e._v("Step 3: Start IoTDB-server.")]),e._v(" "),t("p",[e._v("Step 4: Use jvisualvm")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Make sure jdk 8 is installed. For versions later than jdk 8, you need to "),t("a",{attrs:{href:"https://visualvm.github.io/download.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("download visualvm"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Open jvisualvm")])]),e._v(" "),t("li",[t("p",[e._v("Right-click at the left navigation area -> Add JMX connection\n"),t("img",{staticStyle:{width:"100%","max-width":"300px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/81464569-725e0200-91f5-11ea-9ff9-49745f4c9ef2.png"}})])]),e._v(" "),t("li",[t("p",[e._v('Fill in information and log in as below. Remember to check "Do not require SSL connection".\nHere is an example:\nConnection：192.168.130.15:31999\nUsername：iotdb\nPassword：passw!d\n'),t("img",{staticStyle:{width:"100%","max-width":"300px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/81464639-ed271d00-91f5-11ea-91a0-b4fe9cb8204e.png"}})])])])])}),[],!1,null,null,null);a.default=n.exports}}]);