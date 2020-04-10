(window.webpackJsonp=window.webpackJsonp||[]).push([[1017],{1338:function(a,e,t){"use strict";t.r(e);var s=t(1),i=Object(s.a)({},(function(){var a=this.$createElement;this._self._c;return this._m(0)}),[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"查询中的数据修改处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询中的数据修改处理"}},[a._v("#")]),a._v(" 查询中的数据修改处理")]),a._v(" "),t("p",[a._v("背景介绍：")]),a._v(" "),t("p",[a._v("数据删除操作对磁盘数据只记录了 mods 文件，并未真正执行删除逻辑，因此查询时需要考虑数据删除的逻辑。")]),a._v(" "),t("p",[a._v("如果一个文件中有数据被删除了，将删除操作记录到 mods 文件中。记录三列：删除的时间序列，删除范围的最大时间点，删除操作对应的版本。")]),a._v(" "),t("h2",{attrs:{id:"相关类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关类"}},[a._v("#")]),a._v(" 相关类")]),a._v(" "),t("p",[a._v("mods 文件: org.apache.iotdb.db.engine.modification.ModificationFile")]),a._v(" "),t("p",[a._v("删除操作: org.apache.iotdb.db.engine.modification.Modification")]),a._v(" "),t("h2",{attrs:{id:"查询流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询流程"}},[a._v("#")]),a._v(" 查询流程")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7240743/78339324-deca5d80-75c6-11ea-8fa8-dbd94232b756.png",alt:""}})]),a._v(" "),t("p",[a._v("查询时每个时间序列会单独处理。针对一个时间序列，由大到小有 5 个层次：TsFileResource -> TimeseriesMetadata -> ChunkMetadata -> IPageReader -> BatchData")]),a._v(" "),t("ul",[t("li",[a._v("TsFileResource -> TimeseriesMetadata")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 只要这个时间序列有对应的删除操作，就标记 TimeseriesMetadata 中的统计信息不可用\nFileLoaderUtils.loadTimeseriesMetadata()\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("TimeseriesMetadata -> List<ChunkMetadata>")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 对于每个 ChunkMetadata，找到比其 version 大的所有删除操作中最大时间戳, 设置到  ChunkMetadata 的 deleteAt 中，并标记 统计信息不可用\nFileLoaderUtils.loadChunkMetadataList()\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("对于以上示例，读取到的 ChunkMetadataList 为")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://user-images.githubusercontent.com/7240743/78339335-e427a800-75c6-11ea-815f-16dc5b6ebfa3.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("ChunkMetadata -> List<IPageReader>")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 跳过被完全删除的 Page，将 deleteAt 设置到 PageReader 里，将数据被部分删除的 page 标记统计信息不可用\nFileLoaderUtils.loadPageReaderList()\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("ul",[t("li",[a._v("IPageReader -> BatchData")])]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("// 对于磁盘数据，跳过被删除的和过滤掉的，对于内存数据，跳过被过滤掉的\nIPageReader.getAllSatisfiedPageData()\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])])}],!1,null,null,null);e.default=i.exports}}]);