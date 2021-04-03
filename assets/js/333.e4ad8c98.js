(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{899:function(s,n,a){"use strict";a.r(n);var e=a(69),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"旋转门压缩"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#旋转门压缩"}},[s._v("#")]),s._v(" 旋转门压缩")]),s._v(" "),a("p",[s._v("旋转门压缩（SDT）算法是一种有损压缩算法。SDT的计算复杂度较低，并使用线性趋势来表示大量数据。")]),s._v(" "),a("p",[s._v("在IoTDB中，SDT在刷新到磁盘时会压缩并丢弃数据。")]),s._v(" "),a("p",[s._v("IoTDB允许您在创建时间序列时指定SDT的属性，并支持以下三个属性：")]),s._v(" "),a("ul",[a("li",[s._v("CompDev （Compression Deviation，压缩偏差）")])]),s._v(" "),a("p",[s._v("CompDev是SDT中最重要的参数，它表示当前样本与当前线性趋势之间的最大差值。CompDev设置的值需要大于0。")]),s._v(" "),a("ul",[a("li",[s._v("CompMinTime （Compression Minimum Time Interval，最小压缩时间间隔）")])]),s._v(" "),a("p",[s._v("CompMinTime是测量两个存储的数据点之间的时间距离的参数，用于减少噪声。\n如果当前点和最后存储的点之间的时间间隔小于或等于其值，则无论压缩偏差如何，都不会存储当前点。\n默认值为0，单位为毫秒。")]),s._v(" "),a("ul",[a("li",[s._v("CompMaxTime （Compression Maximum Time Interval，最大压缩时间间隔）")])]),s._v(" "),a("p",[s._v("CompMaxTime是测量两个存储的数据点之间的时间距离的参数。\n如果当前点和最后一个存储点之间的时间间隔大于或等于其值，\n无论压缩偏差如何，都将存储当前点。\n默认值为9,223,372,036,854,775,807，单位为毫秒。")]),s._v(" "),a("p",[s._v("支持的数据类型:")]),s._v(" "),a("ul",[a("li",[s._v("INT32（整型）")]),s._v(" "),a("li",[s._v("INT64（长整型）")]),s._v(" "),a("li",[s._v("FLOAT（单精度浮点数）")]),s._v(" "),a("li",[s._v("DOUBLE（双精度浮点数）")])]),s._v(" "),a("p",[s._v("SDT的指定语法详见本文"),a("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Appendix/SQL-Reference.html"}},[s._v("SQL 参考文档")]),s._v("。")],1),s._v(" "),a("p",[s._v("以下是使用SDT压缩的示例。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> CREATE TIMESERIES root.sg1.d0.s0 WITH DATATYPE=INT32,ENCODING=PLAIN,LOSS=SDT,COMPDEV=2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("刷入磁盘和SDT压缩之前，结果如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SELECT s0 FROM root.sg1.d0\n+-----------------------------+--------------+\n|                         Time|root.sg1.d0.s0|\n+-----------------------------+--------------+\n|2017-11-01T00:06:00.001+08:00|             1|\n|2017-11-01T00:06:00.002+08:00|             1|\n|2017-11-01T00:06:00.003+08:00|             1|\n|2017-11-01T00:06:00.004+08:00|             1|\n|2017-11-01T00:06:00.005+08:00|             1|\n|2017-11-01T00:06:00.006+08:00|             1|\n|2017-11-01T00:06:00.007+08:00|             1|\n|2017-11-01T00:06:00.015+08:00|            10|\n|2017-11-01T00:06:00.016+08:00|            20|\n|2017-11-01T00:06:00.017+08:00|             1|\n|2017-11-01T00:06:00.018+08:00|            30|\n+-----------------------------+--------------+\nTotal line number = 11\nIt costs 0.008s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("刷入磁盘和SDT压缩之后，结果如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> FLUSH\nIoTDB> SELECT s0 FROM root.sg1.d0\n+-----------------------------+--------------+\n|                         Time|root.sg1.d0.s0|\n+-----------------------------+--------------+\n|2017-11-01T00:06:00.001+08:00|             1|\n|2017-11-01T00:06:00.007+08:00|             1|\n|2017-11-01T00:06:00.015+08:00|            10|\n|2017-11-01T00:06:00.016+08:00|            20|\n|2017-11-01T00:06:00.017+08:00|             1|\n+-----------------------------+--------------+\nTotal line number = 5\nIt costs 0.044s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("SDT在刷新到磁盘时进行压缩。 SDT算法始终存储第一个点，并且不存储最后一个点。")]),s._v(" "),a("p",[s._v("时间范围在 [2017-11-01T00:06:00.001, 2017-11-01T00:06:00.007] 的数据在压缩偏差内，因此被压缩和丢弃。\n之所以存储时间为 2017-11-01T00:06:00.007 的数据点，是因为下一个数据点 2017-11-01T00:06:00.015 的值超过压缩偏差。\n当一个数据点超过压缩偏差时，SDT将存储上一个读取的数据点，并重新计算上下压缩边界。作为最后一个数据点，不存储时间 2017-11-01T00:06:00.018。")])])}),[],!1,null,null,null);n.default=t.exports}}]);