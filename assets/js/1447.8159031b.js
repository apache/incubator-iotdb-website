(window.webpackJsonp=window.webpackJsonp||[]).push([[1447],{2008:function(t,e,n){"use strict";n.r(e);var s=n(69),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),n("p",[t._v("IoTDB支持:")]),t._v(" "),n("ul",[n("li",[t._v("BOOLEAN（布尔值）")]),t._v(" "),n("li",[t._v("INT32（整型）")]),t._v(" "),n("li",[t._v("INT64（长整型）")]),t._v(" "),n("li",[t._v("FLOAT（单精度浮点数）")]),t._v(" "),n("li",[t._v("DOUBLE（双精度浮点数）")]),t._v(" "),n("li",[t._v("TEXT（字符串）")])]),t._v(" "),n("p",[t._v("一共六种数据类型。")]),t._v(" "),n("p",[t._v("其中"),n("strong",[t._v("FLOAT")]),t._v("与"),n("strong",[t._v("DOUBLE")]),t._v("类型的序列，如果编码方式采用"),n("RouterLink",{attrs:{to:"/zh/UserGuide/Master/V0.8.x/2-Concept Key Concepts and Terminology/3-Encoding.html"}},[t._v("RLE")]),t._v("或"),n("RouterLink",{attrs:{to:"/zh/UserGuide/Master/V0.8.x/2-Concept Key Concepts and Terminology/3-Encoding.html"}},[t._v("TS_2DIFF")]),t._v("可以指定MAX_POINT_NUMBER，该项为浮点数的小数点后位数，具体指定方式请参见本文"),n("RouterLink",{attrs:{to:"/zh/UserGuide/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("第5.1节")]),t._v("，若不指定则系统会根据配置文件"),n("code",[t._v("tsfile-format.properties")]),t._v("文件中的"),n("RouterLink",{attrs:{to:"/zh/UserGuide/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[t._v("float_precision项")]),t._v("配置。")],1),t._v(" "),n("p",[t._v("当系统中用户输入的数据类型与该时间序列的数据类型不对应时，系统会提醒类型错误，如下所示，二阶差分不支持布尔类型的编码：")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);