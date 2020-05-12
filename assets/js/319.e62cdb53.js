(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{778:function(a,e,s){"use strict";s.r(e);var t=s(49),r=Object(t.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"查询基础组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询基础组件"}},[a._v("#")]),a._v(" 查询基础组件")]),a._v(" "),s("h2",{attrs:{id:"设计原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计原理"}},[a._v("#")]),a._v(" 设计原理")]),a._v(" "),s("p",[a._v("IoTDB server 模块共提供 3 种不同形式的针对单个时间序列的读取接口，以支持不同形式的查询。")]),a._v(" "),s("ul",[s("li",[a._v("原始数据查询接口，返回 BatchData，可带时间过滤条件或值过滤条件，两种过滤不可同时存在。")]),a._v(" "),s("li",[a._v("聚合查询接口 （主要用于聚合查询和降采样查询）")]),a._v(" "),s("li",[a._v("按递增时间戳查询对应值的接口（主要用于带值过滤的查询）")])]),a._v(" "),s("h2",{attrs:{id:"相关接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关接口"}},[a._v("#")]),a._v(" 相关接口")]),a._v(" "),s("p",[a._v("以上三种读取单个时间序列数据的方式对应代码里的三个接口")]),a._v(" "),s("h3",{attrs:{id:"org-apache-iotdb-tsfile-read-reader-ibatchreader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-tsfile-read-reader-ibatchreader"}},[a._v("#")]),a._v(" org.apache.iotdb.tsfile.read.reader.IBatchReader")]),a._v(" "),s("h4",{attrs:{id:"主要方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要方法"}},[a._v("#")]),a._v(" 主要方法")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 判断是否还有 BatchData\nboolean hasNextBatch() throws IOException;\n\n// 获得下一个 BatchData，并把游标后移\nBatchData nextBatch() throws IOException;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h4",{attrs:{id:"使用流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用流程"}},[a._v("#")]),a._v(" 使用流程")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("while (batchReader.hasNextBatch()) {\n\tBatchData batchData = batchReader.nextBatch();\n\t\n\t// use batchData to do some work\n\t...\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-series-iaggregatereader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-series-iaggregatereader"}},[a._v("#")]),a._v(" org.apache.iotdb.db.query.reader.series.IAggregateReader")]),a._v(" "),s("h4",{attrs:{id:"主要方法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要方法-2"}},[a._v("#")]),a._v(" 主要方法")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 判断是否还有 Chunk\nboolean hasNextChunk() throws IOException;\n\n// 判断是否能够使用当前 Chunk 的统计信息\nboolean canUseCurrentChunkStatistics();\n\n// 获得当前 Chunk 的统计信息\nStatistics currentChunkStatistics();\n\n// 跳过当前 Chunk\nvoid skipCurrentChunk();\n\n// 判断当前Chunk是否还有下一个 Page\nboolean hasNextPage() throws IOException;\n\n// 判断能否使用当前 Page 的统计信息\nboolean canUseCurrentPageStatistics() throws IOException;\n\n// 获得当前 Page 的统计信息\nStatistics currentPageStatistics() throws IOException;\n\n// 跳过当前的 Page\nvoid skipCurrentPage();\n\n// 获得当前 Page 的数据\nBatchData nextPage() throws IOException;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br")])]),s("h4",{attrs:{id:"一般使用流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般使用流程"}},[a._v("#")]),a._v(" 一般使用流程")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("while (aggregateReader.hasNextChunk()) {\n  if (aggregateReader.canUseCurrentChunkStatistics()) {\n    Statistics chunkStatistics = aggregateReader.currentChunkStatistics();\n    \n    // 用 chunk 层的统计信息计算\n    ...\n    \n    aggregateReader.skipCurrentChunk();\n    continue;\n  }\n  \n  // 把当前 chunk 中的 page 消耗完\n  while (aggregateReader.hasNextPage()) {\n\t if (aggregateReader.canUseCurrentPageStatistics()) {\n\t   // 可以用统计信息\n\t   Statistics pageStatistic = aggregateReader.currentPageStatistics();\n\t   \n\t   // 用 page 层的统计信息计算\n\t   ...\n\t  \n\t   aggregateReader.skipCurrentPage();\n\t   continue;\n\t } else {\n\t   // 不能用统计信息，需要用数据计算\n\t   BatchData batchData = aggregateReader.nextOverlappedPage();\n\t   \n\t   // 用 batchData 计算\n\t   ...\n\t }\n  }\n}\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br")])]),s("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-ireaderbytimestamp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-ireaderbytimestamp"}},[a._v("#")]),a._v(" org.apache.iotdb.db.query.reader.IReaderByTimestamp")]),a._v(" "),s("h4",{attrs:{id:"主要方法-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要方法-3"}},[a._v("#")]),a._v(" 主要方法")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 得到给定时间戳的值，如果不存在返回 null（要求传入的 timestamp 是递增的）\nObject getValueInTimestamp(long timestamp) throws IOException;\n\n// 给定一批递增时间戳的值，返回一批结果（减少方法调用次数）\nObject[] getValuesInTimestamps(long[] timestamps) throws IOException;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h4",{attrs:{id:"一般使用流程-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一般使用流程-2"}},[a._v("#")]),a._v(" 一般使用流程")]),a._v(" "),s("p",[a._v("该接口在带值过滤的查询中被使用，TimeGenerator生成时间戳后，使用该接口获得该时间戳对应的value")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Object value = readerByTimestamp.getValueInTimestamp(timestamp);\n\nor\n\nObject[] values = readerByTimestamp.getValueInTimestamp(timestamps);\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h2",{attrs:{id:"具体实现类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#具体实现类"}},[a._v("#")]),a._v(" 具体实现类")]),a._v(" "),s("p",[a._v("上述三个接口都有其对应的实现类，由于以上三种查询有共性，我们设计了一个基础的 SeriesReader 工具类，封装了对于一个时间序列读取操作的基本方法，帮助实现以上三种接口。下面首先介绍 SeriesReader 的设计原理，然后再依次介绍三个接口的具体实现。")]),a._v(" "),s("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-series-seriesreader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-series-seriesreader"}},[a._v("#")]),a._v(" org.apache.iotdb.db.query.reader.series.SeriesReader")]),a._v(" "),s("h4",{attrs:{id:"设计思想"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计思想"}},[a._v("#")]),a._v(" 设计思想")]),a._v(" "),s("p",[a._v("背景知识：TsFile 文件（TsFileResource）解开后可以得到 ChunkMetadata，ChunkMetadata 解开后可以得到一堆 PageReader，PageReader 可以直接返回 BatchData 数据点。")]),a._v(" "),s("p",[a._v("为了支持以上三种接口")]),a._v(" "),s("p",[a._v("数据按照粒度从大到小分成四种：文件，Chunk，Page，相交数据点。在原始数据查询中，最大的数据块返回粒度是一个 page，如果一个 page 和其他 page 由于乱序写入相互覆盖了，就解开成数据点做合并。聚合查询中优先使用 Chunk 的统计信息，其次是 Page 的统计信息，最后是相交数据点。")]),a._v(" "),s("p",[a._v("设计原则是能用粒度大的就不用粒度小的。")]),a._v(" "),s("p",[a._v("首先介绍一下SeriesReader里的几个重要字段")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("\n/*\n * 文件层\n */\nprivate final List<TsFileResource> seqFileResource;\n\t顺序文件列表，因为顺序文件本身就保证有序，且时间戳互不重叠，只需使用List进行存储\n\t\nprivate final PriorityQueue<TsFileResource> unseqFileResource;\n\t乱序文件列表，因为乱序文件互相之间不保证顺序性，且可能有重叠，为了保证顺序，使用优先队列进行存储\n\t\n/*\n * chunk 层\n * \n * 三个字段之间数据永远不重复，first 永远是第一个（开始时间最小）\n */\nprivate ChunkMetaData firstChunkMetaData;\n\t填充 chunk 层时优先填充此字段，保证这个 chunk 具有当前最小开始时间\n\t\nprivate final List<ChunkMetaData> seqChunkMetadatas;\n\t顺序文件解开后得到的 ChunkMetaData 存放在此，本身有序且互不重叠，所以使用 List 存储\n\nprivate final PriorityQueue<ChunkMetaData> unseqChunkMetadatas;\n\t乱序文件解开后得到的 ChunkMetaData 存放在此，互相之间可能有重叠，为了保证顺序，使用优先队列进行存储\n\t\n/*\n * page 层\n *\n * 两个字段之间数据永远不重复，first 永远是第一个（开始时间最小）\n */ \nprivate VersionPageReader firstPageReader;\n\t开始时间最小的 page reader\n\t\nprivate PriorityQueue<VersionPageReader> cachedPageReaders;\n\t当前获得的所有 page reader，按照每个 page 的起始时间进行排序\n\t\n/*\n * 相交数据点层\n */ \nprivate PriorityMergeReader mergeReader;\n\t本质上是多个带优先级的 page，按时间戳从低到高输出数据点，时间戳相同时，保留优先级高的\n\n/*\n * 相交数据点产出结果的缓存\n */ \nprivate boolean hasCachedNextOverlappedPage;\n\t是否缓存了下一个batch\n\t\nprivate BatchData cachedBatchData;\n\t缓存的下一个batch的引用\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br"),s("span",{staticClass:"line-number"},[a._v("38")]),s("br"),s("span",{staticClass:"line-number"},[a._v("39")]),s("br"),s("span",{staticClass:"line-number"},[a._v("40")]),s("br"),s("span",{staticClass:"line-number"},[a._v("41")]),s("br"),s("span",{staticClass:"line-number"},[a._v("42")]),s("br"),s("span",{staticClass:"line-number"},[a._v("43")]),s("br"),s("span",{staticClass:"line-number"},[a._v("44")]),s("br"),s("span",{staticClass:"line-number"},[a._v("45")]),s("br"),s("span",{staticClass:"line-number"},[a._v("46")]),s("br"),s("span",{staticClass:"line-number"},[a._v("47")]),s("br"),s("span",{staticClass:"line-number"},[a._v("48")]),s("br"),s("span",{staticClass:"line-number"},[a._v("49")]),s("br")])]),s("p",[a._v("下面介绍一下SeriesReader里的重要方法")]),a._v(" "),s("h4",{attrs:{id:"hasnextchunk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasnextchunk"}},[a._v("#")]),a._v(" hasNextChunk()")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("主要功能：判断该时间序列还有没有下一个chunk。")])]),a._v(" "),s("li",[s("p",[a._v("约束：在调用这个方法前，需要保证 "),s("code",[a._v("SeriesReader")]),a._v(" 内已经没有 page 和 数据点 层级的数据了，也就是之前解开的 chunk 都消耗完了。")])]),a._v(" "),s("li",[s("p",[a._v("实现：如果 "),s("code",[a._v("firstChunkMetaData")]),a._v(" 不为空，则代表当前已经缓存了第一个 "),s("code",[a._v("ChunkMetaData")]),a._v("，且未被使用，直接返回"),s("code",[a._v("true")]),a._v("；")]),a._v(" "),s("p",[a._v("尝试去解开第一个顺序文件和第一个乱序文件，填充 chunk 层。并解开与 "),s("code",[a._v("firstChunkMetadata")]),a._v(" 相重合的所有文件。")])])]),a._v(" "),s("h4",{attrs:{id:"ischunkoverlapped"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ischunkoverlapped"}},[a._v("#")]),a._v(" isChunkOverlapped()")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("主要功能：判断当前的 chunk 有没有与其他 Chunk 有重叠")])]),a._v(" "),s("li",[s("p",[a._v("约束：在调用这个方法前，需要保证 chunk 层已经缓存了 "),s("code",[a._v("firstChunkMetadata")]),a._v("，也就是调用了 hasNextChunk() 并且为 true。")])]),a._v(" "),s("li",[s("p",[a._v("实现：直接把 "),s("code",[a._v("firstChunkMetadata")]),a._v(" 与 "),s("code",[a._v("seqChunkMetadatas")]),a._v(" 和 "),s("code",[a._v("unseqChunkMetadatas")]),a._v(" 相比较。因为此前已经保证所有和 "),s("code",[a._v("firstChunkMetadata")]),a._v(" 相交的文件都被解开了。")])])]),a._v(" "),s("h4",{attrs:{id:"currentchunkstatistics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#currentchunkstatistics"}},[a._v("#")]),a._v(" currentChunkStatistics()")]),a._v(" "),s("p",[a._v("返回 "),s("code",[a._v("firstChunkMetaData")]),a._v(" 的统计信息。")]),a._v(" "),s("h4",{attrs:{id:"skipcurrentchunk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skipcurrentchunk"}},[a._v("#")]),a._v(" skipCurrentChunk()")]),a._v(" "),s("p",[a._v("跳过当前 chunk。只需要将"),s("code",[a._v("firstChunkMetaData")]),a._v("置为"),s("code",[a._v("null")]),a._v("。")]),a._v(" "),s("h4",{attrs:{id:"hasnextpage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasnextpage"}},[a._v("#")]),a._v(" hasNextPage()")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("主要功能：判断 SeriesReader 中还有没有已经解开的 page，如果有相交的 page，就构造 "),s("code",[a._v("cachedBatchData")]),a._v(" 并缓存，否则缓存 "),s("code",[a._v("firstPageReader")]),a._v("。")])]),a._v(" "),s("li",[s("p",[a._v("实现：如果已经缓存了 "),s("code",[a._v("cachedBatchData")]),a._v(" 就直接返回。如果有相交数据点，就构造 "),s("code",[a._v("cachedBatchData")]),a._v("。如果已经缓存了 "),s("code",[a._v("firstPageReader")]),a._v("，就直接返回。")]),a._v(" "),s("p",[a._v("如果当前的 "),s("code",[a._v("firstChunkMetadata")]),a._v(" 还没有解开，就解开与之重叠的所有 ChunkMetadata，构造 firstPageReader。")]),a._v(" "),s("p",[a._v("判断，如果 "),s("code",[a._v("firstPageReader")]),a._v(" 和 "),s("code",[a._v("cachedPageReaders")]),a._v(" 相交，则构造 "),s("code",[a._v("cachedBatchData")]),a._v("，否则直接返回。")])])]),a._v(" "),s("h4",{attrs:{id:"ispageoverlapped"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ispageoverlapped"}},[a._v("#")]),a._v(" isPageOverlapped()")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("主要功能：判断当前的 page 有没有与其他 page 有重叠")])]),a._v(" "),s("li",[s("p",[a._v("约束：在调用这个方法前，需要保证调用了 hasNextPage() 并且为 true。也就是，有可能缓存了一个相交的 "),s("code",[a._v("cachedBatchData")]),a._v("，或者缓存了不相交的 "),s("code",[a._v("firstPageReader")]),a._v("。")])]),a._v(" "),s("li",[s("p",[a._v("实现：先判断有没有 "),s("code",[a._v("cachedBatchData")]),a._v("，如果没有，就说明当前 page 不相交，则 "),s("code",[a._v("mergeReader")]),a._v(" 里没数据。再判断 "),s("code",[a._v("firstPageReader")]),a._v(" 是否与 "),s("code",[a._v("cachedPageReaders")]),a._v(" 中的 page 相交。")])])]),a._v(" "),s("h4",{attrs:{id:"currentpagestatistics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#currentpagestatistics"}},[a._v("#")]),a._v(" currentPageStatistics()")]),a._v(" "),s("p",[a._v("返回 "),s("code",[a._v("firstPageReader")]),a._v(" 的统计信息。")]),a._v(" "),s("h4",{attrs:{id:"skipcurrentpage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#skipcurrentpage"}},[a._v("#")]),a._v(" skipCurrentPage()")]),a._v(" "),s("p",[a._v("跳过当前Page。只需要将 "),s("code",[a._v("firstPageReader")]),a._v(" 置为 null。")]),a._v(" "),s("h4",{attrs:{id:"nextpage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nextpage"}},[a._v("#")]),a._v(" nextPage()")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("主要功能：返回下一个相交或不想交的 page")])]),a._v(" "),s("li",[s("p",[a._v("约束：在调用这个方法前，需要保证调用了 hasNextPage() 并且为 true。也就是，有可能缓存了一个相交的 "),s("code",[a._v("cachedBatchData")]),a._v("，或者缓存了不相交的 "),s("code",[a._v("firstPageReader")]),a._v("。")])]),a._v(" "),s("li",[s("p",[a._v("实现：如果 "),s("code",[a._v("hasCachedNextOverlappedPage")]),a._v(" 为 true，说明缓存了一个相交的 page，直接返回 "),s("code",[a._v("cachedBatchData")]),a._v("。否则当前 page 不相交，直接从 firstPageReader 里拿当前 page 的数据。")])])]),a._v(" "),s("h4",{attrs:{id:"hasnextoverlappedpage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hasnextoverlappedpage"}},[a._v("#")]),a._v(" hasNextOverlappedPage()")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("主要功能：内部方法，用来判断当前有没有重叠的数据，并且构造相交的 page 并缓存。")])]),a._v(" "),s("li",[s("p",[a._v("实现：如果 "),s("code",[a._v("hasCachedNextOverlappedPage")]),a._v(" 为 "),s("code",[a._v("true")]),a._v("，直接返回 "),s("code",[a._v("true")]),a._v("。")]),a._v(" "),s("p",[a._v("否则，先调用 "),s("code",[a._v("tryToPutAllDirectlyOverlappedPageReadersIntoMergeReader()")]),a._v(" 方法，将 "),s("code",[a._v("cachedPageReaders")]),a._v(" 中所有与 "),s("code",[a._v("firstPageReader")]),a._v(" 有重叠的放进 "),s("code",[a._v("mergeReader")]),a._v(" 里。"),s("code",[a._v("mergeReader")]),a._v(" 里维护了一个 "),s("code",[a._v("currentLargestEndTime")]),a._v(" 变量，每次添加进新的 Reader 时被更新，用以记录当前添加进 "),s("code",[a._v("mergeReader")]),a._v(" 的 page 的最大结束时间。\t\n然后先从"),s("code",[a._v("mergeReader")]),a._v("里取出当前最大的结束时间，作为第一批数据的结束时间，记为"),s("code",[a._v("currentPageEndTime")]),a._v("。接着去遍历"),s("code",[a._v("mergeReader")]),a._v("，直到当前的时间戳大于"),s("code",[a._v("currentPageEndTime")]),a._v("。")]),a._v(" "),s("p",[a._v("每从 mergeReader 移出一个点前，我们先要判断是否有与当前时间戳重叠的file或者chunk或者page（这里之所以还要再做一次判断，是因为，比如当前page是1-30，和他直接相交的page是20-50，还有一个page是40-60，每取一个点判断一次是想把40-60解开），如果有，解开相应的file或者chunk或者page，并将其放入"),s("code",[a._v("mergeReader")]),a._v("。完成重叠的判断后，从"),s("code",[a._v("mergeReader")]),a._v("中取出相应数据。")]),a._v(" "),s("p",[a._v("完成迭代后将获得数据缓存在 "),s("code",[a._v("cachedBatchData")]),a._v(" 中，并将 "),s("code",[a._v("hasCachedNextOverlappedPage")]),a._v(" 置为 "),s("code",[a._v("true")]),a._v("。")])])]),a._v(" "),s("h4",{attrs:{id:"nextoverlappedpage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nextoverlappedpage"}},[a._v("#")]),a._v(" nextOverlappedPage()")]),a._v(" "),s("p",[a._v("将缓存的"),s("code",[a._v("cachedBatchData")]),a._v("返回，并将"),s("code",[a._v("hasCachedNextOverlappedPage")]),a._v("置为"),s("code",[a._v("false")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-series-seriesrawdatabatchreader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-series-seriesrawdatabatchreader"}},[a._v("#")]),a._v(" org.apache.iotdb.db.query.reader.series.SeriesRawDataBatchReader")]),a._v(" "),s("p",[s("code",[a._v("SeriesRawDataBatchReader")]),a._v("实现了"),s("code",[a._v("IBatchReader")]),a._v("。")]),a._v(" "),s("p",[a._v("其方法"),s("code",[a._v("hasNextBatch()")]),a._v("的核心判断流程是")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("// 有缓存了 batch，直接返回\nif (hasCachedBatchData) {\n  return true;\n}\n\n/*\n * 如果 SeriesReader 里还有 page，返回 page\n */\nif (readPageData()) {\n  hasCachedBatchData = true;\n  return true;\n}\n\n/*\n * 如果有 chunk，并且有 page，返回 page\n */\nwhile (seriesReader.hasNextChunk()) {\n  if (readPageData()) {\n    hasCachedBatchData = true;\n    return true;\n  }\n}\nreturn hasCachedBatchData;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br")])]),s("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-series-seriesreaderbytimestamp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-series-seriesreaderbytimestamp"}},[a._v("#")]),a._v(" org.apache.iotdb.db.query.reader.series.SeriesReaderByTimestamp")]),a._v(" "),s("p",[s("code",[a._v("SeriesReaderByTimestamp")]),a._v(" 实现了 "),s("code",[a._v("IReaderByTimestamp")]),a._v("。")]),a._v(" "),s("p",[a._v("设计思想：当给一个时间戳要查询值时，这个时间戳可以转化为一个 time >= x 的过滤条件。不断更新这个过滤条件，并且跳过不满足的文件，chunk 和 page。")]),a._v(" "),s("p",[a._v("实现方式：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("/*\n * 优先判断下一个 page 有没有当前所查时间，能跳过就跳过\n */\nif (readPageData(timestamp)) {\n  return true;\n}\n\n/*\n * 判断下一个 chunk 有没有当前所查时间，能跳过就跳过\n */\nwhile (seriesReader.hasNextChunk()) {\n  Statistics statistics = seriesReader.currentChunkStatistics();\n  if (!satisfyTimeFilter(statistics)) {\n    seriesReader.skipCurrentChunk();\n    continue;\n  }\n  /*\n   * chunk 不能跳过，继续到 chunk 里检查 page\n   */\n  if (readPageData(timestamp)) {\n    return true;\n  }\n}\nreturn false;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])]),s("h3",{attrs:{id:"org-apache-iotdb-db-query-reader-series-seriesaggregatereader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-reader-series-seriesaggregatereader"}},[a._v("#")]),a._v(" org.apache.iotdb.db.query.reader.series.SeriesAggregateReader")]),a._v(" "),s("p",[s("code",[a._v("SeriesAggregateReader")]),a._v(" 实现了 "),s("code",[a._v("IAggregateReader")])]),a._v(" "),s("p",[s("code",[a._v("IAggregateReader")]),a._v("的大部分接口方法都在"),s("code",[a._v("SeriesReader")]),a._v("有对应实现，除了"),s("code",[a._v("canUseCurrentChunkStatistics()")]),a._v("和"),s("code",[a._v("canUseCurrentPageStatistics()")]),a._v("两个方法。")]),a._v(" "),s("h4",{attrs:{id:"canusecurrentchunkstatistics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canusecurrentchunkstatistics"}},[a._v("#")]),a._v(" canUseCurrentChunkStatistics()")]),a._v(" "),s("p",[a._v("设计思想：可以用统计信息的条件是当前 chunk 不重叠，并且满足过滤条件。")]),a._v(" "),s("p",[a._v("先调用"),s("code",[a._v("SeriesReader")]),a._v("的"),s("code",[a._v("currentChunkStatistics()")]),a._v("方法，获得当前chunk的统计信息，再调用"),s("code",[a._v("SeriesReader")]),a._v("的"),s("code",[a._v("isChunkOverlapped()")]),a._v("方法判断当前chunk是否重叠，如果当前chunk不重叠，且其统计信息满足过滤条件，则返回"),s("code",[a._v("true")]),a._v("，否则返回"),s("code",[a._v("false")]),a._v("。")]),a._v(" "),s("h4",{attrs:{id:"canusecurrentpagestatistics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#canusecurrentpagestatistics"}},[a._v("#")]),a._v(" canUseCurrentPageStatistics()")]),a._v(" "),s("p",[a._v("设计思想：可以用统计信息的条件是当前 page 不重叠，并且满足过滤条件。")]),a._v(" "),s("p",[a._v("先调用"),s("code",[a._v("SeriesReader")]),a._v("的 "),s("code",[a._v("currentPageStatistics()")]),a._v(" 方法，获得当前page的统计信息，再调用"),s("code",[a._v("SeriesReader")]),a._v(" 的 "),s("code",[a._v("isPageOverlapped()")]),a._v(" 方法判断当前 page 是否重叠，如果当前page不重叠，且其统计信息满足过滤条件，则返回"),s("code",[a._v("true")]),a._v("，否则返回"),s("code",[a._v("false")]),a._v("。")])])}),[],!1,null,null,null);e.default=r.exports}}]);