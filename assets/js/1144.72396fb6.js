(window.webpackJsonp=window.webpackJsonp||[]).push([[1144],{1705:function(t,e,v){"use strict";v.r(e);var _=v(69),a=Object(_.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"tsfile层次结构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tsfile层次结构"}},[t._v("#")]),t._v(" TsFile层次结构")]),t._v(" "),v("p",[t._v("这是TsFile文件结构的简要介绍。")]),t._v(" "),v("h1",{attrs:{id:"可变存储"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#可变存储"}},[t._v("#")]),t._v(" 可变存储")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("Big Endian")]),t._v("\n​")]),t._v(" "),v("ul",[v("li",[t._v("例如，"),v("code",[t._v("int")]),t._v(" "),v("code",[t._v("0x8")]),t._v("将被存储为"),v("code",[t._v("00 00 00 08")]),t._v("，而不是"),v("code",[t._v("08 00 00 00")]),t._v("。")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("可变长度的字符串")])]),t._v(" "),v("ul",[v("li",[v("p",[t._v("格式为 "),v("code",[t._v("int size")]),t._v(" 加"),v("code",[t._v("String literal")]),t._v(". 大小可以为零。")])]),t._v(" "),v("li",[v("p",[t._v("大小等于此字符串将占用的字节数，并且可能不等于该字符串的长度。")])]),t._v(" "),v("li",[v("p",[t._v("例如，“ sensor_1”将被存储为"),v("code",[t._v("00 00 00 08")]),t._v("加上“ sensor_1”的编码（ASCII）。")])]),t._v(" "),v("li",[v("p",[t._v("请注意，对于“魔术字符串”（文件签名）“ TsFilev0.8.0”，大小（12）和编码（ASCII）是固定的，因此无需在该字符串文字前放置大小。")])])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("数据类型硬编码")])]),t._v(" "),v("ul",[v("li",[t._v("0: BOOLEAN")]),t._v(" "),v("li",[t._v("1: INT32 ("),v("code",[t._v("int")]),t._v(")")]),t._v(" "),v("li",[t._v("2: INT64 ("),v("code",[t._v("long")]),t._v(")")]),t._v(" "),v("li",[t._v("3: FLOAT")]),t._v(" "),v("li",[t._v("4: DOUBLE")]),t._v(" "),v("li",[t._v("5: TEXT ("),v("code",[t._v("String")]),t._v(")")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("编码类型硬编码")])]),t._v(" "),v("ul",[v("li",[t._v("0: PLAIN")]),t._v(" "),v("li",[t._v("1: PLAIN_DICTIONARY")]),t._v(" "),v("li",[t._v("2: RLE")]),t._v(" "),v("li",[t._v("3: DIFF")]),t._v(" "),v("li",[t._v("4: TS_2DIFF")]),t._v(" "),v("li",[t._v("5: BITMAP")]),t._v(" "),v("li",[t._v("6: GORILLA")]),t._v(" "),v("li",[t._v("7: REGULAR")])])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("压缩类型硬编码")])]),t._v(" "),v("ul",[v("li",[t._v("0: UNCOMPRESSED")]),t._v(" "),v("li",[t._v("1: SNAPPY")])])])]),t._v(" "),v("h1",{attrs:{id:"tsfile概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tsfile概述"}},[t._v("#")]),t._v(" TsFile概述")]),t._v(" "),v("p",[t._v("这是有关TsFile结构的图。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://user-images.githubusercontent.com/40447846/61616997-6fad1300-ac9c-11e9-9c17-46785ebfbc88.png",alt:"TsFile Breakdown"}})]),t._v(" "),v("h1",{attrs:{id:"魔术字符串"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#魔术字符串"}},[t._v("#")]),t._v(" 魔术字符串")]),t._v(" "),v("p",[t._v("有一个12个字节的魔术字符串：")]),t._v(" "),v("p",[v("code",[t._v("TsFilev0.8.0")])]),t._v(" "),v("p",[t._v("它在TsFile文件的开头和结尾都作为签名。")]),t._v(" "),v("h1",{attrs:{id:"数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据"}},[t._v("#")]),t._v(" 数据")]),t._v(" "),v("p",[t._v("TsFile文件的内容可以分为两部分：数据和元数据。 数据和元数据之间有一个字节“ 0x02”作为标记。")]),t._v(" "),v("p",[t._v("数据部分是"),v("code",[t._v("ChunkGroup")]),t._v("的数组，每个ChuckGroup代表一个* device *。")]),t._v(" "),v("h3",{attrs:{id:"chuckgroup"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chuckgroup"}},[t._v("#")]),t._v(" ChuckGroup")]),t._v(" "),v("p",[v("code",[t._v("ChunkGroup")]),t._v("具有一个"),v("code",[t._v("Chunk")]),t._v("数组，一个后继字节"),v("code",[t._v("0x00")]),t._v("作为标记以及一个"),v("code",[t._v("ChunkFooter")]),t._v("。")]),t._v(" "),v("h4",{attrs:{id:"chunk"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chunk"}},[t._v("#")]),t._v(" Chunk")]),t._v(" "),v("p",[v("code",[t._v("Chunk")]),t._v("代表"),v("em",[t._v("传感器")]),t._v("。 在"),v("code",[t._v("ChunkHeader")]),t._v("和"),v("code",[t._v("Page")]),t._v("数组之后，有一个字节"),v("code",[t._v("0x01")]),t._v("作为标记。")]),t._v(" "),v("h5",{attrs:{id:"chunkheader"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chunkheader"}},[t._v("#")]),t._v(" ChunkHeader")]),t._v(" "),v("center",[v("table",{staticStyle:{"text-align":"center"}},[v("tr",[v("th",[t._v("Member Description")]),v("th",[t._v("Member Type")])]),t._v(" "),v("tr",[v("td",[t._v("The name of this sensor(measurementID)")]),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("Size of this chunk")]),v("td",[t._v("int")])]),t._v(" "),v("tr",[v("td",[t._v("Data type of this chuck")]),v("td",[t._v("short")])]),t._v(" "),v("tr",[v("td",[t._v("Number of pages")]),v("td",[t._v("int")])]),t._v(" "),v("tr",[v("td",[t._v("Compression Type")]),v("td",[t._v("short")])]),t._v(" "),v("tr",[v("td",[t._v("Encoding Type")]),v("td",[t._v("short")])]),t._v(" "),v("tr",[v("td",[t._v("Max Tombstone Time")]),v("td",[t._v("long")])])])]),t._v(" "),v("h5",{attrs:{id:"page"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[t._v("#")]),t._v(" Page")]),t._v(" "),v("p",[v("code",[t._v("Page")]),t._v("代表"),v("code",[t._v("Chunk")]),t._v("中的一些数据。 它包含一个"),v("code",[t._v("PageHeader")]),t._v("和实际数据（编码的时间值对）。")]),t._v(" "),v("p",[t._v("PageHeader结构")]),t._v(" "),v("center",[v("table",{staticStyle:{"text-align":"center"}},[v("tr",[v("th",[t._v("Member Description")]),v("th",[t._v("Member Type")])]),t._v(" "),v("tr",[v("td",[t._v("Data size before compressing")]),v("td",[t._v("int")])]),t._v(" "),v("tr",[v("td",[t._v("Data size after compressing(if use SNAPPY)")]),v("td",[t._v("int")])]),t._v(" "),v("tr",[v("td",[t._v("Number of values")]),v("td",[t._v("int")])]),t._v(" "),v("tr",[v("td",[t._v("Minimum time stamp")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("Maximum time stamp")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("Minimum value of the page")]),v("td",[t._v("Type of the page")])]),t._v(" "),v("tr",[v("td",[t._v("Maximum value of the page")]),v("td",[t._v("Type of the page")])]),t._v(" "),v("tr",[v("td",[t._v("First value of the page")]),v("td",[t._v("Type of the page")])]),t._v(" "),v("tr",[v("td",[t._v("Last value of the page")]),v("td",[t._v("Type of the page")])]),t._v(" "),v("tr",[v("td",[t._v("Sum of the Page")]),v("td",[t._v("double")])])])]),t._v(" "),v("h5",{attrs:{id:"chunkgroupfooter"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupfooter"}},[t._v("#")]),t._v(" ChunkGroupFooter")]),t._v(" "),v("center",[v("table",{staticStyle:{"text-align":"center"}},[v("tr",[v("th",[t._v("Member Description")]),v("th",[t._v("Member Type")])]),t._v(" "),v("tr",[v("td",[t._v("Deviceid")]),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("Data size of the ChunkGroup")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("Number of chunks")]),v("td",[t._v("int")])])])]),t._v(" "),v("h1",{attrs:{id:"元数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#元数据"}},[t._v("#")]),t._v(" 元数据")]),t._v(" "),v("h2",{attrs:{id:"tsdevicemetadata"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tsdevicemetadata"}},[t._v("#")]),t._v(" TsDeviceMetaData")]),t._v(" "),v("p",[t._v("元数据的第一部分是"),v("code",[t._v("TsDeviceMetaData")])]),t._v(" "),v("center",[v("table",{staticStyle:{"text-align":"center"}},[v("tr",[v("th",[t._v("Member Description")]),v("th",[t._v("Member Type")])]),t._v(" "),v("tr",[v("td",[t._v("Start time")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("End time")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("Number of chunk groups")]),v("td",[t._v("int")])])])]),t._v(" "),v("p",[t._v("然后在"),v("code",[t._v("TsDeviceMetaData")]),t._v("之后有一个"),v("code",[t._v("ChunkGroupMetaData")]),t._v("数组。")]),t._v(" "),v("h2",{attrs:{id:"chunkgroupmetadata"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupmetadata"}},[t._v("#")]),t._v(" ChunkGroupMetaData")]),t._v(" "),v("center",[v("table",{staticStyle:{"text-align":"center"}},[v("tr",[v("th",[t._v("Member Description")]),v("th",[t._v("Member Type")])]),t._v(" "),v("tr",[v("td",[t._v("Deviceid")]),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("Start offset of the ChunkGroup")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("End offset of the ChunkGroup")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("Version")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("Number of ChunkMetaData")]),v("td",[t._v("int")])])])]),t._v(" "),v("p",[t._v("然后，每个"),v("code",[t._v("ChunkGroupMetadata")]),t._v("都有一个"),v("code",[t._v("ChunkMetadata")]),t._v("数组。")]),t._v(" "),v("h4",{attrs:{id:"chunkmetadata"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#chunkmetadata"}},[t._v("#")]),t._v(" ChunkMetaData")]),t._v(" "),v("center",[v("table",{staticStyle:{"text-align":"center"}},[v("tr",[v("th",[t._v("Member Description")]),v("th",[t._v("Member Type")])]),t._v(" "),v("tr",[v("td",[t._v("Measurementid")]),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("Start offset of ChunkHeader")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("Number of data points")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("Start time")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("End time")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("Data type")]),v("td",[t._v("short")])]),t._v(" "),v("tr",[v("td",[t._v("Number of statistics")]),v("td",[t._v("int")])]),t._v(" "),v("tr",[v("td",[t._v("The statistics of this chunk")]),v("td",[t._v("TsDigest")])])])]),t._v(" "),v("h5",{attrs:{id:"tsdigest"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tsdigest"}},[t._v("#")]),t._v(" TsDigest")]),t._v(" "),v("p",[t._v("有五个统计信息： "),v("code",[t._v("min, last, sum, first, max")])]),t._v(" "),v("p",[t._v("存储格式是名称/值对。 名称是一个字符串（记住长度在文字之前）。")]),t._v(" "),v("p",[t._v("但是对于该值，即使不是字符串，在数据前也有一个大小整数。 例如，如果"),v("code",[t._v("min")]),t._v("为3，则它将被存储为3“ min” 4 3在TsFile中。")]),t._v(" "),v("h3",{attrs:{id:"file-metadata"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#file-metadata"}},[t._v("#")]),t._v(" File Metadata")]),t._v(" "),v("p",[t._v("在"),v("code",[t._v("ChunkGroupMetadata")]),t._v("数组之后，这是元数据的最后一部分。")]),t._v(" "),v("center",[v("table",{staticStyle:{"text-align":"center"}},[v("tr",[v("th",[t._v("Member Description")]),v("th",[t._v("Member Type")])]),t._v(" "),v("tr",[v("td",[t._v("Number of Devices")]),v("td",[t._v("int")])]),t._v(" "),v("tr",[v("td",[t._v("Array of DeviceIndexMetadata")]),v("td",[t._v("DeviceIndexMetadata")])]),t._v(" "),v("tr",[v("td",[t._v("Number of Measurements")]),v("td",[t._v("int")])]),t._v(" "),v("tr",[v("td",[t._v("Array of Measurement name and schema")]),v("td",[t._v("String, MeasurementSchema pair")])]),t._v(" "),v("tr",[v("td",[t._v("Current Version(3 for now)")]),v("td",[t._v("int")])]),t._v(" "),v("tr",[v("td",[t._v("Author byte")]),v("td",[t._v("byte")])]),t._v(" "),v("tr",[v("td",[t._v("Author(if author byte is 0x01)")]),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("File Metadata size(not including itself)")]),v("td",[t._v("int")])])])]),t._v(" "),v("h4",{attrs:{id:"deviceindexmetadata"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#deviceindexmetadata"}},[t._v("#")]),t._v(" DeviceIndexMetadata")]),t._v(" "),v("center",[v("table",{staticStyle:{"text-align":"center"}},[v("tr",[v("th",[t._v("Member Description")]),v("th",[t._v("Member Type")])]),t._v(" "),v("tr",[v("td",[t._v("Deviceid")]),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("Start offset of ChunkGroupMetaData(Or TsDeviceMetaData if it's the first one)")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("length")]),v("td",[t._v("int")])]),t._v(" "),v("tr",[v("td",[t._v("Start time")]),v("td",[t._v("long")])]),t._v(" "),v("tr",[v("td",[t._v("End time")]),v("td",[t._v("long")])])])]),t._v(" "),v("h4",{attrs:{id:"measurementschema"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#measurementschema"}},[t._v("#")]),t._v(" MeasurementSchema")]),t._v(" "),v("center",[v("table",{staticStyle:{"text-align":"center"}},[v("tr",[v("th",[t._v("Member Description")]),v("th",[t._v("Member Type")])]),t._v(" "),v("tr",[v("td",[t._v("Measurementid")]),v("td",[t._v("String")])]),t._v(" "),v("tr",[v("td",[t._v("Data type")]),v("td",[t._v("short")])]),t._v(" "),v("tr",[v("td",[t._v("Encoding")]),v("td",[t._v("short")])]),t._v(" "),v("tr",[v("td",[t._v("Compressor")]),v("td",[t._v("short")])]),t._v(" "),v("tr",[v("td",[t._v("Size of props")]),v("td",[t._v("int")])])])]),t._v(" "),v("p",[t._v("如果道具的大小大于0，则存在一个<String，String>对数组，作为此度量的属性。\n​    例如“ max_point_number”“ 2”。")]),t._v(" "),v("h1",{attrs:{id:"完成"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#完成"}},[t._v("#")]),t._v(" 完成")]),t._v(" "),v("p",[t._v("在"),v("code",[t._v("FileMetaData")]),t._v("之后，将有另一个魔术字符串，您已经完成了发现TsFile的旅程！")]),t._v(" "),v("p",[t._v("您也可以使用/ tsfile / example / TsFileSequenceRead来读取和验证TsFile。")])],1)}),[],!1,null,null,null);e.default=a.exports}}]);