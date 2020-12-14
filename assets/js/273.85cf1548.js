(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{837:function(e,t,s){"use strict";s.r(t);var a=s(68),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"代码提交指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码提交指南"}},[e._v("#")]),e._v(" 代码提交指南")]),e._v(" "),s("h2",{attrs:{id:"贡献途径"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贡献途径"}},[e._v("#")]),e._v(" 贡献途径")]),e._v(" "),s("p",[e._v("IoTDB诚邀广大开发者参与开源项目构建")]),e._v(" "),s("p",[e._v("您可以查看"),s("a",{attrs:{href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),s("OutboundLink")],1),e._v("并参与解决，或者做其他改善。")]),e._v(" "),s("p",[e._v("提交pr，通过Travis-CI测试和Sonar代码质量检测后，至少有一位以上Committer同意且代码无冲突，就可以合并了")]),e._v(" "),s("h2",{attrs:{id:"pr指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pr指南"}},[e._v("#")]),e._v(" PR指南")]),e._v(" "),s("p",[e._v("在Github上面可以很方便地提交 "),s("a",{attrs:{href:"https://help.github.com/articles/about-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pull Request (PR)"),s("OutboundLink")],1),e._v("，下面将以本网站项目"),s("a",{attrs:{href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("apache/iotdb"),s("OutboundLink")],1),e._v(" 为例（如果是其他项目，请替换项目名iotdb）")]),e._v(" "),s("h3",{attrs:{id:"fork仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fork仓库"}},[e._v("#")]),e._v(" Fork仓库")]),e._v(" "),s("p",[e._v("进入 apache/iotdb 的 "),s("a",{attrs:{href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("github 页面"),s("OutboundLink")],1),e._v(" ，点击右上角按钮 "),s("code",[e._v("Fork")]),e._v(" 进行 Fork")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/37333508/79351839-bd288900-7f6b-11ea-8d12-feb18c35adad.png",alt:""}})]),e._v(" "),s("h3",{attrs:{id:"配置git和提交修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置git和提交修改"}},[e._v("#")]),e._v(" 配置git和提交修改")]),e._v(" "),s("ul",[s("li",[e._v("将代码克隆到本地：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git clone https://github.com/<your_github_name>/iotdb.git\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("请将 <your_github_name> 替换为您的github名字")])]),e._v(" "),s("p",[e._v("clone完成后，origin会默认指向github上的远程fork地址。")]),e._v(" "),s("ul",[s("li",[e._v("将 apache/iotdb 添加为本地仓库的远程分支 upstream：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd  iotdb\ngit remote add upstream https://github.com/apache/iotdb.git\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("检查远程仓库设置：")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git remote -v\norigin https://github.com/<your_github_name>/iotdb.git (fetch)\norigin    https://github.com/<your_github_name>/iotdb.git(push)\nupstream  https://github.com/apache/iotdb.git (fetch)\nupstream  https://github.com/apache/iotdb.git (push)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("ul",[s("li",[e._v("新建分支以便在分支上做修改：（假设新建的分支名为fix）")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git checkout -b fix\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("创建完成后可进行代码更改。")]),e._v(" "),s("ul",[s("li",[e._v("提交代码到远程分支：（此处以fix分支为例）")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('git commit -a -m "<you_commit_message>"\ngit push origin fix\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("更多 git 使用方法请访问："),s("a",{attrs:{href:"https://www.atlassian.com/git/tutorials/setting-up-a-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("git 使用"),s("OutboundLink")],1),e._v("，这里不赘述。")]),e._v(" "),s("h3",{attrs:{id:"创建pr"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建pr"}},[e._v("#")]),e._v(" 创建PR")]),e._v(" "),s("p",[e._v("在浏览器切换到自己的 github 仓库页面，切换分支到提交的分支 <your_branch_name> ，依次点击 "),s("code",[e._v("New pull request")]),e._v(" 和 "),s("code",[e._v("Create pull request")]),e._v(" 按钮进行创建，如果您解决的是"),s("a",{attrs:{href:"https://issues.apache.org/jira/projects/IOTDB/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("issues"),s("OutboundLink")],1),e._v("，需要在开头加上[IOTDB-xxx]，如下图所示：")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://user-images.githubusercontent.com/37333508/79414865-5f815480-7fde-11ea-800c-47c7dbad7648.png",alt:""}})]),e._v(" "),s("p",[e._v("至此，您的PR创建完成，更多关于 PR 请阅读 "),s("a",{attrs:{href:"https://help.github.com/categories/collaborating-with-issues-and-pull-requests/",target:"_blank",rel:"noopener noreferrer"}},[e._v("collaborating-with-issues-and-pull-requests"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"冲突解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#冲突解决"}},[e._v("#")]),e._v(" 冲突解决")]),e._v(" "),s("p",[e._v("提交PR时的代码冲突一般是由于多人编辑同一个文件引起的，解决冲突主要通过以下步骤即可：")]),e._v(" "),s("p",[e._v("1：切换至主分支")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git checkout master\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("2：同步远端主分支至本地")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git pull upstream master\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("3：切换回刚才的分支（假设分支名为fix）")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git checkout fix\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("4：进行rebase")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git rebase -i master\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("此时会弹出修改记录的文件，一般直接保存即可。然后会提示哪些文件出现了冲突，此时可打开冲突文件对冲突部分进行修改，将提示的所有冲突文件的冲突都解决后，执行")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git add .\ngit rebase --continue\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("依此往复，直至屏幕出现类似 "),s("em",[e._v("rebase successful")]),e._v(" 字样即可，此时您可以进行往提交PR的分支进行更新：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("git push -f origin fix\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("这个指导文档修改于"),s("a",{attrs:{href:"http://servicecomb.apache.org/developers/submit-codes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache ServiceComb"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);