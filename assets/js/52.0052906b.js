(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{619:function(e,t,i){"use strict";i.r(t);var a=i(70),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"wal"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#wal"}},[e._v("#")]),e._v(" WAL")]),e._v(" "),i("h2",{attrs:{id:"working-process"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#working-process"}},[e._v("#")]),e._v(" Working Process")]),e._v(" "),i("ul",[i("li",[e._v("WAL overall recording principle\n"),i("ul",[i("li",[e._v("For each Memtable, a corresponding WAL file will be recorded. When the Memtable is flushed, the WAL will be deleted.")])])]),e._v(" "),i("li",[e._v("WAL record details\n"),i("ul",[i("li",[e._v("The test workload is 1sg,1device,100sensor,1,000,000 points each sensor,force_wal_period_in_ms=10")]),e._v(" "),i("li",[e._v("In org.apache.iotdb.db.writelog.node.ExclusiveWriteLogNode, the WAL buffer size will be allocated according to the wal_buffer_size in the configuration. If the buffer size is exceeded during the process of putting WAL, it will be flushed to disk")]),e._v(" "),i("li",[e._v("In org.apache.iotdb.db.writelog.manager, nodeMap will continue to accumulate WAL")]),e._v(" "),i("li",[e._v("WAL has three ways to be flashed to disk (enable at the same time)\n"),i("ul",[i("li",[e._v("In org.apache.iotdb.db.writelog.node.ExclusiveWriteLogNode, half of the wal_buffer_size in the configuration will be allocated as the WAL logBufferWorking writable buffer, and the other half will be used as the flashing buffer area, such as adding WAL In the process, if the logBufferWorking size is exceeded, it will be flushed to the disk.")]),e._v(" "),i("li",[e._v("Each time a record is written in org.apache.iotdb.db.writelog.node.ExclusiveWriteLogNode, it will be judged whether the accumulated WAL size of the current node exceeds the flush_wal_threshold in the configuration. If it exceeds, it will be flushed to the disk.")]),e._v(" "),i("li",[e._v("When org.apache.iotdb.db.writelog.manager.MultiFileLogNodeManager starts, a timing thread will be generated, call the thread regularly every force_wal_period_in_ms interval to flush the nodeMap in the memory to the disk .")])])])])])]),e._v(" "),i("h2",{attrs:{id:"test-result"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#test-result"}},[e._v("#")]),e._v(" Test Result")]),e._v(" "),i("ul",[i("li",[e._v("The main time spent on forceTask is focused on. org.apache.iotdb.db.writelog.io.LogWriter.force()")]),e._v(" "),i("li",[e._v("Test forceTask on SSD and HDD respectively\n"),i("ul",[i("li",[e._v("In SSD, the speed is 75MB/s")]),e._v(" "),i("li",[e._v("In HDD, the speed is 5MB/s")]),e._v(" "),i("li",[e._v("So when in HDD, users must pay attention to adjustment force_wal_period_in_ms and let it not to be too small, otherwise it will seriously reduce write performance\n"),i("ul",[i("li",[e._v("After testing, the optimal parameter configuration in HDD is 100ms-200ms, and the test results are as follows\n"),i("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/24886743/93157479-e3319f80-f73c-11ea-836f-459d03cb2fab.png"}})])])])])])]),e._v(" "),i("h2",{attrs:{id:"related-code"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#related-code"}},[e._v("#")]),e._v(" Related Code")]),e._v(" "),i("ul",[i("li",[e._v("org.apache.iotdb.db.writelog.*")])])])}),[],!1,null,null,null);t.default=r.exports}}]);