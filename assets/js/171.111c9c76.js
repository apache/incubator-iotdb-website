(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{553:function(t,e,a){"use strict";a.r(e);var i=a(45),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_0-8-0-version-0-version-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-0-version-0-version-1"}},[t._v("#")]),t._v(" 0.8.0 (version-0) -> version-1")]),t._v(" "),a("p",[t._v("Last Updated on October 27th, 2019 by Lei Rui.")]),t._v(" "),a("h2",{attrs:{id:"_1-delete-old"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-delete-old"}},[t._v("#")]),t._v(" 1. Delete Old")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Latest Changes")]),t._v(" "),a("th",[t._v("Related Committers")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Delete struct TSSetStorageGroupReq")]),t._v(" "),a("td",[t._v("Jialin Qiao")])]),t._v(" "),a("tr",[a("td",[t._v("Remove struct TSDataValue")]),t._v(" "),a("td",[t._v("Lei Rui")])]),t._v(" "),a("tr",[a("td",[t._v("Remove struct TSRowRecord")]),t._v(" "),a("td",[t._v("Lei Rui")])]),t._v(" "),a("tr",[a("td",[t._v("Remove optional string version in TSFetchMetadataResp")]),t._v(" "),a("td",[t._v("Genius_pig")])]),t._v(" "),a("tr",[a("td",[t._v("Remove optional set"),a("string",[t._v(" childPaths, nodesList, storageGroups, devices in TSFetchMetadataResp")])],1),t._v(" "),a("td",[t._v("Genius_pig")])]),t._v(" "),a("tr",[a("td",[t._v("Remove optional map<string, string> nodeTimeseriesNum in TSFetchMetadataResp")]),t._v(" "),a("td",[t._v("Genius_pig")])]),t._v(" "),a("tr",[a("td",[t._v("Remove optional list<list"),a("string",[t._v("> timeseriesList in TSFetchMetadataResp")])],1),t._v(" "),a("td",[t._v("Genius_pig")])]),t._v(" "),a("tr",[a("td",[t._v("Remove optinoal optional i32 timeseriesNum in TSFetchMetadataResp")]),t._v(" "),a("td",[t._v("Genius_pig")])]),t._v(" "),a("tr",[a("td",[t._v("Remove optional i32 nodeLevel in TSFetchMetadataReq")]),t._v(" "),a("td",[t._v("Genius_pig")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-add-new"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-new"}},[t._v("#")]),t._v(" 2. Add New")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Latest Changes")]),t._v(" "),a("th",[t._v("Related Committers")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Add struct TSBatchInsertionReq")]),t._v(" "),a("td",[t._v("qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Add method TSExecuteBatchStatementResp insertBatch(1:TSBatchInsertionReq req)")]),t._v(" "),a("td",[t._v("qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Add Struct TSStatusType")]),t._v(" "),a("td",[t._v("Zesong Sun")])]),t._v(" "),a("tr",[a("td",[t._v("Add TSCreateTimeseriesReq")]),t._v(" "),a("td",[t._v("Zesong Sun")])]),t._v(" "),a("tr",[a("td",[t._v("Add method TSStatus setStorageGroup(1:string storageGroup)")]),t._v(" "),a("td",[t._v("Zesong Sun, Jialin Qiao")])]),t._v(" "),a("tr",[a("td",[t._v("Add method TSStatus createTimeseries(1:TSCreateTimeseriesReq req)")]),t._v(" "),a("td",[t._v("Zesong Sun")])]),t._v(" "),a("tr",[a("td",[t._v("Add struct TSInsertReq")]),t._v(" "),a("td",[t._v("qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Add method TSRPCResp insertRow(1:TSInsertReq req)")]),t._v(" "),a("td",[t._v("qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Add struct TSDeleteDataReq")]),t._v(" "),a("td",[t._v("Jack Tsai, qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Add method TSStatus deleteData(1:TSDeleteDataReq req)")]),t._v(" "),a("td",[t._v("Jack Tsai, Jialin Qiao, qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Add method TSStatus deleteTimeseries(1:list<string> path)")]),t._v(" "),a("td",[t._v("qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Add method TSStatus deleteStorageGroups(1:list<string> storageGroup)")]),t._v(" "),a("td",[t._v("Yi Tao")])]),t._v(" "),a("tr",[a("td",[t._v("Add Struct TSExecuteInsertRowInBatchResp")]),t._v(" "),a("td",[t._v("Kaifeng Xue")])]),t._v(" "),a("tr",[a("td",[t._v("Add method insertRowInBatch(1:TSInsertInBatchReq req);")]),t._v(" "),a("td",[t._v("Kaifeng Xue")])]),t._v(" "),a("tr",[a("td",[t._v("Add method testInsertRowInBatch(1:TSInsertInBatchReq req);")]),t._v(" "),a("td",[t._v("Kaifeng Xue")])]),t._v(" "),a("tr",[a("td",[t._v("Add method testInsertRow(1:TSInsertReq req);")]),t._v(" "),a("td",[t._v("Kaifeng Xue")])]),t._v(" "),a("tr",[a("td",[t._v("Add method testInsertBatch(1:TSBatchInsertionReq req);")]),t._v(" "),a("td",[t._v("Kaifeng Xue")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-update"}},[t._v("#")]),t._v(" 3. Update")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Latest Changes")]),t._v(" "),a("th",[t._v("Related Committers")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Add required string timestampPrecision in ServerProperties")]),t._v(" "),a("td",[t._v("1160300922")])]),t._v(" "),a("tr",[a("td",[t._v("Add optional list<string> dataTypeList in TSExecuteStatementResp")]),t._v(" "),a("td",[t._v("suyue")])]),t._v(" "),a("tr",[a("td",[t._v("Update TSStatus to use TSStatusType, instead of using "),a("s",[t._v("TS_StatusCode, errorCode and errorMessage")])]),t._v(" "),a("td",[t._v("Zesong Sun")])]),t._v(" "),a("tr",[a("td",[t._v("Rename item in enum TSProtocolVersion from "),a("s",[t._v("TSFILE_SERVICE_PROTOCOL_V1")]),t._v(" to IOTDB_SERVICE_PROTOCOL_V1")]),t._v(" "),a("td",[t._v("qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Rename method name from "),a("s",[t._v("TSExecuteStatementResp executeInsertion(1:TSInsertionReq req)")]),t._v(" to TSExecuteStatementResp insert(1:TSInsertionReq req)")]),t._v(" "),a("td",[t._v("qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Add required i32 compressor in TSCreateTimeseriesReq")]),t._v(" "),a("td",[t._v("Jialin Qiao")])]),t._v(" "),a("tr",[a("td",[t._v("Add optional list<string> nodesList, optional map<string, string> nodeTimeseriesNum in TSFetchMetadataResp")]),t._v(" "),a("td",[t._v("jack870131")])]),t._v(" "),a("tr",[a("td",[t._v("Add optional i32 nodeLevel in TSFetchMetadataReq")]),t._v(" "),a("td",[t._v("jack870131, Zesong Sun")])]),t._v(" "),a("tr",[a("td",[t._v("Change the following methods' returned type to be TSStatus: "),a("br"),t._v("TSStatus closeSession(1:TSCloseSessionReq req), "),a("br"),t._v("TSStatus cancelOperation(1:TSCancelOperationReq req), "),a("br"),t._v("TSStatus closeOperation(1:TSCloseOperationReq req), "),a("br"),t._v("TSStatus setTimeZone(1:TSSetTimeZoneReq req), "),a("br"),t._v("TSStatus setStorageGroup(1:string storageGroup), "),a("br"),t._v("TSStatus createTimeseries(1:TSCreateTimeseriesReq req), "),a("br"),t._v("TSStatus insertRow(1:TSInsertReq req), "),a("br"),t._v("TSStatus deleteData(1:TSDeleteDataReq req)")]),t._v(" "),a("td",[t._v("Zesong Sun, qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Change from "),a("s",[t._v("required string path")]),t._v(" to required list<string> paths in TSDeleteDataReq")]),t._v(" "),a("td",[t._v("qiaojialin")])]),t._v(" "),a("tr",[a("td",[t._v("Add optional set<string> devices in TSFetchMetadataResp")]),t._v(" "),a("td",[t._v("Zesong Sun")])]),t._v(" "),a("tr",[a("td",[t._v("Rename some fields in TSFetchMetadataResp: "),a("s",[t._v("ColumnsList")]),t._v(" to columnsList, "),a("s",[t._v("showTimeseriesList")]),t._v(" to timeseriesList, "),a("s",[t._v("showStorageGroups")]),t._v(" to storageGroups")]),t._v(" "),a("td",[t._v("Zesong Sun")])]),t._v(" "),a("tr",[a("td",[t._v("Change struct TSQueryDataSet to eliminate row-wise rpc writing")]),t._v(" "),a("td",[t._v("Lei Rui")])]),t._v(" "),a("tr",[a("td",[t._v("Add optional i32 timeseriesNum in TSFetchMetadataResp")]),t._v(" "),a("td",[t._v("Jack Tsai")])]),t._v(" "),a("tr",[a("td",[t._v("Add required i64 queryId in TSHandleIdentifier")]),t._v(" "),a("td",[t._v("Yuan Tian")])]),t._v(" "),a("tr",[a("td",[t._v("Add optional set<string> childPaths in TSFetchMetadataResp")]),t._v(" "),a("td",[t._v("Haonan Hou")])]),t._v(" "),a("tr",[a("td",[t._v("Add optional string version in TSFetchMetadataResp")]),t._v(" "),a("td",[t._v("Genius_pig")])]),t._v(" "),a("tr",[a("td",[t._v("Add required i64 statementId in TSExecuteStatementReq")]),t._v(" "),a("td",[t._v("Yuan Tian")])]),t._v(" "),a("tr",[a("td",[t._v("Add required binary time, required list"),a("binary",[t._v(" valueList, required list"),a("binary",[t._v(" bitmapList and remove required binary values, required i32 rowCount in TSQueryDataSet")])],1)],1),t._v(" "),a("td",[t._v("Yuan Tian")])]),t._v(" "),a("tr",[a("td",[t._v("Add optional i32 fetchSize in TSExecuteStatementReq,"),a("br"),t._v("Add optional TSQueryDataSet in TSExecuteStatementResp")]),t._v(" "),a("td",[t._v("liutaohua")])])])]),t._v(" "),a("h1",{attrs:{id:"_0-10-0-version-1-version-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-10-0-version-1-version-2"}},[t._v("#")]),t._v(" 0.10.0 (version-1) -> version-2")]),t._v(" "),a("p",[t._v("Last Updated on November 12th, 2019 by Tian Jiang.")]),t._v(" "),a("h2",{attrs:{id:"_1-delete-old-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-delete-old-2"}},[t._v("#")]),t._v(" 1. Delete Old")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Latest Changes")]),t._v(" "),a("th",[t._v("Related Committers")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Remove TS_SessionHandle,TSHandleIdentifier")]),t._v(" "),a("td",[t._v("Tian Jiang")])]),t._v(" "),a("tr",[a("td",[t._v("Remove TSStatus,TSExecuteInsertRowInBatchResp")]),t._v(" "),a("td",[t._v("Jialin Qiao")])])])]),t._v(" "),a("h2",{attrs:{id:"_2-add-new-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-add-new-2"}},[t._v("#")]),t._v(" 2. Add New")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Latest Changes")]),t._v(" "),a("th",[t._v("Related Committers")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Add parameter sessionId in getTimeZone, getProperties, setStorageGroup, createTimeseries...")]),t._v(" "),a("td",[t._v("Tian Jiang")])]),t._v(" "),a("tr",[a("td",[t._v("Add struct TSQueryNonAlignDataSet")]),t._v(" "),a("td",[t._v("Haonan Hou")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-update-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-update-2"}},[t._v("#")]),t._v(" 3. Update")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Latest Changes")]),t._v(" "),a("th",[t._v("Related Committers")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Replace TS_SessionHandles with SessionIds, TSOperationHandle with queryIds")]),t._v(" "),a("td",[t._v("Tian Jiang")])]),t._v(" "),a("tr",[a("td",[t._v("Add optional TSQueryNonAlignDataSet in TSExecuteStatementResp, TSFetchResultsResp and required bool isAlign in TSFetchResultsReq")]),t._v(" "),a("td",[t._v("Haonan Hou")])]),t._v(" "),a("tr",[a("td",[t._v("Rename TSStatusType to TSStatus")]),t._v(" "),a("td",[t._v("Jialin Qiao")])]),t._v(" "),a("tr",[a("td",[t._v("Remove sessionId in TSExecuteBatchStatementResp")]),t._v(" "),a("td",[t._v("Jialin Qiao")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);