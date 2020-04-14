(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{414:function(e,t,a){"use strict";a.r(t);var s=a(45),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"storage-engine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-engine"}},[e._v("#")]),e._v(" Storage engine")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625255-03fe2680-467f-11ea-91ae-64407ef1125c.png"}}),e._v(" "),a("h2",{attrs:{id:"design-ideas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-ideas"}},[e._v("#")]),e._v(" Design ideas")]),e._v(" "),a("p",[e._v("The storage engine is based on the LSM design. The data is first written to the memory buffer memtable and then flushed to disk. For each device, the maximum timestamp being flushed (including those that have been flushed and are being flushed) is maintained in memory. The data is divided into sequential data and out-of-order data according to this timestamp. Different types of data are separated into different memtables and flushed into different TsFiles.")]),e._v(" "),a("p",[e._v("Each data file TsFile corresponds to a file index information TsFileResource in memory for query use.")]),e._v(" "),a("p",[e._v("In addition, the storage engine includes asynchronous persistence and file merge mechanisms.")]),e._v(" "),a("h2",{attrs:{id:"write-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#write-process"}},[e._v("#")]),e._v(" Write process")]),e._v(" "),a("h3",{attrs:{id:"related-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-code"}},[e._v("#")]),e._v(" Related code")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("org.apache.iotdb.db.engine.StorageEngine")]),e._v(" "),a("p",[e._v("Responsible for writing and accessing an IoTDB instance and managing all StorageGroupProsessor.")])]),e._v(" "),a("li",[a("p",[e._v("org.apache.iotdb.db.engine.storagegroup.StorageGroupProcessor")]),e._v(" "),a("p",[e._v("Responsible for writing and accessing data within a time partition of a storage group.")]),e._v(" "),a("p",[e._v("Manages all partitions‘ TsFileProcessor .")])]),e._v(" "),a("li",[a("p",[e._v("org.apache.iotdb.db.engine.storagegroup.TsFileProcessor")]),e._v(" "),a("p",[e._v("Responsible for data writing and accessing a TsFile file.")])])]),e._v(" "),a("h2",{attrs:{id:"data-write"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-write"}},[e._v("#")]),e._v(" Data write")]),e._v(" "),a("p",[e._v("See details:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/SystemDesign/4-StorageEngine/6-DataManipulation.html"}},[e._v("Data write")])],1)]),e._v(" "),a("h2",{attrs:{id:"data-access"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-access"}},[e._v("#")]),e._v(" Data access")]),e._v(" "),a("ul",[a("li",[e._v("Main entrance（StorageEngine）: public QueryDataSource query(SingleSeriesExpression seriesExpression, QueryContext context, QueryFileManager filePathsManager)\n​\n"),a("ul",[a("li",[e._v("Find all ordered and out-of-order TsFileResources containing this time series and return them for use by the query engine")])])])]),e._v(" "),a("h2",{attrs:{id:"related-documents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#related-documents"}},[e._v("#")]),e._v(" Related documents")]),e._v(" "),a("ul",[a("li",[a("p",[a("RouterLink",{attrs:{to:"/SystemDesign/4-StorageEngine/2-WAL.html"}},[e._v("Write Ahead Log (WAL)")])],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/SystemDesign/4-StorageEngine/3-FlushManager.html"}},[e._v("memtable Endurance")])],1)]),e._v(" "),a("li",[a("p",[a("RouterLink",{attrs:{to:"/SystemDesign/4-StorageEngine/4-MergeManager.html"}},[e._v("File merge mechanism")])],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);