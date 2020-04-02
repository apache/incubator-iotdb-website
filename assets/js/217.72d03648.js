(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{537:function(e,t,r){"use strict";r.r(t);var s=r(1),a=Object(s.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"sync-tool"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sync-tool"}},[e._v("#")]),e._v(" Sync Tool")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#application-scenario"}},[e._v("Application Scenario")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#configuration"}},[e._v("Configuration")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#sync-receiver"}},[e._v("Sync Receiver")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#sync-sender"}},[e._v("Sync Sender")])])])]),e._v(" "),r("li",[r("a",{attrs:{href:"#usage"}},[e._v("Usage")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#start-sync-receiver"}},[e._v("Start Sync Receiver")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#stop-sync-receiver"}},[e._v("Stop Sync Receiver")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#start-sync-sender"}},[e._v("Start Sync Sender")])]),e._v(" "),r("li",[r("a",{attrs:{href:"#stop-sync-sender"}},[e._v("Stop Sync Sender")])])])])]),e._v(" "),r("h1",{attrs:{id:"introduction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),r("p",[e._v("The Sync Tool is an IoTDB suite tool that periodically uploads persistent tsfiles from the sender disk to the receiver and loads them.")]),e._v(" "),r("p",[e._v("On the sender side of the sync, the sync module is a separate process, independent of the IoTDB process. It can be started and closed through a separate script (see Sections "),r("code",[e._v("Usage")]),e._v(" for details). The frequency cycle of the sync can be set by the user.")]),e._v(" "),r("p",[e._v("On the receiver side of the sync, the sync module is embedded in the engine of IoTDB and is in the same process with IoTDB. The receiver module listens for a separate port, which can be set by the user (see Section "),r("code",[e._v("Configuration")]),e._v(" for details). Before using it, it needs to set up a whitelist at the sync receiver, which is expressed as a network segment. The receiver only accepts the data transferred from the sender located in the whitelist segment, as detailed in Section "),r("code",[e._v("Configuration")]),e._v(".")]),e._v(" "),r("p",[e._v("The sync tool has a many-to-one sender-receiver mode - that is, one sync receiver can receive data from multiple sync senders simultaneously while one sync sender can only send data to one sync receiver.")]),e._v(" "),r("blockquote",[r("p",[e._v("Note: Before using the sync tool, the client and server need to be configured separately. The configuration is detailed in Sections Configuration.")])]),e._v(" "),r("h1",{attrs:{id:"application-scenario"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#application-scenario"}},[e._v("#")]),e._v(" Application Scenario")]),e._v(" "),r("p",[e._v("In the case of a factory application, there are usually multiple sub-factories and multiple general(main) factories. Each sub-factory uses an IoTDB instance to collect data, and then synchronize the data to the general factory for backup or analysis. A general factory can receive data from multiple sub-factories and a sub-factory can also synchronize data to multiple general factories. In this scenario, each IoTDB instance manages different devices.\n​"),r("br"),e._v("\nIn the sync module, each sub-factory is a sender, a general factory is a receiver, and senders periodically synchronizes the data to receivers. In the above application scenario, the data of one device can only be collected by one sender, so there is no device overlap between the data synchronized by multiple senders. Otherwise, the application scenario of the sync module is not satisfied.")]),e._v(" "),r("p",[e._v("When there is an abnormal scenario, namely, two or more senders synchronize the data of the same device (whose storage group is set as root.sg) to the same receiver, the root.sg data of the sender containing the device data received later by the receiver will be rejected. Example: the engine 1 synchronizes the storage groups root.sg1 and root.sg2 to the receiver, and the engine 2 synchronizes the storage groups root.sg2 and root.sg3 to the receiver. All of them include the time series root.sg2.d0.s0.\nIf the receiver receives the data of root.sg2.d0.s0 of the sender 1 first, the receiver will reject the data of root.sg2 of the sender 2.")]),e._v(" "),r("h1",{attrs:{id:"configuration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),r("h2",{attrs:{id:"sync-receiver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sync-receiver"}},[e._v("#")]),e._v(" Sync Receiver")]),e._v(" "),r("p",[e._v("The parameter configuration of the sync receiver is located in the configuration file "),r("code",[e._v("iotdb-engine.properties")]),e._v(" of IoTDB, and its directory is "),r("code",[e._v("$IOTDB_HOME/conf/iotdb-engine.properties")]),e._v(". In this configuration file, there are four parameters related to the sync receiver. The configuration instructions are as follows:")]),e._v(" "),r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[e._v("parameter: is_sync_enable")])]),e._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[e._v("Description")]),e._v(" "),r("td",[e._v("Sync function switch, which is configured as true to indicate that the receiver is allowed to receive the data from the sender and load it. When set to false, it means that the receiver is not allowed to receive the data from any sender. ")])]),e._v(" "),r("tr",[r("td",[e._v("Type")]),e._v(" "),r("td",[e._v("Boolean")])]),e._v(" "),r("tr",[r("td",[e._v("Default")]),e._v(" "),r("td",[e._v("false")])]),e._v(" "),r("tr",[r("td",[e._v("Modalities for Entry into Force after Modification")]),e._v(" "),r("td",[e._v("Restart receiver")])])]),e._v(" "),r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[e._v("parameter: IP_white_list")])]),e._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[e._v("Description")]),e._v(" "),r("td",[e._v("Set up a white list of sender IP addresses, which is expressed in the form of network segments and separated by commas between multiple network segments. When the sender transfers data to the receiver, only when the IP address of the sender is within the network segment set by the whitelist can the receiver allow the sync operation. If the whitelist is empty, the receiver does not allow any sender to sync data. The default receiver accepts all IP sync requests.")])]),e._v(" "),r("tr",[r("td",[e._v("Type")]),e._v(" "),r("td",[e._v("String")])]),e._v(" "),r("tr",[r("td",[e._v("Default")]),e._v(" "),r("td",[e._v("0.0.0.0/0")])]),e._v(" "),r("tr",[r("td",[e._v("Modalities for Entry into Force after Modification")]),e._v(" "),r("td",[e._v("Restart receiver")])])]),e._v(" "),r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[e._v("parameter: sync_server_port")])]),e._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[e._v("Description")]),e._v(" "),r("td",[e._v("Sync receiver port to listen. Make sure that the port is not a system reserved port and is not occupied. This paramter is valid only when the parameter is_sync_enable is set to TRUE.")])]),e._v(" "),r("tr",[r("td",[e._v("Type")]),e._v(" "),r("td",[e._v("Short Int : [0,65535]")])]),e._v(" "),r("tr",[r("td",[e._v("Default")]),e._v(" "),r("td",[e._v("5555")])]),e._v(" "),r("tr",[r("td",[e._v("Modalities for Entry into Force after Modification")]),e._v(" "),r("td",[e._v("Restart receiver")])])]),e._v(" "),r("h2",{attrs:{id:"sync-sender"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sync-sender"}},[e._v("#")]),e._v(" Sync Sender")]),e._v(" "),r("p",[e._v("The parameters of the sync sender are configured in a separate configuration file iotdb-sync-client.properties with the installation directory of "),r("code",[e._v("$IOTDB_HOME/conf/iotdb-sync-client.properties")]),e._v(". In this configuration file, there are five parameters related to the sync sender. The configuration instructions are as follows:\n"),r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[e._v("parameter: server_ip")])]),e._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[e._v("Description")]),e._v(" "),r("td",[e._v("IP address of sync receiver.")])]),e._v(" "),r("tr",[r("td",[e._v("Type")]),e._v(" "),r("td",[e._v("String")])]),e._v(" "),r("tr",[r("td",[e._v("Default")]),e._v(" "),r("td",[e._v("127.0.0.1")])]),e._v(" "),r("tr",[r("td",[e._v("Modalities for Entry into Force after Modification")]),e._v(" "),r("td",[e._v("Restart client")])])])]),e._v(" "),r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[e._v("parameter: server_port")])]),e._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[e._v("Description")]),e._v(" "),r("td",[e._v("Listening port of sync receiver, it is necessary to ensure that the port is consistent with the configuration of the listening port set in receiver.")])]),e._v(" "),r("tr",[r("td",[e._v("Type")]),e._v(" "),r("td",[e._v("Short Int : [0,65535]")])]),e._v(" "),r("tr",[r("td",[e._v("Default")]),e._v(" "),r("td",[e._v("5555")])]),e._v(" "),r("tr",[r("td",[e._v("Modalities for Entry into Force after Modification")]),e._v(" "),r("td",[e._v("Restart client")])])]),e._v(" "),r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[e._v("parameter: sync_period_in_second")])]),e._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[e._v("Description")]),e._v(" "),r("td",[e._v("The period time of sync process, the time unit is second.")])]),e._v(" "),r("tr",[r("td",[e._v("Type")]),e._v(" "),r("td",[e._v("Int : [0,2147483647]")])]),e._v(" "),r("tr",[r("td",[e._v("Default")]),e._v(" "),r("td",[e._v("600")])]),e._v(" "),r("tr",[r("td",[e._v("Modalities for Entry into Force after Modification")]),e._v(" "),r("td",[e._v("Restart client")])])]),e._v(" "),r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[e._v("parameter: iotdb_schema_directory")])]),e._v(" "),r("tr",[r("td",{attrs:{width:"30%"}},[e._v("Description")]),e._v(" "),r("td",[e._v("The absolute path of the sender's IoTDB schema file, such as $IOTDB_HOME/data/system/schema/mlog.txt (if the user does not manually set the path of schema metadata, the path is the default path of IoTDB engine). This parameter is not valid by default and is set manually when the user needs it.")])]),e._v(" "),r("tr",[r("td",[e._v("Type")]),e._v(" "),r("td",[e._v("String")])]),e._v(" "),r("tr",[r("td",[e._v("Modalities for Entry into Force after Modification")]),e._v(" "),r("td",[e._v("Restart client")])])]),e._v(" "),r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[e._v("parameter: sync_storage_groups")])]),e._v(" "),r("tr",[r("td",{attrs:{width:"20%"}},[e._v("Description")]),e._v(" "),r("td",[e._v("This parameter represents storage groups that participate in the synchronization task, which distinguishes each storage group by comma. If the list is empty, it means that all storage groups participate in synchronization. By default, it is an empty list.")])]),e._v(" "),r("tr",[r("td",[e._v("Type")]),e._v(" "),r("td",[e._v("String")])]),e._v(" "),r("tr",[r("td",[e._v("Example")]),e._v(" "),r("td",[e._v("root.sg1, root.sg2")])]),e._v(" "),r("tr",[r("td",[e._v("Modalities for Entry into Force after Modification")]),e._v(" "),r("td",[e._v("Restart client")])])]),e._v(" "),r("table",[r("tr",[r("td",{attrs:{colspan:"2"}},[e._v("parameter: max_number_of_sync_file_retry")])]),e._v(" "),r("tr",[r("td",{attrs:{width:"20%"}},[e._v("Description")]),e._v(" "),r("td",[e._v("The maximum number of retry when syncing a file to receiver fails.")])]),e._v(" "),r("tr",[r("td",[e._v("Type")]),e._v(" "),r("td",[e._v("Int : [0,2147483647]")])]),e._v(" "),r("tr",[r("td",[e._v("Example")]),e._v(" "),r("td",[e._v("5")])]),e._v(" "),r("tr",[r("td",[e._v("Modalities for Entry into Force after Modification")]),e._v(" "),r("td",[e._v("Restart client")])])]),e._v(" "),r("h1",{attrs:{id:"usage"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),r("h2",{attrs:{id:"start-sync-receiver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#start-sync-receiver"}},[e._v("#")]),e._v(" Start Sync Receiver")]),e._v(" "),r("ol",[r("li",[e._v("Set up parameters of sync receiver. For example:\n"),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/64172919-a32cb100-ce88-11e9-821c-33369bff6d34.png"}})]),e._v(" "),r("li",[e._v("Start IoTDB engine, and the sync receiver will start at the same time, and the LOG log will start with the sentence "),r("code",[e._v("IoTDB: start SYNC ServerService successfully")]),e._v(" indicating the successful start of the return receiver.\n"),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/59494513-df6ef780-8ebf-11e9-83e1-ee8ae64b76d0.png"}})])]),e._v(" "),r("h2",{attrs:{id:"stop-sync-receiver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stop-sync-receiver"}},[e._v("#")]),e._v(" Stop Sync Receiver")]),e._v(" "),r("p",[e._v("Stop IoTDB and the sync receiver will be closed at the same time.")]),e._v(" "),r("h2",{attrs:{id:"start-sync-sender"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#start-sync-sender"}},[e._v("#")]),e._v(" Start Sync Sender")]),e._v(" "),r("ol",[r("li",[e._v("Set up parameters of sync sender. For example:\n"),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/64172668-15e95c80-ce88-11e9-9700-dff7daf06bb7.png"}})]),e._v(" "),r("li",[e._v("Start sync sender\nUsers can use the scripts under the "),r("code",[e._v("$IOTDB_HOME/bin")]),e._v(" folder to start the sync sender.\nFor Linux and Mac OS X users:")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  Shell >$IOTDB_HOME/bin/start-sync-client.sh\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("For Windows users:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  Shell >$IOTDB_HOME\\bin\\start-sync-client.bat\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/26211279/59494951-dc283b80-8ec0-11e9-9575-5d8578c08ceb.png"}}),e._v(" "),r("h2",{attrs:{id:"stop-sync-sender"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#stop-sync-sender"}},[e._v("#")]),e._v(" Stop Sync Sender")]),e._v(" "),r("p",[e._v("Users can use the scripts under the "),r("code",[e._v("$IOTDB_HOME/bin")]),e._v(" folder to stop the sync sender.\nFor Linux and Mac OS X users:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  Shell >$IOTDB_HOME/bin/stop-sync-client.sh\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("For Windows users:")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  Shell >$IOTDB_HOME\\bin\\stop-sync-client.bat\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])])])}],!1,null,null,null);t.default=a.exports}}]);