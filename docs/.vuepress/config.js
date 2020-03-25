var config = {
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
      ],

    // 静态网站部署的目录
    base: '',
  
    // 网站标题
    title: 'IoTDB Website',
  
    // <meta name="description" content="...">
    description: ' ', 
  
    markdown: {
      
      // 显示代码行号
      lineNumbers: true
    },
    themeConfig: {

        // 项目的 github 地址
        repo: 'https://github.com/apache/incubator-iotdb.git',
    
        // github 地址的链接名
        repoLabel: 'gitHub',
		
		logo: '/img/logo.png',
		
		searchMaxSuggestions:10,
		
		displayAllHeaders: true,
		
		sidebarDepth: 0,
    
		locales: {
		  '/': {
			selectText: 'Languages',
			label: 'English',
			ariaLabel: 'Languages',
			editLinkText: 'Edit this page on GitHub',
			serviceWorker: {
			  updatePopup: {
				message: "New content is available.",
				buttonText: "Refresh"
			  }
			},
			algolia: {},
			nav: [
				 {
					text: 'Document',
					items: [
						{ text: 'In progress', link: '/document/master/UserGuide/0-Get Started/1-QuickStart' },
						{ text: 'V0.9.x', link: '/document/V0.9.x/UserGuide/0-Get Started/1-QuickStart' },
					    { text: 'V0.8.x', link: '/document/V0.8.x/UserGuide/0-Get Started/1-QuickStart'},
					]
				  },
				  {
					text: 'System design',
					link: '/document/master/SystemDesign/0-Architecture/1-Architecture'
				  },
				  {
					text: 'Download',
					link: '/download/'
				  },
				  {
					text: 'Community',
					items: [
					  { text: 'People', link: '/community/Community-Project Committers'},
					  { text: 'Powered By', link: '/community/Community-Powered By'},
					  { text: 'History&Vision', link: '/community/Community-History&Vision'},
					]
				  },
				  {
					text: 'Development',
					items: [
					  { text: 'Questions and Contributing', link: '/development/Development-Contributing'},
					  { text: 'Developing in IDE', link: '/development/Development-IDE'},
					  { text: 'How to vote', link: '/development/Development-VoteRelease'},
					  { text: 'Changelist of TsFile', link: '/development/format-changelist'},
					  { text: 'Changelist of RPC', link: '/development/rpc-changelist'},
					]
				  },
				  {
					text: 'ASF',
					items: [
					  { text: 'Foundation', link: 'http://www.apache.org/foundation/'},
					  { text: 'License', link: 'http://www.apache.org/licenses/'},
					  { text: 'Security', link: 'http://www.apache.org/security/'},
					  { text: 'Sponsorship', link: 'http://www.apache.org/foundation/thanks.html'},
					  { text: 'Thanks', link: 'http://www.apache.org/foundation/thanks.html'},
					  { text: 'Current Events', link: 'http://www.apache.org/events/current-event'},
					]
				  },
				  {
					text: 'wiki',
					items: [
						{ text: 'github documents', link: 'https://github.com/apache/incubator-iotdb/tree/master/docs/Documentation'},
						{ text: 'confluence', link: 'https://cwiki.apache.org/confluence/display/iotdb'},
					  ]
				  },
			],
			sidebar: {
				'/document/V0.8.x/UserGuide/': [
					{
						title:'User Guide(V0.8.x)',
						collapsable: false,
					},
					{
						title: '0-Get Started',
						children: [
							'0-Get Started/1-QuickStart',
							'0-Get Started/2-Frequently asked questions',
							'0-Get Started/3-Publication'
						]
					},
					{
						title: '1-Overview',
						children: [
							'1-Overview/1-What is IoTDB',
							'1-Overview/2-Architecture',
							'1-Overview/3-Scenario',
							'1-Overview/4-Features'
						]
					},
					{
						title: '2-Concept Key Concepts and Terminology',
						children: [
							'2-Concept Key Concepts and Terminology/1-Key Concepts and Terminology',
							'2-Concept Key Concepts and Terminology/2-Data Type',
							'2-Concept Key Concepts and Terminology/3-Encoding',
							'2-Concept Key Concepts and Terminology/4-Compression'
						]
					},
					{
						title: '3-Operation Manual',
						children: [
							'3-Operation Manual/1-Sample Data',
							'3-Operation Manual/2-Data Model Selection',
							'3-Operation Manual/3-Data Import',
							'3-Operation Manual/4-Data Query',
							'3-Operation Manual/5-Data Maintenance',
							'3-Operation Manual/6-Priviledge Management',
						]
					},
					{
						title: '4-Deployment and Management',
						children: [
							'4-Deployment and Management/1-Deployment',
							'4-Deployment and Management/2-Configuration',
							'4-Deployment and Management/3-System Monitor',
							'4-Deployment and Management/4-Performance Monitor',
							'4-Deployment and Management/5-System log',
							'4-Deployment and Management/6-Data Management',
							'4-Deployment and Management/7-Build and use IoTDB by Dockerfile',
						]
					},
					{
						title: '5-IoTDB SQL Documentation',
						children: [
							'5-IoTDB SQL Documentation/1-IoTDB Query Statement',
							'5-IoTDB SQL Documentation/2-Reference',
						]
					},
					{
						title: '6-JDBC API',
						children: [
							'6-JDBC API/1-JDBC API',
						]
					},
					{
						title: '7-TsFile',
						children: [
							'7-TsFile/1-Installation',
							'7-TsFile/2-Usage',
							'7-TsFile/3-Hierarchy',
						]
					},
					{
						title: '8-System Tools',
						children: [
							'8-System Tools/1-Sync',
							'8-System Tools/2-Memory Estimation Tool',
						]
					},
				],
				'/document/V0.9.x/UserGuide/': [
					{
						title:'User Guide(V0.9.x)',
						collapsable: false,
					},
					{
						title: '0-Get Started',
						children: [
							'0-Get Started/1-QuickStart',
							'0-Get Started/2-Frequently asked questions',
							'0-Get Started/3-Publication'
						]
					},
					{
						title: '1-Overview',
						children: [
							'1-Overview/1-What is IoTDB',
							'1-Overview/2-Architecture',
							'1-Overview/3-Scenario',
							'1-Overview/4-Features'
						]
					},
					{
						title: '2-Concept',
						children: [
							'2-Concept/1-Data Model and Terminology',
							'2-Concept/2-Data Type',
							'2-Concept/3-Encoding',
							'2-Concept/4-Compression'
						]
					},
					{
						title: '3-Server',
						children: [
							'3-Server/1-Download',
							'3-Server/2-Single Node Setup',
							'3-Server/3-Cluster Setup',
							'3-Server/4-Config Manual',
							'3-Server/5-Docker Image',
						]
					},
					{
						title: '4-Client',
						children: [
							'4-Client/1-Command Line Interface',
							'4-Client/2-Programming - JDBC',
							'4-Client/3-Programming - Session',
							'4-Client/4-Programming - Other Languages',
							'4-Client/5-Programming - TsFile API',
						]
					},
					{
						title: '5-Operation Manual',
						children: [
							'5-Operation Manual/1-DDL Data Definition Language',
							'5-Operation Manual/2-DML Data Manipulation Language',
							'5-Operation Manual/3-Account Management Statements',
							'5-Operation Manual/4-SQL Reference',
						]
					},
					{
						title: '6-System Tools',
						children: [
							'6-System Tools/1-Sync Tool',
							'6-System Tools/2-Memory Estimation Tool',
							'6-System Tools/3-JMX Tool',
							'6-System Tools/4-Watermark Tool',
							'6-System Tools/5-Log Visualizer',
							'6-System Tools/6-Query History Visualization Tool',
							'6-System Tools/7-Monitor and Log Tools',
							'6-System Tools/8-Load External Tsfile',
						]
					},
					{
						title: '7-Ecosystem Integration',
						children: [
							'7-Ecosystem Integration/1-Grafana',
							'7-Ecosystem Integration/2-MapReduce TsFile',
							'7-Ecosystem Integration/3-Spark TsFile',
							'7-Ecosystem Integration/4-Spark IoTDB',
							'7-Ecosystem Integration/5-Hive TsFile',
						]
					},
					{
						title: '8-System Design',
						children: [
							'8-System Design/1-Hierarchy',
							'8-System Design/2-Files',
							'8-System Design/3-Writing Data on HDFS',
							'8-System Design/4-Shared Nothing Cluster',
						]
					},
				],
				'/document/master/UserGuide/': [
					{
						title:'User Guide(In progress)',
						collapsable: false,
					},
					{
						title: '0-Get Started',
						children: [
							'0-Get Started/1-QuickStart',
							'0-Get Started/2-Frequently asked questions',
							'0-Get Started/3-Publication'
						]
					},
					{
						title: '1-Overview',
						children: [
							'1-Overview/1-What is IoTDB',
							'1-Overview/2-Architecture',
							'1-Overview/3-Scenario',
							'1-Overview/4-Features'
						]
					},
					{
						title: '2-Concept',
						children: [
							'2-Concept/1-Data Model and Terminology',
							'2-Concept/2-Data Type',
							'2-Concept/3-Encoding',
							'2-Concept/4-Compression'
						]
					},
					{
						title: '3-Server',
						children: [
							'3-Server/1-Download',
							'3-Server/2-Single Node Setup',
							'3-Server/3-Cluster Setup',
							'3-Server/4-Config Manual',
							'3-Server/5-Docker Image',
						]
					},
					{
						title: '4-Client',
						children: [
							'4-Client/1-Command Line Interface',
							'4-Client/2-Programming - Native API',
							'4-Client/3-Programming - JDBC',
							'4-Client/4-Programming - Other Languages',
							'4-Client/5-Programming - TsFile API',
							'4-Client/6-Status Codes',
						]
					},
					{
						title: '5-Operation Manual',
						children: [
							'5-Operation Manual/1-DDL Data Definition Language',
							'5-Operation Manual/2-DML Data Manipulation Language',
							'5-Operation Manual/3-Account Management Statements',
							'5-Operation Manual/4-SQL Reference',
						]
					},
					{
						title: '6-System Tools',
						children: [
							'6-System Tools/1-Sync Tool',
							'6-System Tools/2-Memory Estimation Tool',
							'6-System Tools/3-JMX Tool',
							'6-System Tools/4-Watermark Tool',
							'6-System Tools/5-Log Visualizer',
							'6-System Tools/6-Query History Visualization Tool',
							'6-System Tools/7-Monitor and Log Tools',
							'6-System Tools/8-Load External Tsfile',
						]
					},
					{
						title: '7-Ecosystem Integration',
						children: [
							'7-Ecosystem Integration/1-Grafana',
							'7-Ecosystem Integration/2-MapReduce TsFile',
							'7-Ecosystem Integration/3-Spark TsFile',
							'7-Ecosystem Integration/4-Spark IoTDB',
							'7-Ecosystem Integration/5-Hive TsFile',
						]
					},
					{
						title: '8-Architecture',
						children: [
							'8-Architecture/1-Files',
							'8-Architecture/2-Writing Data on HDFS',
							'8-Architecture/3-Shared Nothing Cluster',
						]
					},
				],
				'/document/master/SystemDesign/': [
					{
						title: '0-Architecture',
						children: [
							'0-Architecture/1-Architecture',
						]
					},
					{
						title: '1-TsFile',
						children: [
							'1-TsFile/1-TsFile',
							'1-TsFile/2-Format',
							'1-TsFile/3-Write',
							'1-TsFile/4-Read',
						]
					},
					{
						title: '2-QueryEngine',
						children: [
							'2-QueryEngine/1-QueryEngine',
							'2-QueryEngine/2-Planner',
							'2-QueryEngine/3-PlanExecutor',
						]
					},
					{
						title: '3-SchemaManager',
						children: [
							'3-SchemaManager/1-SchemaManager',
						]
					},
					{
						title: '4-StorageEngine',
						children: [
							'4-StorageEngine/1-StorageEngine',
							'4-StorageEngine/2-WAL',
							'4-StorageEngine/3-FlushManager',
							'4-StorageEngine/4-MergeManager',
							'4-StorageEngine/5-DataPartition',
							'4-StorageEngine/6-DataManipulation',
						]
					},
					{
						title: '5-DataQuery',
						children: [
							'5-DataQuery/1-DataQuery',
							'5-DataQuery/2-SeriesReader',
							'5-DataQuery/3-RawDataQuery',
							'5-DataQuery/4-AggregationQuery',
							'5-DataQuery/5-GroupByQuery',
							'5-DataQuery/6-LastQuery',
							'5-DataQuery/7-AlignByDeviceQuery',
						]
					},
					{
						title: '6-Tools',
						children: [
							'6-Tools/1-Sync',
						]
					},
					{
						title: '7-Connector',
						children: [
							'7-Connector/2-Hive-TsFile',
							'7-Connector/3-Spark-TsFile',
							'7-Connector/4-Spark-IOTDB',
						]
					},
				],
			}
		  },
		  '/zh/': {
			// 多语言下拉菜单的标题
			selectText: '语言',
			// 该语言在下拉菜单中的标签
			label: '简体中文',
			// 编辑链接文字
			editLinkText: '在 GitHub 上编辑此页',
			// Service Worker 的配置
			serviceWorker: {
			  updatePopup: {
				message: "发现新内容可用.",
				buttonText: "刷新"
			  }
			},
			// 当前 locale 的 algolia docsearch 选项
			algolia: {
				apiKey: '8446a1de23bdccd680bf89b7d3d11d32',
				indexName: 'en',
			},
			nav: [
				 {
					text: '文档',
					items: [
					  { text: 'In progress', link: '/zh/document/master/UserGuide/0-Get Started/1-QuickStart' },
					  { text: 'V0.9.x', link: '/zh/document/V0.9.x/UserGuide/0-Get Started/1-QuickStart' },
					  { text: 'V0.8.x', link: '/zh/document/V0.8.x/UserGuide/0-Get Started/1-QuickStart'},
					]
				  },
				  	{
					text: '系统设计',
					link: '/zh/document/master/SystemDesign/0-Architecture/1-Architecture'
				  },
				  {
					text: '下载',
					link: '/zh/download/'
				  },
				  {
					text: '社区',
					items: [
					  { text: '开发人员', link: '/zh/community/Community-Project Committers'},
					  { text: '技术支持', link: '/zh/community/Community-Powered By'},
					  { text: '历史与视角', link: '/zh/community/Community-History&Vision'},
					]
				  },
				  {
					text: '发展',
					items: [
					  { text: '问题与贡献', link: '/zh/development/Development-Contributing'},
					  { text: '在IDE中开发', link: '/zh/development/Development-IDE'},
					  { text: '如何投票', link: '/zh/development/Development-VoteRelease'},
					  { text: 'TsFile的更改列表', link: '/zh/development/format-changelist'},
					  { text: 'RPC变更清单', link: '/zh/development/rpc-changelist'},
					  { text: '引导', link: '/zh/development/Development-Chinese'},
					]
				  },
				  {
					text: 'ASF',
					items: [
					  { text: '基础', link: 'http://www.apache.org/foundation/'},
					  { text: '执照', link: 'http://www.apache.org/licenses/'},
					  { text: '安全', link: 'http://www.apache.org/security/'},
					  { text: '赞助', link: 'http://www.apache.org/foundation/thanks.html'},
					  { text: '致谢', link: 'http://www.apache.org/foundation/thanks.html'},
					  { text: '现在发生的事', link: 'http://www.apache.org/events/current-event'},
					]
				  },
				  {
					text: 'wiki',
					items: [
						{ text: 'github文档', link: 'https://github.com/apache/incubator-iotdb/tree/master/docs/Documentation'},
						{ text: 'confluence', link: 'https://cwiki.apache.org/confluence/display/iotdb'},
					  ]
				  },
			],
			sidebar: {
				'/zh/document/V0.8.x/UserGuide/': [
					{
						title: '用户指引(V0.8.x)',
						collapsable: false,
					},
					{
						title: '0-开始使用',
						children: [
							'0-Get Started/1-QuickStart',
							'0-Get Started/2-Frequently asked questions',
							'0-Get Started/3-Publication'
						]
					},
					{
						title: '1-概述',
						children: [
							'1-Overview/1-What is IoTDB',
							'1-Overview/2-Architecture',
							'1-Overview/3-Scenario',
							'1-Overview/4-Features'
						]
					},
					{
						title: '2-基本概念',
						children: [
							'2-Concept Key Concepts and Terminology/1-Key Concepts and Terminology',
							'2-Concept Key Concepts and Terminology/2-Data Type',
							'2-Concept Key Concepts and Terminology/3-Encoding',
							'2-Concept Key Concepts and Terminology/4-Compression'
						]
					},
					{
						title: '3-操作指南',
						children: [
							'3-Operation Manual/1-Sample Data',
							'3-Operation Manual/2-Data Model Selection',
							'3-Operation Manual/3-Data Import',
							'3-Operation Manual/4-Data Query',
							'3-Operation Manual/5-Data Maintenance',
							'3-Operation Manual/6-Priviledge Management',
						]
					},
					{
						title: '4-系统部署与管理',
						children: [
							'4-Deployment and Management/1-Deployment',
							'4-Deployment and Management/2-Configuration',
							'4-Deployment and Management/3-System Monitor',
							'4-Deployment and Management/4-Performance Monitor',
							'4-Deployment and Management/5-System log',
							'4-Deployment and Management/6-Data Management',
							'4-Deployment and Management/7-Build and use IoTDB by Dockerfile',
						]
					},
					{
						title: '5-SQL文档',
						children: [
							'5-IoTDB SQL Documentation/1-IoTDB Query Statement',
							'5-IoTDB SQL Documentation/2-Reference',
						]
					},
					{
						title: '6-JDBC API',
						children: [
							'6-JDBC API/1-JDBC API',
						]
					},
					{
						title: '7-TsFile',
						children: [
							'7-TsFile/1-Installation',
							'7-TsFile/2-Usage',
							'7-TsFile/3-Hierarchy',
						]
					},
					{
						title: '8-系统工具',
						children: [
							'8-System Tools/1-Sync',
							'8-System Tools/2-Memory Estimation Tool',
						]
					},				   
				],
				'/zh/document/V0.9.x/UserGuide/': [
					{
						title: '用户指引(V0.9.x)',
						collapsable: false,
					},
					{
						title: '0-开始',
						children: [
							'0-Get Started/1-QuickStart',
							'0-Get Started/2-Frequently asked questions',
							'0-Get Started/3-Publication'
						]
					},
					{
						title: '1-概览',
						children: [
							'1-Overview/1-What is IoTDB',
							'1-Overview/2-Architecture',
							'1-Overview/3-Scenario',
							'1-Overview/4-Features'
						]
					},
					{
						title: '2-概念',
						children: [
							'2-Concept/1-Data Model and Terminology',
							'2-Concept/2-Data Type',
							'2-Concept/3-Encoding',
							'2-Concept/4-Compression'
						]
					},
					{
						title: '3-服务器端',
						children: [
							'3-Server/1-Download',
							'3-Server/2-Single Node Setup',
							'3-Server/3-Cluster Setup',
							'3-Server/4-Config Manual',
							'3-Server/5-Docker Image',
						]
					},
					{
						title: '4-客户端',
						children: [
							'4-Client/1-Command Line Interface',
							'4-Client/2-Programming - JDBC',
							'4-Client/3-Programming - Session',
							'4-Client/4-Programming - Other Languages',
							'4-Client/5-Programming - TsFile API',
						]
					},
					{
						title: '5-操作指南',
						children: [
							'5-Operation Manual/1-DDL Data Definition Language',
							'5-Operation Manual/2-DML Data Manipulation Language',
							'5-Operation Manual/3-Account Management Statements',
							'5-Operation Manual/4-SQL Reference',
						]
					},
					{
						title: '6-系统工具',
						children: [
							'6-System Tools/1-Sync Tool',
							'6-System Tools/2-Memory Estimation Tool',
							'6-System Tools/3-JMX Tool',
							'6-System Tools/4-Watermark Tool',
							'6-System Tools/5-Log Visualizer',
							'6-System Tools/6-Query History Visualization Tool',
							'6-System Tools/7-Monitor and Log Tools',
							'6-System Tools/8-Load External Tsfile',
						]
					},
					{
						title: '7-生态集成',
						children: [
							'7-Ecosystem Integration/1-Grafana',
							'7-Ecosystem Integration/2-MapReduce TsFile',
							'7-Ecosystem Integration/3-Spark TsFile',
							'7-Ecosystem Integration/4-Spark IoTDB',
							'7-Ecosystem Integration/5-Hive TsFile',
						]
					},
					{
						title: '8-系统设计',
						children: [
							'8-System Design/1-Hierarchy',
							'8-System Design/2-Files',
							'8-System Design/3-Writing Data on HDFS',
							'8-System Design/4-Shared Nothing Cluster',
						]
					},
				],
				'/zh/document/master/UserGuide/': [
					{
						title: '用户指引(In progress)',
						collapsable: false,
					},
					{
						title: '0-开始',
						children: [
							'0-Get Started/1-QuickStart',
							'0-Get Started/2-Frequently asked questions',
							'0-Get Started/3-Publication'
						]
					},
					{
						title: '1-概述',
						children: [
							'1-Overview/1-What is IoTDB',
							'1-Overview/2-Architecture',
							'1-Overview/3-Scenario',
							'1-Overview/4-Features'
						]
					},
					{
						title: '2-概念',
						children: [
							'2-Concept/1-Data Model and Terminology',
							'2-Concept/2-Data Type',
							'2-Concept/3-Encoding',
							'2-Concept/4-Compression'
						]
					},
					{
						title: '3-服务器端',
						children: [
							'3-Server/1-Download',
							'3-Server/2-Single Node Setup',
							'3-Server/3-Cluster Setup',
							'3-Server/4-Config Manual',
							'3-Server/5-Docker Image',
						]
					},
					{
						title: '4-客户端',
						children: [
							'4-Client/1-Command Line Interface',
							'4-Client/2-Programming - Native API',
							'4-Client/3-Programming - JDBC',
							'4-Client/4-Programming - Other Languages',
							'4-Client/5-Programming - TsFile API',
							'4-Client/6-Status Codes',
						]
					},
					{
						title: '5-操作指南',
						children: [
							'5-Operation Manual/1-DDL Data Definition Language',
							'5-Operation Manual/2-DML Data Manipulation Language',
							'5-Operation Manual/3-Account Management Statements',
							'5-Operation Manual/4-SQL Reference',
						]
					},
					{
						title: '6-系统工具',
						children: [
							'6-System Tools/1-Sync Tool',
							'6-System Tools/2-Memory Estimation Tool',
							'6-System Tools/3-JMX Tool',
							'6-System Tools/4-Watermark Tool',
							'6-System Tools/5-Log Visualizer',
							'6-System Tools/6-Query History Visualization Tool',
							'6-System Tools/7-Monitor and Log Tools',
							'6-System Tools/8-Load External Tsfile',
						]
					},
					{
						title: '7-生态集成',
						children: [
							'7-Ecosystem Integration/1-Grafana',
							'7-Ecosystem Integration/2-MapReduce TsFile',
							'7-Ecosystem Integration/3-Spark TsFile',
							'7-Ecosystem Integration/4-Spark IoTDB',
							'7-Ecosystem Integration/5-Hive TsFile',
						]
					},
					{
						title: '8-系统设计',
						children: [
							'8-Architecture/1-Files',
							'8-Architecture/2-Writing Data on HDFS',
							'8-Architecture/3-Shared Nothing Cluster',
						]
					},
				],
				'/zh/document/master/SystemDesign/': [
					{
						title: '0-应用概览',
						children: [
							'0-Architecture/1-Architecture',
						]
					},
					{
						title: '1-TsFile',
						children: [
							'1-TsFile/1-TsFile',
							'1-TsFile/2-Format',
							'1-TsFile/3-Write',
							'1-TsFile/4-Read',
						]
					},
					{
						title: '2-查询引擎',
						children: [
							'2-QueryEngine/1-QueryEngine',
							'2-QueryEngine/2-Planner',
							'2-QueryEngine/3-PlanExecutor',
						]
					},
					{
						title: '3-元数据管理',
						children: [
							'3-SchemaManager/1-SchemaManager',
						]
					},
					{
						title: '4-存储引擎',
						children: [
							'4-StorageEngine/1-StorageEngine',
							'4-StorageEngine/2-WAL',
							'4-StorageEngine/3-FlushManager',
							'4-StorageEngine/4-MergeManager',
							'4-StorageEngine/5-DataPartition',
							'4-StorageEngine/6-DataManipulation',
						]
					},
					{
						title: '5-数据查询',
						children: [
							'5-DataQuery/1-DataQuery',
							'5-DataQuery/2-SeriesReader',
							'5-DataQuery/3-RawDataQuery',
							'5-DataQuery/4-AggregationQuery',
							'5-DataQuery/5-GroupByQuery',
							'5-DataQuery/6-LastQuery',
							'5-DataQuery/7-AlignByDeviceQuery',
						]
					},
					{
						title: '6-工具',
						children: [
							'6-Tools/1-Sync',
						]
					},
					{
						title: '7-连接器',
						children: [
							'7-Connector/2-Hive-TsFile',
							'7-Connector/3-Spark-TsFile',
							'7-Connector/4-Spark-IOTDB',
						]
					},
				],
			}
		  }
		}
      },
	locales: {
		'/': {
		  lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
		  title: ' ',
		  description: ' '
		},
		'/zh/': {
		  lang: 'zh-CN',
		  title: ' ',
		  description: ' '
		}
	  },
  }
  
  module.exports = config
  