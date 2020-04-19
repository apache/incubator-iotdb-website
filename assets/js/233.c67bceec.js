(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{690:function(e,t,o){"use strict";o.r(t);var n=o(49),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"data-type"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-type"}},[e._v("#")]),e._v(" Data Type")]),e._v(" "),o("p",[e._v("IoTDB supports six data types in total:")]),e._v(" "),o("ul",[o("li",[e._v("BOOLEAN (Boolean)")]),e._v(" "),o("li",[e._v("INT32 (Integer)")]),e._v(" "),o("li",[e._v("INT64 (Long Integer)")]),e._v(" "),o("li",[e._v("FLOAT (Single Precision Floating Point)")]),e._v(" "),o("li",[e._v("DOUBLE (Double Precision Floating Point)")]),e._v(" "),o("li",[e._v("TEXT (String).")])]),e._v(" "),o("p",[e._v("The time series of "),o("strong",[e._v("FLOAT")]),e._v(" and "),o("strong",[e._v("DOUBLE")]),e._v(" type can specify (MAX_POINT_NUMBER, see "),o("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("this page")]),e._v(" for more information on how to specify), which is the number of digits after the decimal point of the floating point number, if the encoding method is "),o("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/2-Concept Key Concepts and Terminology/3-Encoding.html"}},[e._v("RLE")]),e._v(" or "),o("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/2-Concept Key Concepts and Terminology/3-Encoding.html"}},[e._v("TS_2DIFF")]),e._v(" (Refer to "),o("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("Create Timeseries Statement")]),e._v(" for more information on how to specify). If MAX_POINT_NUMBER is not specified, the system will use "),o("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[e._v("float_precision")]),e._v(" in the configuration file "),o("code",[e._v("tsfile-format.properties")]),e._v(".")],1),e._v(" "),o("ul",[o("li",[e._v("For Float data value, The data range is (-Integer.MAX_VALUE, Integer.MAX_VALUE), rather than Float.MAX_VALUE, and the max_point_number is 19, it is because of the limition of function Math.round(float) in Java.")]),e._v(" "),o("li",[e._v("For Double data value, The data range is (-Long.MAX_VALUE, Long.MAX_VALUE), rather than Double.MAX_VALUE, and the max_point_number is 19, it is because of the limition of function Math.round(double) in Java (Long.MAX_VALUE=9.22E18).")])]),e._v(" "),o("p",[e._v("When the data type of data input by the user in the system does not correspond to the data type of the time series, the system will report type errors. As shown below, the second-order difference encoding does not support the Boolean type:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);