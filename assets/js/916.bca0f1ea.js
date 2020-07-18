(window.webpackJsonp=window.webpackJsonp||[]).push([[916],{1477:function(t,a,r){"use strict";r.r(a);var s=r(69),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"其他语言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#其他语言"}},[t._v("#")]),t._v(" 其他语言")]),t._v(" "),r("h2",{attrs:{id:"python-api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#python-api"}},[t._v("#")]),t._v(" Python API")]),t._v(" "),r("h3",{attrs:{id:"_1-介绍"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),r("p",[t._v("这是一个如何使用thrift rpc接口通过python连接到IoTDB的示例。 在Linux或Windows上情况会有所不同，我们将介绍如何分别在两个系统上进行操作。")]),t._v(" "),r("h3",{attrs:{id:"_2-先决条件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-先决条件"}},[t._v("#")]),t._v(" 2. 先决条件")]),t._v(" "),r("p",[t._v("首选python3.7或更高版本。")]),t._v(" "),r("p",[t._v("您必须安装Thrift（0.11.0或更高版本）才能将我们的Thrift文件编译为python代码。")]),t._v(" "),r("p",[t._v("下面是官方安装教程：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("http://thrift.apache.org/docs/install/\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h3",{attrs:{id:"_3-如何获取python库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-如何获取python库"}},[t._v("#")]),t._v(" 3. 如何获取Python库")]),t._v(" "),r("h4",{attrs:{id:"方案1-pip-install"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方案1-pip-install"}},[t._v("#")]),t._v(" 方案1: pip install")]),t._v(" "),r("p",[t._v("您可以在https://pypi.org/project/apache-iotdb/上找到Apache IoTDB Python客户端API软件包。")]),t._v(" "),r("p",[t._v("下载命令为：")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("pip install apache-iotdb\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("h4",{attrs:{id:"方案2-使用我们提供的编译脚本"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方案2-使用我们提供的编译脚本"}},[t._v("#")]),t._v(" 方案2: 使用我们提供的编译脚本")]),t._v(" "),r("p",[t._v("如果你在路径中添加了Thrift可执行文件，则可以运行"),r("code",[t._v("client-py/compile.sh")]),t._v("或\n"),r("code",[t._v("client-py \\ compile.bat")]),t._v("，或者你必须对其进行修改以将变量"),r("code",[t._v("THRIFT_EXE")]),t._v("设置为指向你的可执行文件。 这将在"),r("code",[t._v("target")]),t._v("文件夹下生成节俭源，你可以将其添加到你的"),r("code",[t._v("PYTHONPATH")]),t._v("，以便你可以在代码中使用该库。 请注意，脚本通过相对路径找到节俭的源文件，因此，如果将脚本移动到其他位置，它们将不再有效。")]),t._v(" "),r("h4",{attrs:{id:"方案3：thrift的基本用法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方案3：thrift的基本用法"}},[t._v("#")]),t._v(" 方案3：thrift的基本用法")]),t._v(" "),r("p",[t._v("或者，如果您了解thrift的基本用法，则只能在以下位置下载Thrift源文件：\n"),r("code",[t._v("service-rpc\\src\\main\\thrift\\rpc.thrift")]),t._v("，并且只需使用"),r("code",[t._v("thrift -gen py -out ./target/iotdb rpc.thrift")]),t._v("生成python库。")]),t._v(" "),r("h3",{attrs:{id:"_4-示例代码"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-示例代码"}},[t._v("#")]),t._v(" 4. 示例代码")]),t._v(" "),r("p",[t._v("我们在"),r("code",[t._v("client-py / src/ client_example.py")]),t._v("中提供了一个示例，说明如何使用Thrift库连接到IoTDB，请先仔细阅读，然后再编写自己的代码。")])])}),[],!1,null,null,null);a.default=e.exports}}]);