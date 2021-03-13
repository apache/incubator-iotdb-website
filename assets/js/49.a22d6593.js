(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{614:function(e,t,i){"use strict";i.r(t);var o=i(69),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"recovery-process"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#recovery-process"}},[e._v("#")]),e._v(" Recovery Process")]),e._v(" "),i("p",[e._v("Recovery are performed at the granularity of the storage group, and the entry point for recovery is the recover() of the StorageGroupProcessor")]),e._v(" "),i("h2",{attrs:{id:"recovery-process-of-storage-group"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#recovery-process-of-storage-group"}},[e._v("#")]),e._v(" Recovery Process Of Storage Group")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("First get all the data files ending with .tsfile in the storage group, return TsFileResource, there are several file lists as follows")]),e._v(" "),i("ul",[i("li",[e._v("Sequence Files\n"),i("ul",[i("li",[e._v("0.10 version tsfiles（sealed/unsealed）")]),e._v(" "),i("li",[e._v("0.9 version tsfiles（sealed）")])])]),e._v(" "),i("li",[e._v("Unsequence Files\n"),i("ul",[i("li",[e._v("0.10 version tsfiles（sealed/unsealed）")]),e._v(" "),i("li",[e._v("0.9 version tsfiles（sealed）")])])])])]),e._v(" "),i("li",[i("p",[e._v("If there exists 0.9 version TsFile in the storage group, add the old version's sequence and unsequence files to "),i("code",[e._v("upgradeSeqFileList")]),e._v(" and "),i("code",[e._v("upgradeSeqFileList")]),e._v(" respectively for upgrade and query.")])]),e._v(" "),i("li",[i("p",[e._v("Group sequence and unsequence files according to partition -- "),i("code",[e._v("Map<Long, List<TsFileResource>>")])])]),e._v(" "),i("li",[i("p",[e._v("To recover the sequential files of each partition, take the sequential TsFile of each partition obtained in the previous step as a parameter, and call "),i("code",[e._v("recoverTsFiles")]),e._v(" to recover. This method will put the restored sequence TsFile into the "),i("code",[e._v("sequenceFileTreeSet")]),e._v(" in the form of TsFileResource. If the TsFile is the last one of this partition and it is not sealed, construct a "),i("code",[e._v("TsFileProcessor")]),e._v(" object for it and add it to "),i("code",[e._v("workSequenceTsFileProcessors")]),e._v(". The specific details of this method will be explained in the next section.")])]),e._v(" "),i("li",[i("p",[e._v("To recover the disordered files of each partition, take the unsequential TsFile of each partition obtained in the previous step as a parameter, and call "),i("code",[e._v("recoverTsFiles")]),e._v(" to recover. This method will put the restored unsequence TsFile into the "),i("code",[e._v("unSequenceFileList")]),e._v(" in the form of TsFileResource. if the TsFile is the last one in this partition and it is not sealed, a "),i("code",[e._v("TsFileProcessor")]),e._v(" object must be constructed for it and added to "),i("code",[e._v("workUnsequenceTsFileProcessors")]),e._v(". The specific details of this method will be explained in the next section.")])]),e._v(" "),i("li",[i("p",[e._v("Traverse the "),i("code",[e._v("sequenceFileTreeSet")]),e._v(" and "),i("code",[e._v("unSequenceFileList")]),e._v(" obtained in the previous two steps respectively, and update the version number corresponding to the partition")])]),e._v(" "),i("li",[i("p",[e._v("Check whether there is a Modification file during the merge, and call the "),i("code",[e._v("RecoverMergeTask.recoverMerge")]),e._v(" method to recover the merge")])]),e._v(" "),i("li",[i("p",[e._v("Call the "),i("code",[e._v("updateLastestFlushedTime()")]),e._v(" method to update the "),i("code",[e._v("latestTimeForEachDevice")]),e._v(", "),i("code",[e._v("partitionLatestFlushedTimeForEachDevice")]),e._v(" and "),i("code",[e._v("globalLatestFlushedTimeForEachDevice")]),e._v(" with sequential tsfile of version 0.9")]),e._v(" "),i("ul",[i("li",[i("code",[e._v("latestTimeForEachDevice")]),e._v(" records the latest timestamp under each partition that all devices have been inserted into (including unflushed and flushed)")]),e._v(" "),i("li",[i("code",[e._v("partitionLatestFlushedTimeForEachDevice")]),e._v(" records the latest timestamp of all devices under each partition that has been flushed. It is used to determine whether a newly inserted point is out of order.")]),e._v(" "),i("li",[i("code",[e._v("globalLatestFlushedTimeForEachDevice")]),e._v(" records the latest timestamp of all devices that have been flushed (a summary of the latest timestamps of each partition)")])])]),e._v(" "),i("li",[i("p",[e._v("Finally traverse "),i("code",[e._v("sequenceFileTreeSet")]),e._v(", and use the restored sequence file to update "),i("code",[e._v("latestTimeForEachDevice")]),e._v(", "),i("code",[e._v("partitionLatestFlushedTimeForEachDevice")]),e._v(" and "),i("code",[e._v("globalLatestFlushedTimeForEachDevice")]),e._v(" again")])])]),e._v(" "),i("h2",{attrs:{id:"recover-a-tsfile-seq-unseq-of-each-partiton"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#recover-a-tsfile-seq-unseq-of-each-partiton"}},[e._v("#")]),e._v(" Recover a TsFile(Seq/Unseq) of each partiton")]),e._v(" "),i("ul",[i("li",[e._v("org.apache.iotdb.db.engine.storagegroup.StorageGroupProcessor.recoverTsFiles")])]),e._v(" "),i("p",[e._v("This method is mainly responsible for traversing all TsFiles passed in and recovering them one by one.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Construct a "),i("code",[e._v("TsFileRecoverPerformer")]),e._v(" object to recover the TsFile. The recovery logic is encapsulated in the "),i("code",[e._v("recover()")]),e._v(" method of "),i("code",[e._v("TsFileRecoverPerformer")]),e._v(" (details will be explained in the next section), which will return a restored "),i("code",[e._v("RestorableTsFileIOWriter")]),e._v("Object.")]),e._v(" "),i("ul",[i("li",[e._v("If the recovery process fails, record the log and skip the tsfile")])])]),e._v(" "),i("li",[i("p",[e._v("If the TsFile file is not the last file, or the TsFile file is the last file, but has been closed or marked as closed, just set the "),i("code",[e._v("closed")]),e._v(" attribute of the "),i("code",[e._v("TsFileResource")]),e._v(" object corresponding to the TsFile in memory to "),i("code",[e._v("true")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("If the TsFile file can continue to be written, it means that this is the last TsFile of this partition, and it is unsealed, and it will continue to remain unsealed. You need to construct a "),i("code",[e._v("TsFileProcessor")]),e._v(" object for it and place it in "),i("code",[e._v("workSequenceTsFileProcessors")]),e._v(" or "),i("code",[e._v("workUnsequenceTsFileProcessors")]),e._v(".")])]),e._v(" "),i("li",[i("p",[e._v("Finally, put the corresponding "),i("code",[e._v("TsFileResource")]),e._v(" object in the memory of the restored TsFile into "),i("code",[e._v("sequenceFileTreeSet")]),e._v(" or "),i("code",[e._v("unSequenceFileList")])])])]),e._v(" "),i("h3",{attrs:{id:"details-about-recovering-a-tsfile"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#details-about-recovering-a-tsfile"}},[e._v("#")]),e._v(" Details about recovering a TsFile")]),e._v(" "),i("ul",[i("li",[e._v("org.apache.iotdb.db.writelog.recover.TsFileRecoverPerformer.recover")])]),e._v(" "),i("p",[e._v("This method is mainly responsible for the recovery of each specific TsFile file.")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("First use the tsfile to construct a "),i("code",[e._v("RestorableTsFileIOWriter")]),e._v(" object. In the construction method of "),i("code",[e._v("RestorableTsFileIOWriter")]),e._v(", the content of the tsfile will be checked and truncated if necessary")]),e._v(" "),i("ul",[i("li",[e._v("If there is nothing in this file, write "),i("code",[e._v("MAGIC_STRING")]),e._v(" and "),i("code",[e._v("VERSION_NUMBER")]),e._v(" for it, and return directly. At this time, "),i("code",[e._v("crashed")]),e._v(" is "),i("code",[e._v("false")]),e._v(", and "),i("code",[e._v("canWrite")]),e._v(" is "),i("code",[e._v("true")]),e._v(";")]),e._v(" "),i("li",[e._v("If there is content in this file, construct a "),i("code",[e._v("TsFileSequenceReader")]),e._v(" object to parse the content, call the "),i("code",[e._v("selfCheck")]),e._v(" method, truncate the incomplete content and initialize "),i("code",[e._v("truncatedSize")]),e._v(" to "),i("code",[e._v("HeaderLength")]),e._v(" "),i("ul",[i("li",[e._v("If the content of the file is complete (have a complete header of "),i("code",[e._v("MAGIC_STRING")]),e._v(" and "),i("code",[e._v("VERSION_NUMBER")]),e._v(", and a tail of "),i("code",[e._v("MAGIC_STRING")]),e._v("), return "),i("code",[e._v("TsFileCheckStatus.COMPLETE_FILE")])]),e._v(" "),i("li",[e._v("If the file length is less than "),i("code",[e._v("HeaderLength(len(MAGIC_STRING) + len(VERSION_NUMBER))")]),e._v(", or the content of the file header is not "),i("code",[e._v("MAGIC_STRING + VERSION_NUMBER")]),e._v(", return "),i("code",[e._v("INCOMPATIBLE_FILE")])]),e._v(" "),i("li",[e._v("If the file length is exactly equal to "),i("code",[e._v("HeaderLength")]),e._v(", and the file content is "),i("code",[e._v("MAGIC_STRING + VERSION_NUMBER")]),e._v(", then retunr "),i("code",[e._v("HeaderLength")])]),e._v(" "),i("li",[e._v("If the file length is greater than "),i("code",[e._v("HeaderLength")]),e._v(" and the file header is legal, but there is no "),i("code",[e._v("MAGIC_STRING")]),e._v(" at the end of the file, it means that the file is incomplete and needs to be truncated. Read from "),i("code",[e._v("VERSION_NUMBER")]),e._v(" position, read out the data in the following chunk, and recover the ChunkMetadata based on the data in the chunk. If you encounter "),i("code",[e._v("CHUNK_GROUP_FOOTER")]),e._v(", it means that the entire ChunkGroup is complete. Update "),i("code",[e._v("truncatedSize")]),e._v(" to the current position")]),e._v(" "),i("li",[e._v("Return "),i("code",[e._v("truncatedSize")])])])]),e._v(" "),i("li",[e._v("truncated the file according to the returned "),i("code",[e._v("truncatedSize")]),e._v(" "),i("ul",[i("li",[e._v("If "),i("code",[e._v("truncatedSize")]),e._v(" is equal to "),i("code",[e._v("TsFileCheckStatus.COMPLETE_FILE")]),e._v(", set "),i("code",[e._v("crashed")]),e._v(" and "),i("code",[e._v("canWrite")]),e._v(" to "),i("code",[e._v("false")]),e._v(", and close the output stream of the file")]),e._v(" "),i("li",[e._v("If "),i("code",[e._v("truncatedSize")]),e._v(" is equal to "),i("code",[e._v("TsFileCheckStatus.INCOMPATIBLE_FILE")]),e._v(", the output stream of the file is closed and an exception is thrown")]),e._v(" "),i("li",[e._v("Otherwise, set "),i("code",[e._v("crashed")]),e._v(" and "),i("code",[e._v("canWrite")]),e._v(" to "),i("code",[e._v("true")]),e._v(" and truncated the file to "),i("code",[e._v("truncatedSize")])])])])])]),e._v(" "),i("li",[i("p",[e._v("Judge whether the file is complete by the returned RestorableTsFileIOWriter")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("If the TsFile file is complete")]),e._v(" "),i("ul",[i("li",[e._v("If the resource file corresponding to the TsFile exists, the resource file is deserialized (including the minimum and maximum timestamps of each device in the tsfile), and the file version number is restored")]),e._v(" "),i("li",[e._v("If the resource file corresponding to the TsFile does not exist, regenerate the resource file and persist it to disk.")]),e._v(" "),i("li",[e._v("Return the generated "),i("code",[e._v("RestorableTsFileIOWriter")])])])]),e._v(" "),i("li",[i("p",[e._v("If TsFile is incomplete")]),e._v(" "),i("ul",[i("li",[e._v("Call "),i("code",[e._v("recoverResourceFromWriter")]),e._v(" to recover the resource information through the ChunkMetadata information in "),i("code",[e._v("RestorableTsFileIOWriter")])]),e._v(" "),i("li",[e._v("Call the "),i("code",[e._v("redoLogs")]),e._v(" method to write the data in one or more wal files corresponding to this file to a temporary Memtable and persist to this incomplete TsFile\n"),i("ul",[i("li",[e._v("For sequential files, skip WALs whose timestamp is less than or equal to the current resource")]),e._v(" "),i("li",[e._v("For unsequential files, redo all WAL, it is possible to repeatedly write to ChunkGroup of multiple devices")])])]),e._v(" "),i("li",[e._v("If the TsFile is not the last TsFile of the current partition, or there is a "),i("code",[e._v(".closing")]),e._v(" file in the TsFile, call the "),i("code",[e._v("endFile()")]),e._v(" method of "),i("code",[e._v("RestorableTsFileIOWriter")]),e._v(" to seal the file, delete the "),i("code",[e._v(".closing")]),e._v(" file and generates resource file for it.")])])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);