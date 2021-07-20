(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{968:function(s,t,e){"use strict";e.r(t);var a=e(70),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"前提条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[s._v("#")]),s._v(" 前提条件")]),s._v(" "),e("p",[s._v("如果您在使用Windows系统，请安装MinGW，WSL或者git bash。")]),s._v(" "),e("h2",{attrs:{id:"_3节点3副本分布式搭建示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3节点3副本分布式搭建示例"}},[s._v("#")]),s._v(" 3节点3副本分布式搭建示例")]),s._v(" "),e("p",[s._v("假设我们需要在三个物理节点上部署分布式 IoTDB，这三个节点分别为 A, B 和 C，其公网 ip 分别为 A_public_ip，B_public_ip 和 C_public_ip，私网 ip 分别为 A_private_ip，B_private_ip 和 C_private_ip。\n注：如果没有公网 ip 或者私网 ip 则两者设置成一致即可, 只需要保证客户端能够访问到服务端即可。")]),s._v(" "),e("p",[s._v("以下为操作步骤：")]),s._v(" "),e("ol",[e("li",[s._v("使用 "),e("code",[s._v("mvn clean package -pl cluster -am -DskipTests")]),s._v(" 编译分布式模块或直接到 "),e("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网"),e("OutboundLink")],1),s._v(" 下载最新版本。")]),s._v(" "),e("li",[s._v("保证三个节点的 6567, 6667, 9003, 9004, 40010, 40011 和 31999 端口是开放的。")]),s._v(" "),e("li",[s._v("将包上传到所有的服务器上。")]),s._v(" "),e("li",[s._v('配置所有节点 conf/iotdb-cluster.properties 配置文件中的 seed_nodes 为 "A_private_ip:9003,B_private_ip:9003,C_private_ip:9003"')]),s._v(" "),e("li",[s._v("配置所有节点 conf/iotdb-cluster.properties 配置文件中的 internal_ip 为各自节点的 private_ip。")]),s._v(" "),e("li",[s._v("配置所有节点 conf/iotdb-cluster.properties 配置文件中的 default_replica_num 为 3。")]),s._v(" "),e("li",[s._v("配置所有节点 conf/iotdb-engine.properties 配置文件中的 rpc_address 为各自节点的 public_ip。")]),s._v(" "),e("li",[s._v("在 3 个节点上分别运行 sh sbin/start-node.sh 即可(后台运行也可)。")])]),s._v(" "),e("h2",{attrs:{id:"_1节点1副本分布式搭建示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1节点1副本分布式搭建示例"}},[s._v("#")]),s._v(" 1节点1副本分布式搭建示例")]),s._v(" "),e("h3",{attrs:{id:"源码编译"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码编译"}},[s._v("#")]),s._v(" 源码编译：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mvn clean package -DskipTests\nchmod -R 777 ./cluster/target/\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh >/dev/null 2>&1 &\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"使用官网发布版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用官网发布版本"}},[s._v("#")]),s._v(" 使用官网发布版本：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("curl -O https://mirrors.bfsu.edu.cn/apache/iotdb/0.12.0/apache-iotdb-0.12.0-cluster-bin.zip\nunzip apache-iotdb-0.12.0-cluster-bin.zip\ncd apache-iotdb-0.12.0-cluster-bin\nsed -i -e 's/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=127.0.0.1:9003/g' conf/iotdb-cluster.properties\nsed -i -e 's/^default_replica_num=3$/default_replica_num=1/g' conf/iotdb-cluster.properties\nnohup ./sbin/start-node.sh >/dev/null 2>&1 &\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"单机部署3节点1副本示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单机部署3节点1副本示例"}},[s._v("#")]),s._v(" 单机部署3节点1副本示例")]),s._v(" "),e("h3",{attrs:{id:"源码编译-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#源码编译-2"}},[s._v("#")]),s._v(" 源码编译：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mvn clean package -DskipTests\nchmod -R 777 ./cluster/target/\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node1conf/ >/dev/null 2>&1 &\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node2conf/ >/dev/null 2>&1 &\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node3conf/ >/dev/null 2>&1 &\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"使用官网发布版本-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用官网发布版本-2"}},[s._v("#")]),s._v(" 使用官网发布版本：")]),s._v(" "),e("p",[s._v("可以参考以上示例，不过在单机启动多个实例时需要处理好端口和文件目录的冲突。")])])}),[],!1,null,null,null);t.default=r.exports}}]);