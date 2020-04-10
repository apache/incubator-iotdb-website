(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{871:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website's "),s("router-link",{attrs:{to:"./../1-Overview/1-What is IoTDB.html"}},[e._v("User Guide")]),e._v(".")],1),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("To use IoTDB, you need to have:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Here in the Quick Start, we give a brief introduction to install IoTDB. For further information, please refer to Chapter 3 of the User Guide.")]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("You can download the binary file from:\n"),s("router-link",{attrs:{to:"/Download/"}},[e._v("Here")])],1),e._v(" "),e._m(6),e._v(" "),s("p",[e._v('configuration files are under "conf" folder')]),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("For more, see "),s("router-link",{attrs:{to:"./../3-Server/1-Download.html"}},[e._v("Chapter3: Server")]),e._v(" in detail.")],1),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("You can go through the following step to test the installation, if there is no error after execution, the installation is completed.")]),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("Users can start IoTDB by the start-server script under the sbin folder.")]),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("IoTDB offers different ways to interact with server, here we introduce basic steps of using Cli tool to insrert and query data.")]),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("Here is the command for starting the Cli:")]),e._v(" "),e._m(14),s("p",[e._v("The command line client is interactive so if everything is ready you should see the welcome logo and statements:")]),e._v(" "),e._m(15),e._m(16),e._v(" "),s("p",[e._v("Now, let us introduce the way of creating timeseries, inserting data and querying data.")]),e._v(" "),s("p",[e._v("The data in IoTDB is organized as timeseries, in each timeseries there are some data-time pairs, and every timeseries is owned by a storage group. Before defining a timeseries, we should difine a storage group using SET STORAGE GROUP, and here is an example:")]),e._v(" "),e._m(17),s("p",[e._v("We can also use SHOW STORAGE GROUP to check created storage group:")]),e._v(" "),e._m(18),s("p",[e._v("After the storage group is set, we can use CREATE TIMESERIES to create new timeseries. When we create a timeseries, we should define its data type and the encoding scheme. We create two timeseries as follow:")]),e._v(" "),e._m(19),s("p",[e._v('Inorder to query the specific timeseries, we can use SHOW TIMESERIES.represent the path of the timeseries. Its default value is null, which means quering all the timeseries in the system(the same as using "SHOW TIMESERIES root"). Here are the examples:')]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._m(22),e._v(" "),e._m(23),s("p",[e._v("Insert timeseries data is the basic operation of IoTDB, you can use ‘INSERT’ command to finish this. Before inserting you should assign the timestamp and the suffix path name:")]),e._v(" "),e._m(24),s("p",[e._v("The data we’ve just inserted displays like this:")]),e._v(" "),e._m(25),s("p",[e._v("We can also query several timeseries data at once like this:")]),e._v(" "),e._m(26),s("p",[e._v("The commands to exit the Cli is:")]),e._v(" "),e._m(27),s("p",[e._v("For more on what commands are supported by IoTDB SQL, see "),s("router-link",{attrs:{to:"./../5-Operation Manual/4-SQL Reference.html"}},[e._v("SQL Reference")]),e._v(".")],1),e._v(" "),e._m(28),e._v(" "),s("p",[e._v("The server can be stopped with ctrl-C or the following script:")]),e._v(" "),e._m(29),e._m(30),e._v(" "),s("p",[e._v("Under the root path of incubator-iotdb:")]),e._v(" "),e._m(31),s("p",[e._v('After build, the IoTDB client will be at the folder "client/target/iotdb-client-{project.version}".')])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"quick-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[this._v("#")]),this._v(" Quick Start")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Java >= 1.8 (Please make sure the environment path has been set)")]),this._v(" "),t("li",[this._v('Set the max open files num as 65535 to avoid "too many open files" problem.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Installation from source code. If you need to modify the code yourself, you can use this method.")]),this._v(" "),t("li",[this._v("Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.(Comming Soon...)")]),this._v(" "),t("li",[this._v("Using Docker：The path to the dockerfile is https://github.com/apache/incubator-iotdb/blob/master/docker/Dockerfile")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"download"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[this._v("#")]),this._v(" Download")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configurations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[this._v("#")]),this._v(" Configurations")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("environment config module ("),s("code",[e._v("iotdb-env.bat")]),e._v(", "),s("code",[e._v("iotdb-env.sh")]),e._v("),")]),e._v(" "),s("li",[e._v("system config module ("),s("code",[e._v("tsfile-format.properties")]),e._v(", "),s("code",[e._v("iotdb-engine.properties")]),e._v(")")]),e._v(" "),s("li",[e._v("log config module ("),s("code",[e._v("logback.xml")]),e._v(").")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[this._v("#")]),this._v(" Start")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"start-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-iotdb"}},[this._v("#")]),this._v(" Start IoTDB")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# Unix/OS X\n> sbin/start-server.sh\n\n# Windows\n> sbin\\start-server.bat\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br"),t("span",{staticClass:"line-number"},[this._v("5")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"use-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-iotdb"}},[this._v("#")]),this._v(" Use IoTDB")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"use-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-cli"}},[this._v("#")]),this._v(" Use Cli")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After installing IoTDB, there is a default user 'root', its default password is also 'root'. Users can use this\ndefault user to login Cli to use IoTDB. The startup script of Cli is the start-client script in the folder sbin. When executing the script, user should assign"),t("br"),this._v('\nIP, PORT, USER_NAME and PASSWORD. The default parameters are "-h 127.0.0.1 -p 6667 -u root -pw -root".')])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# Unix/OS X\n> sbin/start-client.sh -h 127.0.0.1 -p 6667 -u root -pw root\n\n# Windows\n> sbin\\start-client.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br"),t("span",{staticClass:"line-number"},[this._v("5")]),t("br")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"basic-commands-for-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-commands-for-iotdb"}},[this._v("#")]),this._v(" Basic commands for IoTDB")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> SET STORAGE GROUP TO root.ln\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SHOW STORAGE GROUP\n+-----------------------------------+\n|                      Storage Group|\n+-----------------------------------+\n|                            root.ln|\n+-----------------------------------+\nstorage group number = 1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN\nIoTDB> CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("Querying all timeseries in the system:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SHOW TIMESERIES\n+-------------------------------+---------------+--------+--------+\n|                     Timeseries|  Storage Group|DataType|Encoding|\n+-------------------------------+---------------+--------+--------+\n|       root.ln.wf01.wt01.status|        root.ln| BOOLEAN|   PLAIN|\n|  root.ln.wf01.wt01.temperature|        root.ln|   FLOAT|     RLE|\n+-------------------------------+---------------+--------+--------+\nTotal timeseries number = 2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",{attrs:{start:"2"}},[t("li",[this._v("Querying a specific timeseries(root.ln.wf01.wt01.status):")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SHOW TIMESERIES root.ln.wf01.wt01.status\n+------------------------------+--------------+--------+--------+\n|                    Timeseries| Storage Group|DataType|Encoding|\n+------------------------------+--------------+--------+--------+\n|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|\n+------------------------------+--------------+--------+--------+\nTotal timeseries number = 1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);\nIoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SELECT status FROM root.ln.wf01.wt01\n+-----------------------+------------------------+\n|                   Time|root.ln.wf01.wt01.status|\n+-----------------------+------------------------+\n|1970-01-01T08:00:00.100|                    true|\n|1970-01-01T08:00:00.200|                   false|\n+-----------------------+------------------------+\nTotal line number = 2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SELECT * FROM root.ln.wf01.wt01\n+-----------------------+--------------------------+-----------------------------+\n|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------+--------------------------+-----------------------------+\n|1970-01-01T08:00:00.100|                      true|                         null|\n|1970-01-01T08:00:00.200|                     false|                        20.71|\n+-----------------------+--------------------------+-----------------------------+\nTotal line number = 2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("IoTDB> quit\nor\nIoTDB> exit\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"stop-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop-iotdb"}},[this._v("#")]),this._v(" Stop IoTDB")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("# Unix/OS X\n> sbin/stop-server.sh\n\n# Windows\n> sbin\\stop-server.bat\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br"),t("span",{staticClass:"line-number"},[this._v("5")]),t("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"only-build-client"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#only-build-client"}},[this._v("#")]),this._v(" Only build client")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("> mvn clean package -pl client -am -DskipTests\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br")])])}],!1,null,null,null);t.default=n.exports}}]);