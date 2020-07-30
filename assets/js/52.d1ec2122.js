(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{610:function(e,t,i){"use strict";i.r(t);var s=i(69),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"sync-tool"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sync-tool"}},[e._v("#")]),e._v(" Sync Tool")]),e._v(" "),i("p",[e._v("The synchronization tool is a suite tool that periodically uploads the newly added persistent tsfile files on the local disk to the cloud and loads them into Apache IoTDB.")]),e._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),i("p",[e._v("This document mainly introduces the requirements definition and module design of synchronization tools.")]),e._v(" "),i("h3",{attrs:{id:"scenes"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#scenes"}},[e._v("#")]),e._v(" Scenes")]),e._v(" "),i("p",[e._v("The requirements of synchronization tools are mainly the following:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("In a production environment, Apache IoTDB collects data generated by data sources (industrial equipment, mobile terminals, etc.) and stores them locally.  Since the data sources may be distributed in different places, there may be multiple Apache IoTDBs responsible for collecting data at the same time.  For each IoTDB, it needs to synchronize its local data into the data center.  The data center is responsible for collecting and managing data from multiple Apache IoTDBs.")])]),e._v(" "),i("li",[i("p",[e._v("With the widespread application of the Apache IoTDB system, users need to load and apply the tsfile files generated by some Apache IoTDB instances to the data directory of another Apache IoTDB instance to achieve data synchronization according to the target business needs.")])]),e._v(" "),i("li",[i("p",[e._v("The synchronization module exists in the form of an independent process on the sending end, and is located in the same process as the Apache IoTDB on the receiving end.")])]),e._v(" "),i("li",[i("p",[e._v("Supports one sender to synchronize data with multiple receivers and one receiver can receive data from multiple senders at the same time, but you need to ensure that the data synchronized by multiple senders does not conflict (that is, there can only be one data source for one device), otherwise  Need to prompt conflict.")])])]),e._v(" "),i("h3",{attrs:{id:"goals"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#goals"}},[e._v("#")]),e._v(" Goals")]),e._v(" "),i("p",[e._v("The synchronization tool can be used to transfer and load data files between two Apache IoTDB instances.  When network instability or downtime occurs, ensure that files can be completely and correctly transferred to the data center.")]),e._v(" "),i("h2",{attrs:{id:"directory-structure"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure"}},[e._v("#")]),e._v(" Directory Structure")]),e._v(" "),i("p",[e._v("For the convenience of explanation, suppose the application scenario is that the node "),i("code",[e._v("192.168.130.15")]),e._v(" synchronizes data with the node"),i("code",[e._v("192.168.130.16: 5555")]),e._v(", and the node "),i("code",[e._v("192.168.130.15")]),e._v(" receives data synchronized from the node"),i("code",[e._v("192.168.130.14")]),e._v(".  Since the node "),i("code",[e._v("192.168.130.15")]),e._v(" serves as both a sending end and a receiving end, the following describes the directory structure with the node"),i("code",[e._v("192.168.130.15")]),e._v(".")]),e._v(" "),i("h3",{attrs:{id:"directory-structure-design"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure-design"}},[e._v("#")]),e._v(" Directory structure design")]),e._v(" "),i("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/74145347-849dc380-4c39-11ea-9ef2-e10a3fe2074d.png"}}),e._v(" "),i("h3",{attrs:{id:"directory-structure-description"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#directory-structure-description"}},[e._v("#")]),e._v(" Directory structure description")]),e._v(" "),i("p",[e._v("The sync-sender folder contains temporary files, status logs, etc. during the data synchronization when this node is used as the sender.")]),e._v(" "),i("p",[e._v("The sync-receiver folder contains temporary files, status logs, and so on during which the node receives data and loads it as a receiver.")]),e._v(" "),i("p",[e._v("The schema / sync folder holds the synchronization information that needs to be persisted.")]),e._v(" "),i("h4",{attrs:{id:"sender"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sender"}},[e._v("#")]),e._v(" Sender")]),e._v(" "),i("p",[i("code",[e._v("data / sync-sender")]),e._v(" is the sender's folder. The folder name in this directory represents the IP and port of the receiver. In this example, there is a receiver"),i("code",[e._v("192.168.130.16: 5555")]),e._v(". Each folder contains the following  Several files:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("last_local_files.txt\nRecords a list of all local tsfile files that have been synchronized after the synchronization task ends, and is updated after each synchronization task ends.")])]),e._v(" "),i("li",[i("p",[e._v("snapshot\nDuring data synchronization, this folder contains hard links to all tsfile files to be synchronized.")])]),e._v(" "),i("li",[i("p",[e._v("sync.log\nRecord the task progress log of the synchronization module for system downtime recovery. The structure of this file will be explained in detail later.")])])]),e._v(" "),i("h4",{attrs:{id:"receiving-end"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#receiving-end"}},[e._v("#")]),e._v(" Receiving end")]),e._v(" "),i("p",[i("code",[e._v("sync-receiver")]),e._v(" is the folder of the receiving end. The folder name in this directory represents the IP and UUID of the sending end, and it indicates the data files and file loading logs received from the sending end. In this example, there is a sending end.  "),i("code",[e._v("192.168.130.14")]),e._v(", and its UUID is"),i("code",[e._v("a45b6e63eb434aad891264b5c08d448e")]),e._v(".  Each folder contains the following files:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("load.log\nThis file records the task progress log loaded by the tsfile file, and is used when the system is recovered from downtime.")])]),e._v(" "),i("li",[i("p",[e._v("data\nThis folder contains the tsfile file that has been received from the sender.")])])]),e._v(" "),i("h4",{attrs:{id:"others"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#others"}},[e._v("#")]),e._v(" Others")]),e._v(" "),i("p",[e._v("The "),i("code",[e._v("schema / sync")]),e._v(" folder contains the following information:")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("As a sender, the file lock sync.lock of the sender instance is intended to ensure that the same sender can only start one sender instance to the same receiver, that is, there is only one process that synchronizes data to the receiver.  The directory 192.168.130.16_5555 / sync_lock in the figure indicates the instance lock synchronized to the receiving end 192.168.130.16_5555.  Each time it is started, it will first check whether the file is locked. If the lock indicates that there is already a sender that synchronizes data to the receiver, then stop this instance.")])]),e._v(" "),i("li",[i("p",[e._v("When acting as the sender, the unique identifier of the sender UUID "),i("code",[e._v("uuid.txt")]),e._v("\nEach sender has a unique identifier for the receiver to distinguish between different senders")])]),e._v(" "),i("li",[i("p",[e._v("As the sender, the synchronization progress of each receiver's schema "),i("code",[e._v("sync_schema_pos")])]),e._v(" "),i("p",[e._v("Because the schema log "),i("code",[e._v("mlog.txt")]),e._v(" data is appended, which records the change process of all meta-information, the current position is recorded after each synchronization of the schema, and direct incremental synchronization can reduce the repeated schema transmission after the next synchronization.")])]),e._v(" "),i("li",[i("p",[e._v("As the receiver, all information "),i("code",[e._v("device_owner.log")]),e._v(" of each device in the receiver\nIn the application of the synchronization tool, one receiver can receive data from multiple senders at the same time, but no conflict can occur, otherwise the receiver will not be able to guarantee the correctness of the data.  Therefore, it is necessary to record which sender is synchronizing each device, following the first-come-first-served principle.")])])]),e._v(" "),i("p",[e._v("The reason for placing this information separately under the schmea folder is that an Apache IoTDB instance can have multiple data file directories, that is, there can be multiple data directories, but there is only one schema folder, and this information is shared by a sender instance  The information in the data folder indicates the synchronization status in the file directory and belongs to the subtask information (each data file directory is a subtask).")]),e._v(" "),i("h2",{attrs:{id:"sync-tool-sender"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sync-tool-sender"}},[e._v("#")]),e._v(" Sync tool sender")]),e._v(" "),i("h3",{attrs:{id:"statement-of-needs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#statement-of-needs"}},[e._v("#")]),e._v(" Statement of needs")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("At regular intervals, the latest data collected by the sender is returned to the receiver.  At the same time, for the update and deletion of historical data, this part of information is synchronized to the receiving end.")])]),e._v(" "),i("li",[i("p",[e._v("The synchronization data must be complete. If the data file is incomplete or damaged due to factors such as network instability and machine failure during the transmission, it needs to be repaired during the next transmission.")])])]),e._v(" "),i("h3",{attrs:{id:"module-design"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#module-design"}},[e._v("#")]),e._v(" Module design")]),e._v(" "),i("h4",{attrs:{id:"file-management-module"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-management-module"}},[e._v("#")]),e._v(" File management module")]),e._v(" "),i("h5",{attrs:{id:"package"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#package"}},[e._v("#")]),e._v(" package")]),e._v(" "),i("p",[e._v("org.apache.iotdb.db.sync.sender.manage")]),e._v(" "),i("h5",{attrs:{id:"file-selection"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-selection"}},[e._v("#")]),e._v(" File selection")]),e._v(" "),i("p",[e._v("The function of file selection is to select the list of closed tsfile files in the current Apache IoTDB instance (the corresponding "),i("code",[e._v(".resource")]),e._v(" file, without the"),i("code",[e._v(".modification")]),e._v(" file and the "),i("code",[e._v(".merge")]),e._v(" file) and after the last synchronization task ends  There are two parts in the recorded tsfile file list: the deleted tsfile file list and the newly added tsfile file list.  And hard link all newly added files to prevent operations such as file deletion caused by system operation during synchronization.")]),e._v(" "),i("h5",{attrs:{id:"file-cleanup"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-cleanup"}},[e._v("#")]),e._v(" File cleanup")]),e._v(" "),i("p",[e._v("When receiving the notification of the end of the task of the file transfer module, execute the following command:")]),e._v(" "),i("ul",[i("li",[e._v("Load the list of file names in the last_local_files.txt file into memory to form a set, and parse log.sync line by line to delete and add the set")]),e._v(" "),i("li",[e._v("Write the list of file names in memory to the "),i("code",[e._v("current_local_files.txt")]),e._v(" file")]),e._v(" "),i("li",[e._v("Delete last_local_files.txt file")]),e._v(" "),i("li",[e._v("-Renamed "),i("code",[e._v("current_local_files.txt")]),e._v(" to"),i("code",[e._v("last_local_files.txt")])]),e._v(" "),i("li",[e._v("Delete the sequence folder and sync.log file")])]),e._v(" "),i("h4",{attrs:{id:"file-transfer-module"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-transfer-module"}},[e._v("#")]),e._v(" File transfer module")]),e._v(" "),i("h5",{attrs:{id:"package-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#package-2"}},[e._v("#")]),e._v(" package")]),e._v(" "),i("p",[e._v("org.apache.iotdb.db.sync.sender.transfer")]),e._v(" "),i("h5",{attrs:{id:"synchronization-schema"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#synchronization-schema"}},[e._v("#")]),e._v(" Synchronization schema")]),e._v(" "),i("p",[e._v("Before synchronizing the data file, first synchronize the newly added schmea information and update "),i("code",[e._v("sync_schema_pos")]),e._v(".")]),e._v(" "),i("h5",{attrs:{id:"sync-data-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sync-data-file"}},[e._v("#")]),e._v(" Sync data file")]),e._v(" "),i("p",[e._v("For each file path, call the file management module to obtain a list of deleted files and a list of newly added files, and then perform the following process:")]),e._v(" "),i("ol",[i("li",[e._v("Start synchronization task, record "),i("code",[e._v("sync start")]),e._v(" in"),i("code",[e._v("sync.log")])]),e._v(" "),i("li",[e._v("Start syncing the list of deleted files. Record "),i("code",[e._v("sync deleted file names start")]),e._v(" in"),i("code",[e._v("sync.log")])]),e._v(" "),i("li",[e._v("Notify the receiving end of the list of file names to be deleted synchronously")]),e._v(" "),i("li",[e._v("Delete each file name in the list\n4.1. Transfer file name to receiver (example "),i("code",[e._v("1581324718762-101-1.tsfile")]),e._v(")\n4.2. Successful transfer, record "),i("code",[e._v("1581324718762-101-1.tsfile")]),e._v(" in"),i("code",[e._v("sync.log")])]),e._v(" "),i("li",[e._v("Start to synchronize the list of newly added tsfile files. Record the sync deleted file names end and sync tsfile start in sync.log.")]),e._v(" "),i("li",[e._v("Notify receiver to start syncing files")]),e._v(" "),i("li",[e._v("For each tsfile in the new list:\n7.1. Transfer the file to the receiver in blocks (example "),i("code",[e._v("1581324718762-101-1.tsfile")]),e._v(")\n7.2. If the file transfer fails, try multiple times. If it tries more than a certain number of times (configurable by the user, the default is 5), abandon the file transfer; if the transfer is successful, record "),i("code",[e._v("1581324718762-101-1 'in")]),e._v(" sync.log"),i("code",[e._v(". tsfile")])]),e._v(" "),i("li",[e._v("Notify the receiving end of the synchronization task, and record "),i("code",[e._v("sync tsfile end")]),e._v(" and"),i("code",[e._v("sync end")]),e._v(" in "),i("code",[e._v("sync.log")])]),e._v(" "),i("li",[e._v("Invoke file management module to clean up files")]),e._v(" "),i("li",[e._v("End synchronization task")])]),e._v(" "),i("h4",{attrs:{id:"recovery-module"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#recovery-module"}},[e._v("#")]),e._v(" Recovery module")]),e._v(" "),i("h5",{attrs:{id:"package-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#package-3"}},[e._v("#")]),e._v(" package")]),e._v(" "),i("p",[e._v("org.apache.iotdb.db.sync.sender.recover")]),e._v(" "),i("h5",{attrs:{id:"process"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#process"}},[e._v("#")]),e._v(" Process")]),e._v(" "),i("p",[e._v("Each time the sending end of the synchronization tool starts a synchronization task, first check whether there is a corresponding receiving end folder under the sending end folder. If not, it means that no synchronization task has been performed with the receiving end and skip the recovery module; otherwise,  The files in the folder perform the recovery algorithm:")]),e._v(" "),i("ol",[i("li",[e._v("If "),i("code",[e._v("current_local_files.txt")]),e._v(" exists, skip to step 2; if not, skip to step 3")]),e._v(" "),i("li",[e._v("If "),i("code",[e._v("last_local_files.txt")]),e._v(" exists, delete the"),i("code",[e._v("current_local_files.txt")]),e._v(" file and skip to step 3; if not, skip to step 7")]),e._v(" "),i("li",[e._v("If "),i("code",[e._v("sync.log")]),e._v(" exists, go to step 4; if not, go to step 8")]),e._v(" "),i("li",[e._v("Load the list of file names in the last_local_files.txt file into memory to form a set, and parse the line by line sync.log to delete and add the set")]),e._v(" "),i("li",[e._v("Write the list of file names in memory to the "),i("code",[e._v("current_local_files.txt")]),e._v(" file")]),e._v(" "),i("li",[e._v("Delete "),i("code",[e._v("last_local_files.txt")]),e._v(" file")]),e._v(" "),i("li",[e._v("Renamed "),i("code",[e._v("current_local_files.txt")]),e._v(" to"),i("code",[e._v("last_local_files.txt")])]),e._v(" "),i("li",[e._v("Delete the sequence folder and the "),i("code",[e._v("sync.log")]),e._v(" file")]),e._v(" "),i("li",[e._v("Algorithm ends")])]),e._v(" "),i("h2",{attrs:{id:"sync-tool-receiver"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#sync-tool-receiver"}},[e._v("#")]),e._v(" Sync tool receiver")]),e._v(" "),i("h3",{attrs:{id:"statement-of-needs-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#statement-of-needs-2"}},[e._v("#")]),e._v(" Statement of needs")]),e._v(" "),i("ul",[i("li",[i("p",[e._v("Because the receiving end needs to receive files from multiple sending ends at the same time, it is necessary to distinguish files from different sending ends and manage these files in a unified manner.")])]),e._v(" "),i("li",[i("p",[e._v("The receiving end receives the file from the transmitting end and verifies the file name, the file data, and the MD5 value of the file.  After the file is received, the file is stored locally at the receiving end, and the received tsfile file is checked for the MD5 value and the end of the file is checked. If the check is passed correctly, the file is retransmitted.")])]),e._v(" "),i("li",[i("p",[e._v("For the data file sent by the sender (which may include operations such as updating the old data and inserting new data), this part of data needs to be merged into the local file of the receiver.")])])]),e._v(" "),i("h3",{attrs:{id:"module-design-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#module-design-2"}},[e._v("#")]),e._v(" Module design")]),e._v(" "),i("h4",{attrs:{id:"file-transfer-module-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-transfer-module-2"}},[e._v("#")]),e._v(" File transfer module")]),e._v(" "),i("h5",{attrs:{id:"package-4"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#package-4"}},[e._v("#")]),e._v(" package")]),e._v(" "),i("p",[e._v("org.apache.iotdb.db.sync.receiver.transfer")]),e._v(" "),i("h5",{attrs:{id:"process-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#process-2"}},[e._v("#")]),e._v(" Process")]),e._v(" "),i("p",[e._v("The file transfer module is responsible for receiving the file name and file transmitted from the sender. The process is as follows:")]),e._v(" "),i("ol",[i("li",[e._v("Received the synchronization start instruction from the sender, and checked whether there is a sync.log file. If it exists, it means that the data of the last synchronization has not been loaded, and the synchronization task is rejected; otherwise, sync.start is recorded in the sync.log.")]),e._v(" "),i("li",[e._v("Received the sender's instruction to start synchronous deletion of the file name list, and recorded sync deleted file names start in sync.log")]),e._v(" "),i("li",[e._v("Receive the delete file name transmitted by the sender in turn\n3.1. Received the file name transmitted by the sender (example "),i("code",[e._v("1581324718762-101-1.tsfile")]),e._v(")\n3.2. Successfully received, record "),i("code",[e._v("1581324718762-101-1.tsfile")]),e._v(" in"),i("code",[e._v("sync.log")]),e._v(" and submit it to the data load module for processing")]),e._v(" "),i("li",[e._v("Received the instruction to start the synchronous transmission of the file, and recorded "),i("code",[e._v("sync deleted file names end")]),e._v(" and"),i("code",[e._v("sync tsfile start")]),e._v(" in "),i("code",[e._v("sync.log")])]),e._v(" "),i("li",[e._v("Receive the tsfile files transmitted by the sender in turn\n5.1. Receive the file transmitted by the sender in blocks (example "),i("code",[e._v("1581324718762-101-2.tsfile")]),e._v(")\n5.2. Verify the file. If the verification fails, delete the file and notify the sender of the failure; otherwise, record 158513214787662-101-2.tsfile in sync.log and submit it to the data load module for processing")]),e._v(" "),i("li",[e._v("Received the sync task end command from the sender, and recorded "),i("code",[e._v("sync tsfile end")]),e._v(" and"),i("code",[e._v("sync end")]),e._v(" in "),i("code",[e._v("sync.log")])]),e._v(" "),i("li",[e._v("Create empty file sync.end")])]),e._v(" "),i("h4",{attrs:{id:"file-loading-module"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-loading-module"}},[e._v("#")]),e._v(" File loading module")]),e._v(" "),i("h5",{attrs:{id:"package-5"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#package-5"}},[e._v("#")]),e._v(" package")]),e._v(" "),i("p",[e._v("org.apache.iotdb.db.sync.receiver.load")]),e._v(" "),i("h5",{attrs:{id:"file-deletion"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#file-deletion"}},[e._v("#")]),e._v(" File deletion")]),e._v(" "),i("p",[e._v("For files that need to be deleted (example "),i("code",[e._v("1581324718762-101-1.tsfile")]),e._v("), search for"),i("code",[e._v("sequence tsfile list")]),e._v(" in memory to see if the file exists, and if so, delete the file from the list maintained in memory and  Files on disk are deleted.  After successful execution, record "),i("code",[e._v("delete 1581324718762-101-1.tsfile")]),e._v(" in"),i("code",[e._v("load.log")]),e._v(".")]),e._v(" "),i("h5",{attrs:{id:"load-new-file"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#load-new-file"}},[e._v("#")]),e._v(" Load new file")]),e._v(" "),i("p",[e._v("For the file that needs to be loaded (example 15813214718762-101-1.tsfile), first use device_owner.log to check whether the file meets the application scenario, that is, whether the same device data is transmitted with other senders causing conflicts.  , Then reject the loading and send an error message to the sender; otherwise, update the device_owner.log information.")]),e._v(" "),i("p",[e._v("After meeting the requirements of the application scenario, insert the file into the appropriate position in the sequence tsfile list and move the file to the data / sequence directory.  After successful execution, record "),i("code",[e._v("load 1581324718762-101-1.tsfile")]),e._v(" in"),i("code",[e._v("load.log")]),e._v(".  After each file is loaded, check whether the sync.end file is included in the synchronized directory. If the file is included and the sequence folder is empty, delete the sync.log file, and then delete the load.log and sync.end files.")]),e._v(" "),i("h4",{attrs:{id:"recovery-module-2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#recovery-module-2"}},[e._v("#")]),e._v(" Recovery module")]),e._v(" "),i("h5",{attrs:{id:"package-6"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#package-6"}},[e._v("#")]),e._v(" package")]),e._v(" "),i("p",[e._v("org.apache.iotdb.db.sync.receiver.recover")]),e._v(" "),i("h5",{attrs:{id:"process-3"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#process-3"}},[e._v("#")]),e._v(" Process")]),e._v(" "),i("p",[e._v("When the ApacheIoTDB system is started, each sub-folder under the sync folder is checked in turn, and each sub-file represents the synchronization task of the sender represented by the folder name.  Perform a recovery algorithm based on the files in each subfolder:")]),e._v(" "),i("ol",[i("li",[e._v("If the "),i("code",[e._v("sync.log")]),e._v(" file does not exist, go to step 4; if it does, go to step 2")]),e._v(" "),i("li",[e._v("Scan the sync.log log line by line, and perform the corresponding delete file operation and load file operation. If the operation has been recorded in the "),i("code",[e._v("load.log")]),e._v(" file, it indicates that the operation has been completed and the operation is skipped.  Go to step 3")]),e._v(" "),i("li",[e._v("Delete file "),i("code",[e._v("sync.log")])]),e._v(" "),i("li",[e._v("Delete file "),i("code",[e._v("load.log")])]),e._v(" "),i("li",[e._v("Delete file "),i("code",[e._v("sync.end")])]),e._v(" "),i("li",[e._v("Algorithm ends")])]),e._v(" "),i("p",[e._v("At the beginning of each synchronization task, the receiving end checks and restores the corresponding subfolders.")])])}),[],!1,null,null,null);t.default=a.exports}}]);