(window.webpackJsonp=window.webpackJsonp||[]).push([[902],{1461:function(v,_,t){"use strict";t.r(_);var e=t(69),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"查询结果集构造"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询结果集构造"}},[v._v("#")]),v._v(" 查询结果集构造")]),v._v(" "),t("h2",{attrs:{id:"内容简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内容简介"}},[v._v("#")]),v._v(" 内容简介")]),v._v(" "),t("p",[v._v("本文主要介绍查询结果集的构造原理，包括三部分：表头构造、生成非重复的结果集、还原完整结果集。")]),v._v(" "),t("h2",{attrs:{id:"表头构造"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表头构造"}},[v._v("#")]),v._v(" 表头构造")]),v._v(" "),t("p",[v._v("接下来介绍第一部分，包括原始数据查询（RawDataQuery）、按设备对齐查询（AlignByDeviceQuery）、最新数据查询（LastQuery）三种查询的结果集表头构造方法。如降频聚合查询、空值填充查询等查询将作为子查询在该三类查询中讲解。")]),v._v(" "),t("h3",{attrs:{id:"原始数据查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#原始数据查询"}},[v._v("#")]),v._v(" 原始数据查询")]),v._v(" "),t("p",[v._v("原始数据查询的结果集表头构造逻辑主要在 "),t("code",[v._v("getWideQueryHeaders()")]),v._v(" 方法中。")]),v._v(" "),t("ul",[t("li",[v._v("org.apache.iotdb.db.service.TSServiceImpl.getWideQueryHeaders")])]),v._v(" "),t("p",[v._v("对于每个结果集表头的构造，需要提供列名及该列对应的数据类型。")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("普通原始数据查询（包括空值填充查询）只需要从物理查询计划中取得"),t("strong",[v._v("未去重")]),v._v("的时间序列路径，该时间序列路径即作为列名，并使用该路径取得时间序列对应的数据类型，即可生成结果集表头。")])]),v._v(" "),t("li",[t("p",[v._v("而如果原始数据查询中包含聚合函数（包括一般聚合查询和降频聚合查询），将忽略时间列并使用"),t("strong",[v._v("聚合函数和时间序列路径共同构成列名")]),v._v("，且取得数据类型时将以聚合函数的类型为准，如 "),t("code",[v._v("root.sg.d1.s1")]),v._v(" 是 FLOAT 类型，而 "),t("code",[v._v("count(root.sg.d1.s1)")]),v._v(" 应为 LONG 类型。")])])]),v._v(" "),t("p",[v._v("接下来将举例说明：")]),v._v(" "),t("p",[v._v("假设查询中出现的所有时间序列均存在，则以下两个查询生成的结果集表头分别为：")]),v._v(" "),t("p",[v._v("SQL1："),t("code",[v._v("SELECT s1, s1, s2 FROM root.sg.d1;")]),v._v("  ->")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Time")]),v._v(" "),t("th",[v._v("root.sg.d1.s1")]),v._v(" "),t("th",[v._v("root.sg.d1.s1")]),v._v(" "),t("th",[v._v("root.sg.d1.s2")])])]),v._v(" "),t("tbody",[t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")])])]),v._v(" "),t("p",[v._v("SQL2："),t("code",[v._v("SELECT count(s1), max_time(s1) FROM root.sg.d1;")]),v._v(" ->")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("count(root.sg.d1.s1)")]),v._v(" "),t("th",[v._v("max_time(root.sg.d1.s1)")])])]),v._v(" "),t("tbody",[t("tr",[t("td"),v._v(" "),t("td")])])]),v._v(" "),t("h3",{attrs:{id:"按设备对齐查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按设备对齐查询"}},[v._v("#")]),v._v(" 按设备对齐查询")]),v._v(" "),t("p",[v._v("原始数据查询的结果集表头构造逻辑主要在 "),t("code",[v._v("getAlignByDeviceQueryHeaders()")]),v._v(" 方法中。")]),v._v(" "),t("ul",[t("li",[v._v("org.apache.iotdb.db.service.TSServiceImpl.getAlignByDeviceQueryHeaders")])]),v._v(" "),t("p",[v._v("按设备对齐查询的结果集构造依赖于物理查询计划中生成的"),t("strong",[v._v("未去重")]),v._v("的度量（Measurements）列表。在此作简单介绍，度量列表是由 SELECT 子句中的后缀路径（包括通配符）生成的列表，其中共有三种类型，分别为常量（Constant）、存在的时间序列（Exist）以及不存在的时间序列（NonExist）。详细可以参考 "),t("RouterLink",{attrs:{to:"/zh/SystemDesign/DataQuery/AlignByDeviceQuery.html"}},[v._v("Align by device query")])],1),v._v(" "),t("p",[v._v("由于按设备对齐查询采用关系表结构，因此首先在表头中加入设备列，其对应的数据类型为文本类型。")]),v._v(" "),t("p",[v._v("然后取得度量列表，将每个度量作为列名，并根据度量类型选择相应的数据类型。如果是常量或不存在的时间序列类型，则直接设数据类型为文本类型；如果是存在的时间序列，则根据物理查询计划中存储的 "),t("code",[v._v("measurementDataTypeMap")]),v._v(" 取得该度量对应的数据类型。")]),v._v(" "),t("p",[v._v("注意如果是聚合查询，此处度量列表中的度量会包含聚合函数，因此可以一并处理。")]),v._v(" "),t("p",[v._v("接下来举例说明：")]),v._v(" "),t("p",[v._v("假设目前共有 "),t("code",[v._v("root.sg.d1.s1")]),v._v(", "),t("code",[v._v("root.sg.d1.s2")]),v._v(" 两条时间序列，则以下查询语句生成的表头为：")]),v._v(" "),t("p",[v._v("SQL："),t("code",[v._v("SELECT '111', s1, s2, *, s5 FROM root.sg.d1 ALIGN BY DEVICE;")])]),v._v(" "),t("p",[v._v("-> 度量列表 ['111', s1, s2, s1, s2, s5]")]),v._v(" "),t("p",[v._v("-> 表头")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Time")]),v._v(" "),t("th",[v._v("Device")]),v._v(" "),t("th",[v._v("111")]),v._v(" "),t("th",[v._v("s1")]),v._v(" "),t("th",[v._v("s2")]),v._v(" "),t("th",[v._v("s1")]),v._v(" "),t("th",[v._v("s2")]),v._v(" "),t("th",[v._v("s5")])])]),v._v(" "),t("tbody",[t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")])])]),v._v(" "),t("h3",{attrs:{id:"最新数据查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最新数据查询"}},[v._v("#")]),v._v(" 最新数据查询")]),v._v(" "),t("p",[v._v("最新数据查询的结果集表头构造逻辑主要在静态方法 "),t("code",[v._v("LAST_RESP")]),v._v(" 中。")]),v._v(" "),t("ul",[t("li",[v._v("org.apache.iotdb.db.service.StaticResps.LAST_RESP")])]),v._v(" "),t("p",[v._v("最新数据查询计算出需要查询的时间序列具有最大时间戳的结果并以时间（Time）、时间序列（timeseries）及值（value）三列进行展示。")]),v._v(" "),t("p",[v._v("接下来举例说明：")]),v._v(" "),t("p",[v._v("假设目前共有 "),t("code",[v._v("root.sg.d1.s1")]),v._v(", "),t("code",[v._v("root.sg.d1.s2")]),v._v(" 两条时间序列，则以下查询语句生成的表头为：")]),v._v(" "),t("p",[v._v("SQL："),t("code",[v._v("SELECT last s1, s2 FROM root.sg.d1;")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Time")]),v._v(" "),t("th",[v._v("timeseries")]),v._v(" "),t("th",[v._v("value")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("...")]),v._v(" "),t("td",[v._v("root.sg.d1.s1")]),v._v(" "),t("td",[v._v("...")])]),v._v(" "),t("tr",[t("td",[v._v("...")]),v._v(" "),t("td",[v._v("root.sg.d1.s2")]),v._v(" "),t("td",[v._v("...")])])])]),v._v(" "),t("h2",{attrs:{id:"生成非重复结果集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成非重复结果集"}},[v._v("#")]),v._v(" 生成非重复结果集")]),v._v(" "),t("p",[v._v("与表头构造不同，我们不需要在执行物理查询计划时查询重复的数据，例如对于查询 "),t("code",[v._v("SELECT s1, s1 FROM root.sg.d1")]),v._v("，我们只需要查询一次时间序列 "),t("code",[v._v("root.sg.d1.s1")]),v._v(" 的值即可。因此在表头构造完成后，我们需要在服务器端先生成非重复的结果集。")]),v._v(" "),t("p",[v._v("除按设备对齐查询外，"),t("strong",[v._v("原始数据查询、聚合查询、最新数据查询")]),v._v(" 等查询的去重逻辑均在 "),t("code",[v._v("deduplicate()")]),v._v(" 方法中。")]),v._v(" "),t("ul",[t("li",[v._v("org.apache.iotdb.db.qp.strategy.PhysicalGenerator.deduplicate()")])]),v._v(" "),t("p",[v._v("去重逻辑比较简单：首先从查询计划中取得未去重的路径，然后在遍历时创建一个 Set 集合用于去重即可。")]),v._v(" "),t("p",[v._v("值得注意的是：在原始数据查询和聚合查询去重前，先"),t("strong",[v._v("将查询的时间序列路径按设备进行排序")]),v._v("，目的是为了查询时减少 I/O 和反序列化操作，加快查询速度。此处额外计算出一个数据结构 "),t("code",[v._v("pathToIndex")]),v._v(" 用于记录排序后每个路径在查询中的位置。")]),v._v(" "),t("p",[v._v("由于最新数据查询只需要计算一组数据，因此不需要对路径进行排序，其 "),t("code",[v._v("pathToIndex")]),v._v(" 为 null。")]),v._v(" "),t("p",[t("strong",[v._v("按设备对齐查询")]),v._v("的去重逻辑在其结果集的 "),t("code",[v._v("hasNextWithoutConstraint()")]),v._v(" 方法中。")]),v._v(" "),t("ul",[t("li",[v._v("org.apache.iotdb.db.query.dataset.AlignByDeviceDataSet.hasNextWithoutConstraint()")])]),v._v(" "),t("p",[v._v("由于按设备对齐查询需要按设备依次组织其查询计划，每个设备查询的路径未必相同，且允许包含常量列以及不存在的时间序列，因此不能简单地与其他查询一起去重。去重时"),t("strong",[v._v("不仅需要去除重复查询的时间序列路径，还需要去除查询中出现的常量列以及当前设备中不存在的时间序列")]),v._v("。实现方法可以参考 "),t("RouterLink",{attrs:{to:"/zh/SystemDesign/DataQuery/AlignByDeviceQuery.html"}},[v._v("Align by device query")]),v._v(".")],1),v._v(" "),t("p",[v._v("在查询计划中的去重路径构造完成后，即可调用 IoTDB 的查询执行器来执行查询，并得到去重后的结果集。")]),v._v(" "),t("h2",{attrs:{id:"还原完整结果集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#还原完整结果集"}},[v._v("#")]),v._v(" 还原完整结果集")]),v._v(" "),t("p",[v._v("以上构造表头和生成非重复结果集均在服务器端完成，然后返回给客户端。客户端根据原始的表头信息对非重复的结果集进行还原后，展示给用户。为了区分两个结果集，下面分别称之为"),t("strong",[v._v("查询结果集")]),v._v("和"),t("strong",[v._v("最终结果集")]),v._v("。")]),v._v(" "),t("p",[v._v("为了方便讲解，首先给出一个简单的示例：")]),v._v(" "),t("p",[v._v("SQL: "),t("code",[v._v("SELECT s2, s1, s2 FROM root.sg.d1;")])]),v._v(" "),t("p",[v._v("通过上面的步骤已经计算出表头中的列名列表 "),t("code",[v._v("columnNameList")]),v._v(" 为（时间戳将之后计算）：")]),v._v(" "),t("p",[t("code",[v._v("[root.sg.d1.s2, root.sg.d1.s1, root.sg.d1.s2].")])]),v._v(" "),t("p",[v._v("时间序列路径在查询中的位置 "),t("code",[v._v("pathToIndex")]),v._v(" 为（按设备排过序）：")]),v._v(" "),t("p",[t("code",[v._v("root.sg.d1.s1 -> 0, root.sg.d1.s2 -> 1;")])]),v._v(" "),t("p",[v._v("则查询结果集为：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Time")]),v._v(" "),t("th",[v._v("root.sg.d1.s1")]),v._v(" "),t("th",[v._v("root.sg.d1.s2")])])]),v._v(" "),t("tbody",[t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td")])])]),v._v(" "),t("p",[v._v("为了还原最终结果集，需要构造一个列名到其在查询结果集中位置的映射集 "),t("code",[v._v("columnOrdinalMap")]),v._v("，方便从查询结果集中取出某一列对应的结果，该部分逻辑在新建最终结果集 "),t("code",[v._v("IoTDBQueryResultSet")]),v._v(" 的构造函数内完成.")]),v._v(" "),t("ul",[t("li",[v._v("org.apache.iotdb.jdbc.AbstractIoTDBResultSet.AbstractIoTDBResultSet()")])]),v._v(" "),t("p",[v._v("为了构造最终结果集中的元数据信息，需要构造完整的列名列表，由于上面给出的 "),t("code",[v._v("columnNameList")]),v._v(" 中不包含时间戳，因此，如果需要打印时间戳则在表头中加入 "),t("code",[v._v("Time")]),v._v(" 列构成完整的表头。")]),v._v(" "),t("p",[v._v("示例中为：")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("Time")]),v._v(" "),t("th",[v._v("root.sg.d1.s2")]),v._v(" "),t("th",[v._v("root.sg.d1.s1")]),v._v(" "),t("th",[v._v("root.sg.d1.s2")])])]),v._v(" "),t("tbody",[t("tr",[t("td"),v._v(" "),t("td"),v._v(" "),t("td"),v._v(" "),t("td")])])]),v._v(" "),t("p",[v._v("接下来计算 "),t("code",[v._v("columnOrdinalMap")]),v._v(" ，首先判断是否需要打印时间戳，如果需要则将时间戳记录为第一列。")]),v._v(" "),t("p",[v._v("然后遍历表头中的列名列表，并检查 "),t("code",[v._v("columnNameIndex")]),v._v(" 是否被初始化，该字段来源于去重时计算的 "),t("code",[v._v("pathToIndex")]),v._v("，记录了每个时间序列路径在查询中的位置。如果被初始化，则其中的位置 + 2 即为在结果集中的位置；若未被初始化，则按遍历顺序记录位置即可，该顺序与服务器端去重后的查询顺序保持一致。")]),v._v(" "),t("p",[v._v("示例中 "),t("code",[v._v("columnOrdinalMap")]),v._v(" 应为：")]),v._v(" "),t("p",[t("code",[v._v("Time -> 1, root.sg.d1.s2 -> 3, root.sg.d1.s1 -> 2")])]),v._v(" "),t("p",[v._v("接下来遍历完整的表头信息，然后根据该映射集填充完整的结果集即可，其逻辑在 "),t("code",[v._v("cacheResult()")]),v._v(" 方法中。")]),v._v(" "),t("ul",[t("li",[v._v("org.apache.iotdb.cli.AbstractCli.cacheResult()")])]),v._v(" "),t("p",[v._v("例如最终结果集表头中第二列为 "),t("code",[v._v("root.sg.d1.s2")]),v._v("，则从查询结果集中取出第三列的结果作为其值。重复该过程，填满每一行的结果，直到查询结果集中没有下一结果或达到最大输出行数。")])])}),[],!1,null,null,null);_.default=s.exports}}]);