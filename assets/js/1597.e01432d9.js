(window.webpackJsonp=window.webpackJsonp||[]).push([[1597],{2159:function(t,e,r){"use strict";r.r(e);var n=r(69),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),r("p",[t._v("IoTDB支持:")]),t._v(" "),r("ul",[r("li",[t._v("BOOLEAN（布尔值）")]),t._v(" "),r("li",[t._v("INT32（整型）")]),t._v(" "),r("li",[t._v("INT64（长整型）")]),t._v(" "),r("li",[t._v("FLOAT（单精度浮点数）")]),t._v(" "),r("li",[t._v("DOUBLE（双精度浮点数）")]),t._v(" "),r("li",[t._v("TEXT（字符串）")])]),t._v(" "),r("p",[t._v("一共六种数据类型。")]),t._v(" "),r("p",[t._v("其中"),r("strong",[t._v("FLOAT")]),t._v("与"),r("strong",[t._v("DOUBLE")]),t._v("类型的序列，如果编码方式采用"),r("RouterLink",{attrs:{to:"/zh/UserGuide/V0.9.x/2-Concept/3-Encoding.html"}},[t._v("RLE")]),t._v("或"),r("RouterLink",{attrs:{to:"/zh/UserGuide/V0.9.x/2-Concept/3-Encoding.html"}},[t._v("TS_2DIFF")]),t._v("可以指定MAX_POINT_NUMBER，该项为浮点数的小数点后位数，具体指定方式请参见本文"),r("RouterLink",{attrs:{to:"/zh/UserGuide/V0.9.x/5-Operation Manual/4-SQL Reference.html"}},[t._v("第5.4节")]),t._v("，若不指定则系统会根据配置文件"),r("code",[t._v("iotdb-engine.properties")]),t._v("文件中的"),r("RouterLink",{attrs:{to:"/zh/UserGuide/V0.9.x/3-Server/4-Config Manual.html"}},[t._v("float_precision项")]),t._v("配置。")],1),t._v(" "),r("p",[t._v("当系统中用户输入的数据类型与该时间序列的数据类型不对应时，系统会提醒类型错误，如下所示，二阶差分不支持布尔类型的编码：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])])])}),[],!1,null,null,null);e.default=s.exports}}]);