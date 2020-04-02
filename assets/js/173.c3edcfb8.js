(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{493:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("This feature is not supported in version 0.8.2.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting "),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT SQL statement")]),t._v(" in Cli/Shell tools, or using "),s("router-link",{attrs:{to:"./../6-JDBC API/1-JDBC API.html"}},[t._v("Java JDBC")]),t._v(" to perform single or batch execution of "),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT SQL statement")]),t._v(".")],1),t._v(" "),s("p",[t._v("This section mainly introduces the use of "),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT SQL statement")]),t._v(" for real-time data import in the scenario. See Section 5.1 for a detailed syntax of "),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT SQL statement")]),t._v(".")],1),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("The "),s("router-link",{attrs:{to:"./../5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[t._v("INSERT SQL statement")]),t._v(" statement can be used to insert data into one or more specified timeseries that have been created. For each point of data inserted, it consists of a "),s("router-link",{attrs:{to:"./../2-Concept Key Concepts and Terminology/1-Key Concepts and Terminology.html"}},[t._v("timestamp")]),t._v(" and a sensor acquisition value of a numerical type (see "),s("router-link",{attrs:{to:"./../2-Concept Key Concepts and Terminology/2-Data Type.html"}},[t._v("Data Type")]),t._v(").")],1),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("The sample code for single column data insertion is as follows:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("The INSERT statement can also support the insertion of multi-column data at the same time point.  The sample code of  inserting the values of the two timeseries at the same time point '2' is as follows:")]),t._v(" "),t._m(8),s("p",[t._v("After inserting the data, we can simply query the inserted data using the SELECT statement:")]),t._v(" "),t._m(9),s("p",[t._v("The result is shown below. From the query results, it can be seen that the insertion statements of single column and multi column data are performed correctly.")]),t._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51605021-c2ee1500-1f48-11e9-8f6b-ba9b48875a41.png"}})]),t._v(" "),t._m(10),t._v(" "),s("p",[t._v("If the user inserts data into a non-existent timeseries, for example, execute the following commands:")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),s("p",[t._v("If the data type inserted by the user is inconsistent with the corresponding data type of the timeseries, for example, execute the following command:")]),t._v(" "),t._m(14),s("p",[t._v("The system will return the following ERROR information:")]),t._v(" "),t._m(15)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"data-import"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-import"}},[this._v("#")]),this._v(" Data Import")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"import-historical-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-historical-data"}},[this._v("#")]),this._v(" Import Historical Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"import-real-time-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-real-time-data"}},[this._v("#")]),this._v(" Import Real-time Data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"use-of-insert-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-of-insert-statements"}},[this._v("#")]),this._v(" Use of INSERT Statements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In the scenario of this section, take two timeseries "),e("code",[this._v("root.ln.wf02.wt02.status")]),this._v(" and "),e("code",[this._v("root.ln.wf02.wt02.hardware")]),this._v(" as an example, and their data types are BOOLEAN and TEXT, respectively.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('IoTDB > insert into root.ln.wf02.wt02(timestamp,status) values(1,true)\nIoTDB > insert into root.ln.wf02.wt02(timestamp,hardware) values(1, "v1")\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br"),e("span",{staticClass:"line-number"},[this._v("2")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('The above example code inserts the long integer timestamp and the value "true" into the timeseries '),e("code",[this._v("root.ln.wf02.wt02.status")]),this._v(' and inserts the long integer timestamp and the value "v1" into the timeseries '),e("code",[this._v("root.ln.wf02.wt02.hardware")]),this._v(". When the execution is successful, cost time is shown to indicate that the data insertion has been completed.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Note: In IoTDB, TEXT type data can be represented by single and double quotation marks. The insertion statement above uses double quotation marks for TEXT type data. The following example will use single quotation marks for TEXT type data.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > insert into root.ln.wf02.wt02(timestamp, status, hardware) VALUES (2, false, 'v2')\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > select * from root.ln.wf02 where time < 3\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"error-handling-of-insert-statements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#error-handling-of-insert-statements"}},[this._v("#")]),this._v(" Error Handling of INSERT Statements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('IoTDB > insert into root.ln.wf02.wt02(timestamp, temperature) values(1,"v1")\n')])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Because "),e("code",[this._v("root.ln.wf02.wt02. temperature")]),this._v(" does not exist, the system will return the following ERROR information:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("Msg: Current deviceId[root.ln.wf02.wt02] does not contains measurement:temperature\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("IoTDB > insert into root.ln.wf02.wt02(timestamp,hardware) values(1,100)\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("error: The TEXT data type should be covered by \" or '\n")])]),this._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[this._v("1")]),e("br")])])}],!1,null,null,null);e.default=n.exports}}]);