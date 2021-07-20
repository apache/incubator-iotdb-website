(window.webpackJsonp=window.webpackJsonp||[]).push([[402],{972:function(t,e,v){"use strict";v.r(e);var _=v(70),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"数据模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据模式"}},[t._v("#")]),t._v(" 数据模式")]),t._v(" "),v("h2",{attrs:{id:"数据模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据模型"}},[t._v("#")]),t._v(" 数据模型")]),t._v(" "),v("p",[t._v("我们以风电场物联网场景为例，说明如何在 IoTDB 中创建一个正确的数据模型。")]),t._v(" "),v("p",[t._v("根据企业组织结构和设备实体层次结构，我们将其物联网数据模型表示为如下图所示的属性层级组织结构，即电力集团层-风电场层-实体层-物理量层。其中 ROOT 为根节点，物理量层的每一个节点为叶子节点。IoTDB 采用树形结构定义数据模式，以从ROOT 节点到叶子节点的路径来命名一个时间序列，层次间以“.”连接。例如，下图最左侧路径对应的时间序列名称为"),v("code",[t._v("ROOT.ln.wf01.wt01.status")]),t._v("。")]),t._v(" "),v("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/123542457-5f511d00-d77c-11eb-8006-562d83069baa.png"}}),t._v(" "),v("p",[t._v("IoTDB模型结构涉及如下基本概念：")]),t._v(" "),v("ul",[v("li",[t._v("物理量（Measurement，也称工况、字段 field）")])]),t._v(" "),v("p",[v("strong",[t._v("一元或多元物理量")]),t._v("，是在实际场景中检测装置所记录的测量信息，且可以按一定规律变换成为电信号或其他所需形式的信息输出并发送给 IoTDB。在 IoTDB 当中，存储的所有数据及路径，都是以物理量为单位进行组织。")]),t._v(" "),v("ul",[v("li",[t._v("物理分量（SubMeasurement、分量）")])]),t._v(" "),v("p",[t._v("在多元物理量中，包括多个分量。如 GPS 是一个多元物理量，包含3个分量：经度、维度、海拔。多元物理量通常被同时采集，共享时间列。")]),t._v(" "),v("p",[t._v("一元物理量则将分量名和物理量名字重合。如温度是一个一元物理量。")]),t._v(" "),v("ul",[v("li",[t._v("实体（Entity，也称设备，device）")])]),t._v(" "),v("p",[v("strong",[t._v("一个物理实体")]),t._v("，是在实际场景中拥有物理量的设备或装置。在IoTDB当中，所有的物理量都有其对应的归属实体。")]),t._v(" "),v("ul",[v("li",[t._v("存储组（Storage group）")])]),t._v(" "),v("p",[v("strong",[t._v("一组物理实体")]),t._v("，用户可以将任意前缀路径设置成存储组。如有4条时间序列"),v("code",[t._v("root.ln.wf01.wt01.status")]),t._v(", "),v("code",[t._v("root.ln.wf01.wt01.temperature")]),t._v(", "),v("code",[t._v("root.ln.wf02.wt02.hardware")]),t._v(", "),v("code",[t._v("root.ln.wf02.wt02.status")]),t._v("，路径"),v("code",[t._v("root.ln")]),t._v("下的两个实体 "),v("code",[t._v("wt01")]),t._v(", "),v("code",[t._v("wt02")]),t._v("可能属于同一个业主，或者同一个制造商，这时候就可以将前缀路径"),v("code",[t._v("root.ln")]),t._v("指定为一个存储组。未来"),v("code",[t._v("root.ln")]),t._v("下增加了新的实体，也将属于该存储组。")]),t._v(" "),v("p",[t._v("一个存储组中的所有实体的数据会存储在同一个文件夹下，不同存储组的实体数据会存储在磁盘的不同文件夹下，从而实现物理隔离。")]),t._v(" "),v("blockquote",[v("p",[t._v("注意1：不允许将一个完整路径(如上例的"),v("code",[t._v("root.ln.wf01.wt01.status")]),t._v(")设置成存储组。")]),t._v(" "),v("p",[t._v("注意2：一个时间序列其前缀必须属于某个存储组。在创建时间序列之前，用户必须设定该序列属于哪个存储组（Storage Group）。只有设置了存储组的时间序列才可以被持久化在磁盘上。")])]),t._v(" "),v("p",[t._v("一个前缀路径一旦被设定成存储组后就不可以再更改这个存储组的设定。")]),t._v(" "),v("p",[t._v("一个存储组设定后，其对应的前缀路径的祖先层级与孩子及后裔层级也不允许再设置存储组（如，"),v("code",[t._v("root.ln")]),t._v("设置存储组后，root 层级与"),v("code",[t._v("root.ln.wf01")]),t._v("不允许被设置为存储组）。")]),t._v(" "),v("p",[t._v("存储组节点名只支持中英文字符、数字、下划线和中划线的组合。例如"),v("code",[t._v("root.存储组_1-组1")]),t._v(" 。")]),t._v(" "),v("ul",[v("li",[t._v("数据点（Data point）")])]),t._v(" "),v("p",[v("strong",[t._v("一个“时间-值”对")]),t._v("。")]),t._v(" "),v("ul",[v("li",[t._v("时间序列（一个实体的某个物理量对应一个时间序列，Timeseries，也称测点meter、时间线timeline，实时数据库中常被称作标签tag、参数parameter）")])]),t._v(" "),v("p",[v("strong",[t._v("一个物理实体的某个物理量在时间轴上的记录")]),t._v("，是数据点的序列。")]),t._v(" "),v("p",[t._v("例如，ln电力集团、wf01风电场的实体 wt01有名为 status的物理量，则它的时间序列可以表示为："),v("code",[t._v("root.ln.wf01.wt01.status")]),t._v("。")]),t._v(" "),v("ul",[v("li",[t._v("一元时间序列（single-variable timeseries 或timeseries，v0.1 起支持）")])]),t._v(" "),v("p",[t._v("一个实体的一个一元物理量对应一个一元时间序列。实体+物理量=时间序列")]),t._v(" "),v("ul",[v("li",[t._v("多元时间序列（Multi-variable timeseries 或 Aligned timeseries，v0.13 起支持）")])]),t._v(" "),v("p",[t._v("一个实体的一个多元物理量对应一个多元时间序列。这些时间序列称为"),v("strong",[t._v("多元时间序列")]),t._v("，也叫"),v("strong",[t._v("对齐时间序列")]),t._v("。")]),t._v(" "),v("p",[t._v("多元时间序列需要被同时创建、同时插入值，删除时也必须同时删除。不过在查询的时候，可以对于每一个分量单独查询。")]),t._v(" "),v("p",[t._v("通过使用对齐的时间序列，在插入数据时，一组对齐序列的时间戳列在内存和磁盘中仅需存储一次，而不是每个时间序列存储一次：")]),t._v(" "),v("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/123542458-62e4a400-d77c-11eb-8c45-ca516f1b7eba.png"}}),t._v(" "),v("p",[t._v("在后续数据定义语言、数据操作语言和 Java 原生接口章节，将对涉及到对齐时间序列的各种操作进行逐一介绍。")]),t._v(" "),v("ul",[v("li",[t._v("物理量模板（Measurement template，v0.13 起支持）")])]),t._v(" "),v("p",[t._v("实际应用中有许多实体所采集的物理量相同，即具有相同的工况名称和类型，可以声明一个"),v("strong",[t._v("物理量模板")]),t._v("来定义可采集的物理量集合。将物理量模版挂在树形数据模式的任意节点上，表示该节点下的所有实体具有相同的物理量集合。")]),t._v(" "),v("p",[t._v("目前每一个路径节点仅允许挂载一个物理量模板，实体将使用其自身或最近祖先的物理量模板作为有效模板。")]),t._v(" "),v("ul",[v("li",[t._v("路径")])]),t._v(" "),v("p",[t._v("在IoTDB中，路径是指符合以下约束的表达式：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("path: LayerName (DOT LayerName)+\nLayerName: Identifier | STAR\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("p",[t._v("其中STAR为“*”，DOT为“.”。")]),t._v(" "),v("p",[t._v("我们称一个路径中在两个“.”中间的部分叫做一个层级，则"),v("code",[t._v("root.a.b.c")]),t._v("为一个层级为4的路径。")]),t._v(" "),v("p",[t._v("值得说明的是，在路径中，root为一个保留字符，它只允许出现在下文提到的时间序列的开头，若其他层级出现root，则无法解析，提示报错。")]),t._v(" "),v("p",[t._v("在路径中，不允许使用单引号。如果你想在LayerName中使用"),v("code",[t._v(".")]),t._v("等特殊字符，请使用双引号。例如，"),v("code",[t._v('root.sg."d.1"."s.1"')]),t._v("。双引号内支持使用转义符进行双引号的嵌套，如 "),v("code",[t._v('root.sg.d1."s.\\"t\\"1"')]),t._v("。")]),t._v(" "),v("p",[t._v("除了storage group 存储组，其他的LayerName中不用加双引号就支持的字符如下：")]),t._v(" "),v("ul",[v("li",[t._v('中文字符"\\u2E80"到"\\u9FFF"')]),t._v(" "),v("li",[t._v('"+"，"&"，"%"，"$"，"#"，"@"，"/"，"_"，"-"，":"')]),t._v(" "),v("li",[t._v('"A"到"Z"，"a"到"z"，"0"到"9"')])]),t._v(" "),v("p",[t._v("其中'-' 和 ':' 不能放置在第一位，不能使用单个 '+'。")]),t._v(" "),v("blockquote",[v("p",[t._v("注意: storage group中的LayerName只支持数字，字母，汉字，下划线和中划线。另外，如果在Windows系统上部署，存储组层级名称是大小写不敏感的。例如同时创建"),v("code",[t._v("root.ln")]),t._v(" 和 "),v("code",[t._v("root.LN")]),t._v(" 是不被允许的。")])]),t._v(" "),v("ul",[v("li",[t._v("前缀路径")])]),t._v(" "),v("p",[t._v("前缀路径是指一个时间序列的前缀所在的路径，一个前缀路径包含以该路径为前缀的所有时间序列。例如当前我们有"),v("code",[t._v("root.vehicle.device1.sensor1")]),t._v(", "),v("code",[t._v("root.vehicle.device1.sensor2")]),t._v(", "),v("code",[t._v("root.vehicle.device2.sensor1")]),t._v("三个传感器，则"),v("code",[t._v("root.vehicle.device1")]),t._v("前缀路径包含"),v("code",[t._v("root.vehicle.device1.sensor1")]),t._v("、"),v("code",[t._v("root.vehicle.device1.sensor2")]),t._v("两个时间序列，而不包含"),v("code",[t._v("root.vehicle.device2.sensor1")]),t._v("。")]),t._v(" "),v("ul",[v("li",[t._v("带"),v("code",[t._v("*")]),t._v("路径\n为了使得在表达多个时间序列或表达前缀路径的时候更加方便快捷，IoTDB为用户提供带"),v("code",[t._v("*")]),t._v("路径。"),v("code",[t._v("*")]),t._v("可以出现在路径中的任何层。按照"),v("code",[t._v("*")]),t._v("出现的位置，带"),v("code",[t._v("*")]),t._v("路径可以分为两种：")])]),t._v(" "),v("p",[v("code",[t._v("*")]),t._v("出现在路径的结尾；")]),t._v(" "),v("p",[v("code",[t._v("*")]),t._v("出现在路径的中间；")]),t._v(" "),v("p",[t._v("当"),v("code",[t._v("*")]),t._v("出现在路径的结尾时，其代表的是（"),v("code",[t._v("*")]),t._v("）+，即为一层或多层"),v("code",[t._v("*")]),t._v("。例如"),v("code",[t._v("root.vehicle.device1.*")]),t._v("代表的是"),v("code",[t._v("root.vehicle.device1.*")]),t._v(", "),v("code",[t._v("root.vehicle.device1.*.*")]),t._v(", "),v("code",[t._v("root.vehicle.device1.*.*.*")]),t._v("等所有以"),v("code",[t._v("root.vehicle.device1")]),t._v("为前缀路径的大于等于4层的路径。")]),t._v(" "),v("p",[t._v("当"),v("code",[t._v("*")]),t._v("出现在路径的中间，其代表的是"),v("code",[t._v("*")]),t._v("本身，即为一层。例如"),v("code",[t._v("root.vehicle.*.sensor1")]),t._v("代表的是以"),v("code",[t._v("root.vehicle")]),t._v("为前缀，以"),v("code",[t._v("sensor1")]),t._v("为后缀，层次等于4层的路径。")]),t._v(" "),v("blockquote",[v("p",[t._v("注意："),v("code",[t._v("*")]),t._v("不能放在路径开头。")])]),t._v(" "),v("blockquote",[v("p",[t._v("注意："),v("code",[t._v("*")]),t._v("放在末尾时与前缀路径表意相同，例如"),v("code",[t._v("root.vehicle.*")]),t._v("与"),v("code",[t._v("root.vehicle")]),t._v("为相同含义。")])]),t._v(" "),v("blockquote",[v("p",[t._v("注意："),v("code",[t._v("*")]),t._v("create创建时，后面的路径同时不能含有"),v("code",[t._v("*")]),t._v("。")])]),t._v(" "),v("ul",[v("li",[t._v("时间戳")])]),t._v(" "),v("p",[t._v("时间戳是一个数据到来的时间点，其中包括绝对时间戳和相对时间戳。")]),t._v(" "),v("ul",[v("li",[t._v("绝对时间戳")])]),t._v(" "),v("p",[t._v("IOTDB中绝对时间戳分为二种，一种为LONG类型，一种为DATETIME类型（包含DATETIME-INPUT, DATETIME-DISPLAY两个小类）。")]),t._v(" "),v("p",[t._v("在用户在输入时间戳时，可以使用LONG类型的时间戳或DATETIME-INPUT类型的时间戳，其中DATETIME-INPUT类型的时间戳支持格式如表所示：")]),t._v(" "),v("center",[t._v("**DATETIME-INPUT类型支持格式**\n"),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"left"}},[t._v("format")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd'T'HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd'T'HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd'T'HH:mm:ss")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd'T'HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd'T'HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd'T'HH:mm:ssZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd'T'HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd'T'HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd'T'HH:mm:ss.SSS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd'T'HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd'T'HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd'T'HH:mm:ss.SSSZZ")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"left"}},[t._v("ISO8601 standard time format")])])])])]),t._v(" "),v("p",[t._v("IoTDB在显示时间戳时可以支持LONG类型以及DATETIME-DISPLAY类型，其中DATETIME-DISPLAY类型可以支持用户自定义时间格式。自定义时间格式的语法如表所示：")]),t._v(" "),v("center",[t._v("**DATETIME-DISPLAY自定义时间格式的语法**\n"),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("Symbol")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Meaning")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Presentation")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Examples")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("G")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("era")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("era")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("era")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("century of era (>=0)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year of era (>=0)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("weekyear")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("week of weekyear")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("27")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("e")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("day of week")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("E")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("day of week")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Tuesday; Tue")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("D")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("day of year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("189")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("M")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("month of year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("July; Jul; 07")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("day of month")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("10")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("a")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("halfday of day")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("PM")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("K")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("hour of halfday (0~11)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("clockhour of halfday (1~12)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("12")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("H")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("hour of day (0~23)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("k")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("clockhour of day (1~24)")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("24")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("minute of hour")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("30")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("second of minute")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("55")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("fraction of second")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("millis")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("978")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("z")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("time zone")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Pacific Standard Time; PST")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("Z")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("time zone offset/id")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("zone")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("-0800; -08:00; America/Los_Angeles")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("'")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("escape for text")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("delimiter")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("single quote")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("literal")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("'")])])])])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("相对时间戳")]),t._v(" "),v("p",[t._v("相对时间是指与服务器时间"),v("code",[t._v("now()")]),t._v("和"),v("code",[t._v("DATETIME")]),t._v("类型时间相差一定时间间隔的时间。\n形式化定义为：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Duration = (Digit+ ('Y'|'MO'|'W'|'D'|'H'|'M'|'S'|'MS'|'US'|'NS'))+\nRelativeTime = (now() | DATETIME) ((+|-) Duration)+\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("center",[t._v("**The syntax of the duration unit**\n"),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("Symbol")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Meaning")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Presentation")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Examples")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1y=365 days")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1y")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("mo")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1mo=30 days")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1mo")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("week")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1w=7 days")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1w")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("day")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1d=1 day")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1d")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("hour")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1h=3600 seconds")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1h")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("minute")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1m=60 seconds")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1m")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("second")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1s=1 second")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1s")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("ms")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("millisecond")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1ms=1000_000 nanoseconds")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1ms")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("us")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("microsecond")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1us=1000 nanoseconds")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1us")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("ns")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("nanosecond")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1ns=1 nanosecond")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("1ns")])])])])]),t._v(" "),v("p",[t._v("例子：")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("now() - 1d2h //比服务器时间早1天2小时的时间\nnow() - 1w //比服务器时间早1周的时间\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("blockquote",[v("p",[t._v("注意：'+'和'-'的左右两边必须有空格")])])],1)])],1)}),[],!1,null,null,null);e.default=a.exports}}]);