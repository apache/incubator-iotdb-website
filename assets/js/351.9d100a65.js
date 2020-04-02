(window.webpackJsonp=window.webpackJsonp||[]).push([[351],{672:function(t,e,_){"use strict";_.r(e);var n=_(1),i=Object(n.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("div",{staticClass:"content"},[t._m(0),t._v(" "),_("p",[t._v("为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少I/O操作的数据量从而提高性能。IoTDB支持四种针对不同类型的数据的编码方法：")]),t._v(" "),t._m(1),t._v(" "),_("p",[t._v("PLAIN编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩的时间效率较高，但空间存储效率较低。")]),t._v(" "),t._m(2),t._v(" "),_("p",[t._v("二阶差分编码，比较适合编码单调递增或者递减的序列数据，不适合编码波动较大的数据。")]),t._v(" "),_("p",[t._v("二阶差分编码也可用于对浮点数进行编码，但在创建时间序列的时候需指定保留小数位数（MAX_POINT_NUMBER，具体指定方式参见本文"),_("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("第5.4节")]),t._v("）。比较适合存储某些浮点数值连续出现、单调调递增或者递减的序列数据，不适合存储对小数点后精度要求较高以及前后波动较大的序列数据。")],1),t._v(" "),t._m(3),t._v(" "),_("p",[t._v("游程编码，比较适合存储某些整数值连续出现的序列，不适合编码大部分情况下前后值不一样的序列数据。")]),t._v(" "),_("p",[t._v("游程编码也可用于对浮点数进行编码，，但在创建时间序列的时候需指定保留小数位数（MAX_POINT_NUMBER，具体指定方式参见本文本文"),_("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[t._v("第5.4节")]),t._v("）。比较适合存储某些浮点数值连续出现的序列数据，不适合存储对小数点后精度要求较高以及前后波动较大的序列数据。")],1),t._v(" "),t._m(4),t._v(" "),_("p",[t._v("GORILLA编码，比较适合编码前后值比较接近的浮点数序列，不适合编码前后波动较大的数据。")]),t._v(" "),t._m(5),t._v(" "),_("p",[t._v("定频数据编码，仅适用于整形（INT32）和长整型（INT64）的定频数据，且允许数据中有一些点缺失，使用此方法编码定频数据优于二阶差分编码（TS_2DIFF）。")]),t._v(" "),_("p",[t._v("定频数据编码无法用于非定频数据，建议使用二阶差分编码（TS_2DIFF）进行处理。")]),t._v(" "),t._m(6),t._v(" "),_("p",[t._v("前文介绍的四种编码适用于不同的数据类型，若对应关系错误，则无法正确创建时间序列。数据类型与支持其编码的编码方式对应关系总结如表格2-3。")]),t._v(" "),_("center",[t._v(" **表格2-3 数据类型与支持其编码的对应关系**\n"),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"center"}},[t._v("数据类型")]),t._v(" "),_("th",{staticStyle:{"text-align":"center"}},[t._v("支持的编码")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN, RLE")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("INT32")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN, RLE, TS_2DIFF, REGULAR")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("INT64")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN, RLE, TS_2DIFF, REGULAR")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"center"}},[t._v("TEXT")]),t._v(" "),_("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN")])])])])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"编码方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编码方式"}},[this._v("#")]),this._v(" 编码方式")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("PLAIN编码（PLAIN）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("二阶差分编码（TS_2DIFF）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("游程编码（RLE）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("GORILLA编码（GORILLA）")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("定频数据编码 (REGULAR)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("数据类型与编码的对应关系")])])}],!1,null,null,null);e.default=i.exports}}]);