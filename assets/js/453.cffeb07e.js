(window.webpackJsonp=window.webpackJsonp||[]).push([[453],{1010:function(e,s,t){"use strict";t.r(s);var a=t(69),i=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"programming-native-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#programming-native-api"}},[e._v("#")]),e._v(" Programming - Native API")]),e._v(" "),t("h2",{attrs:{id:"dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),t("ul",[t("li",[e._v("JDK >= 1.8")]),e._v(" "),t("li",[e._v("Maven >= 3.1")])]),e._v(" "),t("h2",{attrs:{id:"how-to-install-in-local-maven-repository"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install-in-local-maven-repository"}},[e._v("#")]),e._v(" How to install in local maven repository")]),e._v(" "),t("p",[e._v("In root directory:")]),e._v(" "),t("blockquote",[t("p",[e._v("mvn clean install -pl session -am -DskipTests")])]),e._v(" "),t("h2",{attrs:{id:"using-iotdb-native-api-with-maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-iotdb-native-api-with-maven"}},[e._v("#")]),e._v(" Using IoTDB Native API with Maven")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<dependencies>\n    <dependency>\n      <groupId>org.apache.iotdb</groupId>\n      <artifactId>iotdb-session</artifactId>\n      <version>0.10.0</version>\n    </dependency>\n</dependencies>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h2",{attrs:{id:"native-apis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#native-apis"}},[e._v("#")]),e._v(" Native APIs")]),e._v(" "),t("p",[e._v("Here we show the commonly used interfaces and their parameters in the Native API:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Initialize a Session")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Session(String host, int port)\n\nSession(String host, String port, String username, String password)\n\nSession(String host, int port, String username, String password)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Open a Session")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Session.open()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Close a Session")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("​Session.close()\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Set storage group")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void setStorageGroup(String storageGroupId)    \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("​")])]),e._v(" "),t("li",[t("p",[e._v("Delete one or several storage groups")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void deleteStorageGroup(String storageGroup)\nvoid deleteStorageGroups(List<String> storageGroups)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Create one or multiple timeseries")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void createTimeseries(String path, TSDataType dataType,\n        TSEncoding encoding, CompressionType compressor, Map<String, String> props,\n        Map<String, String> tags, Map<String, String> attributes, String measurementAlias)\n        \nvoid createMultiTimeseries(List<String> paths, List<TSDataType> dataTypes,\n        List<TSEncoding> encodings, List<CompressionType> compressors,\n        List<Map<String, String>> propsList, List<Map<String, String>> tagsList,\n        List<Map<String, String>> attributesList, List<String> measurementAliasList)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Delete one or several timeseries")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void deleteTimeseries(String path)\nvoid deleteTimeseries(List<String> paths)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Delete data before or equal to a timestamp of one or several timeseries")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void deleteData(String path, long time)\nvoid deleteData(List<String> paths, long time)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Insert a Record，which contains multiple measurement value of a device at a timestamp. Without type info the server has to do type inference, which may cost some time")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void insertRecord(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Insert a Tablet，which is multiple rows of a device, each row has the same measurements")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void insertTablet(Tablet tablet)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Insert multiple Tablets")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void insertTablets(Map<String, Tablet> tablet)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Insert multiple Records. Without type info the server has to do type inference, which may cost some time")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void insertRecords(List<String> deviceIds, List<Long> times, \n                     List<List<String>> measurementsList, List<List<String>> valuesList)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Insert a Record，which contains multiple measurement value of a device at a timestamp. With type info the server has no need to do type inference, which leads a better performance")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void insertRecord(String deviceId, long time, List<String> measurements,\n     List<TSDataType> types, List<Object> values)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Insert multiple Records. With type info the server has no need to do type inference, which leads a better performance")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void insertRecords(List<String> deviceIds, List<Long> times,\n      List<List<String>> measurementsList, List<List<TSDataType>> typesList,\n      List<List<Object>> valuesList)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])])]),e._v(" "),t("h2",{attrs:{id:"native-apis-for-profiling-network-cost"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#native-apis-for-profiling-network-cost"}},[e._v("#")]),e._v(" Native APIs for profiling network cost")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Test the network and client cost of insertRecords. This method NOT insert data into database and server just return after accept the request, this method should be used to test other time cost in client")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void testInsertRecords(List<String> deviceIds, List<Long> times,\n                List<List<String>> measurementsList, List<List<String>> valuesList)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("or")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void testInsertRecords(List<String> deviceIds, List<Long> times,\n      List<List<String>> measurementsList, List<List<TSDataType>> typesList,\n      List<List<Object>> valuesList)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Test the network and client cost of insertRecord. This method NOT insert data into database and server just return after accept the request, this method should be used to test other time cost in client")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void testInsertRecord(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("or")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void testInsertRecord(String deviceId, long time, List<String> measurements,\n      List<TSDataType> types, List<Object> values)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Test the network and client cost of insertTablet. This method NOT insert data into database and server just return after accept the request, this method should be used to test other time cost in client")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("void testInsertTablet(Tablet tablet)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])]),e._v(" "),t("h2",{attrs:{id:"sample-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-code"}},[e._v("#")]),e._v(" Sample code")]),e._v(" "),t("p",[e._v("To get more information of the following interfaces, please view session/src/main/java/org/apache/iotdb/session/Session.java")]),e._v(" "),t("p",[e._v("The sample code of using these interfaces is in example/session/src/main/java/org/apache/iotdb/SessionExample.java，which provides an example of how to open an IoTDB session, execute a batch insertion.")]),e._v(" "),t("h2",{attrs:{id:"session-pool-for-native-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-pool-for-native-api"}},[e._v("#")]),e._v(" Session Pool for Native API")]),e._v(" "),t("p",[e._v("We provided a connection pool (`SessionPool) for Native API.\nUsing the interface, you need to define the pool size.")]),e._v(" "),t("p",[e._v("If you can not get a session connection in 60 secondes, there is a warning log but the program will hang.")]),e._v(" "),t("p",[e._v("If a session has finished an operation, it will be put back to the pool automatically.\nIf a session connection is broken, the session will be removed automatically and the pool will try\nto create a new session and redo the operation.")]),e._v(" "),t("p",[e._v("For query operations:")]),e._v(" "),t("ol",[t("li",[e._v("When using SessionPool to query data, the result set is "),t("code",[e._v("SessionDataSetWrapper")]),e._v(";")]),e._v(" "),t("li",[e._v("Given a "),t("code",[e._v("SessionDataSetWrapper")]),e._v(", if you have not scanned all the data in it and stop to use it,\nyou have to call "),t("code",[e._v("SessionPool.closeResultSet(wrapper)")]),e._v(" manually;")]),e._v(" "),t("li",[e._v("When you call "),t("code",[e._v("hasNext()")]),e._v(" and "),t("code",[e._v("next()")]),e._v(" of a "),t("code",[e._v("SessionDataSetWrapper")]),e._v(" and there is an exception, then\nyou have to call "),t("code",[e._v("SessionPool.closeResultSet(wrapper)")]),e._v(" manually;")]),e._v(" "),t("li",[e._v("You can call "),t("code",[e._v("getColumnNames()")]),e._v(" of "),t("code",[e._v("SessionDataSetWrapper")]),e._v(" to get the column names of query result;")])]),e._v(" "),t("p",[e._v("Examples: "),t("code",[e._v("session/src/test/java/org/apache/iotdb/session/pool/SessionPoolTest.java")])]),e._v(" "),t("p",[e._v("Or "),t("code",[e._v("example/session/src/main/java/org/apache/iotdb/SessionPoolExample.java")])])])}),[],!1,null,null,null);s.default=i.exports}}]);