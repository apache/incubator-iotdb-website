(window.webpackJsonp=window.webpackJsonp||[]).push([[385],{951:function(s,a,t){"use strict";t.r(a);var n=t(70),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"时区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时区"}},[s._v("#")]),s._v(" 时区")]),s._v(" "),t("p",[s._v("客户端连接 IoTDB 服务器时，可以指定该连接所要使用的时区。如果未指定，则"),t("strong",[s._v("默认以客户端所在的时区作为连接的时区。")])]),s._v(" "),t("p",[s._v("在 JDBC 和 Session 原生接口连接中均可以设置时区，使用方法如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("JDBC"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IoTDBConnection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+08:00"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Session")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setTimeZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+08:00"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("在 CLI 命令行工具中，通过 SQL 手动设置时区的方式为：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SET")]),s._v(" time_zone"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查看当前连接使用的时区的方法如下：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("JDBC"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IoTDBConnection")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" connection"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getTimeZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Session")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getTimeZone")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"时区使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时区使用场景"}},[s._v("#")]),s._v(" 时区使用场景")]),s._v(" "),t("p",[s._v("IoTDB 服务器只针对时间戳进行存储和处理，时区只用来与客户端进行交互，具体场景如下：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("将客户端传来的日期格式的字符串转化为相应的时间戳。")]),s._v(" "),t("p",[s._v("例如，执行写入 "),t("code",[s._v("insert into root.sg.d1(timestamp, s1) values(2021-07-01T08:00:00.000, 3.14)")])]),s._v(" "),t("p",[s._v("则 "),t("code",[s._v("2021-07-01T08:00:00.000")]),s._v("将会根据客户端所在的时区转换为相应的时间戳，如果在东八区，则会转化为"),t("code",[s._v("1625097600000")]),s._v(" ，等价于 0 时区 "),t("code",[s._v("2021-07-01T00:00:00.000")]),s._v(" 的时间戳值。")]),s._v(" "),t("blockquote",[t("p",[s._v("Note：同一时刻，不同时区的日期不同，但时间戳相同。")])])]),s._v(" "),t("li",[t("p",[s._v("将服务器返回给客户端结果中包含的时间戳转化为日期格式的字符串。")]),s._v(" "),t("p",[s._v("以上述情况为例，执行查询 "),t("code",[s._v("select * from root.sg.d1")]),s._v("，则服务器会返回 (1625097600000, 3.14) 的时间戳值对，如果使用 CLI 命令行客户端，则 "),t("code",[s._v("1625097600000")]),s._v(" 又会被根据时区转化为日期格式的字符串，如下图所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-------------+\n|                         Time|root.sg.d1.s1|\n+-----------------------------+-------------+\n|2021-07-01T08:00:00.000+08:00|         3.14|\n+-----------------------------+-------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("而如果在 0 时区的客户端执行查询，则显示结果将是：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-------------+\n|                         Time|root.sg.d1.s1|\n+-----------------------------+-------------+\n|2021-07-01T00:00:00.000+00:00|         3.14|\n+-----------------------------+-------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("注意，此时返回的时间戳是相同的，只是不同时区的日期不同。")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);