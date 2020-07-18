(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{638:function(t,e,a){"use strict";a.r(e);var i=a(69),l=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"writing-data-on-hdfs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-data-on-hdfs"}},[t._v("#")]),t._v(" Writing Data on HDFS")]),t._v(" "),a("h2",{attrs:{id:"shared-storage-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shared-storage-architecture"}},[t._v("#")]),t._v(" Shared Storage Architecture")]),t._v(" "),a("p",[t._v("Currently, TSFiles(including both TSFile and related data files) are supported to be stored in local file system and hadoop distributed file system(HDFS). It is very easy to config the storage file system of TSFile.")]),t._v(" "),a("h3",{attrs:{id:"system-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-architecture"}},[t._v("#")]),t._v(" System architecture")]),t._v(" "),a("p",[t._v("When you config to store TSFile on HDFS, your data files will be in distributed storage. The system architecture is as below:")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"700px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/66922722-35180400-f05a-11e9-8ff0-7dd51716e4a8.png"}}),t._v(" "),a("h3",{attrs:{id:"config-and-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-and-usage"}},[t._v("#")]),t._v(" Config and usage")]),t._v(" "),a("p",[t._v("If you want to store TSFile and related data files in HDFS, here are the steps:")]),t._v(" "),a("p",[t._v("First, download the source release from website or git clone the repository, the tag of a released version is release/x.x.x")]),t._v(" "),a("p",[t._v("Build server and Hadoop module by: "),a("code",[t._v("mvn clean package -pl server,hadoop -am -Dmaven.test.skip=true")])]),t._v(" "),a("p",[t._v("Then, copy the target jar of Hadoop module "),a("code",[t._v("hadoop-tsfile-0.10.0-jar-with-dependencies.jar")]),t._v(" into server target lib folder "),a("code",[t._v(".../server/target/iotdb-server-0.10.0/lib")]),t._v(".")]),t._v(" "),a("p",[t._v("Edit user config in "),a("code",[t._v("iotdb-engine.properties")]),t._v(". Related configurations are:")]),t._v(" "),a("ul",[a("li",[t._v("tsfile_storage_fs")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("tsfile_storage_fs")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The storage file system of Tsfile and related data files. Currently LOCAL file system and HDFS are supported.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("LOCAL")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("core_site_path")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("core_site_path")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Absolute file path of core-site.xml if Tsfile and related data files are stored in HDFS.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/etc/hadoop/conf/core-site.xml")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("hdfs_site_path")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_site_path")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Absolute file path of hdfs-site.xml if Tsfile and related data files are stored in HDFS.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/etc/hadoop/conf/hdfs-site.xml")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("hdfs_ip")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_ip")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IP of HDFS if Tsfile and related data files are stored in HDFS. "),a("strong",[t._v("If there are more than one hdfs_ip in configuration, Hadoop HA is used.")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("localhost")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("hdfs_port")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_port")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Port of HDFS if Tsfile and related data files are stored in HDFS")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("9000")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("dfs_nameservices")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_nameservices")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Nameservices of HDFS HA if using Hadoop HA")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("hdfsnamespace")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("dfs_ha_namenodes")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_ha_namenodes")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Namenodes under DFS nameservices of HDFS HA if using Hadoop HA")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("nn1,nn2")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("dfs_ha_automatic_failover_enabled")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("dfs_ha_automatic_failover_enabled")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Whether using automatic failover if using Hadoop HA")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("dfs_client_failover_proxy_provider")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("dfs_client_failover_proxy_provider")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Proxy provider if using Hadoop HA and enabling automatic failover")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("hdfs_use_kerberos")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("hdfs_use_kerberos")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Whether use kerberos to authenticate hdfs")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("kerberos_keytab_file_path")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("kerberos_keytab_file_path")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Full path of kerberos keytab file")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("/path")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("ul",[a("li",[t._v("kerberos_principal")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("kerberos_principal")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Kerberos pricipal")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("your principal")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("After restart system")])])])]),t._v(" "),a("p",[t._v("Start server, and Tsfile will be stored on HDFS.")]),t._v(" "),a("p",[t._v("If you'd like to reset storage file system to local, just edit configuration "),a("code",[t._v("tsfile_storage_fs")]),t._v(" to "),a("code",[t._v("LOCAL")]),t._v(". In this situation, if you have already had some data files on HDFS, you should either download them to local and move them to your config data file folder ("),a("code",[t._v("../server/target/iotdb-server-0.10.0/data/data")]),t._v(" by default), or restart your process and import data to IoTDB.")]),t._v(" "),a("h3",{attrs:{id:"frequent-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frequent-questions"}},[t._v("#")]),t._v(" Frequent questions")]),t._v(" "),a("ol",[a("li",[t._v("What Hadoop version does it support?")])]),t._v(" "),a("p",[t._v("A: Both Hadoop 2.x and Hadoop 3.x can be supported.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("When starting the server or trying to create timeseries, I encounter the error below:")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ERROR org.apache.iotdb.tsfile.fileSystem.fsFactory.HDFSFactory:62 - Failed to get Hadoop file system. Please check your dependency of Hadoop module.\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("A: It indicates that you forget to put Hadoop module dependency in IoTDB server. You can solve it by:")]),t._v(" "),a("ul",[a("li",[t._v("Build Hadoop module: "),a("code",[t._v("mvn clean package -pl hadoop -am -Dmaven.test.skip=true")])]),t._v(" "),a("li",[t._v("Copy the target jar of Hadoop module "),a("code",[t._v("hadoop-tsfile-0.10.0-jar-with-dependencies.jar")]),t._v(" into server target lib folder "),a("code",[t._v(".../server/target/iotdb-server-0.10.0/lib")]),t._v(".")])])])}),[],!1,null,null,null);e.default=l.exports}}]);