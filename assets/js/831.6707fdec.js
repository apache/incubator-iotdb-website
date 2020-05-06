(window.webpackJsonp=window.webpackJsonp||[]).push([[831],{1291:function(e,t,a){"use strict";a.r(t);var s=a(49),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-model-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-model-selection"}},[e._v("#")]),e._v(" Data Model Selection")]),e._v(" "),a("h2",{attrs:{id:"data-model-selection-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-model-selection-2"}},[e._v("#")]),e._v(" Data Model Selection")]),e._v(" "),a("p",[e._v("Before importing data to IoTDB, we first select the appropriate data storage model according to the "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/3-Operation Manual/1-Sample Data.html"}},[e._v("sample data")]),e._v(", and then create the storage group and timeseries using "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("SET STORAGE GROUP")]),e._v(" statement and "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("CREATE TIMESERIES")]),e._v(" statement respectively.")],1),e._v(" "),a("h3",{attrs:{id:"storage-model-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-model-selection"}},[e._v("#")]),e._v(" Storage Model Selection")]),e._v(" "),a("p",[e._v("According to the data attribute layers described in "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/3-Operation Manual/1-Sample Data.html"}},[e._v("sample data")]),e._v(', we can express it as an attribute hierarchy structure based on the coverage of attributes and the subordinate relationship between them, as shown in Figure 3.1 below. Its hierarchical relationship is: power group layer - power plant layer - device layer - sensor layer. ROOT is the root node, and each node of sensor layer is called a leaf node. In the process of using IoTDB, you can directly connect the attributes on the path from ROOT node to each leaf node with ".", thus forming the name of a timeseries in IoTDB. For example, The left-most path in Figure 3.1 can generate a timeseries named '),a("code",[e._v("ROOT.ln.wf01.wt01.status")]),e._v(".")],1),e._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577327-7aa50780-1ef4-11e9-9d75-cadabb62444e.jpg"}})]),e._v(" "),a("p",[a("strong",[e._v("Figure 3.1 Attribute hierarchy structure")])]),e._v(" "),a("p",[e._v("After getting the name of the timeseries, we need to set up the storage group according to the actual scenario and scale of the data. Because in the scenario of this chapter data is usually arrived in the unit of groups (i.e., data may be across electric fields and devices), in order to avoid frequent switching of IO when writing data, and to meet the user's requirement of physical isolation of data in the unit of  groups, we set the storage group at the group layer.")]),e._v(" "),a("h3",{attrs:{id:"storage-group-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-group-creation"}},[e._v("#")]),e._v(" Storage Group Creation")]),e._v(" "),a("p",[e._v("After selecting the storage model, according to which we can set up the corresponding storage group. The SQL statements for creating storage groups are as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB > set storage group to root.ln\nIoTDB > set storage group to root.sgcc\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("We can thus create two storage groups using the above two SQL statements.")]),e._v(" "),a("p",[e._v("It is worth noting that when the path itself or the parent/child layer of the path is already set as a storage group, the path is then not allowed to be set as a storage group. For example, it is not feasible to set "),a("code",[e._v("root.ln.wf01")]),e._v(" as a storage group when there exist two storage groups "),a("code",[e._v("root.ln")]),e._v(" and "),a("code",[e._v("root.sgcc")]),e._v(". The system will give the corresponding error prompt as shown below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> set storage group to root.ln.wf01\nMsg: org.apache.iotdb.exception.MetadataErrorException: org.apache.iotdb.exception.PathErrorException: The prefix of root.ln.wf01 has been set to the storage group.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h3",{attrs:{id:"show-storage-group"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-storage-group"}},[e._v("#")]),e._v(" Show Storage Group")]),e._v(" "),a("p",[e._v("After the storage group is created, we can use the "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/5-IoTDB SQL Documentation/1-IoTDB Query Statement.html"}},[e._v("SHOW STORAGE GROUP")]),e._v(" statement to view all the storage groups. The SQL statement is as follows:")],1),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> show storage group\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The result is as follows:\n"),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577338-84c70600-1ef4-11e9-9dab-605b32c02836.jpg"}})])],1),e._v(" "),a("h3",{attrs:{id:"timeseries-creation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timeseries-creation"}},[e._v("#")]),e._v(" Timeseries Creation")]),e._v(" "),a("p",[e._v("According to the storage model selected before, we can create corresponding timeseries in the two storage groups respectively. The SQL statements for creating timeseries are as follows:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("It is worth noting that when in the CRATE TIMESERIES statement the encoding method conflicts with the data type, the system will give the corresponding error prompt as shown below:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Please refer to "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/2-Concept Key Concepts and Terminology/3-Encoding.html"}},[e._v("Encoding")]),e._v(" for correspondence between data type and encoding.")],1),e._v(" "),a("h3",{attrs:{id:"show-timeseries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-timeseries"}},[e._v("#")]),e._v(" Show Timeseries")]),e._v(" "),a("p",[e._v("Currently, IoTDB supports two ways of viewing timeseries:")]),e._v(" "),a("ul",[a("li",[e._v("SHOW TIMESERIES statement presents all timeseries information in JSON form")]),e._v(" "),a("li",[e._v("SHOW TIMESERIES <"),a("code",[e._v("Path")]),e._v("> statement returns all timeseries information and the total number of timeseries under the given <"),a("code",[e._v("Path")]),e._v(">  in tabular form. timeseries information includes: timeseries path, storage group it belongs to, data type, encoding type.  <"),a("code",[e._v("Path")]),e._v("> needs to be a prefix path or a path with star or a timeseries path. SQL statements are as follows:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> show timeseries root\nIoTDB> show timeseries root.ln\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("The results are shown below respectly:")]),e._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577347-8db7d780-1ef4-11e9-91d6-764e58c10e94.jpg"}})]),e._v(" "),a("center",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577359-97413f80-1ef4-11e9-8c10-53b291fc10a5.jpg"}})]),e._v(" "),a("p",[e._v("It is worth noting that when the queried path does not exist, the system will return no timeseries.")]),e._v(" "),a("h3",{attrs:{id:"precautions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#precautions"}},[e._v("#")]),e._v(" Precautions")]),e._v(" "),a("p",[e._v("Version 0.8.2 imposes some limitations on the scale of data that users can operate:")]),e._v(" "),a("p",[e._v("Limit 1: Assuming that the JVM memory allocated to IoTDB at runtime is p and the user-defined size of data in memory written to disk ("),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[e._v("group_size_in_byte")]),e._v(") is Q, then the number of storage groups should not exceed p/q.")],1),e._v(" "),a("p",[e._v("Limit 2: The number of timeseries should not exceed the ratio of JVM memory allocated to IoTDB at run time to 20KB.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);