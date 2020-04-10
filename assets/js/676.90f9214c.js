(window.webpackJsonp=window.webpackJsonp||[]).push([[676],{996:function(t,e,n){"use strict";n.r(e);var i=n(1),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("IoTDB supports six data types in total:")]),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("The time series of "),n("strong",[t._v("FLOAT")]),t._v(" and "),n("strong",[t._v("DOUBLE")]),t._v(" type can specify (MAX_POINT_NUMBER, see "),n("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("this page")]),t._v(" for more information on how to specify), which is the number of digits after the decimal point of the floating point number, if the encoding method is "),n("router-link",{attrs:{to:"./../2-Concept/3-Encoding.html"}},[t._v("RLE")]),t._v(" or "),n("router-link",{attrs:{to:"./../2-Concept/3-Encoding.html"}},[t._v("TS_2DIFF")]),t._v(" (Refer to "),n("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("Create Timeseries Statement")]),t._v(" for more information on how to specify). If MAX_POINT_NUMBER is not specified, the system will use "),n("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("float_precision")]),t._v(" in the configuration file "),n("code",[t._v("tsfile-format.properties")]),t._v(".")],1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("When the data type of data input by the user in the system does not correspond to the data type of the time series, the system will report type errors. As shown below, the second-order difference encoding does not support the Boolean type:")]),t._v(" "),t._m(3)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"data-type"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-type"}},[this._v("#")]),this._v(" Data Type")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[t._v("BOOLEAN (Boolean)")]),t._v(" "),n("li",[t._v("INT32 (Integer)")]),t._v(" "),n("li",[t._v("INT64 (Long Integer)")]),t._v(" "),n("li",[t._v("FLOAT (Single Precision Floating Point)")]),t._v(" "),n("li",[t._v("DOUBLE (Double Precision Floating Point)")]),t._v(" "),n("li",[t._v("TEXT (String).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("For Float data value, The data range is (-Integer.MAX_VALUE, Integer.MAX_VALUE), rather than Float.MAX_VALUE, and the max_point_number is 19, it is because of the limition of function Math.round(float) in Java.")]),this._v(" "),e("li",[this._v("For Double data value, The data range is (-Long.MAX_VALUE, Long.MAX_VALUE), rather than Double.MAX_VALUE, and the max_point_number is 19, it is because of the limition of function Math.round(double) in Java (Long.MAX_VALUE=9.22E18).")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])}],!1,null,null,null);e.default=o.exports}}]);