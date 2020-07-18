(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{603:function(e,t,a){"use strict";a.r(t);var i=a(69),o=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"metadata-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-management"}},[e._v("#")]),e._v(" Metadata Management")]),e._v(" "),a("p",[e._v("Metadata of IoTDB is managed by MManger, including:")]),e._v(" "),a("ul",[a("li",[e._v("MTree")]),e._v(" "),a("li",[e._v("Log management of metadata")]),e._v(" "),a("li",[e._v("Tag/Attribute management")])]),e._v(" "),a("h2",{attrs:{id:"mmanager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mmanager"}},[e._v("#")]),e._v(" MManager")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Maintain an inverted index for tag: "),a("code",[e._v("Map<String, Map<String, Set<LeafMNode>>> tagIndex")])]),e._v(" "),a("blockquote",[a("p",[e._v("tag key -> tag value -> timeseries LeafMNode")])])])]),e._v(" "),a("p",[e._v("In the process of initializing, MManager will replay the mlog to load the metadata into memory. There are seven types of operation log:")]),e._v(" "),a("blockquote",[a("p",[e._v("At the beginning of each operation, it will try to obatin the write lock of MManager, and release it after operation.")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Create Timeseries")]),e._v(" "),a("ul",[a("li",[e._v("check if the storage group exists, if not and the auto create is enable, create it.")]),e._v(" "),a("li",[e._v("create a leafMNode in the MTree with alias")]),e._v(" "),a("li",[e._v("if the dynamic parameter is enable, check if the memory is satisfied")]),e._v(" "),a("li",[e._v("if not restart\n"),a("ul",[a("li",[e._v("persist tags/attributes into tlog, and return the offset")]),e._v(" "),a("li",[e._v("set the offset of the leafMNode")]),e._v(" "),a("li",[e._v("persist the log into mlog")])])]),e._v(" "),a("li",[e._v("if restart\n"),a("ul",[a("li",[e._v("read tlog using offset in mlog, rebuilding the tag inverted index")])])])])]),e._v(" "),a("li",[a("p",[e._v("Delete Timeseries")]),e._v(" "),a("ul",[a("li",[e._v("obtain fullPath list of timeseries satisfying the prefix path")]),e._v(" "),a("li",[e._v("iterate the fullPath list, and delete them in MTree\n"),a("ul",[a("li",[e._v("before deleting, we need to obtain the parent node's write lock")]),e._v(" "),a("li",[e._v("if succeed\n"),a("ul",[a("li",[e._v("delete the LeafMNode")]),e._v(" "),a("li",[e._v("read tlog using offset in the LeafMNode, update tag inverted index")]),e._v(" "),a("li",[e._v("if the storage group becomes empty after deleting, record its name")])])]),e._v(" "),a("li",[e._v("if failed\n"),a("ul",[a("li",[e._v("return the full path of failed timeseries")])])])])]),e._v(" "),a("li",[e._v("if not restart\n"),a("ul",[a("li",[e._v("delete the recorded empty storage group")]),e._v(" "),a("li",[e._v("persist log into mlog")]),e._v(" "),a("li",[e._v("currently, we won't delete the tag/attribute info of that timeseries in tlog")])])])])]),e._v(" "),a("li",[a("p",[e._v("Set Storage Group")]),e._v(" "),a("ul",[a("li",[e._v("add StorageGroupMNode in MTree")]),e._v(" "),a("li",[e._v("if dynamic parameter is enable, check if the memory is satisfied")]),e._v(" "),a("li",[e._v("if not restart, persist log into mlog")])])]),e._v(" "),a("li",[a("p",[e._v("Delete Storage Group")]),e._v(" "),a("ul",[a("li",[e._v("delete the StorageGroupMNode in MTree, and return all the LeafMNode in that storage group\n"),a("ul",[a("li",[e._v("While deleting StorageGroupMNode, we need to obtain the write lock of that StorageGroupMNode")]),e._v(" "),a("li",[e._v("if succeed\n"),a("ul",[a("li",[e._v("delete that StorageGroupMNode")])])]),e._v(" "),a("li",[e._v("if failed\n"),a("ul",[a("li",[e._v("return the failed storage group name")])])])])]),e._v(" "),a("li",[e._v("iterate the returned LeafMNode list, reading the tlog using the offset in LeafMNode, and then update tag inverted index")]),e._v(" "),a("li",[e._v("if not restart, persist log into mlog")])])]),e._v(" "),a("li",[a("p",[e._v("Set TTL")]),e._v(" "),a("ul",[a("li",[e._v("obtain the corresponding StorageGroupMNode, modify the TTL property in it.")]),e._v(" "),a("li",[e._v("if not restart, persist log into mlog")])])]),e._v(" "),a("li",[a("p",[e._v("Change the offset of Timeseries")]),e._v(" "),a("ul",[a("li",[e._v("modify the offset of the timeseries's LeafMNode")])])]),e._v(" "),a("li",[a("p",[e._v("Change the alias of Timeseries")]),e._v(" "),a("ul",[a("li",[e._v("modify the alias of the timeseries's LeafMNode and update the aliasMap in its parent node.")])])])]),e._v(" "),a("p",[e._v("In addition to these seven operation that are needed to be logged, there are another six alter operation to tag/attribute info of timeseries.")]),e._v(" "),a("blockquote",[a("p",[e._v("Same as above, at the beginning of each operation, it will try to obatin the write lock of MManager, and release it after operation.")])]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Rename Tag/Attribute")]),e._v(" "),a("ul",[a("li",[e._v("obtain the LeafMNode of that timeseries")]),e._v(" "),a("li",[e._v("read tag and attribute information through the offset in LeafMNode")]),e._v(" "),a("li",[e._v("if the new name has existed, then throw exception")]),e._v(" "),a("li",[e._v("otherwise:\n"),a("ul",[a("li",[e._v("if the old name does not exist, then throw exception")]),e._v(" "),a("li",[e._v("otherwise, replace the old one with the new name, and persist it into tlog")]),e._v(" "),a("li",[e._v("if the old one is tag, we still need to update tag inverted index")])])])])]),e._v(" "),a("li",[a("p",[e._v("reset tag/attribute value")]),e._v(" "),a("ul",[a("li",[e._v("obtain the LeafMNode of that timeseries")]),e._v(" "),a("li",[e._v("read tag and attribute information through the offset in LeafMNode")]),e._v(" "),a("li",[e._v("if the key does not exist, then throw exception")]),e._v(" "),a("li",[e._v("if the reset one is tag, we still need to update tag inverted index")]),e._v(" "),a("li",[e._v("persist the updated tag and attribute information into tlog")])])]),e._v(" "),a("li",[a("p",[e._v("drop existing tag/attribute")]),e._v(" "),a("ul",[a("li",[e._v("obtain the LeafMNode of that timeseries")]),e._v(" "),a("li",[e._v("read tag and attribute information through the offset in LeafMNode")]),e._v(" "),a("li",[e._v("iterate the tags or attributes needed to be dropped, if it doesn't exist, then skip it, otherwise, drop it")]),e._v(" "),a("li",[e._v("if the drooped one is tag, we still need to update tag inverted index")]),e._v(" "),a("li",[e._v("persist the updated tag and attribute information into tlog")])])]),e._v(" "),a("li",[a("p",[e._v("add new tags")]),e._v(" "),a("ul",[a("li",[e._v("obtain the LeafMNode of that timeseries")]),e._v(" "),a("li",[e._v("read tag information through the offset in LeafMNode")]),e._v(" "),a("li",[e._v("iterate the tags needed to be added, if it has existed, then throw exception, otherwise, add it")]),e._v(" "),a("li",[e._v("persist the new tag information into tlog")]),e._v(" "),a("li",[e._v("update tag inverted index")])])]),e._v(" "),a("li",[a("p",[e._v("add new attributes")]),e._v(" "),a("ul",[a("li",[e._v("obtain the LeafMNode of that timeseries")]),e._v(" "),a("li",[e._v("read attribute information through the offset in LeafMNode")]),e._v(" "),a("li",[e._v("iterate the attributes needed to be added, if it has existed, then throw exception, otherwise, add it")]),e._v(" "),a("li",[e._v("persist the new attribute information into tlog")])])]),e._v(" "),a("li",[a("p",[e._v("upsert alias/tags/attributes")]),e._v(" "),a("ul",[a("li",[e._v("obtain the LeafMNode of that timeseries")]),e._v(" "),a("li",[e._v("change the alias of the timeseries's LeafMNode and update the aliasMap in its parent node if exists")]),e._v(" "),a("li",[e._v("persist the updated alias into mlog")]),e._v(" "),a("li",[e._v("read tag information through the offset in LeafMNode")]),e._v(" "),a("li",[e._v("iterate the tags and attributes needed to be upserted, if it has existed，use the new value to update it, otherwise, add it")]),e._v(" "),a("li",[e._v("persist the updated tags and attributes information into tlog")]),e._v(" "),a("li",[e._v("if the upserted ones include tag, we still need to update tag inverted index")])])])]),e._v(" "),a("h2",{attrs:{id:"mtree"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mtree"}},[e._v("#")]),e._v(" MTree")]),e._v(" "),a("ul",[a("li",[e._v("org.apache.iotdb.db.metadata.MTree")])]),e._v(" "),a("p",[e._v("There three types of nodes in MTree: StorageGroupMNode、InternalMNode(Non-leaf node)、LeafMNode(leaf node), they all extend to MNode.")]),e._v(" "),a("p",[e._v("Each InternalMNode has a read-write lock. When querying metadata information, you need to obtain a read lock for each InternalMNode on the path. When modifying metadata information, if you modify the LeafMNode, you need to obtain the write lock of its parent node. If you modify a non-leaf node, only need to obtain its own write lock. If the InternalMNode is located in the device layer, it also contains a "),a("code",[e._v("Map <String, MNode> aliasChildren")]),e._v(", which is used to store alias information.")]),e._v(" "),a("p",[e._v("StorageGroupMNode extends to InternalMNode, containing metadata information for storage groups, such as TTL.")]),e._v(" "),a("p",[e._v("LeafMNode contains the schema information of the corresponding time series, its alias(if it doesn't have, it is null) and the offset of the time series tag/attribute information in the tlog file(if there is no tag/attribute, it is -1)")]),e._v(" "),a("p",[e._v("example：")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625246-fc3e8200-467e-11ea-8815-67b9c4ab716e.png"}}),e._v(" "),a("p",[e._v("The metadata management of IoTDB takes the form of a directory tree, the penultimate layer is the device layer, and the last layer is the sensor layer.")]),e._v(" "),a("p",[e._v("The root node exists by default. Creating storage groups, deleting storage groups, creating time series and deleting time series are all operations on the nodes of the tree.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("create storage group（root.a.b.sg）")]),e._v(" "),a("ul",[a("li",[e._v("create InternalMNode(a.b) for current storage group")]),e._v(" "),a("li",[e._v("make sure this prefix path doesn't contain any other storage group(storage group nesting is not allowed)")]),e._v(" "),a("li",[e._v("check if the storage group has existed")]),e._v(" "),a("li",[e._v("create StorageGroupMNode(sg)")])])]),e._v(" "),a("li",[a("p",[e._v("create timeseries（root.a.b.sg.d.s1）")]),e._v(" "),a("ul",[a("li",[e._v("walk the path and make sure the storage group has been created")]),e._v(" "),a("li",[e._v("find the node in the penultimate layer(device layer), check if it already has the child leaf node with same name")]),e._v(" "),a("li",[e._v("create LeafMNode, and store the alias in LeafMNode if it has")]),e._v(" "),a("li",[e._v("If it has alias, create another links with alias to LeafMNode")])])]),e._v(" "),a("li",[a("p",[e._v("Deleting a storage group is similar to deleting a time series. That is, the storage group or time series node is deleted in its parent node. The time series node also needs to delete its alias in the parent node; if in the deletion process, a node is found not to have any child node, needs to be deleted recursively.")])])]),e._v(" "),a("h2",{attrs:{id:"mtree-checkpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mtree-checkpoint"}},[e._v("#")]),e._v(" MTree checkpoint")]),e._v(" "),a("h3",{attrs:{id:"create-condition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-condition"}},[e._v("#")]),e._v(" Create condition")]),e._v(" "),a("p",[e._v("To speed up restarting of IoTDB, we set checkpoint for MTree to avoid reading "),a("code",[e._v("mlog.txt")]),e._v(" and executing the commands line by line. There are two ways to create MTree snapshot:")]),e._v(" "),a("ol",[a("li",[e._v("Background checking and creating automatically: Every 10 minutes, background thread checks the last modified time of MTree. If:")])]),e._v(" "),a("ul",[a("li",[e._v("If users haven’t modified MTree for more than 1 hour (could be configured), which means "),a("code",[e._v("mlog.txt")]),e._v(" hasn’t been updated for more than 1 hour")]),e._v(" "),a("li",[a("code",[e._v("mlog.txt")]),e._v(" has reached 100000 lines (could be configured)")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Creating manually: Users can use "),a("code",[e._v("create snapshot for schema")]),e._v(" to create MTree snapshot")])]),e._v(" "),a("h3",{attrs:{id:"create-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-process"}},[e._v("#")]),e._v(" Create process")]),e._v(" "),a("p",[e._v("The method is "),a("code",[e._v("MManager.createMTreeSnapshot()")]),e._v(":")]),e._v(" "),a("ol",[a("li",[e._v("Add read lock for MTree to avoid modifying during creating snapshot")]),e._v(" "),a("li",[e._v("Serialize MTree into temporary snapshot file ("),a("code",[e._v("mtree.snapshot.tmp")]),e._v("). The serialization of MTree is depth-first from children to parent. Information of nodes are converted into String according to different node types, which is convenient for deserialization.")])]),e._v(" "),a("ul",[a("li",[e._v("MNode: 0, name, children size")]),e._v(" "),a("li",[e._v("StorageGroupMNode: 1, name, TTL, children size")]),e._v(" "),a("li",[e._v("MeasurementMNode: 2, name, alias, TSDataType, TSEncoding, CompressionType, props, offset, children size")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("After serialization, rename the temp file to a formal file ("),a("code",[e._v("mtree.snapshot")]),e._v("), to avoid crush of server and failure of serialization.")]),e._v(" "),a("li",[e._v("Clear "),a("code",[e._v("mlog.txt")]),e._v(" by "),a("code",[e._v("MLogWriter.clear()")]),e._v(" method:")])]),e._v(" "),a("ul",[a("li",[e._v("Close BufferedWriter and delete "),a("code",[e._v("mlog.txt")]),e._v(" file")]),e._v(" "),a("li",[e._v("Create a new BufferedWriter")]),e._v(" "),a("li",[e._v("Set "),a("code",[e._v("lineNumber")]),e._v(" as 0. "),a("code",[e._v("lineNumber")]),e._v(" records the line number of "),a("code",[e._v("mlog.txt")]),e._v(", which is used for background thread to check whether it is larger than the threshold configured by user.")])]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Release the read lock.")])]),e._v(" "),a("h3",{attrs:{id:"recover-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recover-process"}},[e._v("#")]),e._v(" Recover process")]),e._v(" "),a("p",[e._v("The method is "),a("code",[e._v("MManager.initFromLog()")]),e._v(":")]),e._v(" "),a("ol",[a("li",[e._v("Check whether the temp file "),a("code",[e._v("mtree.snapshot.tmp")]),e._v(" exists. If so, there may exist crush of server and failure of serialization. Delete the temp file.")]),e._v(" "),a("li",[e._v("Check whether the snapshot file "),a("code",[e._v("mtree.snapshot")]),e._v(" exists. If not, use a new MTree; otherwise, start deserializing from snapshot and get MTree")]),e._v(" "),a("li",[e._v("Read and operate all lines in "),a("code",[e._v("mlog.txt")]),e._v(" and finish the recover process of MTree. Update "),a("code",[e._v("lineNumber")]),e._v(" at the same time and return it for recording the line number of "),a("code",[e._v("mlog.txt")]),e._v(" afterwards.")])]),e._v(" "),a("h2",{attrs:{id:"log-management-of-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log-management-of-metadata"}},[e._v("#")]),e._v(" Log management of metadata")]),e._v(" "),a("ul",[a("li",[e._v("org.apache.iotdb.db.metadata.MLogWriter")])]),e._v(" "),a("p",[e._v("All metadata operations are recorded in a metadata log file, which defaults to data/system/schema/mlog.txt.")]),e._v(" "),a("p",[e._v("When the system restarted, the logs in mlog will be replayed. Until the replaying finished, you need to mark writeToLog to false. When the restart is complete, the writeToLog needs to be set to true.")]),e._v(" "),a("p",[e._v("The type of metadata log is recorded by the MetadataOperationType class. mlog directly stores the corresponding string encoding.")]),e._v(" "),a("p",[e._v("sql examples and the corresponding mlog record:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("set storage group to root.turbine")]),e._v(" "),a("blockquote",[a("p",[e._v("mlog: 2,root.turbine")])]),e._v(" "),a("blockquote",[a("p",[e._v("format: 2,path")])])]),e._v(" "),a("li",[a("p",[e._v("delete storage group root.turbine")]),e._v(" "),a("blockquote",[a("p",[e._v("mlog: 1,root.turbine")])]),e._v(" "),a("blockquote",[a("p",[e._v("format: 1,path")])])]),e._v(" "),a("li",[a("p",[e._v("create timeseries root.turbine.d1.s1(temperature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)")]),e._v(" "),a("blockquote",[a("p",[e._v("mlog: 0,root.turbine.d1.s1,3,2,1,,temperature,offset")])]),e._v(" "),a("blockquote",[a("p",[e._v("format: 0,path,TSDataType,TSEncoding,CompressionType,[properties],[alias],[tag-attribute offset]")])])]),e._v(" "),a("li",[a("p",[e._v("delete timeseries root.turbine.d1.s1")]),e._v(" "),a("blockquote",[a("p",[e._v("mlog: 1,root.turbine.d1.s1")])]),e._v(" "),a("blockquote",[a("p",[e._v("format: 1,path")])])]),e._v(" "),a("li",[a("p",[e._v("set ttl to root.turbine 10")]),e._v(" "),a("blockquote",[a("p",[e._v("mlog: 10,root.turbine,10")])]),e._v(" "),a("blockquote",[a("p",[e._v("format: 10,path,ttl")])])]),e._v(" "),a("li",[a("p",[e._v("alter timeseries root.turbine.d1.s1 add tags(tag1=v1)")]),e._v(" "),a("blockquote",[a("p",[e._v("Only when root.turbine.d1.s1 does not have any tag/attribute information before, the sql will generate logs")])]),e._v(" "),a("blockquote",[a("p",[e._v("mlog: 12,root.turbine.d1.s1,10")])]),e._v(" "),a("blockquote",[a("p",[e._v("format: 10,path,[change offset]")])])]),e._v(" "),a("li",[a("p",[e._v("alter timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias")]),e._v(" "),a("blockquote",[a("p",[e._v("mlog: 13,root.turbine.d1.s1,newAlias")])]),e._v(" "),a("blockquote",[a("p",[e._v("format: 13,path,[new alias]")])])])]),e._v(" "),a("h2",{attrs:{id:"tlog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tlog"}},[e._v("#")]),e._v(" TLog")]),e._v(" "),a("ul",[a("li",[e._v("org.apache.iotdb.db.metadata.TagLogFile")])]),e._v(" "),a("p",[e._v("All timeseries tag/attribute information will be saved in the tag file, which defaults to data/system/schema/mlog.txt.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Total number of bytes of persistence for tags and attributes of each time series is L, which can be configured in the iotdb-engine.properties")])]),e._v(" "),a("li",[a("p",[e._v("persist content: "),a("code",[e._v("Map<String,String> tags, Map<String,String> attributes")]),e._v(", if the content length doesn't reach L, we need to fill it with blank.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes (attr1=v1, attr2=v2)")])]),e._v(" "),a("blockquote",[a("p",[e._v("content in tlog:")])]),e._v(" "),a("blockquote",[a("p",[e._v("tagsSize (tag1=v1, tag2=v2) attributesSize (attr1=v1, attr2=v2)")])]),e._v(" "),a("h2",{attrs:{id:"metadata-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#metadata-query"}},[e._v("#")]),e._v(" Metadata Query")]),e._v(" "),a("h3",{attrs:{id:"show-timeseries-without-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-timeseries-without-index"}},[e._v("#")]),e._v(" show timeseries without index")]),e._v(" "),a("p",[e._v("The main logic of query is in the "),a("code",[e._v("showTimeseries(ShowTimeSeriesPlan plan)")]),e._v(" function of "),a("code",[e._v("MManager")])]),e._v(" "),a("p",[e._v("First of all, we should judge whether we need to order by heat, if so, call the "),a("code",[e._v("getAllMeasurementSchemaByHeatOrder")]),e._v(" function of "),a("code",[e._v("MTree")]),e._v(". Otherwise, call the "),a("code",[e._v("getAllMeasurementSchema")]),e._v(" function.")]),e._v(" "),a("h4",{attrs:{id:"getallmeasurementschemabyheatorder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getallmeasurementschemabyheatorder"}},[e._v("#")]),e._v(" getAllMeasurementSchemaByHeatOrder")]),e._v(" "),a("p",[e._v("The heat here is represented by the "),a("code",[e._v("lastTimeStamp")]),e._v(" of each time series, so we need to fetch all the satisfied time series, and then order them by "),a("code",[e._v("lastTimeStamp")]),e._v(", cut them by "),a("code",[e._v("offset")]),e._v(" and "),a("code",[e._v("limit")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"getallmeasurementschema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getallmeasurementschema"}},[e._v("#")]),e._v(" getAllMeasurementSchema")]),e._v(" "),a("p",[e._v("In this case, we need to pass the limit(if not exists, set fetch size as limit) and offset to the function "),a("code",[e._v("findPath")]),e._v(" to reduce the memory footprint.")]),e._v(" "),a("h4",{attrs:{id:"findpath"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#findpath"}},[e._v("#")]),e._v(" findPath")]),e._v(" "),a("p",[e._v("It's a recursive function to get all the statisfied MNode in MTree from root until the number of timeseries list has reached limit or all the MTree has been traversed.")]),e._v(" "),a("h3",{attrs:{id:"show-timeseries-with-index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-timeseries-with-index"}},[e._v("#")]),e._v(" show timeseries with index")]),e._v(" "),a("p",[e._v("The filter condition here can only be tag attribute, or it will throw an exception.")]),e._v(" "),a("p",[e._v("We can fetch all the satisfied "),a("code",[e._v("MeasurementMNode")]),e._v(" through the inverted tag index in MTree fast without traversing the whole tree.")]),e._v(" "),a("p",[e._v("If the result needs to be ordered by heat, we should sort them by the order of "),a("code",[e._v("lastTimeStamp")]),e._v(" or by the natural order, and then we will trim the result by limit and offset.")]),e._v(" "),a("h3",{attrs:{id:"showtimeseries-dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#showtimeseries-dataset"}},[e._v("#")]),e._v(" ShowTimeseries Dataset")]),e._v(" "),a("p",[e._v("If there is too much metadata , one whole "),a("code",[e._v("show timeseris")]),e._v(" processing will cause OOM, so we need to add a "),a("code",[e._v("fetch size")]),e._v(" parameter.")]),e._v(" "),a("p",[e._v("While the client interacting with the server, it will get at most "),a("code",[e._v("fetch_size")]),e._v(" records once.")]),e._v(" "),a("p",[e._v("And the intermediate state will be saved in the "),a("code",[e._v("ShowTimeseriesDataSet")]),e._v(". The "),a("code",[e._v("queryId -> ShowTimeseriesDataSet")]),e._v(" key-value pair will be saved in "),a("code",[e._v("TsServieImpl")]),e._v(".")]),e._v(" "),a("p",[e._v("In "),a("code",[e._v("ShowTimeseriesDataSet")]),e._v(", we saved the "),a("code",[e._v("ShowTimeSeriesPlan")]),e._v(", current cursor "),a("code",[e._v("index")]),e._v(" and cached result list "),a("code",[e._v("List<RowRecord> result")]),e._v(".")]),e._v(" "),a("ul",[a("li",[e._v("judge whether the cursor "),a("code",[e._v("index")]),e._v("is equal to the size of "),a("code",[e._v("List<RowRecord> result")]),e._v(" "),a("ul",[a("li",[e._v("if so, call the method "),a("code",[e._v("showTimeseries")]),e._v(" in MManager to fetch result and put them into cache.\n"),a("ul",[a("li",[e._v("we need to update the offset in plan each time we call the method in MManger to fetch result, we should add it with "),a("code",[e._v("fetch size")]),e._v(".")]),e._v(" "),a("li",[e._v("if "),a("code",[e._v("hasLimit")]),e._v(" is "),a("code",[e._v("false")]),e._v(", then reset "),a("code",[e._v("index")]),e._v(" to zero.")])])]),e._v(" "),a("li",[e._v("if not\n"),a("ul",[a("li",[e._v("if "),a("code",[e._v("index < result.size()")]),e._v("，return true")]),e._v(" "),a("li",[e._v("if "),a("code",[e._v("index > result.size()")]),e._v("，return false")])])])])])])])}),[],!1,null,null,null);t.default=o.exports}}]);