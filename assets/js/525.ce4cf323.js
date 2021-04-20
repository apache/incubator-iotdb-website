(window.webpackJsonp=window.webpackJsonp||[]).push([[525],{1091:function(t,e,s){"use strict";s.r(e);var r=s(69),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("集群模式目前是测试版！请谨慎在生产环境中使用。")])]),t._v(" "),s("h2",{attrs:{id:"_3节点3副本伪分布式搭建示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3节点3副本伪分布式搭建示例"}},[t._v("#")]),t._v(" 3节点3副本伪分布式搭建示例")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mvn clean package -DskipTests\nchmod -R 777 ./cluster/target/\nnohup ./cluster/target/iotdb-cluster-0.12.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node1conf/ >/dev/null 2>&1 &\nnohup ./cluster/target/iotdb-cluster-0.12.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node2conf/ >/dev/null 2>&1 &\nnohup ./cluster/target/iotdb-cluster-0.12.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node3conf/ >/dev/null 2>&1 &\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"_3节点3副本分布式搭建示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3节点3副本分布式搭建示例"}},[t._v("#")]),t._v(" 3节点3副本分布式搭建示例")]),t._v(" "),s("p",[t._v("假设我们需要在三个物理节点上部署分布式 IoTDB，这三个节点分别为 A, B 和 C，其公网 ip 分别为 A_public_ip，B_public_ip 和 C_public_ip，私网 ip 分别为 A_private_ip，B_private_ip 和 C_private_ip。\n注：如果没有公网 ip 或者私网 ip 则两者设置成一致即可, 只需要保证客户端能够访问到服务端即可。")]),t._v(" "),s("p",[t._v("以下为操作步骤：")]),t._v(" "),s("ol",[s("li",[t._v("保证三个节点的 6667, 9003, 9004, 40010, 40011 和 31999 端口是开放的。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("mvn clean package -pl cluster -am -DskipTests")]),t._v(" 编译分布式模块。")]),t._v(" "),s("li",[t._v("将打出来的包(iotdb-cluster-0.12.0-SNAPSHOT)传到所有的服务器上。")]),t._v(" "),s("li",[t._v('配置所有节点 conf/iotdb-cluster.properties 配置文件中的 seed_nodes 为 "A_private_ip:9003,B_private_ip:9003,C_private_ip:9003"')]),t._v(" "),s("li",[t._v("配置所有节点 conf/iotdb-cluster.properties 配置文件中的 internal_ip 为各自节点的 private_ip。")]),t._v(" "),s("li",[t._v("配置所有节点 conf/iotdb-engine.properties 配置文件中的 rpc_address 为各自节点的 public_ip。")]),t._v(" "),s("li",[t._v("在 3 个节点上分别运行 sh sbin/start-node.sh 即可(后台运行也可)。")])])])}),[],!1,null,null,null);e.default=i.exports}}]);