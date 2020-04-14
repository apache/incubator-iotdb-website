(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{572:function(t,e,a){"use strict";a.r(e);var s=a(45),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"降采样补空值查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#降采样补空值查询"}},[t._v("#")]),t._v(" 降采样补空值查询")]),t._v(" "),a("p",[t._v("GroupByFill 查询的主要逻辑在 "),a("code",[t._v("GroupByFillDataSet")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("org.apache.iotdb.db.query.dataset.groupby.GroupByFillDataSet")])])]),t._v(" "),a("p",[t._v("GroupByFill是对原降采样结果进行填充，目前仅支持使用前值填充的方式。")]),t._v(" "),a("ul",[a("li",[t._v("在Group By Fill中，Group by子句不支持滑动步长，否则抛异常")]),t._v(" "),a("li",[t._v("Fill子句中仅能使用Previous和PREVIOUSUNTILLAST这两种插值方式，Linear不支持")]),t._v(" "),a("li",[t._v("Previous和PREVIOUSUNTILLAST对fill的时间不做限制")]),t._v(" "),a("li",[t._v("填充只针对last_value这一聚合函数，其他的函数不支持，如果其他函数的聚合值查询结果为null，依旧为null，不进行填充")])]),t._v(" "),a("h2",{attrs:{id:"previousuntillast与previous填充的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#previousuntillast与previous填充的区别"}},[t._v("#")]),t._v(" PREVIOUSUNTILLAST与PREVIOUS填充的区别")]),t._v(" "),a("p",[t._v("Previous填充方式的语意没有变，只要前面有值，就可以拿过来填充；\nPREVIOUSUNTILLAST考虑到在某些业务场景下，所填充的值的时间不能大于该时间序列last的时间戳（从业务角度考虑，取历史数据不能取未来历史数据）\n看下面的例子，或许更容易理解")]),t._v(" "),a("p",[t._v("A点时间戳为1，B为5，C为20，D为30，N为8，M为38")]),t._v(" "),a("p",[t._v("原始数据为"),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/16079446/78784824-9f41ae00-79d8-11ea-9920-0825e081cae0.png"}})]),t._v(" "),a("p",[a("code",[t._v("select temperature FROM root.ln.wf01.wt01 where time >= 1 and time <= 38")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Time")]),t._v(" "),a("th",[t._v("root.ln.wf01.wt01.temperature")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("21")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("23")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("25")])]),t._v(" "),a("tr",[a("td",[t._v("20")]),t._v(" "),a("td",[t._v("26")])]),t._v(" "),a("tr",[a("td",[t._v("27")]),t._v(" "),a("td",[t._v("29")])]),t._v(" "),a("tr",[a("td",[t._v("28")]),t._v(" "),a("td",[t._v("30")])]),t._v(" "),a("tr",[a("td",[t._v("30")]),t._v(" "),a("td",[t._v("40")])])])]),t._v(" "),a("p",[t._v("当我们使用Previous插值方式时，即使D到M这一段是未来的数据，我们也会用D点的数据进行填充")]),t._v(" "),a("p",[a("code",[t._v("SELECT last_value(temperature) as last_temperature FROM root.ln.wf01.wt01 GROUP BY([8, 39), 5m) FILL (int32[previous])")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Time")]),t._v(" "),a("th",[t._v("last_temperature")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("25")])]),t._v(" "),a("tr",[a("td",[t._v("13")]),t._v(" "),a("td",[t._v("25")])]),t._v(" "),a("tr",[a("td",[t._v("18")]),t._v(" "),a("td",[t._v("26")])]),t._v(" "),a("tr",[a("td",[t._v("23")]),t._v(" "),a("td",[t._v("29")])]),t._v(" "),a("tr",[a("td",[t._v("28")]),t._v(" "),a("td",[t._v("40")])]),t._v(" "),a("tr",[a("td",[t._v("33")]),t._v(" "),a("td",[t._v("40")])]),t._v(" "),a("tr",[a("td",[t._v("38")]),t._v(" "),a("td",[t._v("40")])])])]),t._v(" "),a("p",[t._v("当我们使用NONLASTPREVIOUS插值方式时，因为D到M这一段是未来的数据，我们不会进行插值，还是返回null")]),t._v(" "),a("p",[a("code",[t._v("SELECT last_value(temperature) as last_temperature FROM root.ln.wf01.wt01 GROUP BY([8, 39), 5m) FILL (int32[PREVIOUSUNTILLAST])")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Time")]),t._v(" "),a("th",[t._v("last_temperature")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("8")]),t._v(" "),a("td",[t._v("25")])]),t._v(" "),a("tr",[a("td",[t._v("13")]),t._v(" "),a("td",[t._v("25")])]),t._v(" "),a("tr",[a("td",[t._v("18")]),t._v(" "),a("td",[t._v("26")])]),t._v(" "),a("tr",[a("td",[t._v("23")]),t._v(" "),a("td",[t._v("29")])]),t._v(" "),a("tr",[a("td",[t._v("28")]),t._v(" "),a("td",[t._v("40")])]),t._v(" "),a("tr",[a("td",[t._v("33")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("38")]),t._v(" "),a("td",[t._v("null")])])])]),t._v(" "),a("h2",{attrs:{id:"核心查询逻辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#核心查询逻辑"}},[t._v("#")]),t._v(" 核心查询逻辑")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("GroupByFillDataSet")]),t._v("中维护了两个主要变量")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// the first value for each time series\nprivate Object[] previousValue;\n// last timestamp for each time series\nprivate long[] lastTimeArray;\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h3",{attrs:{id:"previousvalue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#previousvalue"}},[t._v("#")]),t._v(" "),a("code",[t._v("previousValue")])]),t._v(" "),a("p",[a("code",[t._v("previousValue")]),t._v("这个变量维护了当前时间窗口的前一个降采样值，在"),a("code",[t._v("GroupByFillDataSet")]),t._v("构造函数中调用了"),a("code",[t._v("initPreviousParis")]),t._v("方法对其进行初始化。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  private void initPreviousParis(QueryContext context, GroupByFillPlan groupByFillPlan)\n          throws StorageEngineException, IOException, QueryProcessException {\n    previousValue = new Object[paths.size()];\n    for (int i = 0; i < paths.size(); i++) {\n      Path path = paths.get(i);\n      TSDataType dataType = dataTypes.get(i);\n      IFill fill = new PreviousFill(dataType, groupByEngineDataSet.getStartTime(), -1L);\n      fill.constructReaders(path, groupByFillPlan.getAllMeasurementsInDevice(path.getDevice()), context);\n\n      TimeValuePair timeValuePair = fill.getFillResult();\n      if (timeValuePair == null || timeValuePair.getValue() == null) {\n        previousValue[i] = null;\n      } else {\n        previousValue[i] = timeValuePair.getValue().getValue();\n      }\n    }\n  }\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("p",[a("code",[t._v("initPreviousParis")]),t._v("方法主要为每个时间序列构造了一个单点补空值查询，"),a("code",[t._v("queryTime")]),t._v("设置为降采样时间窗口的起始值，"),a("code",[t._v("beforeRange")]),t._v("不作限制。")]),t._v(" "),a("h3",{attrs:{id:"lasttimearray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lasttimearray"}},[t._v("#")]),t._v(" "),a("code",[t._v("lastTimeArray")])]),t._v(" "),a("p",[a("code",[t._v("lastTimeArray")]),t._v("这个变量维护了每个时间序列的最近时间戳值，主要用于"),a("code",[t._v("PREVIOUSUNTILLAST")]),t._v("这一填充方式，在"),a("code",[t._v("GroupByFillDataSet")]),t._v("构造函数中调用了"),a("code",[t._v("initLastTimeArray")]),t._v("方法对其进行初始化。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  private void initLastTimeArray(QueryContext context)\n      throws IOException, StorageEngineException, QueryProcessException {\n    lastTimeArray = new long[paths.size()];\n    Arrays.fill(lastTimeArray, Long.MAX_VALUE);\n    for (int i = 0; i < paths.size(); i++) {\n      TimeValuePair lastTimeValuePair =\n          LastQueryExecutor.calculateLastPairForOneSeries(paths.get(i), dataTypes.get(i), context);\n      if (lastTimeValuePair.getValue() != null) {\n        lastTimeArray[i] = lastTimeValuePair.getTimestamp();\n      }\n    }\n  }\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])]),a("p",[a("code",[t._v("initPreviousParis")]),t._v("方法主要为每个时间序列构造了一个最近时间戳 Last 查询")]),t._v(" "),a("h3",{attrs:{id:"填充过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#填充过程"}},[t._v("#")]),t._v(" 填充过程")]),t._v(" "),a("p",[t._v("填充过程在"),a("code",[t._v("nextWithoutConstraint")]),t._v("方法中完成，主要逻辑如下：")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("protected RowRecord nextWithoutConstraint() throws IOException {\n\n    // 首先通过groupByEngineDataSet，获得原始的降采样查询结果行\n    RowRecord rowRecord = groupByEngineDataSet.nextWithoutConstraint();\n\n    // 接下来对每个时间序列判断需不需要填充\n    for (int i = 0; i < paths.size(); i++) {\n      Field field = rowRecord.getFields().get(i);\n      // 当前值为null，需要进行填充\n      if (field.getDataType() == null) {\n        // 当前一个值不为null 并且 (填充方式不是PREVIOUSUNTILLAST 或者 当前时间小于改时间序列的最近时间戳)\n        if (previousValue[i] != null\n            && (!((PreviousFill) fillTypes.get(dataTypes.get(i))).isUntilLast()\n            || rowRecord.getTimestamp() <= lastTimeArray[i])) {\n          rowRecord.getFields().set(i, Field.getField(previousValue[i], dataTypes.get(i)));\n        }\n      } else {\n        // 当前值不为null，不需要填充，用当前值更新previousValue数组\n        previousValue[i] = field.getObjectValue(field.getDataType());\n      }\n    }\n    return rowRecord;\n  }\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);