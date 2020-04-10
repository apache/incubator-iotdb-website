(window.webpackJsonp=window.webpackJsonp||[]).push([[561],{881:function(e,t,s){"use strict";s.r(t);var i=s(1),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually only available for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.")]),e._v(" "),s("p",[e._v("IoTDB allows you to specify the compression method of the column when creating a time series, and now supports two compression methods:")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("The specified syntax for compression is detailed in "),s("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[e._v("Create Timeseries Statement")]),e._v(".")],1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"compression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[this._v("#")]),this._v(" Compression")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("p",[this._v("UMCOMPRESSED")])]),this._v(" "),t("li",[t("p",[this._v("SNAPPY")])])])}],!1,null,null,null);t.default=o.exports}}]);