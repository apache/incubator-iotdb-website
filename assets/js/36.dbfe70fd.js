(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{594:function(e,a,t){"use strict";t.r(a);var s=t(69),i=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"last-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-query"}},[e._v("#")]),e._v(" Last query")]),e._v(" "),t("p",[e._v("The main logic of Last query is in LastQueryExecutor")]),e._v(" "),t("ul",[t("li",[e._v("org.apache.iotdb.db.query.executor.LastQueryExecutor")])]),e._v(" "),t("p",[e._v("The Last query executes the "),t("code",[e._v("calculateLastPairForOneSeries")]),e._v(" method for each specified time series.")]),e._v(" "),t("h2",{attrs:{id:"read-mnode-cache-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#read-mnode-cache-data"}},[e._v("#")]),e._v(" Read MNode cache data")]),e._v(" "),t("p",[e._v("We add a Last data cache to the MNode structure corresponding to the time series that needs to be queried.")]),e._v(" "),t("p",[t("code",[e._v("calculateLastPairForOneSeries")]),e._v(" method For the last query of a certain time series, first try to read the cached data in the MNode.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("try {\n  node = IoTDB.metaManager.getDeviceNodeWithAutoCreateStorageGroup(seriesPath.toString());\n} catch (MetadataException e) {\n  throw new QueryProcessException(e);\n}\nif (((LeafMNode) node).getCachedLast() != null) {\n  return ((LeafMNode) node).getCachedLast();\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("If it is found that the cache has not been written, execute the following standard query process to read the TsFile data.")]),e._v(" "),t("h2",{attrs:{id:"last-standard-query-process"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-standard-query-process"}},[e._v("#")]),e._v(" Last standard query process")]),e._v(" "),t("p",[e._v("Last standard query process needs to scan sequential files and unsequential files in a reverse order to get query result, and finally write the query result back to the MNode cache.  In the algorithm, sequential files and  unsequential  files are processed separately.")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("The sequential files are sorted by its writing time, so use the "),t("code",[e._v("loadTimeSeriesMetadata()")]),e._v(" method directly to get the last valid "),t("code",[e._v("TimeseriesMetadata")]),e._v(". If the statistics of "),t("code",[e._v("TimeseriesMetadata")]),e._v(" is available, the Last pair could be returned directly, otherwise we need to call "),t("code",[e._v("loadChunkMetadataList()")]),e._v(" to get the last "),t("code",[e._v("ChunkMetadata")]),e._v(" structure and obtain the Last time-value pair via the statistical data of "),t("code",[e._v("ChunkMetadata")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("for (int i = seqFileResources.size() - 1; i >= 0; i--) {\n    TimeseriesMetadata timeseriesMetadata = FileLoaderUtils.loadTimeSeriesMetadata(\n            seqFileResources.get(i), seriesPath, context, null, sensors);\n    if (timeseriesMetadata != null) {\n      if (!timeseriesMetadata.isModified()) {\n        Statistics timeseriesMetadataStats = timeseriesMetadata.getStatistics();\n        resultPair = constructLastPair(\n                timeseriesMetadataStats.getEndTime(),\n                timeseriesMetadataStats.getLastValue(),\n                tsDataType);\n        break;\n      } else {\n        List<ChunkMetadata> chunkMetadataList = timeseriesMetadata.loadChunkMetadataList();\n        if (!chunkMetadataList.isEmpty()) {\n          ChunkMetadata lastChunkMetaData = chunkMetadataList.get(chunkMetadataList.size() - 1);\n          Statistics chunkStatistics = lastChunkMetaData.getStatistics();\n          resultPair =\n              constructLastPair(\n                  chunkStatistics.getEndTime(), chunkStatistics.getLastValue(), tsDataType);\n          break;\n        }\n      }\n    }\n  }\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br"),t("span",{staticClass:"line-number"},[e._v("22")]),t("br"),t("span",{staticClass:"line-number"},[e._v("23")]),t("br"),t("span",{staticClass:"line-number"},[e._v("24")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("For unsequential files, we need to traverse all valid "),t("code",[e._v("TimeseriesMetadata")]),e._v(" structures and keep updating the current Last timestamp to find the biggest timestamp. It should be noted that when multiple "),t("code",[e._v("ChunkMetadata")]),e._v(" have the same timestamp, we take the data in"),t("code",[e._v("ChunkMatadata")]),e._v(" with the largest "),t("code",[e._v("version")]),e._v(" value as the result of Last.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("long version = 0;\nfor (TsFileResource resource : unseqFileResources) {\n  if (resource.getEndTime(seriesPath.getDevice()) < resultPair.getTimestamp()) {\n    continue;\n  }\n  TimeseriesMetadata timeseriesMetadata =\n      FileLoaderUtils.loadTimeSeriesMetadata(resource, seriesPath, context, null, sensors);\n  if (timeseriesMetadata != null) {\n    for (ChunkMetadata chunkMetaData : timeseriesMetadata.loadChunkMetadataList()) {\n      if (chunkMetaData.getEndTime() > resultPair.getTimestamp()\n          || (chunkMetaData.getEndTime() == resultPair.getTimestamp()\n          && chunkMetaData.getVersion() > version)) {\n        Statistics chunkStatistics = chunkMetaData.getStatistics();\n        resultPair =\n            constructLastPair(\n                chunkStatistics.getEndTime(), chunkStatistics.getLastValue(), tsDataType);\n        version = chunkMetaData.getVersion();\n      }\n    }\n  }\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br"),t("span",{staticClass:"line-number"},[e._v("18")]),t("br"),t("span",{staticClass:"line-number"},[e._v("19")]),t("br"),t("span",{staticClass:"line-number"},[e._v("20")]),t("br"),t("span",{staticClass:"line-number"},[e._v("21")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("Finally write the query results to the MNode's Last cache")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("((LeafMNode) node).updateCachedLast(resultPair, false, Long.MIN_VALUE);\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])])]),e._v(" "),t("h2",{attrs:{id:"last-cache-update-strategy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-cache-update-strategy"}},[e._v("#")]),e._v(" Last cache update strategy")]),e._v(" "),t("p",[e._v("The last cache update logic is located in the "),t("code",[e._v("UpdateCachedLast")]),e._v(" method of"),t("code",[e._v("LeafMNode")]),e._v(". Here, two additional parameters "),t("code",[e._v("highPriorityUpdate")]),e._v(" and"),t("code",[e._v("latestFlushTime")]),e._v(" are introduced.  "),t("code",[e._v("highPriorityUpdate")]),e._v(" is used to indicate whether this update is high priority. Cache updates caused by new data writing are considered high priority updates, and the update cache defaults to low priority updates when querying.  "),t("code",[e._v("latestFlushTime")]),e._v(" is used to record the maximum timestamp of data that has been currently written back to disk.")]),e._v(" "),t("p",[e._v("The cache update strategy is as follows:")]),e._v(" "),t("ol",[t("li",[e._v("When there is no record in the cache, the query results are written directly into the cache for the last data that is queried.")]),e._v(" "),t("li",[e._v("When there is no record in the cache, if the latest data written is a timestamp greater than or equal to "),t("code",[e._v("latestFlushTime")]),e._v(", the written data is written to the cache.")]),e._v(" "),t("li",[e._v("When there are records in the cache, the timestamp of the query or written data is compared with the timestamp in the current cache.  The written data has a high priority, and the cache is updated when the timestamp is not less than the cache record; the data that is queried has a lower priority and must be greater than the timestamp of the cache record to update the cache.")])]),e._v(" "),t("p",[e._v("The specific code is as follows")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public synchronized void updateCachedLast(\n  TimeValuePair timeValuePair, boolean highPriorityUpdate, Long latestFlushedTime) {\n    if (timeValuePair == null || timeValuePair.getValue() == null) return;\n    \n    if (cachedLastValuePair == null) {\n      // If no cached last, (1) a last query (2) an unseq insertion or (3) a seq insertion will update cache.\n      if (!highPriorityUpdate || latestFlushedTime <= timeValuePair.getTimestamp()) {\n        cachedLastValuePair =\n            new TimeValuePair(timeValuePair.getTimestamp(), timeValuePair.getValue());\n      }\n    } else if (timeValuePair.getTimestamp() > cachedLastValuePair.getTimestamp()\n        || (timeValuePair.getTimestamp() == cachedLastValuePair.getTimestamp()\n            && highPriorityUpdate)) {\n      cachedLastValuePair.setTimestamp(timeValuePair.getTimestamp());\n      cachedLastValuePair.setValue(timeValuePair.getValue());\n    }\n}\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br"),t("span",{staticClass:"line-number"},[e._v("14")]),t("br"),t("span",{staticClass:"line-number"},[e._v("15")]),t("br"),t("span",{staticClass:"line-number"},[e._v("16")]),t("br"),t("span",{staticClass:"line-number"},[e._v("17")]),t("br")])])])}),[],!1,null,null,null);a.default=i.exports}}]);