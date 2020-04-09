(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{361:function(e,t,s){"use strict";s.r(t);var a=s(1),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("The table structure of AlignByDevice Query is:")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("The implementation principle of the device-by-device query is mainly to calculate the measurement points and filter conditions corresponding to each device in the query, and then the query is performed separately for each device, and the result set is assembled and returned.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("First explain the meaning of some important fields in AlignByDevicePlan:")]),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Before explaining the specific implementation process, a relatively complete example is given first, and the following explanation will be used in conjunction with this example.")]),e._v(" "),e._m(5),s("p",[e._v("Among them, the time series in the system is:")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("The following will be explained according to the specific process:")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("Unlike the original data query, the alignment by device query does not concatenate the suffix paths in the SELECT statement and the WHERE statement at this stage, but when the physical plan is subsequently generated, the mapping value and filter conditions corresponding to each device are calculated.  Therefore, the work done at this stage by device alignment only includes optimization of filter conditions in WHERE statements.")]),e._v(" "),s("p",[e._v("The optimization of the filtering conditions mainly includes three parts: removing the negation, transforming the disjunction paradigm, and merging the same path filtering conditions.  The corresponding optimizers are: RemoveNotOptimizer, DnfFilterOptimizer, MergeSingleFilterOptimizer.  This part of the logic can refer to:"),s("router-link",{attrs:{to:"/SystemDesign/2-QueryEngine/2-Planner.html"}},[e._v("Planner")]),e._v(".")],1),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),s("p",[e._v("Next, introduce the calculation process of AlignByDevicePlan:")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._m(18),e._v(" "),e._m(19),e._v(" "),s("p",[e._v("The following example summarizes the variable information calculated through this stage:")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),s("p",[e._v("After generating the physical plan, you can execute the executeQueryStatement () method in TSServiceImpl to generate a result set and return it. The first step is to construct the header.")]),e._v(" "),s("p",[e._v("Query by device alignment After calling the TSServiceImpl.getQueryColumnHeaders () method, enter TSServiceImpl.getAlignByDeviceQueryHeaders () according to the query type to construct the headers.")]),e._v(" "),e._m(23),e._v(" "),e._m(24),s("p",[e._v("The specific implementation logic is as follows:")]),e._v(" "),e._m(25),e._v(" "),s("p",[e._v("The resulting header is:")]),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),s("p",[e._v("After the ColumnHeader is generated, the final step is to populate the result set with the results and return.")]),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),s("br"),e._v(" "),e._m(38),e._v(" "),s("p",[e._v("First explain the meaning of the important fields in the result set:")]),e._v(" "),e._m(39),e._v(" "),e._m(40),e._v(" "),s("p",[e._v("The specific implementation logic is as follows:")]),e._v(" "),s("ol",[e._m(41),e._v(" "),e._m(42),e._v(" "),e._m(43),e._v(" "),s("li",[e._v("Determine whether the current subquery type is GroupByQuery, AggregationQuery, FillQuery or RawDataQuery. Perform the corresponding query and return the result set. The implementation logic "),s("router-link",{attrs:{to:"/#/SystemDesign/progress/chap5/sec3"}},[e._v("Raw data query")]),e._v("，"),s("router-link",{attrs:{to:"/#/SystemDesign/progress/chap5/sec4"}},[e._v("Aggregate query")]),e._v("，"),s("router-link",{attrs:{to:"/#/SystemDesign/progress/chap5/sec5"}},[e._v("Downsampling query")]),e._v("  can be referenced.")],1)]),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),s("p",[e._v("The specific implementation logic is as follows:")]),e._v(" "),e._m(47),e._v(" "),e._m(48)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"query-by-device-alignment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-by-device-alignment"}},[this._v("#")]),this._v(" Query by device alignment")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("time")]),e._v(" "),s("th",[e._v("device")]),e._v(" "),s("th",[e._v("sensor1")]),e._v(" "),s("th",[e._v("sensor2")]),e._v(" "),s("th",[e._v("sensor3")]),e._v(" "),s("th",[e._v("...")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"design-principle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#design-principle"}},[this._v("#")]),this._v(" Design principle")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"meaning-of-important-fields-in-alignbydeviceplan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#meaning-of-important-fields-in-alignbydeviceplan"}},[this._v("#")]),this._v(" Meaning of important fields in AlignByDevicePlan")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("List<String> measurements")]),e._v("：The list of measurements that appear in the query.")]),e._v(" "),s("li",[s("code",[e._v("List<String> devices")]),e._v(": The list of devices got from prefix paths.")]),e._v(" "),s("li",[s("code",[e._v("Map<String, IExpression> deviceToFilterMap")]),e._v(": This field is used to store the filter conditions corresponding to the device.")]),e._v(" "),s("li",[s("code",[e._v("Map<String, TSDataType> measurementDataTypeMap")]),e._v("：AlignByDevicePlan requires that the data type of the sensor of the same name be the same for different devices. This field is a Map structure of "),s("code",[e._v("measurementName-> dataType")]),e._v(".  For example "),s("code",[e._v("root.sg.d1.s1")]),e._v(" and"),s("code",[e._v("root.sg.d2.s1")]),e._v(" should be of the same data type.")]),e._v(" "),s("li",[s("code",[e._v("enum MeasurementType")]),e._v("：Three measurement types are recorded.  Measurements that do not exist in any device are of type "),s("code",[e._v("NonExist")]),e._v("; measurements with single or double quotes are of type"),s("code",[e._v("Constant")]),e._v("; measurements that exist are of type "),s("code",[e._v("Exist")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("Map<String, MeasurementType> measurementTypeMap")]),e._v(": This field is a Map structure of "),s("code",[e._v("measureName-> measurementType")]),e._v(", which is used to record all measurement types in the query.")]),e._v(" "),s("li",[e._v("groupByPlan, fillQueryPlan, aggregationPlan：To avoid redundancy, these three execution plans are set as subclasses of RawDataQueryPlan and set as variables in AlignByDevicePlan.  If the query plan belongs to one of these three plans, the field is assigned and saved.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" s5 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("time")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("AND")]),e._v(" s1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("25")]),e._v(" ALIGN "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("BY")]),e._v(" DEVICE\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("root.sg.d1.s1")]),this._v(" "),t("li",[this._v("root.sg.d1.s2")]),this._v(" "),t("li",[this._v("root.sg.d2.s1")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The storage group "),t("code",[this._v("root.sg")]),this._v(" contains two devices d1 and d2, where d1 has two sensors s1 and s2, d2 has only sensor s1, and the same sensor s1 has the same data type.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"logical-plan-generation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logical-plan-generation"}},[this._v("#")]),this._v(" Logical plan generation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.qp.Planner")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"physical-plan-generation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#physical-plan-generation"}},[this._v("#")]),this._v(" Physical plan generation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.qp.strategy.PhysicalGenerator")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After the logical plan is generated, the "),t("code",[this._v("transformToPhysicalPlan ()")]),this._v(" method in the PhysicalGenerator class is called to convert the logical plan into a physical plan.  For device-aligned queries, the main logic of this method is implemented in the transformQuery () method.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("The main work done at this stage is to generate the corresponding")]),this._v(" "),t("code",[this._v("AlignByDevicePlan")]),this._v("，"),t("strong",[this._v("Fill in the variable information。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("First explain the meaning of some important fields in the "),t("code",[this._v("transformQuery ()")]),this._v(" method (see above for the duplicate fields in AlignByDevicePlan):")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("prefixPaths, suffixPaths：The former is the prefix path in the FROM clause, in the example "),s("code",[e._v("[root.sg.d1, root.sg. *]")]),e._v("; The latter is the suffix path in the SELECT clause, in the example "),s("code",[e._v('[s1," 1 " , *, s2, s5]')]),e._v(".")]),e._v(" "),s("li",[e._v("devices：The device list obtained by removing wildcards and de-duplicating the prefix path, in the example, [[root.sg.d1, root.sg.d2] `.")]),e._v(" "),s("li",[e._v("measurementSetOfGivenSuffix：The intermediate variable records the measurement corresponding to a suffix. In the example, for the suffix \\ *, "),s("code",[e._v("measurementSetOfGivenSuffix = {s1, s2}")]),e._v(", for the suffix s1, "),s("code",[e._v("measurementSetOfGivenSuffix = {s1}")]),e._v(";")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("Check whether the query type is one of three types of queries: groupByPlan, fillQueryPlan, aggregationPlan. If it is, assign the corresponding variable and change the query type of "),s("code",[e._v("AlignByDevicePlan")]),e._v(".")]),e._v(" "),s("li",[e._v("Iterate through the SELECT suffix path, and set an intermediate variable for each suffix path as "),s("code",[e._v("measurementSetOfGivenSuffix")]),e._v(" to record all measurements corresponding to the suffix path.  If the suffix path starts with single or double quotes, increase the value directly in "),s("code",[e._v("measurements")]),e._v(" and note that its type is"),s("code",[e._v("Constant")]),e._v(".")]),e._v(" "),s("li",[e._v("Otherwise, the device list is stitched with the suffix path to obtain a complete path. If the spliced path does not exist, you need to further determine whether the measurement exists in other devices. If none, temporarily identify it as NonExist. If the subsequent device appears,  measurement, the NonExist value is overridden.")]),e._v(" "),s("li",[e._v("If the path exists after splicing, it is proved that the measurement is of type "),s("code",[e._v("Exist")]),e._v(", and the consistency of the data type needs to be checked. If it is not satisfied, an error message is returned. If it is met, the measurement is recorded.")]),e._v(" "),s("li",[e._v("After the suffix loop of a layer ends, the "),s("code",[e._v("measurementSetOfGivenSuffix")]),e._v(" appearing in the loop of that layer is added to the"),s("code",[e._v("measurements")]),e._v(".  At the end of the entire loop, the variable information obtained in the loop is assigned to AlignByDevicePlan.  The list of measurements obtained here is not duplicated and will be de-duplicated when the ColumnHeader is generated.")]),e._v(" "),s("li",[e._v("Finally, call the "),s("code",[e._v("concatFilterByDevice ()")]),e._v(" method to calculate "),s("code",[e._v("deviceToFilterMap")]),e._v(", and get the corresponding Filter information after splicing each device separately.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Map")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("IExpression")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("concatFilterByDevice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" devices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FilterOperator")]),e._v(" operator"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Input")]),e._v("："),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Deduplicated")]),e._v(" devices list and un"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("stitched "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("FilterOperator")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Input")]),e._v("："),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("The")]),e._v(" deviceToFilterMap after splicing records the "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Filter")]),e._v(" information corresponding "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("to")]),e._v(" each device\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The main processing logic of the "),t("code",[this._v("concatFilterByDevice ()")]),this._v(" method is in "),t("code",[this._v("concatFilterPath ()")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("concatFilterPath ()")]),this._v(" method traverses the unspliced FilterOperator binary tree to determine whether the node is a leaf node. If so, the path of the leaf node is taken. If the path starts with time or root, it is not processed, otherwise the device name and node are not processed.  The paths are spliced and returned; if not, all children of the node are iteratively processed.  In the example, the result of splicing the filter conditions of device 1 is "),t("code",[this._v("time = 1 AND root.sg.d1.s1 <25")]),this._v(", and device 2 is"),t("code",[this._v("time = 1 AND root.sg.d2.s1 <25")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("measurement list "),s("code",[e._v("measurements")]),e._v("："),s("code",[e._v('[s1, "1", s1, s2, s2, s5]')])]),e._v(" "),s("li",[e._v("measurement type "),s("code",[e._v("measurementTypeMap")]),e._v("：\n"),s("ul",[s("li",[s("code",[e._v("s1 -> Exist")])]),e._v(" "),s("li",[s("code",[e._v("s2 -> Exist")])]),e._v(" "),s("li",[s("code",[e._v('"1" -> Constant')])]),e._v(" "),s("li",[s("code",[e._v("s5 -> NonExist")])])])]),e._v(" "),s("li",[e._v("Filter condition "),s("code",[e._v("deviceToFilterMap")]),e._v(" for each device:\n"),s("ul",[s("li",[s("code",[e._v("root.sg.d1 -> time = 1 AND root.sg.d1.s1 < 25")])]),e._v(" "),s("li",[s("code",[e._v("root.sg.d2 -> time = 1 AND root.sg.d2.s1 < 25")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"constructing-a-header-columnheader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constructing-a-header-columnheader"}},[this._v("#")]),this._v(" Constructing a Header (ColumnHeader)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.service.TSServiceImpl")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("getAlignByDeviceQueryHeaders ()")]),this._v(" method is declared as follows:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("private")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("void")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("getAlignByDeviceQueryHeaders")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AlignByDevicePlan")]),e._v(" plan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" respColumns"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" columnTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Input")]),e._v("："),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("The")]),e._v(" currently executing physical plan "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("AlignByDevicePlan")]),e._v(" and the column names that need "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("to")]),e._v(" be output respColumns and their corresponding data types columnTypes\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Input")]),e._v("："),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Calculated")]),e._v(" column name respColumns and data type columnTypes\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("First add the "),s("code",[e._v("Device")]),e._v(" column, whose data type is"),s("code",[e._v("TEXT")]),e._v(";")]),e._v(" "),s("li",[e._v("Traverse the list of measurements without deduplication to determine the type of measurement currently traversed. If it is an Exist type, get its type from the measurementTypeMap; set the other two types to TEXT, and then add measurement and its type to the header data structure.")]),e._v(" "),s("li",[e._v("Deduplicate measurements based on the intermediate variable deduplicatedMeasurements.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Time")]),e._v(" "),s("th",[e._v("Device")]),e._v(" "),s("th",[e._v("s1")]),e._v(" "),s("th",[e._v("1")]),e._v(" "),s("th",[e._v("s1")]),e._v(" "),s("th",[e._v("s2")]),e._v(" "),s("th",[e._v("s2")]),e._v(" "),s("th",[e._v("s5")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td"),e._v(" "),s("td")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The deduplicated "),t("code",[this._v("measurements")]),this._v(" are"),t("code",[this._v('[s1, "1", s2, s5]')]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"result-set-generation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#result-set-generation"}},[this._v("#")]),this._v(" Result set generation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"result-set-creation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#result-set-creation"}},[this._v("#")]),this._v(" Result set creation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.service.TSServiceImpl")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("At this stage, you need to call "),t("code",[this._v("TSServiceImpl.createQueryDataSet ()")]),this._v(" to create a new result set. This part of the implementation logic is relatively simple. For AlignByDeviceQuery, you only need to create a new "),t("code",[this._v("AlignByDeviceDataSet")]),this._v(". In the constructor, the parameters in AlignByDevicePlan  Assign to the newly created result set.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"result-set-population"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#result-set-population"}},[this._v("#")]),this._v(" Result set population")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.utils.QueryDataSetUtils")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Next you need to fill the results. AlignByDeviceQuery will call the "),t("code",[this._v("TSServiceImpl.fillRpcReturnData ()")]),this._v(" method, and then enter the "),t("code",[this._v("QueryDataSetUtils.convertQueryDataSetByFetchSize ()")]),this._v(" method according to the query type.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The important method for getting results in the "),t("code",[this._v("convertQueryDataSetByFetchSize ()")]),this._v(" method is the "),t("code",[this._v("hasNext ()")]),this._v(" method of QueryDataSet.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The main logic of the "),t("code",[this._v("hasNext ()")]),this._v(" method is as follows:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("Determine if there is a specified row offset "),s("code",[e._v("rowOffset")]),e._v(", if there is, skip the number of rows that need to be offset; if the total number of results is less than the specified offset, return false.")]),e._v(" "),s("li",[e._v("Determines whether there is a specified limit on the number of rows "),s("code",[e._v("rowLimit")]),e._v(", if there is, it compares the current number of output rows, and returns false if the current number of output rows is greater than the limit.")]),e._v(" "),s("li",[e._v("Enter "),s("code",[e._v("AlignByDeviceDataSet.hasNextWithoutConstraint ()")]),e._v(" method")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("org.apache.iotdb.db.query.dataset.AlignByDeviceDataSet")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("deviceIterator")]),this._v(": Query by device is essentially to calculate the mapping value and filtering conditions corresponding to each device, and then the query is performed separately for each device. This field is an iterator for the device. Each query obtains a device to perform.")]),this._v(" "),t("li",[t("code",[this._v("currentDataSet")]),this._v("：This field represents the result set obtained by querying a certain device.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The work done by the "),t("code",[this._v("hasNextWithoutConstraint ()")]),this._v(" method is mainly to determine whether the current result set has the next result, if not, the next device is obtained, the path, data type and filter conditions required by the device to execute the query are calculated, and then executed according to its query type  The result set is obtained after a specific query plan, until no device is available for querying.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("First determine whether the current result set is initialized and there is a next result. If it is, it returns true directly, that is, you can call the "),t("code",[this._v("next()")]),this._v(" method to get the next "),t("code",[this._v("RowRecord")]),this._v("; otherwise, the result set is not initialized and proceeds to step 2.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Iterate "),t("code",[this._v("deviceIterator")]),this._v(" to get the devices needed for this execution, and then find the device node from MManger by the device path to get all sensor nodes under it.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("li",[e._v("Compare all measurements in the query and the sensor nodes under the current device to get the "),s("code",[e._v("executeColumns")]),e._v(" which need to be queried. Then concatenate the current device name and measurements to calculate the query path, data type, and filter conditions of the current device. The corresponding fields are "),s("code",[e._v("executePaths")]),e._v(","),s("code",[e._v("tsDataTypes")]),e._v(", and "),s("code",[e._v("expression")]),e._v(". If it is an aggregate query, you need to calculate "),s("code",[e._v("executeAggregations")]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After initializing the result set through the "),t("code",[this._v("hasNextWithoutConstraint ()")]),this._v(" method and ensuring that there is a next result, you can call "),t("code",[this._v("QueryDataSet.next ()")]),this._v(" method to get the next "),t("code",[this._v("RowRecord")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("next ()")]),this._v(" method is mainly implemented as the "),t("code",[this._v("AlignByDeviceDataSet.nextWithoutConstraint ()")]),this._v(" method.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The work done by the "),t("code",[this._v("nextWithoutConstraint ()")]),this._v(" method is to ** transform the time-aligned result set form obtained by a single device query into a device-aligned result set form **, and return the transformed "),t("code",[this._v("RowRecord")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("First get the next time-aligned "),s("code",[e._v("originRowRecord")]),e._v(" from the result set.")]),e._v(" "),s("li",[e._v("Create a new "),s("code",[e._v("RowRecord")]),e._v(" with timestamp, add device columns to it, and first create a Map structure"),s("code",[e._v("currentColumnMap")]),e._v(" of "),s("code",[e._v("measurementName-> Field")]),e._v(" according to"),s("code",[e._v("executeColumns")]),e._v(" and the obtained result.")]),e._v(" "),s("li",[e._v("After that, you only need to traverse the deduplicated "),s("code",[e._v("measurements")]),e._v(" list to determine its type. If the type is"),s("code",[e._v("Exist")]),e._v(", get the corresponding result from the "),s("code",[e._v("currentColumnMap")]),e._v(" according to the measurementName. If not, set it to"),s("code",[e._v("null")]),e._v("; if it is "),s("code",[e._v("NonExist")]),e._v("Type is set to"),s("code",[e._v("null")]),e._v(" directly; if it is "),s("code",[e._v("Constant")]),e._v(" type,"),s("code",[e._v("measureName")]),e._v(" is used as the value of this column.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After writing the output data stream according to the transformed "),t("code",[this._v("RowRecord")]),this._v(", the result set can be returned.")])}],!1,null,null,null);t.default=n.exports}}]);