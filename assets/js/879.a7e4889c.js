(window.webpackJsonp=window.webpackJsonp||[]).push([[879],{1437:function(s,a,n){"use strict";n.r(a);var e=n(69),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"给发布版本投票"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#给发布版本投票"}},[s._v("#")]),s._v(" 给发布版本投票")]),s._v(" "),n("p",[s._v("For non-Chinese users, please read https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release")]),s._v(" "),n("h2",{attrs:{id:"下载投票的-版本-rc-下的所有内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载投票的-版本-rc-下的所有内容"}},[s._v("#")]),s._v(" 下载投票的 版本/rc 下的所有内容")]),s._v(" "),n("p",[s._v("https://dist.apache.org/repos/dist/dev/incubator/iotdb/")]),s._v(" "),n("h2",{attrs:{id:"导入发布经理的公钥"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#导入发布经理的公钥"}},[s._v("#")]),s._v(" 导入发布经理的公钥")]),s._v(" "),n("p",[s._v("https://dist.apache.org/repos/dist/dev/incubator/iotdb/KEYS")]),s._v(" "),n("p",[s._v("最下边有 Release Manager (RM) 的公钥")]),s._v(" "),n("p",[s._v("安装 gpg2")]),s._v(" "),n("h3",{attrs:{id:"第一种方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第一种方法"}},[s._v("#")]),s._v(" 第一种方法")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("公钥的开头是这种\npub   rsa4096 2019-10-15 [SC]\n      10F3B3F8A1201B79AA43F2E00FC7F131CAA00430\n      \n或这种\n\npub   rsa4096/28662AC6 2019-12-23 [SC]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("下载公钥")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("gpg2 --receive-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 (或 28662AC6)\n\n或 (指定 keyserver) \ngpg2 --keyserver p80.pool.sks-keyservers.net --recv-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 (或 28662AC6)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"第二种方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#第二种方法"}},[s._v("#")]),s._v(" 第二种方法")]),s._v(" "),n("p",[s._v("把下边这段复制到一个文本文件中，起个名叫 "),n("code",[s._v("key.asc")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2\n...\n-----END PGP PUBLIC KEY BLOCK-----\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("导入 RM 的公钥到自己电脑")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("gpg2 --import key.asc\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"验证源码发布版"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证源码发布版"}},[s._v("#")]),s._v(" 验证源码发布版")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("（孵化阶段）验证是否名字中有 "),n("code",[s._v("incubating")])])]),s._v(" "),n("li",[n("p",[s._v("验证是否有 DISCLAIMER、NOTICE、LICENSE，以及内容是否正确。")])]),s._v(" "),n("li",[n("p",[s._v("验证 README、RELEASE_NOTES")])]),s._v(" "),n("li",[n("p",[s._v("验证 header")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mvn -B apache-rat:check\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("ul",[n("li",[s._v("验证签名和哈希值")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("gpg2 --verify apache-iotdb-0.9.0-incubating-source-release.zip.asc apache-iotdb-0.9.0-incubating-source-release.zip\n\n出现 Good Singnature \n\nshasum -a512 apache-iotdb-0.9.0-incubating-source-release.zip\n\n和对应的 .sha512 对比，一样就可以。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("验证编译")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mvnw.sh install\n\n应该最后全 SUCCESS\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("h2",{attrs:{id:"验证二进制发布版"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#验证二进制发布版"}},[s._v("#")]),s._v(" 验证二进制发布版")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("（孵化阶段）验证是否名字中有 "),n("code",[s._v("incubating")])])]),s._v(" "),n("li",[n("p",[s._v("验证是否有 DISCLAIMER、NOTICE、LICENSE，以及内容是否正确。")])]),s._v(" "),n("li",[n("p",[s._v("验证 README、RELEASE_NOTES")])]),s._v(" "),n("li",[n("p",[s._v("验证签名和哈希值")])])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("gpg2 --verify apache-iotdb-0.9.0-incubating-bin.zip.asc apache-iotdb-0.9.0-incubating-bin.zip\n\n出现 Good Singnature \n\nshasum -a512 apache-iotdb-0.9.0-incubating-bin.zip\n\n和对应的 .sha512 对比，一样就可以。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ul",[n("li",[s._v("验证是否能启动以及示例语句是否正确执行")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("nohup ./sbin/start-server.sh >/dev/null 2>&1 &\n\n./sbin/start-cli.sh\n\nSET STORAGE GROUP TO root.turbine;\nCREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;\ninsert into root.turbine.d1(timestamp,s0) values(1,1);\ninsert into root.turbine.d1(timestamp,s0) values(2,2);\ninsert into root.turbine.d1(timestamp,s0) values(3,3);\nselect * from root;\n\n打印如下内容：\n+-----------------------------------+------------------+\n|                               Time|root.turbine.d1.s0|\n+-----------------------------------+------------------+\n|      1970-01-01T08:00:00.001+08:00|               1.0|\n|      1970-01-01T08:00:00.002+08:00|               2.0|\n|      1970-01-01T08:00:00.003+08:00|               3.0|\n+-----------------------------------+------------------+\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])]),n("h2",{attrs:{id:"示例邮件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#示例邮件"}},[s._v("#")]),s._v(" 示例邮件")]),s._v(" "),n("p",[s._v("验证通过之后可以发邮件了")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Hi,\n\n+1 (PMC could binding)\n\nThe source release:\nIncubating in name [ok]\nHas DISCLAIMER [ok]\nLICENSE and NOTICE [ok]\nsignatures and hashes [ok]\nAll files have ASF header [ok]\ncould compile from source: ./mvnw.sh clean install [ok]\n\nThe binary distribution:\nIncubating in name [ok]\nHas DISCLAIMER [ok]\nLICENSE and NOTICE [ok]\nsignatures and hashes [ok]\nCould run with the following statements [ok]\n\nSET STORAGE GROUP TO root.turbine;\nCREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;\ninsert into root.turbine.d1(timestamp,s0) values(1,1);\ninsert into root.turbine.d1(timestamp,s0) values(2,2);\ninsert into root.turbine.d1(timestamp,s0) values(3,3);\nselect * from root;\n\nThanks,\nxxx\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br")])]),n("h2",{attrs:{id:"小工具"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#小工具"}},[s._v("#")]),s._v(" 小工具")]),s._v(" "),n("ul",[n("li",[s._v("打印出包含某些字符的行（只看最上边的输出就可以，下边的文件不需要看）")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('find . -type f -exec grep -i "copyright" {} \\; -print | sort -u\nfind **/src -type f -exec grep -i "copyright" {} \\; -print | sort -u\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);