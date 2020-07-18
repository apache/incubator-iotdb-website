(window.webpackJsonp=window.webpackJsonp||[]).push([[940],{1500:function(t,e,l){"use strict";l.r(e);var _=l(69),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"status-codes"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#status-codes"}},[t._v("#")]),t._v(" Status Codes")]),t._v(" "),l("p",[t._v("在最新版本中引入了"),l("strong",[t._v("状态码")]),t._v("这一概念。例如，因为IoTDB需要在写入数据之前首先注册时间序列，一种可能的解决方案是：")]),t._v(" "),l("div",{staticClass:"language- line-numbers-mode"},[l("pre",{pre:!0,attrs:{class:"language-text"}},[l("code",[t._v('try {\n    writeData();\n} catch (SQLException e) {\n  // the most case is that the time series does not exist\n  if (e.getMessage().contains("exist")) {\n      //However, using the content of the error message is not so efficient\n      registerTimeSeries();\n      //write data once again\n      writeData();\n  }\n}\n\n')])]),t._v(" "),l("div",{staticClass:"line-numbers-wrapper"},[l("span",{staticClass:"line-number"},[t._v("1")]),l("br"),l("span",{staticClass:"line-number"},[t._v("2")]),l("br"),l("span",{staticClass:"line-number"},[t._v("3")]),l("br"),l("span",{staticClass:"line-number"},[t._v("4")]),l("br"),l("span",{staticClass:"line-number"},[t._v("5")]),l("br"),l("span",{staticClass:"line-number"},[t._v("6")]),l("br"),l("span",{staticClass:"line-number"},[t._v("7")]),l("br"),l("span",{staticClass:"line-number"},[t._v("8")]),l("br"),l("span",{staticClass:"line-number"},[t._v("9")]),l("br"),l("span",{staticClass:"line-number"},[t._v("10")]),l("br"),l("span",{staticClass:"line-number"},[t._v("11")]),l("br"),l("span",{staticClass:"line-number"},[t._v("12")]),l("br")])]),l("p",[t._v("利用状态码，我们就可以不必写诸如"),l("code",[t._v('if (e.getErrorMessage().contains("exist"))')]),t._v("的代码，只需要使用"),l("code",[t._v("e.getStatusType().getCode() == TSStatusCode.TIME_SERIES_NOT_EXIST_ERROR.getStatusCode()")]),t._v("。")]),t._v(" "),l("p",[t._v("这里是状态码和相对应信息的列表：")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("状态码")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("状态类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("状态信息")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("200")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SUCCESS_STATUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("201")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STILL_EXECUTING_STATUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("202")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("INVALID_HANDLE_STATUS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("203")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("INCOMPATIBLE_VERSION")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("版本不兼容")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("298")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NODE_DELETE_FAILED_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("删除节点失败")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("299")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ALIAS_ALREADY_EXIST_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("路径别名已经存在")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("300")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PATH_ALREADY_EXIST_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("路径已经存在")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("301")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PATH_NOT_EXIST_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("路径不存在")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("302")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UNSUPPORTED_FETCH_METADATA_OPERATION_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("不支持的获取元数据操作")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("303")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("METADATA_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("处理元数据错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("305")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("OUT_OF_TTL_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("插入时间少于TTL时间边界")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("306")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CONFIG_ADJUSTER")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB系统负载过大")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("307")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("MERGE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("合并错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("308")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SYSTEM_CHECK_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("系统检查错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("309")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SYNC_DEVICE_OWNER_CONFLICT_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("回传设备冲突错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("310")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SYNC_CONNECTION_EXCEPTION")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("回传连接错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("311")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STORAGE_GROUP_PROCESSOR_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("存储组处理器相关错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("312")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STORAGE_GROUP_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("存储组相关错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("313")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("STORAGE_ENGINE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("存储引擎相关错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("314")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TSFILE_PROCESSOR_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("TsFile处理器相关错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("315")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PATH_ILLEGAL")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("路径不合法")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("316")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("LOAD_FILE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("加载文件错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("400")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("EXECUTE_STATEMENT_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("执行语句错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("401")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SQL_PARSE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SQL语句分析错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("402")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("GENERATE_TIME_ZONE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("生成时区错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("403")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SET_TIME_ZONE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("设置时区错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("404")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NOT_STORAGE_GROUP_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("操作对象不是存储组")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("405")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("QUERY_NOT_ALLOWED")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查询语句不允许")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("406")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("AST_FORMAT_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("AST格式相关错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("407")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("LOGICAL_OPERATOR_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑符相关错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("408")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("LOGICAL_OPTIMIZE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑优化相关错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("409")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UNSUPPORTED_FILL_TYPE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("不支持的填充类型")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("410")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PATH_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("路径相关错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("411")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("QUERY_PROCESS_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("查询处理相关错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("412")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WRITE_PROCESS_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("写入相关错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("500")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("INTERNAL_SERVER_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("服务器内部错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("501")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("CLOSE_OPERATION_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("关闭操作错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("502")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("READ_ONLY_SYSTEM_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("系统只读")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("503")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("DISK_SPACE_INSUFFICIENT_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("磁盘空间不足")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("504")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("START_UP_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("启动错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("505")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("SHUT_DOWN_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("关机错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("506")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("MULTIPLE_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("多行语句执行错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("600")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("WRONG_LOGIN_PASSWORD_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("用户名或密码错误")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("601")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NOT_LOGIN_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("没有登录")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("602")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("NO_PERMISSION_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("没有操作权限")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("603")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UNINITIALIZED_AUTH_ERROR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("授权人未初始化")])])])]),t._v(" "),l("blockquote",[l("p",[t._v("在最新版本中，我们重构了IoTDB的异常类。通过将错误信息统一提取到异常类中，并为所有异常添加不同的错误代码，从而当捕获到异常并引发更高级别的异常时，错误代码将保留并传递，以便用户了解详细的错误原因。\n除此之外，我们添加了一个基础异常类“ProcessException”，由所有异常扩展。")])])])}),[],!1,null,null,null);e.default=a.exports}}]);