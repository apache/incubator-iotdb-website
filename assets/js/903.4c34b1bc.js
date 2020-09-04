(window.webpackJsonp=window.webpackJsonp||[]).push([[903],{1462:function(e,v,_){"use strict";_.r(v);var t=_(69),a=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"元数据管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#元数据管理"}},[e._v("#")]),e._v(" 元数据管理")]),e._v(" "),_("p",[e._v("IoTDB 的元数据统一由 MManger 管理，包括以下几个部分：")]),e._v(" "),_("ul",[_("li",[e._v("元数据树")]),e._v(" "),_("li",[e._v("元数据日志管理")]),e._v(" "),_("li",[e._v("标签/属性管理")])]),e._v(" "),_("h2",{attrs:{id:"mmanager"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mmanager"}},[e._v("#")]),e._v(" MManager")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("维护 tag 倒排索引："),_("code",[e._v("Map<String, Map<String, Set<LeafMNode>>> tagIndex")])]),e._v(" "),_("blockquote",[_("p",[e._v("tag key -> tag value -> timeseries LeafMNode")])])])]),e._v(" "),_("p",[e._v("该类初始化时，会replay mlog中的内容，将元数据信息还原出来，元数据操作日志主要有六种类型，每个操作前都会先获得整个元数据的写锁（存储在MManager中），操作完后释放：")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("创建时间序列")]),e._v(" "),_("ul",[_("li",[e._v("检查存储组是否存在，如果不存在且开启自动创建，则创建存储组")]),e._v(" "),_("li",[e._v("在 MTree 中创建时间序列，可带扩展名")]),e._v(" "),_("li",[e._v("如果开启动态参数，检查内存是否满足")]),e._v(" "),_("li",[e._v("如果非重启（需要记录日志）\n"),_("ul",[_("li",[e._v("拿到标签文件当前 offset")]),e._v(" "),_("li",[e._v("将时间序列信息记录到 mlog 中")]),e._v(" "),_("li",[e._v("将 tags/attributes 持久化到tlog中")])])]),e._v(" "),_("li",[e._v("如果是重启（需要恢复内存结构）\n"),_("ul",[_("li",[e._v("根据 mlog 中的 offset 读取标签文件，重建 tagIndex 索引")])])])])]),e._v(" "),_("li",[_("p",[e._v("删除时间序列")]),e._v(" "),_("ul",[_("li",[e._v("获得所有满足前缀的时间序列的fullPath")]),e._v(" "),_("li",[e._v("遍历上一步获得的所有时间序列，并逐个在 MTree 中删除\n"),_("ul",[_("li",[e._v("删除的时候，需要首先获得该时间序列所在device的InternalMNode的写锁")]),e._v(" "),_("li",[e._v("若获取成功\n"),_("ul",[_("li",[e._v("删除MTree中对应的LeafMNode")]),e._v(" "),_("li",[e._v("根据LeafMNode中的offset，读取标签文件，更新 tagIndex 索引")]),e._v(" "),_("li",[e._v("若发现某一个存储组为空，则记录下该空的存储组名")])])]),e._v(" "),_("li",[e._v("若获取失败\n"),_("ul",[_("li",[e._v("返回此未删除成功的时间序列")])])])])]),e._v(" "),_("li",[e._v("如果非重启（需要记录日志）\n*  删除记录下的空的存储组\n"),_("ul",[_("li",[e._v("将所删除的时间序列信息记录到 mlog 中")]),e._v(" "),_("li",[e._v("目前并不会删除 tlog 中关于此时间序列的标签/属性信息。")])])])])]),e._v(" "),_("li",[_("p",[e._v("设置存储组")]),e._v(" "),_("ul",[_("li",[e._v("在 MTree 中创建存储组")]),e._v(" "),_("li",[e._v("如果开启动态参数，检查内存是否满足")]),e._v(" "),_("li",[e._v("如果非重启，将log持久化至mlog中")])])]),e._v(" "),_("li",[_("p",[e._v("删除存储组")]),e._v(" "),_("ul",[_("li",[e._v("在 MTree 中删除对应的存储组，并返回该存储组下的所有时间序列的LeafMNode\n"),_("ul",[_("li",[e._v("删除的时候，需要首先获得该存储组的InternalMNode的写锁")]),e._v(" "),_("li",[e._v("若获取成功\n"),_("ul",[_("li",[e._v("删除MTree中对应的InternalMNode")])])]),e._v(" "),_("li",[e._v("若获取失败\n"),_("ul",[_("li",[e._v("返回此未删除成功的存储组名")])])])])]),e._v(" "),_("li",[e._v("遍历上一步返回的LeafMNode，根据LeafMNode中的offset，读取标签文件，更新tagIndex 索引")]),e._v(" "),_("li",[e._v("如果非重启，将log持久化至mlog中")])])]),e._v(" "),_("li",[_("p",[e._v("设置TTL")]),e._v(" "),_("ul",[_("li",[e._v("获得对应存储组的StorageGroupMNode，修改其TTL属性")]),e._v(" "),_("li",[e._v("如果非重启，将log持久化至mlog中")])])]),e._v(" "),_("li",[_("p",[e._v("改变时间序列标签信息offset")]),e._v(" "),_("ul",[_("li",[e._v("修改时间序列对应的LeafMNode中的offset")])])]),e._v(" "),_("li",[_("p",[e._v("改变时间序列的别名")]),e._v(" "),_("ul",[_("li",[e._v("更新LeafMNode中的alias属性，并更新其父节点中的aliasMap属性")])])])]),e._v(" "),_("p",[e._v("除了这七种需要记录日志的操作外，还有六种对时间序列标签/属性信息进行更新的操作，同样的，每个操作前都会先获得整个元数据的写锁（存储在MManager中），操作完后释放：")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("重命名标签或属性")]),e._v(" "),_("ul",[_("li",[e._v("获得该时间序列的LeafMNode")]),e._v(" "),_("li",[e._v("通过 LeafMNode 中的 offset 读取标签和属性信息")]),e._v(" "),_("li",[e._v("若新键已经存在，则抛异常")]),e._v(" "),_("li",[e._v("若新键不存在\n"),_("ul",[_("li",[e._v("若旧键不存在，则抛异常")]),e._v(" "),_("li",[e._v("若旧键存在，用新键替换旧键，并持久化至tlog中")]),e._v(" "),_("li",[e._v("如果旧键是标签，则还需更新 tagIndex")])])])])]),e._v(" "),_("li",[_("p",[e._v("重新设置标签或属性的值")]),e._v(" "),_("ul",[_("li",[e._v("获得该时间序列的LeafMNode")]),e._v(" "),_("li",[e._v("通过 LeafMNode 中的 offset 读取标签和属性信息")]),e._v(" "),_("li",[e._v("若需要重新设置的标签或属性的键值不存在，则抛异常")]),e._v(" "),_("li",[e._v("若需要重新设置的是标签，则还需更新 tagIndex")]),e._v(" "),_("li",[e._v("将更新后的标签和属性信息持久化至tlog中")])])]),e._v(" "),_("li",[_("p",[e._v("删除已经存在的标签或属性")]),e._v(" "),_("ul",[_("li",[e._v("获得该时间序列的LeafMNode")]),e._v(" "),_("li",[e._v("通过 LeafMNode 中的 offset 读取标签和属性信息")]),e._v(" "),_("li",[e._v("遍历需要删除的标签或属性，若不存在，则跳过")]),e._v(" "),_("li",[e._v("若需要删除的是标签，则还需更新 tagIndex")]),e._v(" "),_("li",[e._v("将更新后的标签和属性信息持久化至tlog中")])])]),e._v(" "),_("li",[_("p",[e._v("添加新的标签")]),e._v(" "),_("ul",[_("li",[e._v("获得该时间序列的LeafMNode")]),e._v(" "),_("li",[e._v("通过 LeafMNode 中的 offset 读取标签信息")]),e._v(" "),_("li",[e._v("遍历需要添加的标签，若已存在，则抛异常")]),e._v(" "),_("li",[e._v("将更新后的标签信息持久化至tlog中")]),e._v(" "),_("li",[e._v("根据添加的标签信息，更新 tagIndex")])])]),e._v(" "),_("li",[_("p",[e._v("添加新的属性")]),e._v(" "),_("ul",[_("li",[e._v("获得该时间序列的LeafMNode")]),e._v(" "),_("li",[e._v("通过 LeafMNode 中的 offset 读取属性信息")]),e._v(" "),_("li",[e._v("遍历需要添加的属性，若已存在，则抛异常")]),e._v(" "),_("li",[e._v("将更新后的属性信息持久化至tlog中")])])]),e._v(" "),_("li",[_("p",[e._v("更新插入标签和属性")]),e._v(" "),_("ul",[_("li",[e._v("获得该时间序列的LeafMNode")]),e._v(" "),_("li",[e._v("更新LeafMNode中的alias属性，并更新其父节点中的aliasMap属性")]),e._v(" "),_("li",[e._v("讲更新后的别名持久化至mlog中")]),e._v(" "),_("li",[e._v("通过 LeafMNode 中的 offset 读取标签和属性信息")]),e._v(" "),_("li",[e._v("遍历需要更新插入的标签和属性，若已存在，则用新值更新；若不存在，则添加")]),e._v(" "),_("li",[e._v("将更新后的属性信息持久化至tlog中")]),e._v(" "),_("li",[e._v("如果包含更新插入中包含标签信息，还需更新 tagIndex")])])])]),e._v(" "),_("h2",{attrs:{id:"元数据树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#元数据树"}},[e._v("#")]),e._v(" 元数据树")]),e._v(" "),_("ul",[_("li",[e._v("org.apache.iotdb.db.metadata.MTree")])]),e._v(" "),_("p",[e._v("树中包括三种节点：StorageGroupMNode、InternalMNode（非叶子节点）、LeafMNode（叶子节点），他们都是MNode的子类。")]),e._v(" "),_("p",[e._v("每个InternalMNode中都有一个读写锁，查询元数据信息时，需要获得路径上每一个InternalMNode的读锁，修改元数据信息时，如果修改的是LeafMNode，需要获得其父节点的写锁，若修改的是InternalMNode，则只需获得本身的写锁。若该InternalMNode位于Device层，则还包含了一个"),_("code",[e._v("Map<String, MNode> aliasChildren")]),e._v("，用于存储别名信息。")]),e._v(" "),_("p",[e._v("StorageGroupMNode 继承 InternalMNode，包含存储组的元数据信息，如 TTL。")]),e._v(" "),_("p",[e._v("LeafMNode 中包含了对应时间序列的Schema信息，其别名(若没有别名，则为null)以及该时间序列的标签/属性信息在tlog文件中的offset(若没有标签/属性，则为-1)")]),e._v(" "),_("p",[e._v("示例：")]),e._v(" "),_("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625246-fc3e8200-467e-11ea-8815-67b9c4ab716e.png"}}),e._v(" "),_("p",[e._v("IoTDB 的元数据管理采用目录树的形式，倒数第二层为设备层，最后一层为传感器层。")]),e._v(" "),_("p",[e._v("默认存在根节点 root，创建存储组、删除存储组、创建时间序列、删除时间序列均为对树的节点的操作。")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("创建存储组（root.a.b.sg）")]),e._v(" "),_("ul",[_("li",[e._v("为当前存储组创建中间节点（a.b）")]),e._v(" "),_("li",[e._v("确保此路径前缀不存在其他存储组（不允许存储组嵌套）")]),e._v(" "),_("li",[e._v("检查确保存储组不存在")]),e._v(" "),_("li",[e._v("创建存储组节点")])])]),e._v(" "),_("li",[_("p",[e._v("创建时间序列（root.a.b.sg.d.s1）")]),e._v(" "),_("ul",[_("li",[e._v("遍历路径，确保存储组已经创建")]),e._v(" "),_("li",[e._v("找到倒数第二层节点，检查叶子节点是否存在")]),e._v(" "),_("li",[e._v("创建叶子节点，叶子节点内存储别名")]),e._v(" "),_("li",[e._v("如果有别名，则在设备节点多创建一个链接指向叶子节点")])])]),e._v(" "),_("li",[_("p",[e._v("删除存储组和删除时间序列的操作相似，即将存储组或时间序列节点在其父节点中删除，时间序列节点还需要将其别名在父节点中删除；若在删除过程中，发现某一节点没有任何子节点了，还需要递归删除此节点。")])])]),e._v(" "),_("h2",{attrs:{id:"mtree-检查点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mtree-检查点"}},[e._v("#")]),e._v(" MTree 检查点")]),e._v(" "),_("h3",{attrs:{id:"创建条件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建条件"}},[e._v("#")]),e._v(" 创建条件")]),e._v(" "),_("p",[e._v("为了加快 IoTDB 重启速度，我们为 MTree 设置了检查点，这样避免了在重启时按行读取并复现 "),_("code",[e._v("mlog.txt")]),e._v(" 中的信息。创建 MTree 的快照有两种方式：")]),e._v(" "),_("ol",[_("li",[e._v("后台线程检查自动创建：每隔10分钟，后台线程检查 MTree 的最后修改时间，需要同时满足")])]),e._v(" "),_("ul",[_("li",[e._v("用户超过1小时（可配置）没修改 MTree，即"),_("code",[e._v("mlog.txt")]),e._v(" 文件超过1小时没有修改")]),e._v(" "),_("li",[_("code",[e._v("mlog.txt")]),e._v(" 中积累了100000行日志（可配置）")])]),e._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[e._v("手动创建：使用"),_("code",[e._v("create snapshot for schema")]),e._v("命令手动触发创建 MTree 快照")])]),e._v(" "),_("h3",{attrs:{id:"创建过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建过程"}},[e._v("#")]),e._v(" 创建过程")]),e._v(" "),_("p",[e._v("方法见"),_("code",[e._v("MManager.createMTreeSnapshot()")]),e._v("：")]),e._v(" "),_("ol",[_("li",[e._v("首先给 MTree 加读锁，防止创建快照过程中对其进行修改")]),e._v(" "),_("li",[e._v("将 MTree 序列化进临时 snapshot 文件（"),_("code",[e._v("mtree.snapshot.tmp")]),e._v("）。MTree 的序列化采用“先子节点、后父节点”的深度优先序列化方式，将节点的信息按照类型转化成对应格式的字符串，便于反序列化时读取和组装MTree。")])]),e._v(" "),_("ul",[_("li",[e._v("普通节点：0,名字,子节点个数")]),e._v(" "),_("li",[e._v("存储组节点：1,名字,TTL,子节点个数")]),e._v(" "),_("li",[e._v("传感器节点：2,名字,别名,数据类型,编码,压缩方式,属性,偏移量,子节点个数")])]),e._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[e._v("序列化结束后，将临时文件重命名为正式文件（"),_("code",[e._v("mtree.snapshot")]),e._v("），防止在序列化过程中出现服务器人为或意外关闭，导致序列化失败的情况。")]),e._v(" "),_("li",[e._v("调用"),_("code",[e._v("MLogWriter.clear()")]),e._v("方法，清空 "),_("code",[e._v("mlog.txt")]),e._v("：")])]),e._v(" "),_("ul",[_("li",[e._v("关闭 BufferedWriter，删除"),_("code",[e._v("mlog.txt")]),e._v("文件；")]),e._v(" "),_("li",[e._v("新建一个 BufferedWriter；")]),e._v(" "),_("li",[e._v("将 "),_("code",[e._v("lineNumber")]),e._v(" 置为0，"),_("code",[e._v("lineNumber")]),e._v(" 记录"),_("code",[e._v("mlog.txt")]),e._v("的行数，用于在后台检查时判断其是否超过用户配置的阈值而触发自动创建快照。")])]),e._v(" "),_("ol",{attrs:{start:"5"}},[_("li",[e._v("释放 MTree 读锁")])]),e._v(" "),_("h3",{attrs:{id:"恢复过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#恢复过程"}},[e._v("#")]),e._v(" 恢复过程")]),e._v(" "),_("p",[e._v("方法见"),_("code",[e._v("MManager.initFromLog()")]),e._v("：")]),e._v(" "),_("ol",[_("li",[e._v("检查临时文件"),_("code",[e._v("mtree.snapshot.tmp")]),e._v("是否存在，如果存在证明在创建快照的序列化过程中出现服务器人为或意外关闭，导致序列化失败，删除临时文件；")]),e._v(" "),_("li",[e._v("检查快照文件"),_("code",[e._v("mtree.snapshot")]),e._v("是否存在。如果不存在，则使用新的 MTree；否则启动反序列化过程，得到 MTree")]),e._v(" "),_("li",[e._v("对于"),_("code",[e._v("mlog.txt")]),e._v("中的内容，逐行读取并操作，完成 MTree 的恢复。读取过程中更新 "),_("code",[e._v("lineNumber")]),e._v("，并返回，用于后面"),_("code",[e._v("mlog.txt")]),e._v("行数的记录。")])]),e._v(" "),_("h2",{attrs:{id:"元数据日志管理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#元数据日志管理"}},[e._v("#")]),e._v(" 元数据日志管理")]),e._v(" "),_("ul",[_("li",[e._v("org.apache.iotdb.db.metadata.MLogWriter")])]),e._v(" "),_("p",[e._v("所有元数据的操作均会记录到元数据日志文件中，此文件默认为 data/system/schema/mlog.txt。")]),e._v(" "),_("p",[e._v("系统重启时会重做 mlog 中的日志，重做之前需要标记不需要记录日志。当重启结束后，标记需要记录日志。")]),e._v(" "),_("p",[e._v("元数据日志的类型由 MetadataOperationType 类记录。mlog 直接存储字符串编码。")]),e._v(" "),_("p",[e._v("示例 sql 及对应的 mlog 记录：")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("set storage group to root.turbine")]),e._v(" "),_("blockquote",[_("p",[e._v("mlog: 2,root.turbine")])]),e._v(" "),_("blockquote",[_("p",[e._v("格式: 2,path")])])]),e._v(" "),_("li",[_("p",[e._v("delete storage group root.turbine")]),e._v(" "),_("blockquote",[_("p",[e._v("mlog: 1,root.turbine")])]),e._v(" "),_("blockquote",[_("p",[e._v("格式: 1,path")])])]),e._v(" "),_("li",[_("p",[e._v("create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)")]),e._v(" "),_("blockquote",[_("p",[e._v("mlog: 0,root.turbine.d1.s1,3,2,1,,温度,offset")])]),e._v(" "),_("blockquote",[_("p",[e._v("格式: 0,path,TSDataType,TSEncoding,CompressionType,[properties],[alias],[tag-attribute offset]")])])]),e._v(" "),_("li",[_("p",[e._v("delete timeseries root.turbine.d1.s1")]),e._v(" "),_("blockquote",[_("p",[e._v("mlog: 1,root.turbine.d1.s1")])]),e._v(" "),_("blockquote",[_("p",[e._v("格式: 1,path")])])]),e._v(" "),_("li",[_("p",[e._v("set ttl to root.turbine 10")]),e._v(" "),_("blockquote",[_("p",[e._v("mlog: 10,root.turbine,10")])]),e._v(" "),_("blockquote",[_("p",[e._v("格式: 10,path,ttl")])])]),e._v(" "),_("li",[_("p",[e._v("alter timeseries root.turbine.d1.s1 add tags(tag1=v1)")]),e._v(" "),_("blockquote",[_("p",[e._v("只有当root.turbine.d1.s1原来不存在任何标签/属性信息时，该sql才会产生日志")])]),e._v(" "),_("blockquote",[_("p",[e._v("mlog: 12,root.turbine.d1.s1,10")])]),e._v(" "),_("blockquote",[_("p",[e._v("格式: 10,path,[change offset]")])])]),e._v(" "),_("li",[_("p",[e._v("alter timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias")]),e._v(" "),_("blockquote",[_("p",[e._v("mlog: 13,root.turbine.d1.s1,newAlias")])]),e._v(" "),_("blockquote",[_("p",[e._v("格式: 13,path,[new alias]")])])])]),e._v(" "),_("h2",{attrs:{id:"标签文件"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#标签文件"}},[e._v("#")]),e._v(" 标签文件")]),e._v(" "),_("ul",[_("li",[e._v("org.apache.iotdb.db.metadata.TagLogFile")])]),e._v(" "),_("p",[e._v("所有时间序列的标签/属性信息都会保存在标签文件中，此文件默认为 data/system/schema/mlog.txt。")]),e._v(" "),_("ul",[_("li",[_("p",[e._v("每条时间序列的 tags 和 attributes 持久化总字节数为 L，在 iotdb-engine.properties 中配置。")])]),e._v(" "),_("li",[_("p",[e._v("持久化内容：Map<String,String> tags, Map<String,String> attributes，如果内容不足 L，则需补空。")])])]),e._v(" "),_("blockquote",[_("p",[e._v("create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes (attr1=v1, attr2=v2)")])]),e._v(" "),_("blockquote",[_("p",[e._v("在tlog.txt中的内容：")])]),e._v(" "),_("blockquote",[_("p",[e._v("tagsSize (tag1=v1, tag2=v2) attributesSize (attr1=v1, attr2=v2)")])]),e._v(" "),_("h2",{attrs:{id:"元数据查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#元数据查询"}},[e._v("#")]),e._v(" 元数据查询")]),e._v(" "),_("h3",{attrs:{id:"不带过滤条件的元数据查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#不带过滤条件的元数据查询"}},[e._v("#")]),e._v(" 不带过滤条件的元数据查询")]),e._v(" "),_("p",[e._v("主要查询逻辑封装在"),_("code",[e._v("MManager")]),e._v("的"),_("code",[e._v("showTimeseries(ShowTimeSeriesPlan plan)")]),e._v("方法中")]),e._v(" "),_("p",[e._v("首先判断需不需要根据热度排序，如果需要，则调用"),_("code",[e._v("MTree")]),e._v("的"),_("code",[e._v("getAllMeasurementSchemaByHeatOrder")]),e._v("方法，否则调用"),_("code",[e._v("getAllMeasurementSchema")]),e._v("方法")]),e._v(" "),_("h4",{attrs:{id:"getallmeasurementschemabyheatorder"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#getallmeasurementschemabyheatorder"}},[e._v("#")]),e._v(" getAllMeasurementSchemaByHeatOrder")]),e._v(" "),_("p",[e._v("这里的热度是用每个时间序列的"),_("code",[e._v("lastTimeStamp")]),e._v("来表征的，所以需要先取出所有满足条件的序列，然后根据"),_("code",[e._v("lastTimeStamp")]),e._v("进行排序，然后再做"),_("code",[e._v("offset")]),e._v("和"),_("code",[e._v("limit")]),e._v("的截断")]),e._v(" "),_("h4",{attrs:{id:"getallmeasurementschema"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#getallmeasurementschema"}},[e._v("#")]),e._v(" getAllMeasurementSchema")]),e._v(" "),_("p",[e._v("这里需要在findPath的时候就将limit（如果没有limit，则将请求的fetchSize当成limit）和offset参数传递下去，减少内存占用。")]),e._v(" "),_("h4",{attrs:{id:"findpath"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#findpath"}},[e._v("#")]),e._v(" findPath")]),e._v(" "),_("p",[e._v("这个方法封装了在MTree中遍历得到满足条件的时间序列的逻辑，是个递归方法，由根节点往下递归寻找，直到当前时间序列数量达到limit或者已经遍历完整个MTree。")]),e._v(" "),_("h3",{attrs:{id:"带过滤条件的元数据查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#带过滤条件的元数据查询"}},[e._v("#")]),e._v(" 带过滤条件的元数据查询")]),e._v(" "),_("p",[e._v("这里的过滤条件只能是tag属性，否则抛异常。")]),e._v(" "),_("p",[e._v("通过在MManager中维护的tag的倒排索引，获得所有满足索引条件的"),_("code",[e._v("MeasurementMNode")]),e._v("。")]),e._v(" "),_("p",[e._v("若需要根据热度排序，则根据"),_("code",[e._v("lastTimeStamp")]),e._v("进行排序，否则根据序列名的字母序排序，然后再做"),_("code",[e._v("offset")]),e._v("和"),_("code",[e._v("limit")]),e._v("的截断。")]),e._v(" "),_("h3",{attrs:{id:"showtimeseries结果集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#showtimeseries结果集"}},[e._v("#")]),e._v(" ShowTimeseries结果集")]),e._v(" "),_("p",[e._v("如果元数据量过多，一次show timeseries的结果可能导致OOM，所以增加fetch size参数，客户端跟服务器端交互时，服务器端一次最多只会取fetch size个时间序列。")]),e._v(" "),_("p",[e._v("多次交互的状态信息就存在"),_("code",[e._v("ShowTimeseriesDataSet")]),e._v("中。"),_("code",[e._v("ShowTimeseriesDataSet")]),e._v("中保存了此次的"),_("code",[e._v("ShowTimeSeriesPlan")]),e._v("，当前的游标"),_("code",[e._v("index")]),e._v("以及缓存的结果行列表"),_("code",[e._v("List<RowRecord> result")]),e._v("。")]),e._v(" "),_("ul",[_("li",[e._v("判断游标"),_("code",[e._v("index")]),e._v("是否等于缓存的结果行"),_("code",[e._v("List<RowRecord> result")]),e._v("的size\n"),_("ul",[_("li",[e._v("若相等，则调用MManager中的"),_("code",[e._v("showTimeseries")]),e._v("方法取结果，放入缓存\n"),_("ul",[_("li",[e._v("需要相应的修改plan中的offset，将offset向前推fetch size大小")]),e._v(" "),_("li",[e._v("若"),_("code",[e._v("hasLimit")]),e._v("为"),_("code",[e._v("false")]),e._v("，则将index重新置为0")])])]),e._v(" "),_("li",[e._v("若不相等\n"),_("ul",[_("li",[_("code",[e._v("index < result.size()")]),e._v("，返回true")]),e._v(" "),_("li",[_("code",[e._v("index > result.size()")]),e._v("，返回false")])])])])])])])}),[],!1,null,null,null);v.default=a.exports}}]);