(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{423:function(e,t,a){"use strict";a.r(t);var s=a(45),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"raw-data-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raw-data-query"}},[e._v("#")]),e._v(" Raw data query")]),e._v(" "),a("h2",{attrs:{id:"design-principle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-principle"}},[e._v("#")]),e._v(" Design principle")]),e._v(" "),a("p",[e._v("The raw data query can be divided into two categories based on whether it contains value filtering conditions.  When no value filter is included, it can be divided into two categories based on the result set structure.")]),e._v(" "),a("ul",[a("li",[e._v("No value filter (no filter or only time filter)\n"),a("ul",[a("li",[e._v("Result set aligned by timestamp (default raw data query)")]),e._v(" "),a("li",[e._v("The result set is not aligned with the timestamp (disable align)")])])]),e._v(" "),a("li",[e._v("Include value filters\n"),a("ul",[a("li",[e._v("Result set aligned by timestamp")])])])]),e._v(" "),a("p",[e._v("The above three queries correspond to three different DataSets in the code and encapsulate the execution logic of these three queries.")]),e._v(" "),a("h2",{attrs:{id:"no-value-filter-result-set-aligned-by-timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-value-filter-result-set-aligned-by-timestamp"}},[e._v("#")]),e._v(" No value filter + result set aligned by timestamp")]),e._v(" "),a("h3",{attrs:{id:"org-apache-iotdb-db-query-dataset-rawquerydatasetwithoutvaluefilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-dataset-rawquerydatasetwithoutvaluefilter"}},[e._v("#")]),e._v(" org.apache.iotdb.db.query.dataset.RawQueryDataSetWithoutValueFilter")]),e._v(" "),a("p",[a("code",[e._v("RawQueryDataSetWithoutValueFilter")]),e._v(" implements query logic that has no value filtering conditions and needs to be aligned according to the timestamp.  Although the final query results require that each time series be aligned according to the timestamp, each time series query can be parallelized.  Here, with the idea of a consumer-producer queue, the operation of obtaining data for each time series is decoupled from the operation of finally aligning all time series.  Each time series corresponds to a producer thread and has its corresponding BlockingQueue. The producer task is responsible for reading the corresponding time series data and putting it into the BlockingQueue; there is only one consumer thread responsible for taking out from each time series BlockingQueue.  After the data is aligned with the timestamp, the results are assembled into a TSQueryDataSet and returned.")]),e._v(" "),a("p",[e._v("In specific implementation, considering the resource constraints of the machine, instead of creating a thread for each time series of each query, the thread pool technology is used to submit each time series producer task as a Runnable task  To the thread pool for execution.")]),e._v(" "),a("p",[e._v("The following introduces the producer's code first. It is encapsulated in an internal class ReadTask which is a RawQueryDataSetWithoutValueFilter and implements the Runnable interface.")]),e._v(" "),a("h3",{attrs:{id:"org-apache-iotdb-db-query-dataset-rawquerydatasetwithoutvaluefilter-readtask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-dataset-rawquerydatasetwithoutvaluefilter-readtask"}},[e._v("#")]),e._v(" org.apache.iotdb.db.query.dataset.RawQueryDataSetWithoutValueFilter.ReadTask")]),e._v(" "),a("p",[a("code",[e._v("ReadTask")]),e._v(" has two fields")]),e._v(" "),a("ul",[a("li",[e._v("private final ManagedSeriesReader reader;")]),e._v(" "),a("li",[e._v("private BlockingQueue<BatchData> blockingQueue;")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("ManagedSeriesReader")]),e._v(" interface inherits the IBatchReader interface, which is mainly used to read data from a single time series, and adds the following four methods")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("boolean isManagedByQueryManager();\n\nvoid setManagedByQueryManager(boolean managedByQueryManager);\n\nboolean hasRemaining();\n\nvoid setHasRemaining(boolean hasRemaining);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("The first two methods are used to characterize whether the producer task corresponding to the time series is managed by the query manager, that is, has the producer task exited by itself because the blocking queue is full (the following will explain why it does not block waiting, and  Exit directly); the latter two methods are used to characterize whether there is any data in the reader corresponding to the time series.")]),e._v(" "),a("p",[a("code",[e._v("blockingQueue")]),e._v(" is the blocking queue of the producer task. In fact, the blocking queue will only block unilaterally when the consumer fetches the data. When the producer puts the data, if the queue is full, it will exit directly without blocking.")]),e._v(" "),a("p",[e._v("Let ’s take a look at the "),a("code",[e._v("run ()")]),e._v(" method of "),a("code",[e._v("ReadTask")]),e._v(". The explanation of the execution process is shown in the code in the form of comments.")]),e._v(" "),a("h4",{attrs:{id:"run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run"}},[e._v("#")]),e._v(" run()")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public void run() {\n  try {\n    // The reason for the lock here is to ensure that the judgment of the fullness of the blockingQueue is correctly synchronized.\n    synchronized (reader) {\n      // Because every time a producer task is submitted (whether the producer submits itself recursively or the consumer finds that the producer task exits and submits itself), the queue is checked to see if it is full.  Producer task\n      // So once the producer task is submitted, there must be a free space in the blockingQueue, we do not need to check whether the queue is full\n      // If the reader corresponding to the time series still has data, enter the loop body\n      while (reader.hasNextBatch()) {\n        BatchData batchData = reader.nextBatch();\n        // Since the BatchData obtained may be empty, it needs to iterate to the first BatchData that is not empty\n        if (batchData.isEmpty()) {\n          continue;\n        }\n        // Put the non-empty batchData into the blocking queue. At this time, the blocking queue must be dissatisfied, so it will not block.\n        blockingQueue.put(batchData);\n        // If the blocking queue is still not full, the producer task recursively submits itself to the thread pool for the next batchData\n        if (blockingQueue.remainingCapacity() > 0) {\n          pool.submit(this);\n        }\n        // If the blocking queue is full, the producer task exits and the managedByQueryManager corresponding to the reader is set to false\n        else {\n          reader.setManagedByQueryManager(false);\n        }\n        return;\n      }\n      // The code is executed here, which means that the previous while loop condition is not satisfied, that is, there is no data in the reader corresponding to the time series.\n      // We put a SignalBatchData in the blocking queue to inform consumers that there is no more data in this time series, and there is no need to fetch data from the queue corresponding to this time series\n      blockingQueue.put(SignalBatchData.getInstance());\n      // Set the reader\'s hasRemaining field to false\n      // Inform consumers that they no longer need to submit producer tasks for this time series\n      reader.setHasRemaining(false);\n      // Set the reader\'s managedByQueryManager field to false\n      reader.setManagedByQueryManager(false);\n    }\n  } catch (InterruptedException e) {\n    LOGGER.error("Interrupted while putting into the blocking queue: ", e);\n    Thread.currentThread().interrupt();\n  } catch (IOException e) {\n    LOGGER.error("Something gets wrong while reading from the series reader: ", e);\n  } catch (Exception e) {\n    LOGGER.error("Something gets wrong: ", e);\n  }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br")])]),a("p",[e._v("Next, introduce the code of the consumer. The main logic of the consumer is to take the value from the queue of each time series, align the timestamps, and then piece together the result set.  The alignment of timestamps is mainly achieved through a minimum heap of timestamps. If the timestamp of the time series is equal to the timestamp at the top of the heap, then the value is taken out; otherwise, the time series value under the timestamp is set to "),a("code",[e._v("null")]),e._v(".")]),e._v(" "),a("p",[e._v("First introduce some important fields of consumer tasks")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("TreeSet<Long> timeHeap")]),e._v(" "),a("p",[e._v("The smallest heap of timestamps for timestamp alignment")])]),e._v(" "),a("li",[a("p",[e._v("BlockingQueue<BatchData>[] blockingQueueArray;")]),e._v(" "),a("p",[e._v("An array of blocking queues to store the blocking queues corresponding to each time series")])]),e._v(" "),a("li",[a("p",[e._v("boolean[] noMoreDataInQueueArray")]),e._v(" "),a("p",[e._v("There is no value in the blocking queue to represent a certain time series. If it is false, the consumer will not call the "),a("code",[e._v("take ()")]),e._v(" method to prevent the consumer thread from being blocked.")])]),e._v(" "),a("li",[a("p",[e._v("BatchData[] cachedBatchDataArray")]),e._v(" "),a("p",[e._v("Cache a BatchData fetched from the blocking queue, because the "),a("code",[e._v("BatchData")]),e._v(" from"),a("code",[e._v("take ()")]),e._v("in the blocking queue cannot be consumed all at once, so you need to cache")])])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("init ()")]),e._v(" method was first called in the constructor of the consumer "),a("code",[e._v("RawQueryDataSetWithoutValueFilter")])]),e._v(" "),a("h4",{attrs:{id:"init"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[e._v("#")]),e._v(" init()")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("private void init() throws InterruptedException {\n\ttimeHeap = new TreeSet<>();\n\t// Build producer tasks for each time series\n\tfor (int i = 0; i < seriesReaderList.size(); i++) {\n\t  ManagedSeriesReader reader = seriesReaderList.get(i);\n\t  reader.setHasRemaining(true);\n\t  reader.setManagedByQueryManager(true);\n\t  pool.submit(new ReadTask(reader, blockingQueueArray[i]));\n\t}\n\t// Initialize the minimum heap and fill the cache for each time series\n\tfor (int i = 0; i < seriesReaderList.size(); i++) {\n\t  // Call fillCache (int) method to fill the cache\n\t  fillCache(i);\n\t  // Try to put the current minimum timestamp of each time series into the heap\n\t  if (cachedBatchDataArray[i] != null && cachedBatchDataArray[i].hasCurrent()) {\n\t    long time = cachedBatchDataArray[i].currentTime();\n\t    timeHeap.add(time);\n\t  }\n\t}\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br")])]),a("h4",{attrs:{id:"fillcache-int"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fillcache-int"}},[e._v("#")]),e._v(" fillCache(int)")]),e._v(" "),a("p",[e._v("This method is responsible for fetching data from the blocking queue and filling the cache. For the specific logic, see the note below.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("private void fillCache(int seriesIndex) throws InterruptedException {\n    // Get data from the blocking queue, if there is no data, it will block waiting for data in the queue\n\tBatchData batchData = blockingQueueArray[seriesIndex].take();\n\t// If it is a signal BatchData, set oMoreDataInQueue of the corresponding time series to false\n\tif (batchData instanceof SignalBatchData) {\n\t  noMoreDataInQueueArray[seriesIndex] = true;\n\t}\n\telse {\n\t  // Cache the retrieved BatchData into cachedBatchDataArray\n\t  cachedBatchDataArray[seriesIndex] = batchData;\n\t\n\t  // The reason for locking here is the same as that of the producer task, in order to ensure that the judgment of the fullness of the blockingQueue is correctly synchronized.\n\t  synchronized (seriesReaderList.get(seriesIndex)) {\n\t    // Only when the blocking queue is not full, do we need to determine whether it is necessary to submit the producer task. This also guarantees that the producer task will be submitted if and only if the blocking queue is not full.\n\t    if (blockingQueueArray[seriesIndex].remainingCapacity() > 0) {\n\t      ManagedSeriesReader reader = seriesReaderList.get(seriesIndex);、\n\t      // If the reader of the time series is not managed by the query manager (that is, the producer task exits because the queue is full), and there is still data in the reader, we need to submit the producer task of the time series again\n\t      if (!reader.isManagedByQueryManager() && reader.hasRemaining()) {\n\t        reader.setManagedByQueryManager(true);\n\t        pool.submit(new ReadTask(reader, blockingQueueArray[seriesIndex]));\n\t      }\n\t    }\n\t  }\n\t}\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br")])]),a("p",[e._v("With the data for each time series, the next step is to align the data for each time stamp and assemble the results into a TSQueryDataSet to return.  The logic here is encapsulated in the fillBuffer () method. This method also contains the logic of limit and offset, and the format of the result set. We will not go into details here, but only analyze the process of data reading and time stamp alignment.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("// Fetch the current timestamp from the smallest heap\nlong minTime = timeHeap.pollFirst();\nfor (int seriesIndex = 0; seriesIndex < seriesNum; seriesIndex++) {\n\tif (cachedBatchDataArray[seriesIndex] == null\n\t    || !cachedBatchDataArray[seriesIndex].hasCurrent()\n\t    || cachedBatchDataArray[seriesIndex].currentTime() != minTime) {\n\t  // The time series has no data at the current timestamp and is set to null\n\t  ...\n\t  \n\t} else {\n\t  // The time series has data at the current timestamp, and the data is formatted into a result set format\n\t  TSDataType type = cachedBatchDataArray[seriesIndex].getDataType();\n\t  ...\n\t  \n\t}\n\t\t\n  // Move the batchdata cursor of this time series buffer back\n  cachedBatchDataArray[seriesIndex].next();\n\t\n  // If the currently cached batchdata is empty and the blocking queue still has data, call the fillCache () method again to fill the cache\n  if (!cachedBatchDataArray[seriesIndex].hasCurrent()\n      && !noMoreDataInQueueArray[seriesIndex]) {\n    fillCache(seriesIndex);\n  }\n\t\n  // Try to put the next timestamp of that time series into the smallest heap\n  if (cachedBatchDataArray[seriesIndex].hasCurrent()) {\n    long time = cachedBatchDataArray[seriesIndex].currentTime();\n    timeHeap.add(time);\n  }\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br")])]),a("h2",{attrs:{id:"no-value-filter-result-set-is-not-aligned-by-timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#no-value-filter-result-set-is-not-aligned-by-timestamp"}},[e._v("#")]),e._v(" No value filter + result set is not aligned by timestamp")]),e._v(" "),a("h3",{attrs:{id:"org-apache-iotdb-db-query-dataset-nonalignenginedataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-dataset-nonalignenginedataset"}},[e._v("#")]),e._v(" org.apache.iotdb.db.query.dataset.NonAlignEngineDataSet")]),e._v(" "),a("p",[a("code",[e._v("NonAlignEngineDataSet")]),e._v(" implements query logic that has no value filtering conditions and does not need to be aligned by timestamp.  The query logic here is similar to RawQueryDataSetWithoutValueFilter, but its consumer logic is simpler, because it does not need to perform timestamp alignment.  And each producer task can also do more work, not only can take out BatchData from Reader, but can further say that the taken out BatchData is formatted into the output required by the result set, thereby improving the parallelism of the program.  In this way, the consumer only needs to fetch data from each blocking queue and set it into the corresponding position of TSQueryNonAlignDataSet.")]),e._v(" "),a("p",[e._v("The specific query logic is not repeated here. You can refer to the query logic analysis of RawQueryDataSetWithoutValueFilter.")]),e._v(" "),a("h2",{attrs:{id:"include-value-filter-result-set-aligned-by-timestamp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#include-value-filter-result-set-aligned-by-timestamp"}},[e._v("#")]),e._v(" Include value filter + result set aligned by timestamp")]),e._v(" "),a("h3",{attrs:{id:"org-apache-iotdb-db-query-dataset-enginedatasetwithvaluefilter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#org-apache-iotdb-db-query-dataset-enginedatasetwithvaluefilter"}},[e._v("#")]),e._v(" org.apache.iotdb.db.query.dataset.EngineDataSetWithValueFilter")]),e._v(" "),a("p",[a("code",[e._v("EngineDataSetWithValueFilter")]),e._v(" implements query logic with value filter conditions.")]),e._v(" "),a("p",[e._v("Its query logic is to first generate a timestamp that meets the filtering conditions according to the query conditions, query the value of the projection column by the timestamp that meets the conditions, and then return the result set.  It has four fields")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("private EngineTimeGenerator timeGenerator;")]),e._v(" "),a("p",[e._v("Is used to generate timestamps that satisfy the filter")])]),e._v(" "),a("li",[a("p",[e._v("private List<IReaderByTimestamp> seriesReaderByTimestampList;")]),e._v(" "),a("p",[e._v("Reader for each time series, used to get data based on timestamp")])]),e._v(" "),a("li",[a("p",[e._v("private boolean hasCachedRowRecord;")]),e._v(" "),a("p",[e._v("Whether data rows are currently cached")])]),e._v(" "),a("li",[a("p",[e._v("private RowRecord cachedRowRecord;")]),e._v(" "),a("p",[e._v("Data lines currently cached")])])]),e._v(" "),a("p",[e._v("Its main query logic is encapsulated in the "),a("code",[e._v("cacheRowRecord ()")]),e._v(" method. For detailed analysis, see the comments in the code.")]),e._v(" "),a("h4",{attrs:{id:"cacherowrecord"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cacherowrecord"}},[e._v("#")]),e._v(" cacheRowRecord()")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("private boolean cacheRowRecord() throws IOException {\n   // Determine if there is a next eligible timestamp\n\twhile (timeGenerator.hasNext()) {\n\t  boolean hasField = false;\n\t  // Get the current eligible timestamp\n\t  long timestamp = timeGenerator.next();\n\t  RowRecord rowRecord = new RowRecord(timestamp);\n\t  for (int i = 0; i < seriesReaderByTimestampList.size(); i++) {\n\t    // Root to get the value under the current timestamp of each time series\n\t    IReaderByTimestamp reader = seriesReaderByTimestampList.get(i);\n\t    Object value = reader.getValueInTimestamp(timestamp);\n\t    // Null if the time series has no value under the current timestamp\n\t    if (value == null) {\n\t      rowRecord.addField(null);\n\t    } \n\t    // Otherwise set hasField to true\n\t    else {\n\t      hasField = true;\n\t      rowRecord.addField(value, dataTypes.get(i));\n\t    }\n\t  }\n\t  // If there is a value in any time series under the timestamp, it means that the timestamp is valid, and the data line is cached\n\t  if (hasField) {\n\t    hasCachedRowRecord = true;\n\t    cachedRowRecord = rowRecord;\n\t    break;\n\t  }\n\t}\n\treturn hasCachedRowRecord;\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);