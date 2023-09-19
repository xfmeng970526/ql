
免费脚本

本项目主要用于python学习，请勿非法使用脚本，下载后请于24小时内删除

大家好 我是一个合格的搬砖人! 👋
普普通通打工人，热爱研究脚本

拉库命令
ql repo https://ghproxy.com/https://github.com/xfmeng970526/ql.git

  
自用青龙docker搭建命令
   docker run -dit \
   -v $PWD/ql/config:/ql/config \
   -v $PWD/ql/log:/ql/log \
   -v $PWD/ql/db:/ql/db \
   -v $PWD/ql/repo:/ql/repo \
   -v $PWD/ql/raw:/ql/raw \
   -v $PWD/ql/scripts:/ql/scripts \
   -v $PWD/ql/deps:/ql/deps \
   -v $PWD/ql/.pnpm-store:/ql/.pnpm-store \
   -p 5700:5700 \
   --name qinglong \
   --hostname qinglong \
   --restart unless-stopped \
   whyour/qinglong:last


免责声明
仓库内所有资源文件，禁止任何公众号、自媒体进行任何形式的转载、发布。

对任何脚本问题概不负责，包括但不限于由任何脚本错误导致的任何损失或损害.

间接使用脚本的任何用户，包括但不限于建立VPS或在某些行为违反国家/地区法律或相关法规的情况下进行传播, 对于由此引起的任何隐私泄漏或其他后果概不负责.

如果任何单位或个人认为该项目的脚本可能涉嫌侵犯其权利，则应及时通知并提供身份证明，所有权证明，我们将在收到认证文件后删除相关脚本.

任何以任何方式查看此项目的人或直接或间接使用该python项目的任何脚本的使用者都应仔细阅读此声明。 保留随时更改或补充此免责声明的权利。一旦使用并复制了任何相关脚本或python项目的规则，则视为您已接受此免责声明.

您必须在下载后的24小时内从计算机或手机中完全删除以上内容.严禁产生利益链
