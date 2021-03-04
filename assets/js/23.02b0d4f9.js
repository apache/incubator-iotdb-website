(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{588:function(e,t,a){"use strict";a.r(t);var o=a(69),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"release-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-version"}},[e._v("#")]),e._v(" Release version")]),e._v(" "),a("table",[a("tr",[a("th",[e._v("Version")]),e._v(" "),a("th",{attrs:{colspan:"3"}},[e._v("IoTDB Binaries")]),e._v(" "),a("th",{attrs:{colspan:"3"}},[e._v("IoTDB Sources")]),e._v(" "),a("th",[e._v("release notes")])]),e._v(" "),a("tr",[a("td",[e._v("0.11.2")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://www.apache.org/dyn/closer.cgi/iotdb/0.11.2/apache-iotdb-0.11.2-bin.zip"}},[e._v("Release")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://downloads.apache.org/iotdb/0.11.2/apache-iotdb-0.11.2-bin.zip.sha512"}},[e._v("SHA512")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://downloads.apache.org/iotdb/0.11.2/apache-iotdb-0.11.2-bin.zip.asc"}},[e._v("ASC")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://www.apache.org/dyn/closer.cgi/iotdb/0.11.2/apache-iotdb-0.11.2-source-release.zip"}},[e._v("Sources")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://downloads.apache.org/iotdb/0.11.2/apache-iotdb-0.11.2-source-release.zip.sha512"}},[e._v("SHA512")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://downloads.apache.org/iotdb/0.11.2/apache-iotdb-0.11.2-source-release.zip.asc"}},[e._v("ASC")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://raw.githubusercontent.com/apache/iotdb/release/0.11.2/RELEASE_NOTES.md"}},[e._v("release notes")])])]),e._v(" "),a("tr",[a("td",[e._v("0.10.1")]),e._v(" "),a("td",[a("a",{attrs:{href:"https://www.apache.org/dyn/closer.cgi/iotdb/0.10.1-incubating/apache-iotdb-0.10.1-incubating-bin.zip"}},[e._v("Release")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://downloads.apache.org/iotdb/0.10.1-incubating/apache-iotdb-0.10.1-incubating-bin.zip.sha512"}},[e._v("SHA512")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://downloads.apache.org/iotdb/0.10.1-incubating/apache-iotdb-0.10.1-incubating-bin.zip.asc"}},[e._v("ASC")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://www.apache.org/dyn/closer.cgi/iotdb/0.10.1-incubating/apache-iotdb-0.10.1-incubating-source-release.zip"}},[e._v("Sources")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://downloads.apache.org/iotdb/0.10.1-incubating/apache-iotdb-0.10.1-incubating-source-release.zip.sha512"}},[e._v("SHA512")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://downloads.apache.org/iotdb/0.10.1-incubating/apache-iotdb-0.10.1-incubating-source-release.zip.asc"}},[e._v("ASC")])]),e._v(" "),a("td",[a("a",{attrs:{href:"https://raw.githubusercontent.com/apache/iotdb/release/0.10.1/RELEASE_NOTES.md"}},[e._v("release notes")])])])]),e._v(" "),a("p",[e._v("Legacy version are available here: "),a("a",{attrs:{href:"https://archive.apache.org/dist/iotdb/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://archive.apache.org/dist/iotdb/"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("strong",[a("font",{attrs:{color:"red"}},[e._v("Attention")])],1),e._v(":")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("How to upgrade a minor version (e.g., from v0.11.0 to v0.11.2)?")]),e._v(" "),a("ul",[a("li",[e._v("versions which have the same major version are compatible.")]),e._v(" "),a("li",[e._v("Just download and unzip the new version. Then modify the configuration files to keep consistent\nwith what you set in the old version.")]),e._v(" "),a("li",[e._v("stop the old vesion instance, and start the new one.")])])]),e._v(" "),a("li",[a("p",[e._v("How to upgrade from v.11.x or v0.10.x to v0.12.x?")]),e._v(" "),a("ul",[a("li",[e._v("Upgrading from v0.11 or v0.10 to v0.12 is similar as v0.9 to v0.10. We the upgrade tool will rewrite the data files.")]),e._v(" "),a("li",[e._v("Stop writing new data.")]),e._v(" "),a("li",[e._v("Call "),a("code",[e._v("flush")]),e._v(" command using sbin/start-cli.sh in original version to close all TsFiles.")]),e._v(" "),a("li",[e._v("We recommend to backup the data file (also the wal files and mlog.txt) before upgrading for rolling back.")]),e._v(" "),a("li",[e._v("Just download, unzip v0.12.x.zip, and modify conf/iotdb-engine.proeprties to let all the\ndirectories point to the folders set in previous version (or the backup folder).\nYou can also modify other settings if you want. Any other config changes in v0.11 should be moved to v0.12.")]),e._v(" "),a("li",[e._v("Stop IoTDB v0.11 or v0.10 instance, and start v0.12.x, then the IoTDB will upgrade data file format automatically. It is ok to read and write data when the upgrading process works.")]),e._v(" "),a("li",[e._v("After a log "),a("code",[e._v("All files upgraded successfully!")]),e._v(" printed, the upgrading completes.")]),e._v(" "),a("li",[a("strong",[e._v("NOTICE 1: V0.12 changes many settings in conf/iotdb-engine.properties, so do not use previous\nconfiguration file directly.")])]),e._v(" "),a("li",[a("strong",[e._v("NOTICE 2: V0.12 doesn't support upgrade from v0.9 or lower version, please upgrade to v0.10 first if needed.")])]),e._v(" "),a("li",[a("strong",[e._v("NOTICE 3: We don't recommend to delete data before the upgrading finished. The deletion will fail if you try to delete data in the storage group with upgrading files.")])])])]),e._v(" "),a("li",[a("p",[e._v("How to upgrade from v.10.x to v0.11.x?")]),e._v(" "),a("ul",[a("li",[e._v("The data format (i.e., TsFile data) of v0.10.x and v0.11 are compatible, but the WAL file is\nincompatible. So, you can follow the steps:")]),e._v(" "),a("li",[e._v("Stop writing new data.")]),e._v(" "),a("li",[e._v("Call "),a("code",[e._v("flush")]),e._v(" command using "),a("code",[e._v("sbin/start-cli.sh")]),e._v(" in v0.10.x to close all TsFiles.")]),e._v(" "),a("li",[e._v("We recommend to backup the the wal files and mlog.txt before upgrading for rolling back.")]),e._v(" "),a("li",[e._v("Just download, unzip v0.11.x.zip, and modify conf/iotdb-engine.proeprties to let all the\ndirectories point to the data folder set in v0.10.x (or the backup folder). You can also modify\nother settings if you want.")]),e._v(" "),a("li",[e._v("Stop IoTDB v0.10.x instance, and start v0.11.x, then the IoTDB will upgrade data file format\nautomatically.")]),e._v(" "),a("li",[a("strong",[e._v("NOTICE: V0.11 changes many settings in conf/iotdb-engine.properties, so do not use v0.10's\nconfiguration file directly.")])])])]),e._v(" "),a("li",[a("p",[e._v("How to upgrade from v.9.x to v0.10.x?")]),e._v(" "),a("ul",[a("li",[e._v("Upgrading from v0.9 to v0.10 is more complex than v0.8 to v0.9.")]),e._v(" "),a("li",[e._v("Stop writing new data.")]),e._v(" "),a("li",[e._v("Call "),a("code",[e._v("flush")]),e._v(" command using sbin/start-client.sh in v0.9 to close all TsFiles.")]),e._v(" "),a("li",[e._v("We recommend to backup the data file (also the wal files and mlog.txt) before upgrading for rolling back.")]),e._v(" "),a("li",[e._v("Just download, unzip v0.10.x.zip, and modify conf/iotdb-engine.proeprties to let all the\ndirectories point to the folders set in v0.9.x  (or the backup folder).\nYou can also modify other settings if you want.")]),e._v(" "),a("li",[e._v("Stop IoTDB v0.9 instance, and start v0.10.x, then the IoTDB will upgrade data file format automatically.")])])]),e._v(" "),a("li",[a("p",[e._v("How to upgrade from 0.8.x to v0.9.x?")]),e._v(" "),a("ul",[a("li",[e._v("We recommend to backup the data file (also the wal files and mlog.txt) before upgrading for rolling back.")]),e._v(" "),a("li",[e._v("Just download, unzip v0.9.x.zip, and modify conf/iotdb-engine.proeprties to let all the\ndirectories point to the folders set in v0.8.x (or the backup folder).\nYou can also modify other settings if you want.")]),e._v(" "),a("li",[e._v("Stop IoTDB v0.8 instance, and start v0.9.x, then the IoTDB will upgrade data file format automatically.")])])])]),e._v(" "),a("h1",{attrs:{id:"all-releases"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#all-releases"}},[e._v("#")]),e._v(" All releases")]),e._v(" "),a("p",[e._v("Find all releases in the "),a("a",{attrs:{href:"https://archive.apache.org/dist/iotdb/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Archive repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h1",{attrs:{id:"verifying-hashes-and-signatures"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#verifying-hashes-and-signatures"}},[e._v("#")]),e._v(" Verifying Hashes and Signatures")]),e._v(" "),a("p",[e._v("Along with our releases, we also provide sha512 hashes in *.sha512 files and cryptographic signatures in *.asc files. The Apache Software Foundation has an extensive tutorial to "),a("a",{attrs:{href:"http://www.apache.org/info/verification.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("verify hashes and signatures "),a("OutboundLink")],1),e._v("which you can follow by using any of these release-signing "),a("a",{attrs:{href:"https://downloads.apache.org/iotdb/KEYS",target:"_blank",rel:"noopener noreferrer"}},[e._v("KEYS "),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=i.exports}}]);