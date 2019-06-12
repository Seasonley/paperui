# 前言
包容性设计这个术语并不是一个新概念。这是自2005年以来一直存在的一个短语。它被定义为“尽可能多的人可以访问和使用的主流产品/服务的设计，而不需要特殊的适应或专门的设计“。

当我们重新思考我们的开发方法时，我们不仅仅是访问信息的基础级别。包容性发展意味着为尽可能多的人创造有价值的东西，而不仅仅是可以获得的东西。它将可访问性放在首位。

海登·皮克林（Heydon Pickering）用他的“ 包容性设计模式 ”（Inclusive Design Patterns）中的这句话总结了它：
>通过选择我们认为普通用户可以阅读的字体，我们会有意识地疏远我们的一部分用户。相反，通过选择适合那些努力阅读的人的字体，我们得出了一个适合每个人的选择。这是一种高效，有效的包容性设计。

可以简单的认为：**组件包容性设计 = 可访问性第一 + 组件驱动开发**

包容性设计是一种**设计过程**，还有很多的设计过程，没有对错，按需选择。

>还有，现实点。“100%可访问性”是一个无法实现的理想-你总是会遇到某种边缘情况，导致某个用户发现某些内容难以使用-但你应该尽你所能去做。如果您计划包含一个使用WebGL制作的时髦的3D饼图，您可能希望包括一个数据表，作为数据的可访问的替代表示。或者，您可能只需要包含表并去掉3D饼图-每个人都可以访问该表，编写代码更快，CPU密集型更少，维护也更容易。
>
>另一方面，如果你正在一个展示有趣的3D艺术的画廊网站上工作，那么期望每一件艺术品都能被视障人士完全访问是不合理的，因为它是一种完全的视觉媒介。
## 面向用户设计
![越往金字塔顶端，用户的能力缺失程度越严重](https://pic4.zhimg.com/80/8773674163bbc418f8f1d0f44bea0923_hd.jpg)

_( 上图为用户金字塔模型 & 包容性设计立方体模型 )_

**设计过程名词解释：**
- **通用/共用性设计 (universal design)**
用户金字塔模型自下而上，以关注主流健全用户为前提，力求提升设计对于特殊用户群体的适用。

- **无障碍设计 (barrier-free design)**
用户金字塔模型自上而下，以满足极端用户（金字塔顶端）的需求为首要任务，再拓展至主流用户群体。

- **包容性设计 (inclusive design)**
力图充分认识用户群体多样性，在设计的过程和结果中减少对用户产生无意识的排除。


## WEB中的无障碍访问
![6个无障碍扁平图标，包括辅助功能，轮椅上的人，手掌，耳朵，麦克风静音，眼睛](https://pic4.zhimg.com/80/v2-10d6d42bdcbc038ee2290dd0f9d7c17f_hd.jpg)

**视觉无障碍设计**
- 确保文字、可交互控件和背景的对比度，满足最低标准。
- 别只用颜色传达信息，让文字字号可调。
- 确保界面上所有的控件都可借助辅助技术使用，如屏幕阅读器，放大镜和盲文显示器。 这就意味着必须让 accessibility APIs 可以通过程序确定每个控件的角色、状态、价值、标题。

**听觉无障碍设计**
「听觉障碍」包括：听不清/听不到到界面发出的声音。
- 让文本内容容易被理解，适当使用「文字替代」
- 确保界面上的所有空间，在没有声音时，仍可正常使用。

**行动无障碍设计**
- 确保所有界面控件交互都可只通过键盘完成或者只使用鼠标；
- 确保界面控件被辅助技术正确标记；这些用户可能会使用诸如语音控制软件和物理切换控制等技术，这些技术一般使用与屏幕阅读器等其他辅助技术相同的API。

**认知无障碍设计**
「认知障碍」意味着用户可能需要辅助技术来帮助他们阅读文本，因此文本替代方案的存在非常必要。
- 避免重复或闪烁的显示方式，因为这可能会为认知障碍用户造成使用不便；
- 给用户留出充足的时间操作。

**WEB中的可访问性**
- 原生控件具有辅助交互，尽可能美化他们而不是造轮子(新元素上添加ARIA)
- 没有aria比错误的aria更好
  - aria role表明交互承诺，不提供键盘行为或样式
  - aria 可以隐藏装饰元素也可以增强/覆盖语义
- 深入了解ARIA
  - [ARIA 规范](https://www.w3.org/TR/wai-aria/)介绍了 role 属性以及可与这些角色联用的关联 ARIA 属性的可接受值。
  - [ ARIA 制作实践文档](https://www.w3.org/TR/wai-aria-practices-1.1/)探究了使用可用 ARIA 角色和属性的最佳做法。

## 可访问性反模式与误区
![连续弯道的盲道](https://pic2.zhimg.com/80/8fa7678b07a2d72d39d7cc38b6c75e64_hd.jpg)
### 暗黑模式

滥用导致的[暗黑模式（DARK PATTERN）](https://www.darkpatterns.org/types-of-dark-pattern)包括:
- 伪装或插入内容的广告等模式
- 使用误导或技巧问题诱骗用户做某事
- 迫使用户披露个人信息（例如连接到社交网络）以执行基本任务
- 阻止用户继续使用覆盖屏幕的东西

### 迷之信噪比

在网页设计中，信号是内容，噪音是内容周围的铬或额外项目。在设计时，目标是尽可能提高信噪比（信号很多，噪音很小）。

### 过时的UX模式

UX模式过多，若不适合用户或业务，应停止使用。以下列表并不全面，但应作为指南来确定是否应更新正在使用的模式：
轮播图；大背景图像；悬停状态以获取附加信息；无线嵌套菜单；悬停的回到顶部底部；折叠面板和标签；后退按钮；页面预加载器；社交分享和登录；内容分页；自动播放多媒体；非用户触发操作；无线分页；缺少导航路径；无法接受的合并功能；


### 可访问性的误区

**1. 我的用户中只有一小部分需要无障碍访问。**

然而有些例外：
- 老年人  - 可能需要在视频或更大的字体大小上添加字幕才能阅读文本
- 母语或母语不是英语的用户  - 可能需要更多时间阅读自动旋转幻灯片上的文本
- 具有认知限制的用户  - 可能需要易于访问的字体或项目符号内容以帮助您集中注意力
- 视力有限或视力不佳的用户  - 可能需要放大内容才能阅读和理解内容
- 具有情境障碍的用户  - 可能需要更好的色彩对比度，因此屏幕上的眩光不会干扰他们阅读内容
- 有临时残疾的用户  - 可能需要仅使用键盘访问所有内容，因为他们无法使用鼠标

**2. 使我们的网站或应用程序可访问需要花费太多时间/精力/金钱**

与其等到最后测试可访问性导致重写，不如一开始就构建它

**3. 可访问性是开发人员的一次性任务**

但是还有很多其他人*应该*负责数字可访问性：客户/股东；营销/销售；WEB架构师/设计师/ UI和用户体验专家；数字策略师/编辑/内容创建者；用户；

**4. 可访问的网站和应用程序简单或丑陋**

有很多漂亮且易于访问的网站，包括（但不限于）：
- [24 ways](https://24ways.org/)
- [Chase Bank](https://www.chase.com/)
- [Deque Systems](https://www.deque.com/)
- [Funka](https://www.funka.com/en/)
- [Indiana University](https://www.iu.edu/)
- [Jiffy Lube](https://www.jiffylube.com/)
- [National Oceanic and Atmospheric Administration (NOAA)](http://www.noaa.gov/)
- [The White House](https://www.whitehouse.gov/)
- [University of Washington](http://www.washington.edu/)
- [U.S. WEB Design System](https://designsystem.digital.gov/)

**5. 我使用了一些自动化测试工具，因此我的网站或应用程序现在是可访问的**

无论您选择使用哪种自动化工具，还有其他测试因素需要考虑。一些自动化测试相关问题包括：
- 我测试哪些浏览器或操作系统？
- 我应该测试哪些设备 - 台式机，平板电脑，手机？
- 我使用的自动化工具有多可靠？
- 如果不同的工具给我不同的结果怎么办？
- 如何确定工具报告的可访问性错误的优先级？
- 该工具错过了什么错误？

与手动测试结合使用时，自动化测试工具最有效。手动测试可包括：
- 查看网站或应用程序结构/体系结构（例如，查看标题顺序）
- 键盘兼容性测试（例如逻辑读取/ Tab键顺序）
- 媒体评论（例如视频的音频和/或文字说明）
- 辅助技术设备测试（例如屏幕阅读器及其他）
- 真正的用户测试！

## 关于我国网站信息无障碍的社会需求与现状
### 需求
我国残障人士数众多，分布广。根据第二次全国残疾人抽样调查结果，目前我国有各类残障人士共8296万人，占全国总人口的6.34%；

我国人口老龄化问题日趋严重，老龄人口比例日趋上升。我过已经步入老龄化社会，目前在我过60岁以上老年人口已经达到1.78亿，而且我过人口老龄化的速度还在加快比例还在进一步扩大。国务院印发的《中国老龄事业发展”十二五“规划》中指出，到2030年我过老年人口规模将会在目前的基础上翻一番。
### 现状
早在2014年，中国残疾人联合会、中央网信办就联合印发《关于加强网站无障碍服务能力建设的指导意见》。在此号召下，我国多个省市级政府网站先后开展了信息无障碍优化，使得面向障碍群体的信息、办事等业务真正惠民利民，落到实处。

2017年中国残疾人联合会、中国工业和信息化部共同制定下发了《关于支持视力、听力、言语残疾人信息消费的指导意见》。中国盲人协会、国家网信办等政府组织也在积极推进和从事相关公共服务的行业采取信息无障碍措施，鼓励支持相关信息无障碍产品研发、生产、推广、应用。

2019年4月19日，信息无障碍产品联盟（CAPA）2018年度会议暨轮值主席换届选举大会在北京顺利召开。百度、微软（中国）、阿里巴巴集团、中国平安、字节跳动、OPPO、滴滴出行、CSDN、信息无障碍研究会、浙江大学中国信息无障碍和技术研究院等数十家单位代表出席会议。

会议详细内容[信息无障碍产品联盟2018年度会议暨轮值换届选举大会在京召开](https://www.csdn.net/article/a/2019-04-22/15972304)

## 关于可访问性组织与规范

[a11TO](https://a11yto.com/) 是一个可访问性组织

[网络内容无障碍指南（WEB Content Accessibility Guidelines，WCAG）](https://www.w3.org/WAI/intro/wcag) 为开发无障碍网站提供了指南。

[How to Read W3C Specs](https://alistapart.com/article/readspec/) 告诉我们如何阅读w3c规范

[Researching a Property in the CSS Specifications](https://24ways.org/2018/researching-a-property-in-the-css-specifications/) 以grid-auto-rows 为例，教你获取有关规范中详述信息所需的基本细节。

[WAI-ARIA Practices](https://www.w3.org/TR/wai-aria-practices/) 是ARIA一系列可访问组件的官方最佳实践

下面的 WCAG 检查表提供了一些概览：
- [Wuchang 提供的 WCAG 检查表（WCAG checklist from Wuhcag）](https://www.wuhcag.com/wcag-checklist/)
- [WebAIM 提供的 WCAG 检查表（WCAG checklist from WebAIM）](https://webaim.org/standards/wcag/checklist)
- [A11Y Project 提供的检查表（Checklist from The A11Y Project）](https://a11yproject.com/checklist.html)


# WEB包容性设计要素
![用户体验设计师和UX知识库草图的创始人Krisztina Szerovay绘制的草图](http://upload.omooo.com/201812/27/10-13-25-24-4427.jpg)
## 信息结构与内容
- **慎用截断**
  - 截断的内容通常不会写入摘要或重用
  - 截断的内容通常不包含触发词
  - 永远不要截断头条新闻
  - 始终提供长拷贝的摘要
  - 需要时提供替代副本
- **构建内容系统**
  - 内容并不总是一刀切，允许不同大小和样式的内容属性(小，中，大图像)
   - 可读性和SEO友好的头条
   - 不要为特定上下文（如iPhone，Android，平板电脑或台式机）构建内容
- **内容应易于导航**
  - 不要不必要地对长篇内容进行分页
  - 可以轻松导航到长篇内容中的部分
  - 始终为用户提供足够的上下文来制定自己的导航决策
    - 具有位置服务的用户可能不仅仅想要基于位置的信息
    - 提供大量的触发词
- **保持导航整洁**
  - 超过5个主要导航类别难以扫描
  - 仅在绝对必要时才提供辅助导航
  - 尽量避免超过三级导航
  - 如果导航变得混乱，请停止并返工以使架构更易于理解
  - 想一想头条是否可以用作链接，或者是否应该使用替代副本
- **内容应该可用**
  - 不要限制内容，尤其是基于设备
  - 如果无法使一种格式可用，则提供其他内容格式，例如通过设备功能或业务需求
  - 不要将内容存储为HTML，而是将其作为可以多种方式呈现的原始属性。对于与长拷贝相关的表格数据和图像尤其如此
  - 以最适合手头显示的方式提供所有内容
- **开发注意事项**
  - 使用带有分区语义的标签 [MDN 的 HTML 元素参照（MDN HTML elements reference）](https://developer.mozilla.org/en-US/docs/WEB/HTML/Element)
  - 响应式、特征检测的渐进式增强、优雅降级
  - 内容在桌面和移动设备上以正确，有意义的阅读顺序呈现
  - 内容回流而不使用水平和垂直滚动

## 使文字可读
为视频提供了字幕；Alt标签用于描述图像，或者当辅助技术忽略装饰图像时设置为空（即alt =“”）；除徽标外，文本不会放在图像中。

文本行之间的间距（称为行间距，行高或行距）至少是字体大小的1.5倍；段落之间的间距至少是字体大小的2倍；字母之间的间距（称为字母间距或跟踪）至少是字体大小的0.12倍；允许调整文本大小的功能（使用相对单位表示字体大小，例如em或rem） - 最高可达200​​％ - 使用屏幕控制或通过WEB浏览器的缩放功能；清楚地定义段落和字母间距。

选择大多数用户以前遇到的常用字体。如果你选择一个普通的字体系列或一个具有独特字符的系列，那么“serif vs. sans-serif”并不是什么大问题。避免使用不是唯一的专业显示字体或字体系列（例如可以互相镜像的字母或数字）。

- 您的字体的最小大小应为14px（理想情况下更多），编码时应使用相对值。
- 注意颜色和对比度！使用工具检查文本和背景之间的比例，并警惕灰色。避免闪烁或移动文本。
- 不要只依赖字体的外观（颜色，形状，字体变化，位置等）来传达意义（例如“点击红色按钮”）。
- 不要让内容的总宽度超过80个英文字符（对于语标为40个英文字符）。避免在内容中创建空格的段落对齐（例如对齐）。

## 适当使用颜色
- 正文副本与周围区域的对比度至少为4.5：1，更严格的7：1
- 标题和大文字与周围区域的对比度至少为3：1
- 使用颜色传达的信息也可以在文本中找到
- [WCAG —— 理解色彩对比度要求](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)
- [有关色彩对比度的一切以及为何你应该重新考虑它](https://www.smashingmagazine.com/2014/10/color-contrast-tips-and-tools-for-accessibility/)
- [A11yProject —— 什么是色彩对比度](https://a11yproject.com/posts/what-is-color-contrast/)
- [使用 Colorable 来计算出一个完全无障碍的调色板](https://jxnblk.com/colorable/)
- [WebAIM —— 色彩对比度检验工具](https://webaim.org/resources/contrastchecker/)
- [The Paciello Group —— 色彩对比度分析工具](https://www.paciellogroup.com/resources/contrastanalyser/)


## 夜间模式
夜间模式指的是在操作系统中可以设置高对比度模式，对应浏览器`@media (prefers-color-scheme: dark)`下的样式会生效。

反色不是夜间模式，但大部分网站是浅色背景深色字，对应浏览器的`@media (inverted-colors: inverted)`。

反色可能会导致颜色意思改变（红-绿 变成 青-粉）、图片或主题色调改变（蓝变橙）（[How “invert brightness” can improve accessibility and help us use our devices - Matthew Atkinson](https://developer.paciellogroup.com/blog/2017/12/how-invert-brightness-can-improve-accessibility-and-help-us-use-our-devices/)）

浏览器隐身窗口不是夜间模式，只是深色窗体。

利用css自定义属性+媒体查询配置（[How to get dark mode working with CSS - Frank Lämmer](https://www.freecodecamp.org/news/how-to-get-dark-mode-working-with-css-740ad31e22e/)）

## 避免负面的身体反应（癫痫发作）

网站上没有任何内容每秒闪烁超过三次

## WEB语义可访问性（ARIA）

**使用ARIA语义标识分区**

ARIA role标识提供了一种识别网页组织和结构的强大方法。通过对页面的各部分进行分类和标记，它们使得通过布局可视地传达的结构信息能够以编程方式表示。屏幕阅读器利用标志性角色为页面的重要部分提供键盘导航。标识区域也可以用作“跳过链接”的目标，并通过浏览器扩展用于增强的键盘导航和屏幕阅读器支持。



**故意用presentation角色隐藏语义**

presentation的三个常见用途是：
1. 隐藏装饰图像； 它相当于给图像空的alt文本。
2. 在表语义不传达有意义的关系的情况下，抑制用于布局的表的表语义。
3. 消除复合窗口小部件结构中的插入孤立元素的语义，如上面的示例中所示的选项卡列表，菜单或树。

**关于子元素自动隐藏语义的角色**

要求所有子元素都具有访问性的角色是：
button，checkbox，img，math，menuitemcheckbox，menuitemradio，option，progressbar，radio，scrollbar，separator，slider，switch，tab

## 多状态设计
[The Nine States of Design - Vince Speelman](https://medium.com/swlh/the-nine-states-of-design-5bfe9b3d6d85) 提到9种状态，他们是：
- Nothing：初次加载，未激活
- Loading：加载中
- None：无数据
- One：单条数据
- Some：多条数据
- Too many：大量数据
- Incorrect：错误状态
- Correct：正确状态
- Done：完成状态


## 键盘访问
![盲人敲打键盘并聆听](http://upload.omooo.com/201812/27/10-14-47-98-4427.jpg)

ARIA角色，状态和属性模拟了流行桌面GUI（包括Microsoft Windows，macOS和GNOME）的GUI组件之间共享的可访问性行为和功能。同样，ARIA设计模式借鉴了这些平台的用户期望和键盘约定，始终如一地结合了常见的约定，旨在促进WEB上键盘界面的轻松学习和高效操作。

要使网页易于访问，所有交互式元素必须可通过键盘操作。此外，ARIA设计模式中描述的通用GUI键盘接口约定的一致应用很重要，特别是对于辅助技术用户。例如，考虑操作树的屏幕阅读器用户。正如熟悉的视觉样式帮助用户发现如何使用鼠标扩展树枝一样，ARIA属性为树提供了桌面应用程序中树的声音和感觉。因此，屏幕阅读器用户通常会期望按右箭头键会展开折叠节点。因为屏幕阅读器知道元素是树，所以它还能够指示新手用户如何操作它。类似地，语音识别软件可以实现用于扩展和折叠分支的命令，因为它将元素识别为树并且可以执行适当的键盘命令。

所有平台上常见的主要键盘导航约定是，tab和shift+tab键将焦点从一个UI组件移动到另一个UI组件，而其他键（主要是箭头键）将焦点移动到包含多个可聚焦元素的组件内。tab按键时焦点所遵循的路径称为标签序列或标签环。

**开发要点**
- 焦点的可见性，持久性，可预测性
- 焦点和选中状态视觉需不同
- 自动获取焦点的情况
- tab键导航顺序
- 使用动态tabindex管理组件内的焦点
- 使用aria-activedescendant管理组件内的焦点
- 禁用元素的可聚焦性（listbox,menu,tabs,tree中的子项）
- 避免与系统级功能快捷键冲突


## 测试驱动开发

**测试**

[axe-chrome扩展](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) 免费扩展，提供页面可访问性测试

[AT-browser-tests -github](https://github.com/ThePacielloGroup/AT-browser-tests) html测试用例，包括html5可访问性和JAWS

ESLint 中的 [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) 插件为你的 JSX 中的无障碍问题提供了 AST 的语法检测反馈。

[在Android和iOS上的屏幕阅读器测试摘要 - MDN](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Mobile#Summary_of_screenreader_testing_on_Android_and_iOS)

**检查工具**
- [网络无障碍性评估工具（WEB Accessibility Evaluation Tool）](https://wave.webaim.org/extension/)是一个无障碍辅助的浏览器插件。
- [无障碍辅助功能树](https://developer.paciellogroup.com/blog/2015/01/the-browser-accessibility-tree/)
-   [Inspect.exe](https://docs.microsoft.com/zh-cn/windows/desktop/WinAuto/inspect-objects) (免费的桌面应用程序为windows作为windows SDK)的一部分
-   在chrome通过在地址栏输入 `chrome://accessibility/`查看 [可访问性树](http://www.w3.org/WAI/PF/aria-implementation/#def_accessibility_tree)。
- 工具概述 -  http://webaim.org/articles/tools
- 通用工具 -  http://pa11y.org
- 可视化工具包 -  http://khan.github.io/tota11y
- 色盲模拟器 -  http://www.color-blindness.com/coblis-color-blindness-simulator
- 颜色安全 -  http://colorsafe.co
- VoiceOver -  http://webaim.org/articles/voiceover
- Wave - http://wave.webaim.org
- [在 Firefox 中使用无障碍辅助功能检测器](https://developer.mozilla.org/en-US/docs/Tools/Accessibility_inspector)
- [在 Chrome 中激活无障碍辅助功能检测器](https://gist.github.com/marcysutton/0a42f815878c159517a55e6652e3b23a)
- [在 OS X Safari 中使用无障碍辅助功能检测器](https://developer.apple.com/library/content/documentation/Accessibility/Conceptual/AccessibilityMacOSX/OSXAXTestingApps.html)


**屏幕朗读器**

付费产品：[JAWS](http://www.freedomscientific.com/Products/Blindness/JAWS) (Windows) 和 [Window Eyes](http://www.gwmicro.com/window-eyes/) (Windows).

免费产品： [NVDA](http://www.nvaccess.org/) (Windows)， [ChromeVox](http://www.chromevox.com/) (Chrome, Windows and Mac OS X)， 和 Orca (Linux).

操作系统内置： [VoiceOver](http://www.apple.com/accessibility/osx/voiceover/) (Mac OS X and iOS)， [Narrator](https://support.microsoft.com/en-us/help/22798/windows-10-narrator-get-started) (Microsoft Windows)， [ChromeVox](http://www.chromevox.com/) (on Chrome OS)，和 [TalkBack](https://play.google.com/store/apps/details?id=com.google.android.marvin.talkback) (Android).

**火狐中的 NVDA**

[NonVisual Desktop Access](https://www.nvaccess.org/)，简称 NVDA，是一个被广泛使用的 Windows 开源屏幕朗读器。

想要了解怎么样最好的使用 NVDA，请参考下面的指南：

[WebAIM —— 使用 NVD A来评估网络的可无障碍访问性](https://webaim.org/articles/nvda/)
[Deque —— NVDA 键盘快捷键](https://dequeuniversity.com/screenreaders/nvda-keyboard-shortcuts)

**Safari 中的 VoiceOver**

VoiceOver 是苹果设备的自带屏幕朗读器。

想要了解如何激活以及使用 VoiceOver，请参考下面的指南：

[WebAIM —— 使用 VoiceOver 来评估网络的可无障碍访问性](https://webaim.org/articles/voiceover/)
[Deque —— OS X 中的 VoiceOver 键盘快捷键](https://dequeuniversity.com/screenreaders/voiceover-keyboard-shortcuts)
[Deque —— iOS 中的 VoiceOver 快捷键](https://dequeuniversity.com/screenreaders/voiceover-ios-shortcuts)

**Internet Explorer 中的 JAWS**

[Job Access With Speech](https://www.freedomscientific.com/Products/software/JAWS/)又称 JAWS，是一个常用的 Windows 屏幕朗读器。

想要了解如何最好的使用 VoiceOver，请参考下面的指南：

[WebAIM —— 使用 JAWS 来评估网络的可无障碍访问性](https://webaim.org/articles/jaws/)
[Deque —— JAWS 键盘快捷键](https://dequeuniversity.com/screenreaders/jaws-keyboard-shortcuts)

**Google Chrome 中的 ChromeVox**

[ChromeVox](https://www.chromevox.com/)是 Chromebook 的内置屏幕朗读器，同时也是 Google Chrome 中的[一个插件](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en)。

想要了解如何最好的使用 ChromeVox，请参考下面的指南：

[Google Chromebook 帮助 —— 使用内置屏幕朗读器](https://support.google.com/chromebook/answer/7031755?hl=en)
[ChromeVox 经典键盘快捷键参考](https://www.chromevox.com/keyboard_shortcuts.html)




## 可访问性与SEO

**布局**

以清晰一致的方式构建导航和页面布局，并有多种查找内容的方式（例如搜索，站点地图，目录）。搜索引擎机器人就像组织良好的网站架构，这使得他们能够以更有意义的方式索引您的内容。如果您的网站难以浏览或使用，则可能会影响您的用户分析统计信息，包括 - 网站上的时间，浏览的网页和跳出率。反过来，这可能会损害您的SEO排名。至少，它会激怒你的用户。

**标签**

在适当的时候，使用访问HTML 5网页元素，如`<article>`，`<section>`，`<header>`，`<footer>`。这些元素对搜索引擎机器人和辅助技术设备更具描述性，然后是简单`<div>`或`<p>`元素。

标题标签应该是有序的,避免跳过标题标签。这意味着a `<h1>`后跟` <h2>`， `<h2>`后跟 `<h2>`或`<h3>`依此类推。最佳做法是`<h1>`每页只有一个。将`<h1>`标签视为“ 第二页标题标签 ”，将相关性信号发送给搜索引擎机器人。

确保没有断开的链接。使用内部标记类型链接，但不要过度。提供描述性链接文本。避免使用像click here和的短语read more。跳过向链接添加描述性标题属性（将鼠标悬停在链接上时显示的文本）。添加链接标题不一定是错误的，但对SEO或网站可访问性来说可能无济于事。

**图像与多媒体**

在命名图像时尽可能保持一致和准确。避免使用非字母字符（例如7，％，＆，$）并在单词之间使用短划线，而不是在图像名称或替代文本中使用下划线。将替代文字保留在125个字符以内。如果您需要更多字符，请使用标题文本或进一步描述页面主文本区域中的图像。编写可理解的替代文本，关键字填充对任何人都没有好处 - 使用屏幕阅读器的人会烦恼，搜索引擎机器人会惩罚你。

少即是多。尽可能限制在设计中使用复杂的多媒体组件。提供访问媒体的其他方法。例如，有视频的副本和/或标题；为仅音频文件创建副本；将[盲文格式](http://www.brailleauthority.org/)的文件添加到您的媒体。有许多不同类型的[替代格式](http://www.queensu.ca/accessibility/how-info/what-are-alternate-formats)可供使用。

**内容篇幅**

不要使用粗体和斜体标记来突出显示单词，而是使用强烈和强调。在视觉上它们看起来彼此相似，但屏幕阅读器（在正确的模式下）将强调包围`<strong>`和`<em>`标签的单词，而它们将完全忽略或仅略微改变`<b>`和`<i>`标签。

不要复制您的内容。搜索引擎机器人会注意到并惩罚你。您的用户会感到困惑。

项目符号和编号列表有助于为读者分解您的内容，使其更加用户友好。一些研究表明，搜索引擎机器人更喜欢使用列表和数字序号标记的内容而不是纯文本。

# WAI-ARIA

## 概念
![用户代理（例如，浏览器），可访问性API和辅助技术之间的关系](https://www.w3.org/TR/wai-aria-1.1/img/accessibleelement.png)

用户代理（例如，浏览器），可访问性API和辅助技术之间的关系

 **ACCESSIBILITY APIS**
-   **Windows:** [Microsoft Active Accessibility](https://docs.microsoft.com/en-us/windows/desktop/WinAuto/microsoft-active-accessibility) (MSAA), 被另一个API调用扩展称为 [IAccessible2](https://wiki.linuxfoundation.org/accessibility/iaccessible2/start) (IA2)
-   **Windows:** [UI Automation](https://docs.microsoft.com/en-us/windows/desktop/WinAuto/entry-uiauto-win32) (UIA), 微软MSAA的继任者。 Windows上的浏览器可以选择支持MSAA通过IA2，UIA或两者。 
-   **MacOS:** [NSAccessibility](https://developer.apple.com/documentation/appkit/nsaccessibility) (AXAPI)
-   **Linux/Gnome:** [Accessibility Toolkit](https://developer.gnome.org/atk/stable/) (ATK) and [Assistive Technology Service Provider Interface](https://developer.gnome.org/libatspi/stable/) (AT-SPI). 这个例子稍有不同，实际上有两个独立的API：一个是浏览器和其他应用程序将信息传递给（ATK），另一个是AT从（AT-SPI）调用的。 

**屏幕阅读器朗读某个按钮的工作流程**

![该图说明了在文档中呈现下一个对象所涉及的步骤](https://alistapart.com/wp-content/uploads/2019/02/fig1.png)

1. 屏幕阅读器从API请求关于相对于当前对象的下一个可访问对象的信息。
1. API（作为中介）将此请求传递给浏览器。
1. 在某些时候，浏览器引用DOM和样式信息，并发现相关元素是一个非隐藏按钮：`<button>Do a thing</ button>`。
1. 浏览器将此HTML按钮映射到API期望的格式，例如具有各种属性的可访问对象：名称：Do a thing，角色：Button。
1. API将此信息从浏览器返回到屏幕阅读器。
1. 然后，屏幕阅读器可以将该对象呈现给用户，或许可以说明“Button, Do a thing”。

**用户通过屏幕朗读器"点击"按钮流程**
![该图说明了将屏幕阅读器点击路由到WEB内容所涉及的步骤](https://alistapart.com/wp-content/uploads/2019/02/fig2.png)
1. 用户提供特定的屏幕阅读器命令，例如击键或手势。
1. 屏幕阅读器调用API中的方法来调用按钮。
1. API将此交互转发给浏览器。
1. 浏览器如何响应传入的交互取决于上下文，但在这种情况下，浏览器可以通过WEB API将其作为“单击”事件引发。
1. 浏览器不应指示点击来自辅助技术，因为这样做会侵犯用户的隐私权。
1. WEB开发人员已为点击注册了一个JavaScript事件监听器;
1. 现在执行它们的回调函数，就像用户用鼠标单击一样。


**了解Accessibility API主要从Role(角色),State(状态),Properties(属性)三个方面入手。**


![所有aria属性和角色的继承树状图](https://www.w3.org/TR/wai-aria-1.1/img/rdf_model.svg)
[所有aria属性和角色的继承树状图 -W3C](https://www.w3.org/TR/wai-aria-1.1/img/rdf_model.svg)
## 角色模型

角色分类如下：
- **抽象角色 (Abstract Roles)**  用于本体。作者不得在内容中使用抽象角色。
  - **command** <i id="role_command"></i> 一种窗体小部件，用于执行操作但不接收输入数据。(子类角色：button,link,menuitem)
  - **composite** <i id="role_composite"></i> 可能包含导航元素的小部件。(子类角色：grid,select,spinbutton,tablist)(支持的状态或属性：aria-activedescendant )
  - **input** <i id="role_input"></i> 允许用户输入的通用类型的小部件。(子类角色：checkbox,option,radio,slider,spinbutton,textbox)
  - **landmark** <i id="role_landmark"></i> 可感知的`section`包含与特定的，作者指定的目的相关的内容，并且足够重要以至于用户可能希望能够容易地导航到该部分并且将其列在页面的摘要中。这样的页面摘要可以由用户代理或辅助技术动态生成。(子类：所有landemark role)
  - **range** <i id="role_range"></i> 表示可由用户设置的值范围的输入。(子类角色：progressbar,scrollbar,slider,spinbutton)(支持的状态或属性: aria-valuemax；aria-valuemin；aria-valuenow；aria-valuetext )
  - **roletype** <i id="role_roletype"></i> 此分类是所有其他角色继承的基本角色。
  - **section** <i id="role_section"></i> 文档或应用程序中的可渲染结构包含单元。(子类角色：alert,cell,definition,figure,group,img,landmark,list,lsititem,log,maquee,note,status,table,tabpanel,term,tooltip)(支持的状态或属性：aria-expanded)
  - **sectionhead** <i id="role_sectionhead"></i> 标记或概括其相关部分主题的结构。（子类角色：columnheader,heading,rowheader,tab)（支持的状态或属性：aria-expanded）
  - **select** <i id="role_select"></i> 表单窗口小部件，允许用户从一组选项中进行选择。(子类角色：combobox,listbox,menum,radiogroup,tree)(支持的状态或属性：aria-orientation)
  - **structure** <i id="role_structure"></i> 文档结构元素(子类角色：application,document,presentation,rowgroup,section,sectionhead,separator)
  - **widget** <i id="role_widget"></i> 图形用户界面（GUI）的交互式组件。(子类角色：command,composite,gridcell,input,range,row,separator,tab)
  - **window** <i id="role_window"></i> 浏览器或应用程序窗口。(子类角色：dialog)(支持的状态或属性：aria-expanded,aria-modal)

- **小部件角色 (Widget Roles)**
  **以下角色充当独立用户界面窗口小部件或作为较大的复合窗口小部件的一部分**
  - **button 按钮** <i id="role_button"></i> 单击或按下时允许用户触发操作的输入。(子元素显性表达)(支持的状态或属性：aria-expanded aria-pressed )
  - **checkbox 复选框** <i id="role_checkbox"></i> 具有三个可能值的可检查输入：true，false或mixed。（默认`aria-checked=false`）(必需的状态或属性：aria-checked )(支持的状态或属性：aria-readonly )
  - **gridcell 网格单元** <i id="role_gridcell"></i> 一个grid或treegrid，内部包含一个cell(子类角色: columnheader rowheader )(必需的父元素角色：row)( 支持的状态或属性：aria-readonly;aria-required;aria-selected)
  - **link** <i id="role_link"></i> 对内部或外部资源的交互式引用，在激活时，会导致用户代理导航到该资源。(支持的状态或属性： aria-expanded)
  - **menuitem 菜单项** <i id="role_menuitem"></i> 被`menu`或`menubar`包裹住的选项(必需的父元素角色：group，menu,menubar)(支持的状态或属性：aria-posinset； aria-setsize )
  - **menuitemcheckbox 复选的菜单项** <i id="role_menuitemcheckbox"></i> 带有选中态的`menuitem`，值可以是：true，false或mixed。（子类角色：menuitemradio）（必需的父元素角色：menubar,menu）(默认 `aria-checked=false`)
  - **menuitemradio 单选的菜单项** <i id="role_menuitemradio"></i> 带有单选功能的`menuitem`,一次只能选中一个(必需的父元素角色：group，menu,menubar)(默认 `aria-checked=false`)
  - **option 选项** <i id="role_option"></i> `select`列表中的可选项(必需的父元素角色：listbox)(必需的状态或属性：aria-selected)(支持的状态或属性：aria-checked；aria-posinset；aria-setsize)(默认 `aria-selected=false`)
  - **progressbar 进度条** <i id="role_progressbar"></i> 显示需要很长时间的任务的进度状态的元素。
  - **radio 单选** <i id="role_radio"></i> 单选输入，一次只能选中其中一个元素。(必需的状态或属性：aria-checked)(支持的状态或属性：aria-posinset;aria-setsize)(默认 `aria-checked=false`)
  - **scrollbar** <i id="role_scrollbar"></i> 无论内容是否在观看区域内完全显示，控制观看区域内的内容滚动的图形对象。(必需的状态或属性：aria-controls；aria-orientation；aria-valuemax；aria-valuemin；aria-valuenow)(默认`aria-orientation =vertical`,`aria-valuemin=0`,`aria-valuemax=100`,`aria-valuenow=aria-valuemin和aria-valuemax的中间值`)
  - **searchbox** <i id="role_searchbox"></i> 一种用于指定搜索条件的文本框。
  - **separator(当获取焦点时) 分隔** <i id="role_separator"></i> 分隔符，用于分隔和区分内容或菜单项组的各个部分。（必需的状态或属性:aria-valuemax；aria-valuemin；aria-valuenow）(支持的状态或属性：aria-orientation，aria-valuetext)(默认`aria-orientation=horizontal`,`aria-valuemin=0`,`aria-valuemax=100`,`aria-valuenow=50`)
  - **slider 滑动条** <i id="role_slider"></i> 用户输入，其中用户从给定范围内选择值。（必需的状态或属性:aria-valuemax；aria-valuemin；aria-valuenow）(支持的状态或属性：aria-orientation，aria-readonly)(默认`aria-orientation =horizontal`,`aria-valuemin=0`,`aria-valuemax=100`,`aria-valuenow=aria-valuemin和aria-valuemax的中间值`)
  - **spinbutton 微调** <i id="role_spinbutton"></i> 一种范围选择方式，期望用户从多点触控中进行选择。（必需的状态或属性:aria-valuemax；aria-valuemin；aria-valuenow）(支持的状态或属性：aria-requied,aria-readonly)(默认`aria-now=0`)
  - **switch 开关** <i id="role_switch"></i> 一种表示开/关值的复选框，与已选中/未选中的值相对。(必需的状态或属性：aria-checked)(默认`aria-checked=false`)
  - **tab 标签** <i id="role_tab"></i> 提供用于选择要呈现给用户的选项卡内容的机制。(支持的状态或属性：aria-posinset,aria-selected,aria-setsize)(默认 `aria-selected=false`)
  - **tabpanel 标签面板** <i id="role_tabpanel"></i> 用于与`tab`关联的资源的容器，其中每个`tab`都包含在`tablist`中。
  - **textbox** <i id="role_textbox"></i> 一种允许自由格式文本作为其值的输入。(支持的状态或属性：aria-activedescendant；aria-autocomplete；aria-multiline；aria-placeholder；aria-readonly；aria-required)
  - **treeitem 树结构选项** <i id="role_treeitem"></i> `tree`的选项。这是树中的一个元素，如果它包含一个子级别的树项元素组，则可以展开或折叠。(必需的父元素角色：group,tree)
  **以下角色充当复合用户界面小部件。这些角色通常充当管理其他包含的小部件的容器。**
  - **combobox 下拉列表框** <i id="role_combobox"></i> 包含单行textbox和另一个元素的复合，例如 listbox或者grid，可以动态弹出以帮助用户设置值textbox。
  - **grid 网格** <i id="role_grid"></i> 包含一个或多个行的集合的复合，其中一个或多个单元格通过使用二维导航方法（例如方向箭头键）可以对网格中的某些或所有单元格进行聚焦。(子类：treegrid)(必需的子元素：row;rowgroup->row)(支持的状态或属性：aria-level;aria-multiselectable;aria-readonly;)
  - **listbox 列表框** <i id="role_listbox"></i> 允许用户从选项列表中选择一个或多个项目。(必需的子元素:option)(支持的状态或属性： aria-multiselectable;aria-readonly;aria-required)(默认`aria-orientation=vertical`)
  - **menu 垂直菜单栏** <i id="role_menu"></i> 一种窗口小部件，为用户提供选项列表。(子类：menubar)(必需的子元素：group->menuitemradio;menuitem;menucheckbox;menuradio)(默认 `aria-orientation=vertical`)
  - **menubar 水平菜单栏** <i id="role_menubar"></i> 这种菜单通常是水平呈现(必需的子元素：group->menuitemradio;menuitem;menucheckbox;menuradio)(默认 `aria-orientation=horizontal`)
  - **radiogroup** <i id="role_radiogroup"></i> 一组`radio`（必需的子元素：radio）(支持的状态或属性：aria-readonly;aria-required)
  - **tablist 标签列表** <i id="role_tablist"></i> 选项卡元素列表，它是对`tabpanel`的引用。(支持的状态或属性：aria-level,aria-mutiselectable,aria-orientation)
  - **tree 树形** <i id="role_tree"></i> 一种列表，可能包含可折叠和展开的子级嵌套组。(子类角色：treegrid)(必需的子元素：group->treeitem;item)(支持的状态或属性：aria-multiselectable；aria-required)
  - **treegrid 树形网格** <i id="role_treegrid"></i> 一种`grid`，其行可以以与`tree`相同的方式展开和折叠。(必需的子元素：row,rowgroup->row)

- **文档结构角色 (Document Structure Roles)** 描述了组织页面内容的结构。文档结构通常不是交互式的。
  - **application 应用** <i id="role_application"></i> 包含一个或多个需要用户输入的可聚焦元素的结构，例如键盘或手势事件，其不遵循由窗口小部件角色支持的标准交互模式。(支持的状态或属性：aria-activedescendant )
  - **article 文章** <i id="role_article"></i> 页面的一部分，由构成文档，页面或网站的独立部分的合成组成。(支持的状态或属性：aria-posinset aria-setsize )
  - **cell 单元格** <i id="role_cell"></i> 表格容器中的单元格。（支持的状态或属性： aria-colindex；aria-colspan；aria-rowindex；aria-rowspan）
  - **columnheader 列表头** <i id="role_columnheader"></i> 包含列标题信息的单元格。(必需的角色 row)(支持的状态或属性：aria-sort)
  - **definition 定义** <i id="role_definition"></i> 术语或概念的定义。
  - **directory 目录列表** <i id="role_directory"></i> 对组成员的引用列表，例如静态目录。
  - **document 文档** <i id="role_document"></i> 包含辅助技术用户可能希望在阅读模式下浏览的内容的元素。(支持的状态或属性：aria-expanded )
  - **feed 滚动列表** <i id="role_feed"></i> 可滚动`list`的`articles`。位置的滚动可能导致`articles`添加到列表的任一端或从列表的任一端移除。
  - **figure 形状** <i id="role_figure"></i> 可感知section的内容，通常包含图形文档，图像，代码片段或示例文本。figure 的部分可能是可导航的。
  - **group 组合并** <i id="role_group"></i> 一组用户界面对象，不打算通过辅助技术包含在页面摘要或目录中。(子类: row,select,toolbar) (支持的状态或属性：aria-activedescendant )
  - **heading 标题** <i id="role_heading"></i> 页面一部分的标题。(必需的角色或属性：aria-level )（默认 `aria-level=2`）
  - **img 图像** <i id="role_img"></i> 用于形成图像的元素集合的容器。
  - **list 列表** <i id="role_list"></i> 含有`listitem`的`section`元素(必需的子元素：group->listitem;item)
  - **listitem 列表项** <i id="role_listitem"></i> 列表或目录中的单个项目。(子类角色：treeitem)(必需的父元素角色：group;list)(支持的状态或属性： aria-level;aria-posinset;aria-setsize)
  - **math 数学公式** <i id="role_math"></i> 表示数学表达式的内容
  - **none 无** <i id="role_none"></i> 其角色语义不会映射到辅助功能API的元素。与`presentation`相同
  - **note 辅助** <i id="role_note"></i> 内容作为主要内容的辅助或辅助的部分。
  - **presentation 称述** <i id="role_presentation"></i> 其角色语义不会映射到辅助功能API的元素。与`none`相同
  - **row 行** <i id="role_row"></i> 表格容器中的一行单元格。（必需的父元素角色：grid,rowgroup,table,treegrid）(必需的子元素:cell,columnheader,gridcell,rowheader)(支持的状态或属性：aria-colindex；aria-level；aria-rowindex；aria-selected)
  - **rowgroup 一组行元素** <i id="role_rowgroup"></i> 包含表格容器中的一个或多个行元素的结构。（必需的父元素角色：grid,table,treegrid）(必需的子元素:row)
  - **rowheader 行表头** <i id="role_rowheader"></i> 包含网格中行的标题信息的单元格。（必需的父元素角色：row)(支持的状态或属性：aria-sort )
  - **separator(没有获取焦点时) 分隔** 分隔符，用于分隔和区分内容或菜单项组的各个部分。
  - **table** <i id="role_table"></i> 包含按行和列排列的数据的部分。(必需的子元素：row,rowgroup->row)(支持的状态或属性：aria-colcount,aria-rowcount)
  - **term 定义** <i id="role_term"></i> 带有相应定义的单词或短语。
  - **toolbar 工具栏** <i id="role_toolbar"></i> 以紧凑视觉形式表示的常用功能按钮或控件的集合。(支持的状态或属性：aria-orientation)(默认：`aria-orientation:horizontal`)
  - **tooltip 提示文本** <i id="role_tooltip"></i> 显示元素描述的上下文弹出窗口。

- **区域标识角色 (Landmark Roles)**
  以下角色是用作导航标识的页面区域。所有这些角色都继承自地标基本类型，并且都是继承自`landmark`的。这些角色包含在此处，以使它们成为WAI-ARIA角色分类的明确组成部分。
  - **banner 横幅** <i id="role_banner"></i> 主要包含面向站点的内容，而不是特定于页面的内容。
  - **complementary 补充** <i id="role_complementary"></i> 旨在与DOM层次结构中类似级别的主要内容互补，但在与主要内容分离时仍然有意义。
  - **contentinfo 页尾声明信息** <i id="role_contentinfo"></i> 包含有关父文档的信息的大型可感知区域。
  - **form 表单** <i id="role_form"></i> 一个`landmark`包含项目，对象，作为一个整体，结合创建表单集合区域。
  - **main 主体** <i id="role_main"></i> 文档的主要内容。
  - **navigation 导航** <i id="role_navigation"></i> 具有导航功能的元素（通常是连接）的集合，用来导航到相关文档。
  - **region 区域** <i id="role_region"></i> 一个可感知的部分，其中包含与特定的，作者指定的目的相关的内容，并且足够重要以至于用户可能希望能够轻松地导航到该部分并将其列在页面摘要中。这样的页面摘要可以由用户代理或辅助技术动态生成。
  - **search 搜索** <i id="role_search"></i> 包含一组项目和对象，这些项目和对象作为一个整体组合在一起以创建搜索工具
- **实时区域角色 (Live Region Roles)**
  以下角色是实时区域，可以通过实时区域属性进行修改。
  - **alert 警告** <i id="role_alert"></i> 一种具有重要且通常是时间敏感信息的实时区域。(默认 `aria-live=assertive`;`aria-atomic=true`)
  - **log 日志记录** <i id="role_log"></i> 其中以有意义的顺序添加新信息并且旧信息可能消失。(默认`aria-live=polite`)
  - **marquee 滚动文字** <i id="role_marquee"></i> 一种非必要信息频繁变化的实时区域。(默认`aria-live=off` )
  - **status 状态栏** <i id="role_status"></i> 其内容是用户的咨询信息，但不足以证明警报的合理性，通常但不一定表示为状态栏。(子类角色：progerssbar,timer)(默认 `aria-live=polite`,`aria-atomic=true`)
  - **timer 计数** <i id="role_timer"></i> 一种包含数字计数器的活动区域，该数字计数器指示从起始点开始的经过时间量，或者剩余到结束点的时间。
- **窗口角色 (Window Roles)**
  以下角色充当浏览器或应用程序中的窗口。
  - **alertdialog 警告弹出框** <i id="role_alertdialog"></i> 一种包含警报消息的对话框，其中初始焦点聚焦在对话框内的元素。
  - **dialog 对话框** <i id="role_dialog"></i> 对话框是WEB应用程序主窗口的后代窗口。对于HTML页面，主应用程序窗口是整个WEB文档，即body元素。（子类角色: alertdialog）





### 区域标识角色 (Landmark Roles) 实践

几个HTML5分区元素自动创建ARIA标识区域。因此，为了向辅助技术用户提供页面的逻辑视图，了解使用HTML5分区元素的效果非常重要。

**HTML5分区元素的默认role标识**
- `aside`:`complementary`
- `footer`:`contentinfo`在`body`元素的上下文中
- `header`:`banner`在`body`元素的上下文中
- `main`:`main`
- `nav`:`navigation`
- `section`:`region`当它具有使用`aria-labelledby`或的可访问名称时`aria-label`

**标识设计的一般原则**
在其中一个标志性区域中 包括页面上的**所有可感知内容**并为每个标志性区域赋予语义上有意义的作用是确保辅助技术用户不会忽视与其需求相关的信息的最有效方式之一。

**第1步：确定逻辑结构**

-   将页面分成可感知的内容区域，设计者通常使用对齐和间距在视觉上指示。
-   可以根据需要将区域进一步定义为逻辑子区域。
-   子区域的示例是门户应​​用程序中的portlet。

**第2步：为每个区域分配 role标识**

-   根据区域中的内容类型分配 role标识。
-   `banner`，`main`，`complementary`和`contentinfo`标识应该是顶级的标识。
-   可以嵌套 role标识以识别所呈现信息的父/子关系。

**第3步：标记区域**

-   如果在页面上多次使用特定的 role标识，请为该标识的每个实例提供唯一标签。有一种罕见的情况是，为标识的多个实例提供相同的标签可能是有益的：每个实例的内容和目的是相同的。例如，一个大的搜索结果表有两组相同的分页控件 - 一个在上面，一个在表下面，所以每个集都在一个标记为搜索结果的导航区域中。在这种情况下，向区分这两个实例的标签添加额外信息可能会比有用更令人分心。
-   如果标识仅在页面上使用一次，则可能不需要标签。请参阅下面的Landmark Roles部分。
-   如果区域以标题元素开头（例如`h1-h6`），则可以使用该`aria-labelledby`属性将其用作区域的标签。
-   如果某个区域需要标签但没有标题元素，请使用该`aria-label`属性提供标签。
-   不要将标记角色用作标签的一部分。例如，具有标签“站点导航”的导航标识将由屏幕阅读器宣布为“站点导航导航”。标签应该只是“网站”。

#### banner

一个[`banner`](#role_banner)标志性标识，在每一页的网站内开始面向网站内容。面向网站的内容通常包括诸如网站赞助商的徽标或身份以及特定于站点的搜索工具之类的内容。横幅通常出现在页面顶部，通常横跨整个宽度。

-   每个页面可能有一个`banner`标识。
-   该`banner`标识意义的应该是一个顶级标识。
-   当页面包含嵌套`document`和/或`application`角色（例如，通常通过使用`iframe`和`frame`元素）时，每个`document`或`application`角色可以具有一个`banner`界标。
-   如果页面包含多个`banner`标识，则每个标识都应具有唯一标签。


-   HTML5 `header`元素`banner`在其上下文是`body`元素时定义了一个标识。
-   当HTML5 `header`元素是`banner`以下任何元素的后代时，它不被视为具有标识意义（请参阅[HTML辅助功能映射](https://www.w3.org/TR/html-aam-1.0/) )：
    -   `article`
    -   `aside`
    -   `main`
    -   `nav`
    -   `section`


如果`header`未使用HTML5 元素技术，`role="banner"`则应使用属性来定义`banner`标识。


[banner标识示例](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/banner.html)

#### complementary

[`complementary`](#role_complementary)标识是文档，设计成与在DOM层次结构中的类似水平的主要内容互补的支撑部分，但是从主内容分离时仍然有意义。

-   `complementary` 标识应该是顶级标识（例如，不包含在任何其他标识内）。
-   如果补充内容与主要内容无关，则应分配更一般的角色（例如`region`）。
-   如果页面包含多个`complementary`标识，则每个标识都应具有唯一标签）。

使用HTML5 `aside`元素定义`complementary`标识。

如果`aside`未使用HTML5 元素技术，请使用`role="complementary"`属性来定义`complementary`标识。

[complementary标识示例](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/complementary.html)

#### contentinfo

一个[`contentinfo`](#role_contentinfo)标识是一个方法来识别一个网站中的每个页面的底部常见的信息，通常称为页面的“脚注”，包括诸如版权和链接隐私和可访问性声明的信息。

-   每个页面可能有一个`contentinfo`标识。
-   该`contentinfo`标识意义的应该是一个顶级标识。
-   当页面包含嵌套`document`和/或`application`角色（例如，通常通过使用`iframe`和`frame`元素）时，每个`document`或`application`角色可以具有一个`contentinfo`界标。
-   如果页面包含多个`contentinfo`标识，则每个标识都应具有唯一标签。

-   HTML5 `footer`元素`contentinfo`在其上下文是`body`元素时定义了一个标识。
-   当HTML5 `footer`元素是`contentinfo`以下任何元素的后代时，它不被视为具有标识意义：
    -   `article`
    -   `aside`
    -   `main`
    -   `nav`
    -   `section`


如果`footer`未使用HTML5 元素技术，`role="contentinfo"`则应使用属性来定义`contentinfo`标识。

[contentinfo标识示例](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/contentinfo.html)

#### form

[`form`](#role_form)标志性标识包含的项目和对象，作为一个整体，结合起来，创造一种形式的集合，当没有其他命名的标识是适当的区域（如主或搜索）。

-   当表单用于搜索功能时，使用`search`标识而不是`form`标识。
-   一个`form`具有标识意义应该有一个标签，以帮助用户了解表单的目的。
-   `form`标识的标签应对所有用户可见（例如`h1-h6`元素）。
-   如果页面包含多个`form`标识，则每个标识都应具有唯一标签。
-   只要有可能，`form`HTML文档中的标识中包含的控件应使用本机主机语义：
    -   `button`
    -   `input`
    -   `select`
    -   `textarea`

HTML5 `form`元素`form`在具有可访问名称（例如`aria-labelledby`，`aria-label`或`title`）时定义标识。

使用它`role="form"`来识别页面的区域； 不要用它来识别每个表单字段。

[form标识示例](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/form.html)

#### main

[`main`](#role_main)界标标识网页的主要内容。

-   每个页面都应该有一个`main`标识。
-   该`main`标识意义的应该是一个顶级标识。
-   当页面包含嵌套`document`和/或`application`角色（例如，通常通过使用`iframe`和`frame`元素）时，每个`document`或`application`角色可以具有一个`main`界标。
-   如果页面包含多个`main`标识，则每个标识都应具有唯一标签。

使用HTML5 `main`元素定义`main`标识。

如果`main`未使用HTML5 元素技术，请使用`role="main"`属性来定义`main`标识。

[main标识示例](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/main.html)

#### navigation

[`Navigation`](#role_navigation) 标识提供了一种识别旨在用于网站或页面内容导航的链接组（例如列表）的方法。

-   如果页面包含多个`navigation`标识，则每个标识都应具有唯一标签。
-   如果`navigation`标识具有与`navigation`页面上的另一个标识相同的链接集，则对每个`navigation`标识使用相同的标签。

使用HTML5 `nav`元素定义`navigation`标识。

如果`nav`未使用HTML5 元素技术，请使用`role="navigation"`属性来定义`navigation`标识。

[navigation标识示例](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/navigation.html)

#### region

[`region`](#role_region)标识是用户能够浏览到部分是足够重要的页面包含内容的感知的部分。

-   一个`region`具有标识意义必须有标签。
-   如果页面包含多个`region`标识，则每个标识都应具有唯一标签。
-   该`region`标识可用于识别名为标识未适当描述的内容。

HTML5 `section`元素`region`在具有可访问名称（例如`aria-labelledby`，`aria-label`或`title`）时定义标识。

如果`section`未使用HTML5 元素技术，请使用`role="region"`属性来定义`region`标识。

[region标识示例](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/region.html)

#### search

[`search`](#role_search)标志性包含项目和对象，作为一个整体，结合创建搜索功能的集合。

-   当表单用于搜索功能时，使用`search`标识而不是`form`标识。
-   如果页面包含多个`search`标识，则每个标识都应具有唯一标签。

没有定义`search`标识的HTML5元素。

该`role="search"`属性定义了一个`search`标识。

[search标识示例](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/search.html)

## 状态和属性

通用属性：

- **aria-atomic `<true|false>`** <i id="aria-atomic"></i> 指示辅助技术是否将基于aria-relevant属性定义的更改通知呈现更改区域的全部或部分。
- **aria-current(状态) `<id>`** <i id="aria-current"></i> 表示容器或相关元中的当前项的元素。
- **aria-keyshortcuts `<String>`** <i id="aria-keyshortcuts"></i> 表示已实现的键盘快捷键，用于激活或为焦点提供焦点。
- **aria-label `<String>`** <i id="aria-label"></i> 定义一个字符串值标记当前元素。
- **aria-relevant `<additions|removals|text|all>`** <i id="aria-relevant"></i> additions表示新增节点的时候做出反应；removals表示删除节点时重要操作；text表示文本改变是值得重视的；all等同于同时使用上面三个属性值。
- **aria-roledescription `<String>`** <i id="aria-roledescription"></i> 为元素的角色定义可读的，本地化的描述。

小部件属性：

- **aria-autocomplete`<inline|list|both|none>`** <i id="aria-autocomplete"></i> 表示用户的文本框的自动提示是否提供。如果是`none`,则支持`autocomplete`的元素其`autocomplete`需设置为`off`；如果是`inline|list|both`则需设为`on`
- **aria-checked(状态) `<true|false|mixed>`** <i id="aria-checked"></i> true表示元素被选择；false表示元素未被选择；mixed表示元素同时有选择和为选择状态。
- **aria-disabled(状态) `<true|false>`** <i id="aria-disabled"></i> true表示当前是非激活状态；false表示清除非激活状态。
- **aria-expanded(状态) `<undefined|true|false>`** <i id="aria-expanded"></i> 该属性对应HTML5的open属性。表示展开状态。默认为undefined, 表示当前展开状态未知。true表示元素是展开的；false表示元素不是展开的。
- **aria-haspopup `<true|false>`** <i id="aria-haspopup"></i> true表示点击的时候会出现菜单或是浮动元素； false表示没有pop-up效果。
- **aria-hidden(状态) `<true|false>`** <i id="aria-hidden"></i> true表示元素隐藏(不可见)，false表示元素可见。
- **aria-invalid(状态) `<true|false>`** <i id="aria-invalid"></i> 表示元素值是否错误的。默认为false, 表示是OK的，如果为true, 则表示值验证不通过。
- **aria-label `<String>`** <i id="aria-label"></i> 标记当前元素。
- **aria-level `<Number>`** <i id="aria-level"></i> 表示等级。
- **aria-modal `<true|false>`** <i id="aria-modal"></i> 指示元素在显示时是否为模态。
- **aria-multiline `<true|false>`** <i id="aria-multiline"></i> 指示文本框是接受多行输入还是仅接受一行。
- **aria-multiselectable `<true|false>`** <i id="aria-multiselectable"></i> 表示是否可多选。默认为false, 表示一次只能选择一个项。true表示一次可以选择多个项。例如手风琴展开收起效果，我们可以使用aria-multiselectable来告知辅助设备，一次可以展开多个项还是只有一个展开。
- **aria-orientation `<undefined|horizontal|vertical>`** <i id="aria-orientation"></i> 指示元素的方向,默认为undfined
- **aria-placeholder `<String>`** <i id="aria-placeholder"></i> 定义一个简短的提示（一个单词或短语），用于在控件没有值时帮助用户输入数据。提示可以是样本值或预期格式的简要描述。
- **aria-pressed(状态) `<undefined|true|false|mixed>`** <i id="aria-pressed"></i> 默认为undfined, 表示按下状态未知；true表示元素往下（按钮按下）；false表示元素抬起；mixed表示元素同时有按下和没有按下的状态。
- **aria-readonly `<true|false>`** <i id="aria-readonly"></i> 表示是否只读。默认为false, 表示元素值可以被修改；true表示元素指不能被改变。
- **aria-required `<true|false>`** <i id="aria-required"></i> 多半用在表单控件中。对应HTML5中required属性。默认为false, 表示元素值可以为空；true表示元素值是必需的。
- **aria-selected(状态) `<undefined|true|false>`** <i id="aria-selected"></i> 默认为undefined，表示元素选择状态未知。true表示元素已选择；false表示未被选中。
- **aria-sort `<ascending|descending|none|other>`** <i id="aria-sort"></i> 表示表格或格栅中的项是以升序排列还是降序排列。
- **aria-valuemax `<Number>`** <i id="aria-valuemax"></i> 允许的最大值。
- **aria-valuemin `<Number>`** <i id="aria-valuemin"></i> 允许的最小值。
- **aria-valuenow `<Number>`** <i id="aria-valuenow"></i> 表示当前值。
- **aria-valuetext `<String>`** <i id="aria-valuetext"></i> 定义等同于aria-valuenow人可读的文本。

激活区域属性：

- **aria-atomic`<true|false>`** <i id="aria-atomic"></i> 表示区域内容是否完整播报。值可以为`true`和`false`。当为`true`时，表示辅助设备需要把基于 aria-relevant 属性定义的区域内容都通报给使用者；如果为`false`则表示只需要通报修改的部分。
- **aria-busy`<true|false|error>`** <i id="aria-busy"></i> 表当前区域的忙碌状态。默认为`false`, 表清除busy状态；可选为`true`, 表该区域正在加载；或为error, 表示该区域验证无效。如果某个区域内有多个地方需要修改，需要全部修改完毕再通知使用者的话，就可以先将`aria-busy`设为`true`, 等到全部内容更新完毕后再设成`false`. 该属性可以避免辅助工具在区域内容更新完毕前不断即时提醒使用者。
- **aria-live `off|polite|assertive|rude`** <i id="aria-live"></i> 绝大多数的更新应该在用户闲暇的时候告知，即时提示对用户是一种干扰。如果希望内容完全更新后再提示，可以使用`aria-busy`。默认为`off`, 表示不宣布更新；`polite`表示只有用户闲时宣布；`assertive`表示尽快对用户宣布；`rude`表示即时提醒用户，必要的时候甚至中断用户。
- **aria-relevant `<additions|removals|text|all>`** <i id="aria-relevant"></i> 表示区域内哪些操作行为需要做出反应。可以空格分隔多个一起显示. additions表示新增节点的时候做出反应；removals表示删除节点时重要操作；text表示文本改变是值得重视的；all等同于同时使用上面三个属性值。

关系属性：

- **aria-activedescendant`<id>`** <i id="aria-activedescendant"></i> 当dom聚焦在composite,textbox,group或application时，标识当前获取焦点的子元素id
- **aria-colcount `<Number>`** <i id="aria-colcount"></i> 定义 table, grid 或 treegrid 的总列数
- **aria-colindex `<Number>`** <i id="aria-colindex"></i> 定义 table, grid 或 treegrid 的列索引或位置
- **aria-colspan `<Number>`** <i id="aria-colspan"></i> 定义 table, grid 或 treegrid 的cell或gridcell所跨越的列数
- **aria-controls `<id1 id2 ...>`** <i id="aria-controls"></i> 该属性定义了元素间不能通过文档结构决定的关联关系。aria-controls属性主要被role为group, region, 或widget的元素使用。
- **aria-describedby `<id1 id2 ...>`** <i id="aria-describedby"></i> 该属性定义了文档结构表现不出来的的元素间的相互关联性。该属性旨在通过标签提供更多用户可能需要的信息。如果指定了不只一个id, 所有元素会合并在一起共同创建一条单独的描述。
- **aria-details `<id>`** <i id="aria-details"></i> 标识为对象提供详细的扩展描述的元素。
- **aria-errormessage** <i id="aria-errormessage"></i> 标识为对象提供错误消息的元素。
- **aria-flowto `<id1 id2 ...>`** <i id="aria-flowto"></i> 如果该属性值对应的是单独的id, 辅助技术会恢复目标元素的阅读；如果对应的是多个id, 则辅助技术会让用户去选择、导航到目标元素。
- **aria-labelledby `<id1 id2 ...>`** <i id="aria-labelledby"></i> 一般用在区域元素上，对于的id一般为对应的标题或是标签元素的id.关系型属性。
- **aria-owns `<id>`** <i id="aria-owns"></i> 表示所拥有的元素。值为目标元素id.
- **aria-posinset `<Number>`** <i id="aria-posinset"></i> 表示当前位置。用在设置和获取一个集合内某项的当前位置。
- **aria-rowcount `<Number>`** <i id="aria-rowcount"></i> 定义 table, grid 或 treegrid 的总行数
- **aria-rowindex `<Number>`** <i id="aria-rowindex"></i> 定义 table, grid 或 treegrid 的行索引或位置
- **aria-rowspan `<Number>`** <i id="aria-rowspan"></i> 定义 table, grid 或 treegrid 的cell或gridcell所跨越的行数
- **aria-setsize `<Number>`** <i id="aria-setsize"></i> 设置的尺寸大小值。



# 基础控件

<i id='w-button'></i>

## 按钮 button


按钮是一个组件，能够让用户触发一个操作或事件，例如提交一个表单、打开一个对话框、取消操作、或执行删除操作。告知用户一个按钮会打开对话框的惯用方法是将“...”（省略号）添加到按钮上，例如“另存为...”

除了常规按钮组件外，WAI-ARIA还支持其他2种按钮类型：

- **切换按钮 toggle button**：可以关闭（未按下）或打开（按下）的双状态按钮。为了告知辅助技术该按钮是个切换按钮，需要为其指定属性 `aria-pressed`的值。例如，音频播放器中被标记为静音的按钮可以通过设置其按下状态为 `true`，来指示声音被静音。**重要提示**：按钮状态改变时，其标签不改变。在此示例中，当按下状态为 `true` 时，其标签仍为“静音”，这样屏幕阅读器就会像这样朗读：“静音” 切换按钮“已按下”。或者，如果设计文档要求按钮标签从“静音”变为“取消静音”，则不需要设置 `aria-pressed` 属性。
- **菜单按钮 menu button**：如[菜单按钮](#w-menu_button) 所述，当其 `aria-haspopup`属性设置为 `true` 或者 `menu` 时，该按钮会被辅助技术视为一个菜单按钮。

> **注意** 按钮执行的动作类型与链接的功能截然不同（参见 [链接模式](#w-link) ）。组件的外观和角色与其提供的功能相匹配，这非常重要。但是，偶尔某些元素会有链接的视觉样式，却执行按钮的操作。在这种情况下，为元素添加 `button` 角色，可以帮助辅助技术用户理解元素的功能。但是，更好的解决方案是调整其视觉设计，以匹配其功能和ARIA角色。

**示例**

[按钮示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/button/button.html)：将可点击的HTML `div` 和 `span` 元素作为可访问命令和切换按钮的示例。

[Toggle Buttons - Inclusive Components](https://inclusive-components.design/toggle-button/)

[A Theme Switcher - Inclusive Components](https://inclusive-components.design/a-theme-switcher/)

**键盘交互**

当按钮有焦点时：

- `Space`或`Enter`：激活按钮
- 按钮激活后，根据按钮的操作类型设置焦点。例如：
  - 如果激活按钮打开一个对话框，焦点将移至对话框内。（见 [对话框（模态）](#w-dialog_modal)）
  - 如果激活按钮会关闭一个对话框，焦点通常会返回到打开该对话框的按钮上，除非该对话框执行的功能会遵从上下文的逻辑，转到一个不同的元素。例如，激活对话框中的取消按钮将焦点返回到打开对话框的按钮。但是，如果对话框是确认删除其来自页面的操作，焦点将会根据逻辑移至一个新的上下文。
  - 如果激活按钮不会关闭当前上下文，按钮激活后，焦点仍停留在该按钮上，例如，一个应用或重新计算的按钮。
  - 如果按钮操作会导致上下文变更，例如，转到向导中的下一步，或添加其他搜索条件，此时，可以将焦点移至新操作的起点。
  - 如果使用快捷键激活按钮，焦点通常保留在激活快捷键的上下文中。例如，如果把快捷键 `Alt+U` 分配给“向上”按钮，该按钮会将当前聚焦的列表项目移至列表中的较高位置，当焦点在列表中时，按 `Alt+U` 将焦点移出列表。


**WAI-ARIA角色，状态和属性**

- 按钮具有的角色 [button](#role_button)。
- 按钮有一个可访问的标签
- 默认情况下，可访问名称是从按钮元素内部的所有内容计算得来。但是，无障碍名称也可以使用 [aria-describedby](#aria-labelledby) 或 [aria-label](#aria-label) 提供。
- 如果按钮有功能描述，则将按钮元素的 [aria-describedby](#aria-describedby) 的值设置为包含描述的元素的ID。
- 当与按钮相关联的动作不可用时，该按钮的 [aria-disabled](#aria-disabled) 设置为 `true`。
- 如果按钮是一个切换按钮，则其具有 [aira-pressed](#aria-pressed) 状态属性。当按钮被打开时，该状态属性的值为 `true`，当被关闭时，该状态属性的值为`false`。



## 链接 link
[链接](#w-link) 组件提供了对资源的交互索引。目标资源可以是外部的的，也可以是本地的，例如，当前页面内、页面外、应用。

>**注意** 作者们强烈建议使用原生语言的链接元素，例如一个具有 `href` 属性的HTML `A` 元素。与其他 WAI-ARIA 组件角色一样，应用link角色到一个元素，浏览器不会自动添加标准链接行为，例如导航到链接目标或上下文菜单操作。当使用 `link` 角色时，为元素提供这些特性是开发者的责任。

**示例**

[链接举例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/link/link.html): 用HTML标签 `span` 和 `div` 构建链接部件。

**键盘交互**

- `Enter`: 执行链接并且将焦点移至链接目标。
- `Shift + F10` _(可选)_: 打开链接的上下文菜单。

**WAI-ARIA 角色，状态和属性**

包含链接文本或图形的元素有 [link](#role_link) 角色 。

**阅读更多连接 read more**
- 将标题选择器添加到标题或段落，并用于aria-labelledby=""链接到标题文本。
- aria-label=""直接在链接中添加描述性文本。
- 将id选择器添加到标题或段落，并用于aria-describedby=""链接到标题文本。
- 使用该类visuallyhidden可视地隐藏有关链接的更多信息。
- 尽可能将更多链接读入按钮，因为它们允许更多标签选项。

**示例**
```html
<a href="#" aria-labelledby="headline" class="read-more">Read More</a>
```

## 提示 tooltip
Tooltip是元素获得键盘焦点或鼠标悬停在其上时，显示的与元素相关的信息弹窗。它通常在一小段延迟后出现，并在 `Escape` 按下或鼠标移出时消失。

Tooltip组件不会获得焦点。包含可聚焦元素的悬停可以使用非模态对话框模式实现。

**示例**
[Tooltips & Toggletips - Inclusive Components](https://inclusive-components.design/tooltips-toggletips/)


**键盘交互**

Escape: 关闭工具提示框。

>**注意**
>
>1.  当工具提示组件显示时，焦点停留在触发元素上。
>2.  如果当触发元素获得焦点时唤起工具提示组件，当元素失去焦点时（onBlur），工具提示组件消失。如果鼠标移入唤起工具提示组件，则鼠标移出时消失。

**WAI-ARIA 角色，状态和属性**

- 作为工具提示组件容器的元素具有角色 [tooltip](#role_tooltip)。
- 触发工具提示组件的元素使用 [aria-describedby](#aria-describedby) 索引工具提示组件元素。


# 多媒体控件


## 图片 img
非装饰性img务必加上具有描述性的alt。
使用alt而不是title，以下任何一种都不能在浏览器和屏幕阅读器组合中可靠地工作。
**非空title的空alt**
```html
<img src="a.gif" alt="" title="some text">
```
**非空title，没有alt**
```html
<img src="a.gif" title="some text">
```
[Short note on use of alt=”” and the title attribute](https://developer.paciellogroup.com/blog/2016/02/short-note-on-use-of-alt-and-the-title-attribute/)

**关于站点图标**
- 添加到网站的`<img>`需要具有alt属性。如果图像是信息性的，请将该等图像设置为该图像alt的描述性替代。
- 避免使用照片，图像或图标等通用字符串作为alt值，因为它们不会向用户传达有价值的内容。尽可能具有描述性。
- 确保文本图像中的任何文本至少为14磅，并且与背景具有良好的对比度。
- 当使用图像作为链接时，必须考虑如何将alt文本读回给辅助技术的用户。以下示例alt在用作链接或独立图像资源时显示徽标的相应文本。

[a11y-站点图标示例](https://a11y-style-guide.com/style-guide/section-media.html#kssref-media-site-logo)

**关于SVG**
让屏幕阅读器和语音识别工具等辅助技术（AT）可以访问SVG的最佳方法是使用`<svg>`标签将其直接放入HTML中
避免使用`<embed>`，`<object>`或`<img>`元素，因为它们不像浏览器那样支持内联SVG
在SVG标记中包含一个`<title>`和`<description>`
使用`aria-labelledby=""`和引用标题和描述元素的id值
使用该`role=""`属性为SVG提供工作
在SVG添加中“隐藏”屏幕阅读器中的元素 `role="presentation"`

[a11y-svg示例](https://a11y-style-guide.com/style-guide/section-media.html#kssref-media-svgs)

## 音频
在考虑可访问性的情况下构建您的媒体！在开始时使用可访问性比在以后尝试使用它更容易。所有组件都是如此，尤其是媒体组件。
确保您的播放器可以访问，并包含暂停，停止和播放媒体的控制元素。
不要自动播放媒体。这可能会造成混乱和烦恼。
确保您的媒体有其他方法来获取内容。例如，添加音频文件的脚本。
[a11y-音频示例](https://a11y-style-guide.com/style-guide/section-media.html#kssref-media-audio)

## 视频
在考虑可访问性的情况下构建您的媒体！在开始时使用可访问性比在以后尝试使用它更容易。所有组件都是如此，尤其是媒体组件。
- 确保您的播放器可以访问，并包含暂停，停止和播放媒体的控制元素。
- 不要自动播放媒体。这可能会造成混乱和烦恼。
- 确保您的媒体有其他方法来获取内容。例如，为视频添加字幕和/或提供供用户阅读的记录。
- 确保您的媒体不会引起癫痫发作！在将媒体添加到您的网站之前，请使用光敏癫痫分析工具（PEAT）检查您的媒体。

[a11y-视频示例](https://github.com/paypal/accessible-html5-video-player)

# 表单类控件

## 单选按钮组　radio group
radio group是一组可勾选按钮，称为单选按钮，一次只能勾选一个按钮。一些实现可以在勾选状态下的所有按钮初始化该集合，以迫使用户在移动焦点之前勾选其中一个按钮。
**示例**
- [使用Roving tabindex的radio group示例](https://www.w3.org/TR/wai-aria-practices/examples/radio/radio-1/radio-1.html)
- [使用aria-activedescendant的radio group示例](https://www.w3.org/TR/wai-aria-practices/examples/radio/radio-2/radio-2.html)
- [Radio Button Star Rating](https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--rating/)
- [Radio Button Pills](https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--pill/)

**键盘交互**

**对于工具栏中不包含的radio group**

本节介绍为大多数radio group实施的键盘交互。对于嵌套在工具栏内的radio group的特殊情况，请使用以下部分中描述的键盘交互。
- `Tab`和`Shift + Tab`：将焦点移入和移出radio group。当焦点移动到radio group时：
 - 如果选中单选按钮，则会在选中的按钮上设置焦点。
 - 如果未选中任何单选按钮，则会在组中的第一个单选按钮上设置焦点。
- `Space`：如果尚未选中，则检查聚焦单选按钮。
- `Right Arrow` 和`DownArrow`：将焦点移动到组中的下一个单选按钮，取消选中先前聚焦的按钮，然后选中新聚焦的按钮。如果焦点位于最后一个按钮上，则焦点移动到第一个按钮。
- `Left Arrow` and `Up Arrow`：将焦点移动到组中的上一个单选按钮，取消选中先前聚焦的按钮，然后选中新聚焦的按钮。如果焦点在第一个按钮上，则焦点移动到最后一个按钮。

>**注意**
>上面描述的初始焦点行为与某些浏览器为本机HTMLradio group提供的行为略有不同。在某些浏览器中，如果未选择任何单选按钮，则使用`Shift + Tab`将焦点移动到收音机组中会将焦点放在最后一个单选按钮而不是第一个单选按钮上。

**对于工具栏中包含的radio group**
因为箭头键用于在工具栏的元素之间导航而Tab键将焦点移入和移出工具栏，当radio group嵌套在工具栏内时，radio group的键盘交互与收音机的键盘交互略有不同不在工具栏内的组。例如，用户需要能够在所有工具栏元素之间导航，包括单选按钮，而无需更改选中的单选按钮。因此，当使用箭头键浏览工具栏中的单选按钮组时，选中的按钮不会更改。嵌套在工具栏中的radio group的键盘交互如下。
- `Space`：如果未选中聚焦单选按钮，则取消选中当前选中的单选按钮并检查聚焦单选按钮。
- `Enter`（可选）：如果未选中聚焦单选按钮，则取消选中当前选中的单选按钮并检查聚焦单选按钮。否则，什么都不做。
- `Right Arrow`：
 - 当焦点在单选按钮上并且该单选按钮不是radio group中的最后一个单选按钮时，将焦点移动到下一个单选按钮。
 - 当焦点位于单选按钮组中的最后一个单选按钮上并且该单选按钮不是工具栏中的最后一个元素时，将焦点移动到工具栏中的下一个元素。
 - 当焦点位于单选按钮组中的最后一个单选按钮上时，该单选按钮也是工具栏中的最后一个元素，将焦点移动到工具栏中的第一个元素。
- `Left Arrow`：
 - 当焦点位于单选按钮上且该单选按钮不是收音机组中的第一个单选按钮时，将焦点移至上一个单选按钮。
 - 当焦点位于单选按钮组中的第一个单选按钮且该单选按钮不是工具栏中的第一个元素时，将焦点移动到工具栏中的上一个元素。
 - 当焦点位于单选按钮组中的第一个单选按钮上时，该单选按钮也是工具栏中的第一个元素，将焦点移动到工具栏中的最后一个元素。
- `Down Arrow`（可选）：将焦点移动到收音机组中的下一个单选按钮。如果焦点位于收音机组中的最后一个单选按钮上，则将焦点移至组中的第一个单选按钮。
-`Up Arrow`（可选）：将焦点移动到radio group中的上一个单选按钮。如果焦点位于收音机组中的第一个单选按钮上，则将焦点移至组中的最后一个单选按钮。
>**注意**
>工具栏中的单选按钮通常以更像切换按钮的方式设置样式。有关示例，请参阅简单编辑器工具栏示例

**WAI-ARIA角色，状态和属性**
- 单选按钮包含在具有角色`radiogroup`的元素中或由其拥有。
- 每个单选按钮元素都有角色无线电。
- 如果选中单选按钮，则无线电元素的`aria-checked`设置为true。如果未选中，则将`aria-checked`设置为`false`。
- 每个无线电元素由其内容标记，具有由`aria-labelledby`引用的可见标签，或具有用`aria-label`指定的标签。
-`radiogroup`元素具有由`aria-labelledby`引用的可见标签或具有用`aria-label`指定的标签。
- 如果存在提供关于radio group或每个单选按钮的附加信息的元素，则这些元素由具有`aria-describedby`属性的`radiogroup`元素或无线电元素引用。


## 开关 switch
开关和复选框是类似的组件，因为它们具有 on(checked) 和 off(unchecked)状态。
但屏幕朗读器仍会识别复选框的语义,需要加上`role="switch"`。

另一种实现方式是button加上`role="switch"`
**示例**
- [Switch Checkbox](https://scottaohara.github.io/a11y_styled_form_controls/src/checkbox--switch)
- [ARIA Switch Controls (external repo)](https://scottaohara.github.io/aria-switch-control/)
- [Switch Component: Radio Buttons](https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch/)
- [Switch Radio Button Group](https://scottaohara.github.io/a11y_styled_form_controls/src/radio-button--switch)
- [Inclusive Considerations When Restyling Form Controls - Scott O'Hara](https://24ways.org/2018/inclusive-considerations-when-restyling-form-controls/)

## 搜索
- 在父元素`role =“search”`中包装搜索组件，以增加其对辅助技术的可发现性。
- 只要有可能，请使用`label`元素将文本与表单元素明确关联。标签的`for`属性必须与表单控件的`id`完全匹配。
- 当带有描述性文本的按钮旁边时，某些表单字段不需要显式`label`元素。例如：标记为搜索的按钮旁边的搜索字段。在这些情况下，您仍应在标记中添加标签，但您可以在视觉上隐藏它。
- 请注意，所有辅助技术都不承认placeholder，因此不适合替换适当的标签。此外，宣布占位符的辅助技术将首先读取占位符，然后读取输入的标签，然后读取输入的类型。所以一定不要重复输入标签作为占位符，否则会被多次朗读。

[a11y-search示例](https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-search)


## 复选框 checkbox
WAI-ARIA支持两种类型的 [checkbox](#role_checkbox)：

1.  双态: 最常见的复选框类型，它允许用户在两个状态间切换——选中、未选中.
2.  三态: 这种类型的复选框支持额外的第三种状态 - 部分选中.

三态复选框的一种常见使用场景是在软件安装时，一个单独的三态复选框用来代表和控制整个安装选项组的状态。并且，该组中的每个选项都可以单独使用双态复选框开启或关闭。

- 如果该组中的所有选项都被选中，该三态复选框呈现的整体状态为选中。
- 如果该组中的部分选项被选中，该三态复选框呈现的整体状态为部分选中（partially checked）。
- 如果该组中没有选项被选中，该三态复选框呈现的整体状态为未选中。

用户仅使用一个操作，就可以改变三态复选框组中所有选项的状态：

- 选中整体复选框，可以选中组中的所有选项。
- 取消选中整体复选框，可以取消选中组中的所有选项。
- 并且，在某些实现中，系统可能会记住上次选中的选项，整体状态为部分选中。如果提供了此功能，第三次激活整体复选框会恢复选项组中部分被选中的状态。

**示例**

- [两种状态的简单复选框举例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/checkbox/checkbox-1/checkbox-1.html) : 演示简单的双态复选框。
- [三态复选框示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/checkbox/checkbox-2/checkbox-2.html): 演示如何使用 `mixed` 的 `aria-checked` 值制作一个组件。

**键盘交互**

当复选框拥有焦点时, 按 Space 键来改变复选框的状态

**WAI-ARIA角色，状态和属性**

- 复选框的角色为 [checkbox](#role_checkbox)。
- 复选框具有可访问标签，最好的方式是使用 `aria-labelledby` 关联可见标签:
  - 将可见的内容放在角色为 `checkbox` 元素里面。
  - 在角色为 `checkbox` 的元素上通过 [aria-labelledby](#aria-labelledby) 属性的值为一个可见的内容。
  - [aria-label](#aria-label) 属性设置在角色为 `checkbox` 元素上。
- 选中后，复选框元素状态 [aria-checked](#aria-checked) 设置为 `true`。
- 如果未选中，它的状态 [aria-checked](#aria-checked) 设置为 `false`。
- 当部分选中，它的状态 [aria-checked](#aria-checked) 设置为 `mixed`。
- 如果使用一个可见标签可将一组复选框标识为一个逻辑组，这些复选框应该被包含在一个具有 [group](#role_group) 角色的元素中，且该元素的 [aria-labelledby](#aria-labelledby) 设置为包含标签的元素的ID。
- 如果复选框或复选框组包括额外的相关联静态描述文案，复选框或复选框组的属性 [aria-describedby](#aria-describedby) 设置为包含描述元素的ID。


## 单选按钮组

单选按钮组，是一个可选中按钮的组合，被称为单选按钮，且在该组合中，只有一个按钮处于选中状态。

- `<fieldset>`包围整个复选框或单选按钮组。`<legend>`提供了分组的说明。
- 一些辅助技术会读取每个字fieldset的legend文本，因此它应该简洁且具有描述性。这有助于使用辅助技术的人通过单选按钮组来理解他们正在回答的问题。
- WAI-ARIA提供了一个分组角色，其功能与fieldset和legend相似。外部元素具有role = group以指示包含的元素是组的成员，并且aria-labelledby属性引用将用作组的标签的文本的id。


**示例**

- [单选按钮组示例使用动态tabindex](https://www.w3.org/TR/wai-aria-practices-1.1/examples/radio/radio-1/radio-1.html)
- [单选按钮组示例使用aria-activedescendant管理焦点](https://www.w3.org/TR/wai-aria-practices-1.1/examples/radio/radio-2/radio-2.html)
- [a11y- 单选按钮示例](https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-radio-buttons)

**键盘交互**

- 在单选按钮组获取焦点时:
  - 如果有一个单选按钮被选中，那么焦点设置在这个按钮上。
  - 如果没有被选中的单选按钮，那么将焦点设置在第一个单选按钮上。
- `Space`: 如果该按钮还没有被选中，则选中当前聚焦的单选按钮。
- `Right Arrow` 和 `Down Arrow`: 移动焦点到组合中的下一个单选按钮，取消选中先前聚焦的按钮，并且选中新聚焦的按钮。如果焦点在最后一个按钮上，焦点移至第一个按钮。
- `Left Arrow` 和 `Up Arrow`: 移动焦点到组合中的上一个单选按钮，取消选中先前聚焦的按钮，并选中新聚焦的按钮。如果焦点在第一个按钮上，焦点移至最后一个按钮。

>**注意** 上文所述的初始聚焦行为，与一些浏览器为原生HTML按钮组所提供的行为略有不同。在某些浏览器中，如果没有选中任何一个单选按钮，使用 `Shift+ Tab` 将焦点移至单选按钮组，焦点将会被放置在最后一个单选按钮，而不是第一个单选按钮。

**WAI-ARIA 角色，状态和属性**

- 单选按钮被具有 [radiogroup](#role_radiogroup) 角色的元素包含或拥有。
- 每个单选按钮的role值都为 [radio](#role_radio) 。
- 如果一个单选按钮被选中，那么该 `radio` 元素的 [aria-checked](#aria-checked) 将被设置为 `true`。 如果没有被选中，[aria-checked](#aria-checked) 设置为 `false`。
- 每一个 `radio` 元素由其内容标记，使用 [aria-labelledby](#aria-labelledby)，索引一个可见标签，或使用 [aria-label](#aria-label) 指定一个标签。
- `radiogroup` 使用 `aria-labelledby` 索引一个可见标签，或者使用 `aria-label` 指定一个标签。
- 如果元素提供了单选按钮组或每个单选按钮的额外信息，这些元素被 `radiogroup` 元素或 `radio` 元素使用 [aria-describedby](#aria-describedby) 属性索引。

## 滑块 slider

滑块是供用户从给定范围内选择值的输入控件。滑块通常有个拖动触点，可以沿着条或轨道移动来改变滑块的值。

**示例**

- [水平滑块示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/slider/slider-1.html): 演示使用三个水平对齐的滑块来制作颜色选择器。
- [具有 `aria-orientation` 和 `aria-valuetext` 属性的滑块示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/slider/slider-2.html) : 三个恒温控制滑块，使用 `aria-orientation` 和 `aria-valuetext`。

**键盘交互**

- `Right Arrow`: 按一定量增加滑块的值；
- `Up Arrow`: 按一定量增加滑块的值；
- `Left Arrow`: 按一定量减小滑块的值；
- `Down Arrow`: 按一定量减小滑块的值；
- `Home`: 将滑块设置为其范围内的最小值；
- `End`: 将滑块设置为其范围内的最大值；
- `Page Up` _(可选)_: 大幅度增加滑块的值（比 `Up Arrow` 增加的值大）。
- `Page Down` _(可选)_: 大幅度减小滑块的值（比 `Down Arrow` 减小的值大）。

>**注意**
> 1.  焦点放在滑块上(鼠标用户可以移动的视觉对象，也称为thumb组件)。
> 2.  在某些场景下，反转上面指定值变化的方向(例如： Up Arrow 减小滑块的值)，可以创建更直观的体验 _（译者注：可以理解为滑块为纵向方向排列）

**WAI-WRIA 角色、状态和属性**

- 每个可聚焦滑块触点元素具有 [slider](#role_slider) 角色。
- 每个滑块元素的 [aria-valuenow](#aria-valuenow) 属性设置为滑块当前的十进制值。
- 每个滑块元素的 [aria-valuemin](#aria-valuemin) 属性设置为滑块十进制的最小允许值。
- 每个滑块元素的 [aria-valuemax](#aria-valuemax) 属性设置为滑块十进制的最大允许值。
- 当另一个滑块的范围（如最小值或者最大值）依赖另一个滑块的当前值，当前值改变的时候依赖滑块的 [aria-valuemin](#aria-valuemin) 或 [aria-valuemax](#aria-valuemax) 也要更新。
- 如果 `aria-valuenow` 的值对用户不友好，例如周几一般使用数字呈现，将 [aria-valuetext](#aria-valuetext) 属性设置为一个字符串，这样滑块值更易理解，例如 "Monday"。
- 如果滑块具有可视的标签，那么滑块元素通过 [aria-labelledby](#aria-labelledby) 引用，否则滑块元素上设置 [aria-label](#aria-label) 标签。
- 如果滑块是垂直方向的，则把 [aria-orientation](#aria-orientation) 设置为 `vertical`。滑块的 `aria-orientation` 的默认值是 `horizontal`。


## 滑块（多个触点） sliderwothumb
多触点滑块是具有两个或更多触点的滑块，每个触点都在一组相关值中设置值。例如，在产品搜索中，可以使用双触点滑块使用户能够设置搜索的最小和最大价格限制。在许多双触点滑块中，不允许触点彼此通过，例如当滑块设置范围的最小值和最大值时。例如，在价格范围选择器中，设置范围下限的触点的最大值受限于设置范围上限的触点的当前值。相反，上端触点的最小值受到下端触点的当前值的限制。但是，在某些多触点滑块中，每个触点都会设置一个不依赖于其他触点值的值。
**示例**
[多触点滑块示例](https://www.w3.org/TR/wai-aria-practices/examples/slider/multithumb-slider.html)：演示双触点滑块，用于选择航空公司航班和酒店预订的价格范围。
**键盘交互**
- 每个触点都在页面标签序列中，并且与单触点滑块具有相同的键盘交互。
- 无论滑块内的触点值和视觉位置如何，Tab键顺序都保持不变。例如，如果触点的值发生变化，使其移动经过其他触点之一，则Tab键顺序不会更改。

**WAI-ARIA角色，状态和属性**
- 用作可聚焦滑块的每个元素都有角色滑块。
- 每个滑块元素都将`aria-valuenow`属性设置为表示滑块当前值的十进制值。
- 每个slider元素都将`aria-valuemin`属性设置为十进制值，表示滑块的最小允许值。
- 每个滑块元素的`aria-valuemax`属性设置为十进制值，表示滑块的最大允许值。
- 当另一个滑块的范围（例如，最小值和/或最大值）取决于滑块的当前值时，当值改变时，更新从属滑块的`aria-valuemin`或`aria-valuemax`的值。
- 如果`aria-valuenow`的值不是用户友好的，例如，星期几由数字表示，则`aria-valuetext`属性被设置为使滑块值可理解的字符串，例如“Monday”。
- 如果滑块具有可见标签，则滑块元素上的`aria-labelledby`会引用它。否则，滑块元素具有由`aria-label`提供的标签。
- 如果滑块垂直定向，则将`aria-orientation`设置为垂直。滑块的`aria-orientation`的默认值是水平的。

## 数值调节按钮 spinbutton

数值调节按钮是个将值限定在离散数值集合或范围的输入组件。例如，在一个设置闹钟的部件中，一个数值调节按钮允许用户在0-59间选择分钟。

数值调节按钮通常有三个组件，包含一个显示当前值的文本框，一个增加按钮，一个减小按钮。一般来说，文本框是唯一可聚焦组件，因为增加和减小功能可使用光标键访问，一般来说，文本框还允许用户直接编辑其值。

如果数值范围很大，数值调节按钮支持以较小和较大的幅度调节其值。例如，在闹钟示例中，用户可以使用 `Up Arrow` 和 `Down Arrow` 以1分钟的步长改变值，并且可以使用 `Page Up` 和 `Page Down` 以10分钟的步长改变值。

**示例**


**键盘交互**

- `Up Arrow`: 递增。
- `Down Arrow`: 递减。
- `Home`: 如果数值调节按钮具有最小值，则设置数值调节按钮的值为最小值。
- `End`: 如果数值调节按钮具有最大值，则设置数值调节按钮的值为最大值。
- `Page Up` _(可选)_: 以大于 `Up Arrow` 的调节幅度增加值。
- `Page Down` _(可选)_: 以大于 `Down Arrow` 的调节幅度减小值。
- 如果数值编辑按钮的文本框允许直接编辑其值，支持以下键。
  - 适用于设备平台的标准单行文本编辑键（请参阅下面的注释）。
  - 可打印字符: 在文本框中输入字符。注意，许多实现仅允许某些字符作为值的一部分，并防止输入任何其他字符。 例如，小时和分钟的数值调节只允许从0到59的整数值，冒号'：'以及字母'AM'和'PM'。 任何其他字符输入不会更改文本字段的内容和按钮的值。

>**注意**
>1.  操作过程中焦点仍在文本字段上。
>2.  适用于设备平台的标准单行文本编辑键：
>  1.  包括输入键，光标移动，选择和文本操作。
>  2.  用于编辑功能的标准键分配依赖于操作系统。
>  3.  提供文本编辑功能的最强大的方法需要依靠浏览器，浏览器为HTML文本输入类型的组件和具有 `contenteditable` HTML属性的元素支持文本编辑功能。
>  4.  **重要**: 确保JavaScript不会干扰浏览器提供的文本编辑功能，方法是捕获用于执行它们的事件。

**WAI-WRIA 角色、状态和属性**

- 作为数值调节按钮的可聚焦元素具有 [spinbutton](#role_spinbutton) 角色。一般来说，是支持文本输入的元素。
- spinbutton元素的 [aria-valuenow](#aria-valuenow) 属性用十进制值，表示当前值。
- 如果它具有已知的最小值，spinbutton元素的 [aria-valuemin](#aria-valuemin) 属性设置为十进制值，表示数值调节按钮的最小允许值。
- 如果它具有确定的最大值，spinbutton元素的 [aria-valuemax](#aria-valuemax) 属性设置为十进制值，表示数值调节按钮的最大允许值。
- 如果 `aria-valuenow` 的值用户不好理解，例如周几一般使用数字呈现，可以将spinbutton元素的 [aria-valuetext](#aria-valuetext) 属性设置为一个字符串，让数值选择按钮的值更好理解，例如 "Monday"。
- 如果spinbutton具有一个可见标签，在spinbutton元素上使用 [aria-labelledby](#aria-labelledby) 索引，否则，使用 [aria-label](#aria-label) 属性为spinbutton元素提供一个标签。


## 列表框 listbox
[listbox](#role_listbox) 控件呈现了一个选项列表，并允许用户选择一个或多个。允许选择一个选项的列表框是一个单选列表框；允许选择多个选项的列表框是一个多选列表框。

当屏幕阅读器呈现一个列表框，可能会渲染出其名称、状态和每个选项在列表中的位置。选项的名称是一个由浏览器计算得到的字符串，一般来自选项元素的内容。作为一个平面字符串（flat string），名称不包含任何语义信息。因此，如果选项包含一个语义元素，例如一个标题，屏幕阅读器用户不会访问到该语义。另外，listbox角色传递给辅助技术的交互模型，不支持选项内元素的交互。因为listbox组件的这些特性，它并没有提供可访问方式来呈现交互元素的列表，例如链接、按钮或复选框。为了呈现这些交互元素的列表，参见 [grid](#grid)。

为了让屏幕阅读器用户容易感知和理解，避免使用长选项名称。当选项被朗读时，选项的整体名称作为一个独立语音单元被朗读。当一次按键操作就朗读太多的信息，将会很难理解。长的名称会增加朗读中断的发生，而抑制信息的感知，因为用户一般不得不重新朗读整个选项。而且，如果用户不理解说了什么，在listbox组件中，屏幕阅读器用户很难实现按字、词、短语朗读。

选项集中每个选项名称使用相同的单词或短语开头也可以显著降低键盘和屏幕阅读器用户的可用性。滚动列表来找到特定选项，对屏幕阅读器用户来说非常费时，因为他们在听到每个选项的不同之前，都必须听到重复的单词或短语。例如，如果一个选择城市的列表框，其选项的每个城市名称前面都有国家名称，如果每个国家都列出了很多城市，屏幕阅读器用户将要不得不在听到城市名称之前听到国家名称。在这种情况下，最好有2个列表框，一个用于国家，一个用于城市。

**键盘交互**

对于一个垂直向的列表框：

- 当一个单选列表框接收到焦点：
  - 如果在列表框接收焦点前，没有选择任何选项，第一个选项获得焦点。可选的，第一个选项可以自动选择。
  - 如果列表框获得焦点之前选择了一个选项，焦点设置在所选择的选项上。
- 当一个多选列表框接收到焦点：
  - 如果列表框接收焦点之前没有选择任何选项，焦点设置在第一个选项并且选择状态不会自动改变。
  - 如果列表框接收焦点之前选择一个或多个选项，焦点设置在已选择选项的第一个。
- `Down Arrow`: 移动焦点到上一个选项。可选，在一个单选列表框中，选择也可以跟随焦点移动。
- `Up Arrow`: 将焦点移至前一个选项。通常，一个单选列表框，选择也可以跟随焦点移动。
- `Home` (可选): 将焦点移至第一个选项。通常，一个单选列表框，选择也可以跟随焦点移动。对于超过5个选项的列表，强烈建议支持此键。
- `End` (可选): 将焦点移至最后一个选项。通常，一个单选列表框，选择也可以跟随焦点移动。对于超过5个选项的列表，强烈建议支持此键。
- 建议所有列表框都支持键入提示。尤其是那些拥有超过七个选项的列表：
  - 键入字符：焦点移至名称以键入字符开头的下一个项目上。
  - 快速键入多个字符：焦点移至名称以键入字符串开头的下一个项目上。
- 多选：开发者可以实现以下两种交互模型中的一种来支持多项选择：一个是推荐模型，当导航列表时不需要用户按住修饰键，例如 `Shift` 或`Control` ，或一种替代模型，当导航时需要用户按住修饰键，防止丢失选择状态。
  - 推荐的选择模型 - 没有必要按住辅助键：
    - `Space`: 改变焦点选项的选择状态。
    - `Shift + Down Arrow` _(可选)_: 将焦点移至下一个选中项并且切换选项的选中状态。
    - `Shift + Up Arrow` _(可选)_: 将焦点移至前一选中项并且切换选项的选中状态。
    - `Shift + Space` _(可选)_: 从最近选中的项目中选择相邻的元素聚焦。
    - `Control + Shift + Home` _(可选)_: 选择从聚焦的选项到第一个选项的所有的选项。
    - `Control + Shift + End` _(可选)_: 选择从聚焦的选项到最后一个选项的所有选项。
    - `Control + A` _(可选)_: 选择列表中的所有选项。或者，如果选择了所有选项，它也可能取消选择所有选项。
  - 替代选择模型 —— 在不按住 `Shift` 或 `Control` 修饰键移动焦点不会取消选择所有已选择节点，除非当前聚焦节点：
    - `Shift + Down Arrow`: 将焦点移至下一个选项并切换选项的选择状态。
    - `Shift + Up Arrow`: 将焦点移至上一个选项并切换选项的选择状态。
    - `Control + Down Arrow`: 将焦点移至下一个选项但不改变选项的选择状态。
    - `Control + Up Arrow`: 将焦点移至上一个选项但不改变选项的选择状态。
    - `Control + Space`: 改变焦点选项的选择状态。
    - `Shift + Space` _(可选)_: 从最近选中的项目中选择相邻的元素聚焦。
    - `Control + Shift + Home` _(可选)_: 选择从聚焦的选项到第一个选项的所有的选项。
    - `Control + Shift + End` _(可选)_: 选择从聚焦的选项到最后一个选项的所有选项。
    - `Control + A` _(可选)_: 选择列表中的所有选项。或者，如果选择了所有选项，它也可能取消选择所有选项。

>**注意**

1.  DOM焦点（活跃元素）与选择状态有功能上的区别。更多细节，请参阅 [this description of differences between focus and selection](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_focus_vs_selection)。
2.  `listbox` 角色支持 [aria-activedescendant](#aria-activedescendant) 属性，当通过键盘导航（keybord navigation）时，它提供一种非传统方式在 `treeitem` 元素间移动DOM焦点。有关详细信息，请参阅 [Managing Focus in Composites Using aria-activedescendant](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_focus_activedescendant)
3.  在单选列表框中，移动焦点可以选择性的取消先前选择选项的选择，并选择新聚焦的选项。这样的选择模型被称之为 "选择跟随焦点"。具有选择跟随焦点在某些情况下非常有用，但会严重降低其他情况中的可访问性。有关指南，请参阅 [Deciding When to Make Selection Automatically Follow Focus](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_selection_follows_focus)。
4.  如果全选或取消全选是个重要功能，使用不同控件实现这些操作，例如 "全选" 和 "取消全选按钮"，会显著提升可用性。
5.  如果在一个列表框的选项水平排列：
  1.  `Down Arrow` 行为和上面描述的 `Right Arrow` 一样，反之亦然。
  2.  `Up Arrow` 行为和上面描述的 `Left Arrow` 一样，反之亦然。

**WAI-ARIA 角色，状态和属性**

- 包含或拥有所有列表框选项的元素拥有角色 [listbox](#role_listbox)。
- 列表框中的每个选项都有 [option](#role_option) 角色，并且是 `listbox` 角色元素的DOM后代，或者在列表框元素上使用 [aria-owns](#aria-owns) 属性索引。
- 如果列表框不是另一个部件的一部分，那么它有一个可见的label通过 [aria-labelledby](#aria-labelledby) 与有 `listbox` 角色的元素相关联。
- 单选列表框中，选中的选项 [aria-selected](#aria-selected) 设置为 `true`。
- 如果列表框支持多选：
  - 角色 `listbox` 的元素将 [aria-multiselectable](#aria-multiselectable) 设置为 `true`。
  - 所有被选中的选项都将 [aria-selected](#aria-selected) 设置为 `true`。
  - 所有未选择的选项都将 [aria-selected](#aria-selected) 设置为 `false`。
- 如果可用选项的集合没有完整地显示在DOM中，而是根据用户滚动动态加载，它们的 [aria-setsize](#aria-setsize) 和 [aria-posinset](#aria-posinset) 适当设定。
- 如果选项是水平排列的， `listbox` 角色元素的 [aria-orientation](#aria-orientation) 设置为 `horizontal`。


[a11y-表单 下拉框示例](https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-select-lists)

## 文字输入框 Text Inputs & Textarea
- 保持简单 - 屏幕阅读器不支持链接到同一表单元素的多个标签。
- 为每个输入使用标签，并使`for =“”`和`id =“”`值匹配。ID在每个页面上必须是唯一的，每个唯一表单元素只能链接一个标签。
- 使用指示性的方法使必填字段显而易见：边框颜色更改，星号，描述文本等。
- 具有错误验证的字段应具有咏叹调描述，以确保辅助技术读取关联的字段级错误消息。如果错误消息具有`id =“my-error-message”`，则输入应该具有`aria-describedby =“my-error-message”`。

[a11y-文字输入框示例](https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-text-fields)


# 导航类控件

## 手风琴 accordion
手风琴是一组垂直堆叠的交互式标题，每个标题包含标题，内容片段或表示内容部分的缩略图。标题用作控件，使用户能够显示或隐藏其相关的内容部分。当在单个页面上呈现多个内容部分时，通常使用折叠来减少滚动的需要。

通过以下术语来理解手风琴：

**手风琴标题：**
表示内容模块的标签或缩略图，同时也用来展开内容，在某些实现中，也用来隐藏内容模块。

**手风琴面板：**
与手风琴标题相关联的内容模块

在某些手风琴中，手风琴标题旁边有永久可见的其他元素。例如，每个手风琴标题都伴随一个菜单按钮来提供每个面板的访问操作。而且在某些情况下，手风琴面板可能永久展开可见。

**示例：** 
- [手风琴示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/accordion/accordion.html)：演示把一个表单分成三部分，并使用手风琴导航一次展开其中一部分
- [Collapsible Sections - Inclusive Components](https://inclusive-components.design/collapsible-sections/)

**键盘交互**
- `Enter` 或 `Space`:
 - 当焦点位于折叠状态的手风琴标题上时，展开相关联面板。如果实现只允许一个面板被展开，且另一个面板被展开，则折叠这个面板。
 - 当焦点位于展开状态的手风琴标题上时，如果实现支持折叠，则折叠该面板。某些实现需要始终展开面板，并且只允许展开一个面板，这时手风琴标题不需要支持折叠功能。
- `Down Arrow` _(可选)_: 如果焦点在一个手风琴标题上，则将焦点移至下一个手风琴标题。如果焦点在最后一个手风琴标题上，则不响应或将焦点移至第一个手风琴标题。
- `Up Arrow` _(可选)_: 如果焦点在一个手风琴标题上，则将焦点移至上一个手风琴标题，如果焦点在第一个手风琴标题上，则不响应或将焦点移至手风琴的最后一个标题。
- `Home` _(可选)_: 当焦点在手风琴的标题上，将焦点移至第一个手风琴标题
- `End` _(可选)_: 当焦点在手风琴的标题上，将焦点移至最后一个手风琴标题
- `Control + Page Down` _(可选）_: 如果焦点在手风琴面板内，将焦点移至面板标题上。如果焦点在手风琴标题上，将焦点移至前一个手风琴标题。如果焦点在第一个手风琴标题上，则不响应或将焦点移至最后一个手风琴标题。
- `Control + Page Up` _(可选)_: 如果焦点在手风琴面板内，将焦点移至该面板的标题上。如果焦点在手风琴标题，将焦点移至前一个手风琴标题。如果焦点在第一个手风琴标题，允许不响应操作或将焦点移至最后一个手风琴标题

**角色、状态、属性**
- 每个手风琴标题包含在一个角色为 [button](#role_button) 的元素内。
- 每个手风琴标题 `button` 都被具有 [heading](#role_heading) 角色的元素包裹，且该元素设置了合适的 [aria-level](#aria-level) 值，对应页面的信息结构。
  - 如果原生语言具有默认 `heading` 和 `aria-level` 元素，例如HTML标题标签，可以使用原生语言元素。
  - `button` 元素是 `heading` 元素内的唯一元素。也就是说，如果有其他永久可见元素，他们不能被包含在 `heading` 元素中。
- 如果与手风琴标题关联的手风琴面板是展开的，标题的 `button` 元素的 [aria-expanded](#aria-expanded) 属性设置为 `true`。如果面板折叠的，[aria-expanded](#aria-expanded)属性设置为 `false`。
- 手风琴标题的 `button` 元素 [aria-controls](#aria-controls) 设置为包含手风琴面板的内容元素的ID。
- 如果与手风琴标题关联的手风琴面板是展开的，且不允许该面板折叠，那标题的 `button` 元素的 [aria-disabled](#aria-disabled) 设置为 `true`。
- 可选，每个面板容器的元素，都有 [region](#role_region) 角色，且使用 [aria-labelledby](#aria-labelledby)值索引控制面板呈现的按钮。
  - 避免在创建路标 `region` 扩展的情况下，使用 `region` 角色，例如在一个包含超过6个面板的手风琴中，可能会同时展开。
  - 当面板包含标题元素或嵌套手风琴时，`region` 角色对屏幕阅读器用户对于结构的感知特别有帮助。


## 面包屑 breadcrumb

面包屑包含当前页面的父页面的链接列表，该列表是层级顺序的。它可以帮助用户在网站或网络应用程序中找到自己的位置。面包屑通常水平放置在页面的主要内容之前。

**示例**

[面包屑示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/breadcrumb/index.html)

**键盘交互**

不适用

**WAI-ARIA 角色，状态和属性**

- 面包屑路径被包含在导航区域内。
- 导航区域使用 [aria-label](#aria-label) 或 [aria-labelledby](#aria-labelledby) 标记。
- 当前页面的链接的 [aria-current](#aria-current) 属性设置为 `page`。如果呈现当前页面的元素不是个链接，`aria-current`可选。


## 轮播图 carousel（slide show or image rotator）

轮播图通过顺序显示一个或多个幻灯片的子集来呈现一组项目，称为幻灯片。通常，一次显示一张幻灯片，用户可以激活隐藏当前幻灯片的下一个或上一个幻灯片控件，并将下一张或上一张幻灯片“旋转”到视图中。在一些实施方式中，播放在页面加载时自动开始，并且一旦显示所有幻灯片，它也可以自动停止。虽然幻灯片可以包含任何类型的内容，但是每个幻灯片仅包含单个图像的图像轮播是常见的。

确保所有用户都能轻松控制并且不会受到滑动旋转的不利影响，这是使轮播图可访问性的一个重要方面。例如，如果在屏幕上看不到的幻灯片被错误地隐藏（例如，在屏幕外显示），则屏幕阅读器体验可能令人困惑和被误导。类似地，如果幻灯片自动播放但使用屏幕阅读器的用户不知道，则用户可以读取幻灯片1上的元素，对下一个元素执行朗读命令，而不是听到幻灯片1上的下一个元素，幻灯片2中的元素，不知道刚刚朗读的元素来自全新的上下文。

提供足够播放控制所需的功能包括：
- 用于显示上一张和下一张幻灯片的按钮。
- 可选，用于选择要显示的特定幻灯片的控件或控件组。例如，幻灯片选择器控件可以标记为选项卡列表中的选项卡，其中幻灯片由tabpanel元素表示。
- 如果轮播图可以自动播放，它还：
  - 有一个停止和重新播放的按钮。这对于支持在不移动键盘焦点或鼠标的模式下操作的辅助技术尤为重要。
  - 当键盘焦点进入轮播图时停止播放。除非用户明确要求它这样做，否则它不会重新播放。
  - 只要鼠标悬停在轮播图上，就停止播放。

**示例**
- [自动播放轮播图示例](https://www.w3.org/TR/wai-aria-practices/examples/carousel/carousel-1/carousel-1.html)
- [A Content Slider](https://inclusive-components.design/a-content-slider/)
**术语**

以下术语用于描述轮播的组件。

**slide**
一组内容容器中的单个内容容器，用于保存要由轮播呈现的内容。

**rotation control**
用于停止和启动自动幻灯片旋转的交互式元素。

**next slide control**
交互式元素，通常为箭头样式，显示旋转序列中的下一张幻灯片。

**previous slide control**
交互式元素，通常设置为箭头，显示旋转序列中的上一张幻灯片。

**slide picker controls**
一组元素，通常称为小点，使用户能够在旋转序列中选择要显示的特定幻灯片。

**键盘交互**
- 如果轮播图具有自动播放功能，则当轮播图中的任何元件接收到键盘焦点时，自动播放将停止。除非用户激活旋转控制，否则它不会恢复。
- `Tab`和`Shift +Tab`：将焦点移动到页面选项卡序列指定的轮播的交互元素 - 不需要为`Tab`创建脚本。
- 按钮元素实现按钮模式中定义的键盘交互。注意：激活播放控件，下一张幻灯片和上一张幻灯片不会移动焦点，因此用户可以根据需要轻松地重复激活它们。
- 如果存在，播放控件是轮播图内`Tab`键序列中的第一个元素。它必须先于旋转内容，以便轻松定位。
- 如果选项卡元素用于幻灯片选择器控件，则它们实现选项卡模式中定义的键盘交互。

**WAI-ARIA 角色，状态和属性**
本节介绍三种轮播样式的元素组成：
- 基本的：具有播放，上一张幻灯片和下一张幻灯片控件，但没有幻灯片选择器控件。
- 带标签的：具有基本控件和单击tab停止的、使用[tabs pattern](https://www.w3.org/TR/wai-aria-practices/#tabpanel)实现的幻灯片选择器控件。
- 分组的：在一组幻灯片选择器控件中具有基本控件和一系列tab焦点，每个控件都实现[按钮模式](https://www.w3.org/TR/wai-aria-practices/#button)。因为每个幻灯片选择器按钮都会向页面选项卡序列添加一个元素，所以此样式对键盘用户来说是最不友好的。

**基本轮播图元素**
- 包含轮播图的所有组件的轮播图容器元素，包括轮播图控件和幻灯片，具有角色region或角色group。轮播容器最合适的角色取决于页面的信息结构。查看[landmark regions guidance](https://www.w3.org/TR/wai-aria-practices/#aria_landmark)，以确定轮播图是否被指定为标识区域。
- 轮播容器将aria-roledescription属性设置为`carousel`。
- 如果轮播具有可见标签，则其可访问标签由设置为包含可见标签的元素的ID的轮播容器上的属性aria-labelledby提供。否则，可在轮播容器上设置的属性aria-label提供可访问的标签。请注意，由于`aria-roledescription`设置为“carousel”，因此标签不包含单词“carousel”。
- 播放控件，下一个幻灯片控件和上一个幻灯片控件是原生按钮元素（推荐）或实现按钮模式。
- 播放控件具有由其内部文本或aria-label提供的可访问标签。标签改变以匹配按钮将执行的动作，例如“停止滑动播放”或“开始滑动播放”。激活按钮时更改的标签清楚地表明幻灯片内容可以自动更改以及何时更改。注意，由于标签改变，播放控制没有指定任何状态，例如，`aria-pressed`。
- 每个幻灯片容器都具有角色group，其属性aria-roledescription设置为`slide`。
- 每张幻灯片都有一个名称：
  - 如果幻灯片具有可见标签，则其可访问标签由幻灯片容器上的属性aria-labelledby提供，该容器设置为包含可见标签的元素的ID。
  - 否则，幻灯片容器上的属性aria-label提供了可访问的标签。
  - 如果识别幻灯片内容的唯一名称不可用，则数字和集合大小可以用作有意义的替代，例如，“3 of 10”。注意：通常情况下，包含可访问名称中的设置位置和大小信息是不合适的。异常在此实现中很有用，因为组元素不支持aria-setsize或aria-posinset。选项卡式轮播实现模式没有此限制。
  - 请注意，由于`aria-roledescription`设置为“slide”，因此标签不包含单词“slide”。
- (可选)，包含该组幻灯片元素的元素将aria-atomic设置为false，将aria-live设置为：
  -`off`：如果转盘自动播放。
  -`polite`：如果轮播图不自动播放。

**带标签的轮播元素**
带标签的转盘的结构与基本的转盘相同，不同之处在于：
- 每个幻灯片容器都有角色`tabpanel`代替`group`，并且它没有`aria-roledescription`属性。
- 它具有使用选项卡模式实现的幻灯片选择器控件，其中：
  - 每个控件都是一个`tab`元素，因此激活选项卡会显示与该选项卡关联的幻灯片。
  - 每个标签的可访问名称通过包括幻灯片的名称或编号来指示它将显示哪个幻灯片，例如“幻灯片3”。如果每张幻灯片都有唯一名称
  - 则最好使用幻灯片名称控件集分组在`tablist`元素中，其中可访问的名称由aria-label的值提供，用于标识选项卡的用途，例如“选择要显示的幻灯片”。
  - `tab`，`tablist`和`tabpanel`实现选项卡模式中指定的属性。
**分组的轮播元素**
分组轮播具有与基本轮播相同的结构，但它还包括滑动选择器控件，其中：
- 幻灯片选择器控件集包含在具有角色group的元素中。
- 包含选取器控件的组具有可访问标签，该标签由aria-label的值提供，用于标识控件的用途，例如“选择要显示的幻灯片”。每个选取器控件都是本机按钮元素（推荐）或实现按钮模式。
- 每个选取器按钮的可访问名称与其显示的幻灯片的名称相匹配。实现此目的的一种技术是将aria-labelledby设置为引用幻灯片组`group`素的值。
- 表示当前显示的幻灯片的选择器按钮将属性`aria-disabled`设置为`true`。注意：`aria-disabled`优先于HTML`disabled`属性，因为这是屏幕阅读器用户受益于页面Tab序列中包含的禁用按钮的情况。


## 菜单、菜单栏 menu & mennu bar

[menu](#role_menu) 是一个组件，为用户提供一个选择列表，例如一组操作或功能。菜单一般通过激活 [menu button](#w-menubutton) 打开或变为可见，选择菜单中一个会打开子菜单的项目，或激活一个命令，例如Windows中的 Shift + F10 ，来打开上下文的特定菜单。当用户激活菜单中的选项时，菜单通常会关闭，除非是打开子菜单。

持续可见的菜单是 [menubar](#role_menubar)。 菜单栏通常是水平的，通常用以创建类似很多桌面应用中窗口顶部附近的菜单栏，让用户快速访问一组连续的命令。

标识菜单项目会唤起一个对话框的常规做法是在菜单标签后面添加"…"（省略号），例如"另存为 …"。

**示例**

- [Navigation Menubar Example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html)：演示提供站点导航的菜单栏。 
- s[Editor Menubar Example](https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-2/menubar-2.html)：在为文本域提供文本格式化命令的菜单栏中的子菜单上演示单选和多选菜单。

**键盘交互**

以下为键盘行为的假定描述：

1.  一个水平 `menubar` 包含数个 menuitem 元素。
2.  `menubar` 中的所有项目都有子菜单，所有子菜单都有很多垂直排列的项目。
3.  一些子菜单中的 `menuitem` 也有垂直排列的子菜单。

阅读以下内容时，请记住： 
1. 可聚焦元素，可能具有 `menuitem`, `menuitemradio` , 或 `menuitemcheckbox`,角色，被成为是菜单项目。 
2. 如果行为仅适用于某些类型的项目，例如`menuitem` 元素，则使用特定的角色名称。 
3. 子菜单，也称为弹出菜单，是具有 `menu` 角色的元素。 
4. 除了需要注意的情况外，通过menubutton打开的菜单与从菜单栏打开的菜单表现一致。 
- 当 `menu` 打开，或者当 `menubar` 接收焦点时，键盘焦点设置在第一个项目上。所有项目都是可聚焦的，如 [Keyboard Navigation Inside Components](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_general_within)。 
- `Enter`: 当焦点位于一个具有子菜单的 `menuitem` 上时，打开子菜单并将焦点放在其子菜单的第一个项目上。 - 否则，激活该项目并关闭菜单。 
- `Space`: 
  - （可选）：当焦点在一个`menuitemcheckbox`时，更改状态而不关闭菜单。 
  - （可选）：当焦点位于未选中的`menuitemradio`上时，不会关闭菜单，选中聚焦的 `menuitemradio`，并取消选中同一组中的任何其他已选中的 `menuitemradio` 元素。 
  - （可选）：当焦点位于一个具有子菜单的`menuitem`上时，打开子菜单并将焦点放在其子菜单的第一个项目上。 
  - （可选）：当焦点位于一个没有子菜单的 `menuitem` 元素时，激活 `menuitem` 并关闭菜单。 
- `Down Arrow`: 
  - 当焦点在 `menubar` 里的一个 `menuitem` 时，打开它的子菜单，并将焦点放在子菜单中的第一个项目上。 
  - 当焦点在一个`menu`上，将焦点移至下一个项目，可选的，从最后一个项目返回到第一个项目。
- `Up Arrow`: 
  - 当焦点在一个 `menu` 上时，将焦点移至上一个项目，可选的，从第一个项目移至最后一个。 
  - (可选)：当焦点在`menuitem` 中一个 menubar上时，打开其子菜单，并将焦点放置在子菜单的最后一个项目上。 
- `Right Arrow`： 
  - 当焦点在一个`menubar`上，将焦点移至下一个项目，可选的，从最后一个项目返回到第一个项目。 
  - 当焦点在 `menu` 的一个具有子菜单的 `menuitem` 上时，打开子菜单并将焦点放置在其第一个项目上。 
  - 当焦点在一个 `menu` 中的不具有子菜单的项目上时，执行以下3个操作： 
    1. 关闭子菜单和任何父菜单。 
    2. 将焦点移至 `menuitem` 中的下一个 `menubar.` 
    3. （推荐）打开该`menuitem` 的子菜单但不用将焦点移至子菜单，或者打开该`menuitem`的子菜单，并将焦点放置在子菜单的第一个项目上。 
  请注意，如果没有`menubar`，例如从一个菜单按钮打开一个菜单，当焦点在一个没有子菜单的项目上时， Right Arrow 不会执行任何操作。 
- `Left Arrow`： 
  - 当焦点在一个`menubar`上时，将焦点移至上一个项目，可选的，从第一个项目移至最后一个。 
  - 当焦点在菜单中一个项目的子菜单时，关闭子菜单并将焦点返回给父级`menuitem`。 
  - 焦点在 menubar 栏中的一个项目的子菜单时，执行以下3个操作：
    1. 关闭子菜单。 
    2. 把焦点移至`menuitem`中的前一个`menubar`. 
    3. （推荐）打开该`menuitem`的子菜单但不用将焦点移至子菜单，或者打开该`menuitem`的子菜单，并将焦点放置在子菜单的第一个项目上。 
- `Home`: 如果不支持光标键循环，则将焦点移至当前`menu`或`menubar 的第一个子项。 
- `End`: 如果不支持光标键循环，则将焦点移至当前`menu 或`menuba`r 的最后一个子项。 
- 对应于可打印字符的任意键（可选）：将焦点移至当前菜单中标签以可打印字符开头的菜单项。 
- `Escape`: 关闭包含焦点的菜单并将焦点返回到元素或上下文，例如打开菜单的菜单按钮或父级`menuitem 
- `Tab`: 将焦点移至Tab序列中的下一个元素，并且如果获得焦点的项目不在 `menubar` 中，关闭其 `menu` 和所有打开的父级 `menu` 容器 
- `Shift + Tab`: 将焦点移至Tab序列中的上一个元素，并且如果获得焦点的项目不在 `menubar` 中，关闭其 `menu` 和所有打开的父级 `menu` 容器 。

>**注意** 
>1. 禁用的菜单项是可聚焦的，但无法激活。 
>2. 菜单中的[separator](#role_separator)不可聚焦或交互。 
>3. 作为上下文操作的结果，如果一个菜单被打开或菜单栏获得焦点， Escape 或 Enter 可能会将焦点返回到调用的上下文。例如，当在编辑文本时按下快捷键时，一个富文本编辑器的菜单栏可能会获得焦点，例如alt + F10。在这种情况下，点击Escape 或从菜单中激活一个命令可能会将焦点返回给编辑器。 
>4. 尽管建议开发者不要这样做，但还是有一些导航菜单栏的实现，其`menuitem` 元素既能执行功能又能打开子菜单。在这种实现中， enter 和 Space 执行导航功能，例如，加载新内容，而Down Arrow则在水平`menuitem`中打开与其相关联的子菜单 
>5. 当`menubar`中的项目垂直排列，`menu`容器中的项目水平排列时： 
> A. Down Arrow 执行 Right Arrow 如上所述的表现，反之亦然。 
> B. Up Arrow 执行 Left Arrow 如上所述的表现，反之亦然。

**WAI-ARIA角色，状态和属性**

- 菜单是呈现选项的容器。作为菜单的元素具有[menu](#role_menu) 或 [menubar](#role_menubar) 角色。
- 包含在菜单中的项目是包含menu或menubar的子元素，并且具有一下任意角色：
  - [menuitem](#role_menuitem)
  - [menuitemcheckbox](#role_menuitemcheckbox)
  - [menuitemradio](#role_menuitemradio)
- 如果激活一个 [menuitem](#role_menuitem) 会打开一个子菜单，那么该 `menuitem` 被认为是一个父级。一个子菜单的菜单元素被它的父级 `menuitem` 包含或拥有。
- 父级`menu`的[aria-haspopup](#aria-haspopup) 设置为 `true`。
- 以下方法可被用于让脚本能够在菜单的项目间移动焦点，如 [Keyboard Navigation Inside Components](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_general_within):
  - 菜单容器的 \`tabindex 设置为 -1 或 0 并将 [aria-activedescendant](#aria-activedescendant) 设置为聚焦项目的ID。
  - 菜单中的每个项目的 `tabindex` 设置为`-1`, 除了菜单栏中的第一个项目的 `tabindex` 设置为 `0`。
- 当 [menuitemcheckbox](#role_menuitemcheckbox) 或 [menuitemradio](#role_menuitemradio) 选中时， [aria-checked](#aria-checked) 设置为 `true`.
- 当菜单项目不可用时，[aria-disabled](#aria-disabled) 设置为 `true`.
- 可以通过在组之间放置具有 [separator](#role_separator) 角色的元素来将菜单中的项目分成组。例如，当菜单包含一组 [menuitemradio](#role_menuitemradio) 项目时，应使用此技术。
- 所有 [separators](#role_separator) 应有与其方向一致的 [aria-orientation](#aria-orientation) 值。
- 如果一个菜单栏是垂直方向的，它的[aria-orientation](#aria-orientation) 值设为 `vertical`. 菜单栏的 `aria-orientation` 属性的默认值是 `horizontal`。
- 如果一个菜单是水平方向的，它的 a[ria-orientation](#aria-orientation) 值设为 `horizontal`. 。菜单栏的 `aria-orientation` 属性的默认值是 `vertical`。

>**注意** 如果在菜单容器上设置[aria-owns](#aria-owns) ，来包含不是该容器DOM子元素的元素，那么这些元素将按照它们被引用的顺序出现在读取顺序中，并且在所有DOM子元素之后。管理焦点的脚本需要确保视觉焦点顺序与此辅助技术阅读顺序相匹配。

<i id="menu_button"></i>

## 菜单按钮 menu button

菜单按钮是一个可以打开 [menu](#w-menu) 的 [button](#w-button) 。它的样式通常与典型按钮一样，且带有一个向下的箭头或三角，来提示用户激活按钮会展开一个菜单。

**示例**

- [导航菜单按钮](https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-links.html): 由HTML元素 `a` 创建的菜单按钮，展开是一个表现为链接的项目菜单。
- [使用element.focus()的操作菜单的按钮示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-actions.html): 打开菜单上的高亮选项卡的按钮是通过HTML中的 button 元素创建的，而菜单中的焦点是通过`element.focus()` 进行管理的。
- [使用aria-activedescendant的操作菜单按钮示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-actions-active-descendant.html):一个打开菜单上的高亮选项卡的按钮，通常用aria-activedescendant进行管理。

- [Menus & Menu Buttons - Inclusive Components](https://inclusive-components.design/menus-menu-buttons/)

**键盘交互**

- 按钮拥有焦点时:
  - `Enter`: 打开菜单并将焦点置于第一个菜单项上。
  - `Space`: 打开菜单并将焦点置于第一个菜单项上。
  - _(可选)_ `Down Arrow`: 打开菜单并将焦点置于第一个菜单项。
  - _(可选)_ `Up Arrow`: 打开菜单并将焦点置于最后一个菜单项。
- 菜单打开后需要的键盘交互参照 [Menu or Menu bar](#w-menu)。

**WAI-ARIA角色，状态和属性**

- 打开菜单的元素具有 [button](#role_button) 角色。
- 具有 `button` 角色的元素，其 [aria-haspopup](#aria-haspopup) 属性为 `menu` 或 `true`。
- 当菜单展开时, 有 `button` 角色的元素的 [aria-expanded](#aria-expanded) 属性设置为 `true`。 当菜单收起时, 建议不设置 `aria-expanded` 属性。如果当菜单收起时，设置了 `aria-expanded` 属性，其值应该为 `false`。
- 通过激活按钮展开的包含菜单项的元素，具有 [menu](#role_menu) 角色.
-可选的，具有 `button` 角色的元素，其 [aria-controls](#aria-controls) 属性具有特定的值，用来指向具有 `menu` 角色的元素。
- 在 [Menu or Menu bar](#w-menu) 中介绍了菜单元素所需的附加角色，状态和属性。

## 导航 navigation

**基本导航**
所有导航元素都应该有一个`<nav>`标签。
如果必须使用更通用的元素（如a）`<div>`，请添加`role="navigation"`到每个导航栏以明确将其标识为辅助技术用户的标志性区域。
菜单应根据其个别功能进行标记。使用可以使用`class="visuallyhidden">`, `aria-label=""`或`aria-labelledby=""`轻松地向您网站上的不同菜单添加上下文。

- [基本导航示例](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-navigation-basic)

- [下拉导航示例](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-navigation-dropdown)

- [页脚导航示例](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-navigation-footer)

**移动导航**
将`<button>`元素用于移动导航图标。
如果您使用纯粹装饰的图标，请声明`alt=""`，因为不需要其他信息。如果您使用的图标对功能很重要，请提供其他`alt="_descriptive text goes here_"`信息。
当您在显示移动图标时添加描述性文本以便为按钮的用途提供更多上下文时，它对所有用户都很有帮助。
将移动打开/关闭按钮放在`<nav>`元素中，并使用它们切换导航的另一个子包装器的状态。这将确保屏幕阅读器仍然可以发现导航地标，即使它处于关闭/隐藏状态。

- [移动导航示例](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-navigation-mobile)

## 分页器 pagination
尽可能将分页器放在`<nav>`元素中。
如果不使用`<nav>`元素，则需要添加`role="navigation"`到标记。注意：使用`<nav>`元素时隐含了此角色，因此同时使用这两个元素有点多余。
标记包括`aria-label="pagination"`用于描述导航类型的标记。
添加`aria-current="page"`到指向当前页面的链接。这将告诉AT焦点链接指向当前页面。
`aria-disabled="true"`禁用链接时添加到链接。

[分页器示例](https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination)

## 扩展器 disclosure

扩展器是一种控制内容部分的可见性的按钮。当隐藏受控内容时，它通常被设计为具有向右箭头或三角形的典型按钮，以暗示激活按钮将显示其他内容。当内容可见时，箭头或三角形通常指向下方。
**示例**
- [图像描述的扩展器（显示/隐藏）](https://www.w3.org/TR/wai-aria-practices/examples/disclosure/disclosure-img-long-description.html)
- [扩展器（显示/隐藏）常见问题解答](https://www.w3.org/TR/wai-aria-practices/examples/disclosure/disclosure-faq.html)

**键盘交互**
当扩展器控制具有焦点时：
- `Enter`：激活扩展器控制并切换扩展器内容的可见性。
- `Space`：激活扩展器控制并切换扩展器内容的可见性。

**WAI-ARIA角色，状态和属性**
- 显示和隐藏内容的元素具有角色`button`。
- 当内容可见时，带有角色`button`的元素将`aria-expanded`设置为`true`。
隐藏内容区域时，将其设置为`false`。
- （可选）具有角色`button`的元素具有为`aria-controls`指定的值，该值引用包含显示或隐藏的所有内容的元素。


## 工具栏 toolbar

[工具栏](#role_toolbar) 是一个对控件进行分组的容器，例如，按钮、菜单按钮、或复选框。

当一组控件在视觉上呈现为一个组合，可以使用 `toolbar` 角色来告知屏幕阅读器用户分组的呈现和目的。组合控件到工具栏，在键盘交互中是一个减少Tab停留数量的有效方式。

优化工具栏小部件的优点：

1.  实现焦点管理，这样在Tab顺序中只包含一个toolbar站点，使用光标键可以在toolbar的控件间移动焦点。
2.  避免在工具栏中包含需要光标键操作的控件，例如文本框或单选按钮。如果必须使用，只能包含一个这样的控件且让其作为最后一个元素。
3.  当且仅当组合中包含三个或三个以上的控件时，才能使用工具栏作为分组元素。

**键盘交互**

- 当工具栏获取焦点时，焦点被设置在第一个可用控件上。或者，如果工具栏先前已获取过焦点，则焦点被设置在工具栏中最后一个被聚焦的元素上。（译者注：一般情况下，屏幕阅读器用户会使用Tab快速浏览页面上的内容，顺序为从上到下、从左到右，此时，若工具栏获取焦点，则将焦点设置在第一个可聚焦的元素上，若使用 `Shift + tab` 反向浏览，若工具栏获取焦点，则将焦点设置在最后一个可聚焦的元素上。）
- 水平工具栏(默认)：
  - `Left Arrow`: 将焦点移至上一个控件。可选：焦点从第一个控件移至最后一个控件上。
  - `Right Arrow`: 将焦点移至下一个控件。可选：焦点从最后一个控件移至第一个控件上。
- `Home` _(可选)_: 将焦点移至第一个元素。
- `End` _(可选)_: 将焦点移至最后一个元素。

>**注意**

1.  如果工具栏中的项目垂直排列：
  1.  `Down Arrow` 与 `Right Arrow` 功能一样。
  2.  `Up Arrow` 与 `Left Arrow` 功能一样。
2.  般来说，使用键盘进行导航时，不可用元素不可聚焦。但是，在某些需要发现功能的场景中，如果不可用元素可聚焦，可以帮助屏幕阅读器用户发现这些功能的存在。相关指导信息，请参阅 [Focusability of disabled controls](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_disabled_controls)。
3.  在应用程序中，快速访问工具栏非常重要，例如，从编辑器的文本区域快速访问到编辑器的工具栏，建议使用文档快捷键，从相关上下文中移动焦点到对应工具栏。

**WAI-WRIA 角色、状态和属性**

- 用于工具栏容器的元素设置role为 [toolbar](#role_toolbar)。
- 如果工具栏有可视的标签，它被工具栏元素上的 [aria-labelledby](#aria-labelledby) 引用。否则，工具栏元素具有由 [aria-label](#aria-label)提供的标签。
- 如果工具栏控件是垂直排列的，工具栏元素应该设置 [aria-orientation](#aria-orientation) 为 `vertical`。其默认值为 `horizontal`。

## 卡片 card
- 确保所有需要突出显示的元素都有标签焦点指示符。
- 您添加到网站的每个`<img>`都需要具有alt属性。如果图像用做传达信息，请将`alt`设置为该图像的描述性替代。
- 如果图像是相邻文本的装饰或冗余，请设置`alt =“”`，这将向辅助技术用户传达图像对于理解页面不是必需的。
- 避免使用照片，图像或图标等通用字符串作为alt值，因为它们不会向用户传达有价值的内容。尽可能具有描述性。
- 您可以使用描述性文本添加class =“visualhidden”，以便为按钮或链接的目的提供更多上下文。

[a11y-卡片示例](https://a11y-style-guide.com/style-guide/section-cards.html)
[Cards - Inclusive Components](https://inclusive-components.design/cards/)

# 窗体类控件

## 警告框 alert 
[alert](#role_alert) 是一个呈现简短、重要信息的元素，以一种引起用户注意而不打断用户任务的方式。动态渲染的警告会被大多数屏幕阅读器自动朗读，在某些操作系统中，警告会触发警告提示音。与此同时，需要注意的是屏幕阅读器不会告知用户在加载完成前已经存在的警告。

因为警告是用来提供重要和潜在的时间敏感信息，而不会打扰用户继续工作，重要的一点是它不会影响键盘焦点。[alert dialog](#w-alertdialog) 为那些必须打断工作流的情况设计的。

同样重要的是，避免设计自动消失的警告。一个消失太快的警告，可能导致不符合 [WCAG 2.0 success criterion 2.2.3](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-no-exceptions.html)。另一个重要的设计考虑是警告引起的终端频率。频繁打断会降低视障和认知障碍用户的可用性，这让满足 [WCAG 2.0 success criterion 2.2.4](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-postponed.html) 的需求更加困难。

**示例**

- [警告框示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/alert/index.html)
- [Notifications - Inclusive Components](https://inclusive-components.design/notifications/)

**键盘交互**

一个警告框（WAI-ARIA 活动区域）不需要任何键盘交互。

**WAI-ARIA 角色，状态和属性**

该组件的角色为 [alert](#role_alert)。

## 警告和消息对话框 alert & message dialog

一个警告对话框是一个[模态对话框](#w-dialog_modal)，可中断用户的工作流程，以传达一个重要的信息，并获得响应。包含操作确认提示和错误消息确认。[alertdialog](#role_alertdialog) 角色能够让辅助技术和浏览器从其他对话框中区分出警告对话框，这样就能给予警告对话框特殊对待，例如播放一个系统警告提示音。

**示例**

[警告模态框示例](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/alertdialog.html) 

**键盘交互**

请参阅 [modal dialog pattern](#w-dialog_modal) 键盘交互部分。

**WAI-ARIA 角色，状态和属性**

- 包含对话框所有元素的元素，包括警告信息和任何对话框按钮，具有 [alertdialog](#role_alertdialog) 角色。
- 角色设置为 `alertdialog` 的元素拥有以下情况中的一种：
  - 如果对话框具有一个可见标题，具有一个 [aria-labelledby](#aria-labelledby) 索引包含具有对话框标题的元素。
  - [aria-label](#aria-label) 的值，如果对话框没有可见的标题。
- 角色为 `alertdialog` 的元素，具有 [aria-describedby](#aria-describedby) 属性来索引包含警告信息的元素。


## 组合框 combo box

组合框是由两个不同元素组合而成的小部件：1）单行文本框 2）用于帮助用户设置文本框值的关联弹出元素。弹出窗口可以是listbox(列表框)，grid(网格)，tree(树)或dialog(对话框)。许多实现还包括第三个可选元素 - 与文本框相邻的图形按钮，指示弹出窗口的可用性。如果建议可用，则激活按钮会显示弹出窗口。

默认情况下隐藏弹出窗口，触发其显示的条件取决于其实现。一些可能的弹出显示条件包括：
- 只有在文本框中键入了一定数量的字符并且这些字符与其中一个建议值的某些部分匹配时，才会显示它。
- 即使文本框为空，它也会在文本框聚焦后立即显示。
- 按下`Down Arrow`键或激活"显示"按钮时显示，可能依赖于文本框的内容。
- 如果文本框的值以创建与建议值的一个或多个部分匹配的方式更改，则会显示该值。
Combobox小部件可用于在以下两种方案之一中设置单行文本框的值：
1. **必须从预定义的一组允许值中选择文本框的值**，例如，位置字段必须包含有效的位置名称。请注意，listbox(列表框)和menu button(菜单按钮)模式在此方案中也很有用；组合框和替代模式之间的差异如下所述。
2. **文本框可以包含任何任意值，但是向用户建议的值是有利的**，例如，搜索字段可以建议类似或先前的搜索以节省用户时间。
建议值的性质和建议的呈现方式称为自动完成行为。组合框可以有以下四种形式的自动完成：
    1. **无自动完成**：触发弹出窗口时，无论文本框中键入的字符如何，它包含的建议值都是相同的。例如，弹出窗口建议一组最近输入的值，并且建议不会随用户键入而更改。通过手动选择列出
    2. **自动完成**：触发弹出窗口时，它会显示完成或逻辑上对应于文本框中键入的字符的建议值。除非用户在弹出窗口中选择一个值，否则用户键入的字符串将成为文本框的值。
    3. **使用自动选择列出自动完成**：触发弹出窗口时，它会显示完成或逻辑上对应于文本框中键入的字符的建议值，并且第一个建议会自动突出显示为已选中。除非用户选择不同的建议或更改文本框中的字符串，否则当组合框失去焦点时，自动选择的建议将成为文本框的值。
    4. **具有内联自动完成功能的列表**：这与具有一个附加功能的自动选择列表相同。所选建议的未被用户键入的部分（完成字符串）在文本框中的输入光标后显示为内联。内联完成字符串在视觉上突出显示并具有选定状态。

使用任何形式的列表自动完成功能，弹出窗口可能会在用户键入时显示和消失。例如，如果用户键入一个两个字符串，触发五个要显示的建议，但然后键入形成一个没有任何匹配建议的字符串的第三个字符，弹出窗口可能会关闭，如果存在，则内联完成字符串消失。
构建视觉上紧凑的窗口小部件并允许用户从一组离散值中选择一个值时，通常listbox（列表框）或menu button(菜单按钮)钮更易于实现和使用。组合框的一个特征是将其与listbox（列表框）和menu button(菜单按钮)区分开来，组合框的值显示在编辑字段中。
因此，组合框为用户提供了listbox（列表框）和menu button(菜单按钮)都缺少的功能，即能够选择部分或全部值以便复制到剪贴板。区分组合框和menu button(菜单按钮)小部件与列表框小部件的一个特征是它们提供撤销机制的能力。
在许多实现中，用户可以在组合框或菜单中导航该组允许值，然后通过按下`escape`来决定恢复小部件在导航之前具有的值。相反，导航listbox（列表框）会立即更改其值，而`escape`不会提供撤消机制。
>**注意**:
>ARIA 1.1中引入了组合框以弹出网格，树或对话框的选项。ARIA 1.1规范中所做的更改还增加了对代码模式的支持，该代码模式使辅助技术能够将文本框和弹出窗口呈现为可单独感知的元素。ARIA 1.0和1.1模式将在以下部分中介绍。虽然一旦辅助技术支持足够，建议使用ARIA 1.1模式，但没有计划弃用ARIA 1.0模式。

**示例**

- [ARIA 1.1 Combobox与列表框弹出的示例](https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html)：使用列表框弹出窗口演示各种形式的自动完成行为并使用ARIA 1.1实现模式的组合框。
- [ARIA 1.1 Combobox与网格弹出框架的示例](https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/grid-combo.html)：在网格中提供建议的组合框，使用户能够浏览有关每个建议的描述性信息。
- [具有列表和内联自动完成功能的ARIA 1.0 Combobox](https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.0pattern/combobox-autocomplete-both.html)：一个组合框，用于演示自动完成行为，称为内联自动完成列表，并使用ARIA 1.0实现模式。
- [带有列表自动完成功能的ARIA 1.0 Combobox](https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.0pattern/combobox-autocomplete-list.html)：一个组合框，用于演示自动完成行为，称为手动选择列表，并使用ARIA 1.0实现模式。
- [没有自动完成功能的ARIA 1.0 Combobox](https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.0pattern/combobox-autocomplete-none.html)：一个组合框，用于演示与aria-autocomplete = none相关的行为，并使用ARIA 1.0实现模式。

**键盘交互**

- `Tab`：文本框位于页面`Tab`访问顺序中。
- 注意：弹出指示器图标或按钮（如果存在），弹出窗口和弹出后代将从页面选项卡序列中排除。

**文本框键盘交互**
当焦点位于文本框中时：
- `Down Arrow`：如果弹出窗口可用，请将焦点移至弹出窗口：
  - 如果自动完成行为在按下`Down Arrow`之前自动选择了建议，则会根据自动选择的建议重点关注建议。
  - 否则，将重点放在弹出窗口中的第一个可聚焦元素上。
- `Up Arrow`（可选）：如果弹出窗口可用，则将焦点放在弹出窗口中的最后一个可聚焦元素上。
- `Escape`：如果可见，则关闭弹出窗口。（可选）清除文本框。
- `Enter`：如果自动选择了自动填充建议，则通过将输入光标放在文本框中可接受值的末尾或对值执行默认操作来接受建议。例如，在消息传递应用程序中，默认操作可能是将接受的值添加到消息收件人列表，然后清除文本框，以便用户可以添加另一个收件人。
- 可打印字符：在文本框中键入字符。请注意，某些实现可能会将某些字符视为无效并阻止其输入。
- 适用于设备平台的标准单行文本编辑键（请参阅下面的注释）。
- `Alt +Down Arrow`（可选）：如果弹出窗口可用但未显示，则显示弹出窗口而不移动焦点。
- `Alt +Up Arrow`（可选）：如果显示弹出窗口：
  - 1.如果弹出窗口包含焦点，则将焦点返回到文本框。
  - 2.关闭弹出窗口。

注意,适用于设备平台的标准单行文本编辑键：
1. 包括输入键，光标移动，选择和文本操作。
2. 编辑功能的标准键分配取决于设备操作系统。
3. 提供文本编辑功能的最强大的方法是依赖浏览器，这些浏览器为具有类型文本的HTML输入和具有可疑HTML属性的元素提供它们。
4. **重要信息**：通过捕获用于执行它们的键的关键事件，确保JavaScript不会干扰浏览器提供的文本编辑功能。

**列表框弹出键盘交互**
当焦点位于列表框弹出窗口中时：
- `Enter`：通过关闭弹出窗口并将接受的值放在文本框中，并将输入光标放在值的末尾，接受列表框中的焦点选项。
- `Escape`：关闭弹出窗口并将焦点返回到文本框。（可选）清除文本框的内容。
- `Right Arrow`：将焦点返回到文本框而不关闭弹出窗口，并将输入光标向右移动一个字符。如果输入光标位于最右侧的字符上，则光标不会移动。
- `Left Arrow`：将焦点返回到文本框而不关闭弹出窗口，并将输入光标向左移动一个字符。
如果输入光标位于最左侧的字符上，则光标不会移动。
- 任何可打印字符：将焦点返回到文本框而不关闭弹出窗口并键入字符。
- `Backspace`（可选）：将焦点返回到文本框并删除光标前的字符。
- `Delete`（可选）：将焦点返回到文本框，如果选择了建议，则删除选定的状态，并删除内联自动完成字符串（如果存在）。
- `Down Arrow`：将焦点移至并选择下一个选项。如果焦点位于最后一个选项上，则将焦点返回到文本框或不执行任何操作。
- `Up Arrow`：将焦点移至并选择上一个选项。如果焦点在第一个选项上，则将焦点返回到文本框或不执行任何操作。
- `Home`（可选）：将焦点移至并选择第一个选项或将焦点返回到文本框并将光标放在第一个字符上。
- `End`（可选）：将焦点移动到最后一个选项或将焦点返回到文本框并将光标放在最后一个字符之后。
>**注意**
>1. DOM Focus在组合框文本框中维护，辅助技术焦点使用`aria-activedescendant`在列表框中移动，如使用`aria-activedescendant`管理复合材料中的焦点所述。
>2.选择跟随列表框中的焦点；列表框一次只允许为文本框值选择一个建议值。

**网格弹出键盘交互**
在网格弹出窗口中，每个建议值可以由单个单元格或整行表示。请参阅下面的注释，了解网格设计的这一方面如何影响键盘交互设计以及选择移动以响应焦点移动的方式。
- `Enter`：通过关闭弹出窗口并将所选值放在文本框中，并将输入光标放在值的末尾，接受当前选择的建议值。
- `Escape`：关闭弹出窗口并将焦点返回到文本框。（可选）清除文本框的内容。
- 任何可打印字符：将焦点返回到文本框而不关闭弹出窗口并键入字符。
- `Backspace`（可选）：将焦点返回到文本框并删除光标前的字符。
- `Delete`（可选）：将焦点返回到文本框，如果选择了建议，则删除选定的状态，并删除内联自动完成字符串（如果存在）。
- `Right Arrow`：将焦点向右移动一个单元格。（可选）如果焦点位于行中最右侧的单元格上，焦点可能会移动到下一行中的第一个单元格。如果焦点位于网格中的最后一个单元格上，则不执行任何操作或将焦点返回到文本框。
- `Left Arrow`：将焦点向左移动一个单元格。（可选）如果焦点位于行中最左侧的单元格上，焦点可能会移动到上一行中的最后一个单元格。如果焦点位于网格中的第一个单元格上，则不执行任何操作或将焦点返回到文本框。
- `Down Arrow`：向下移动一个单元格。如果焦点位于网格的最后一行，则不执行任何操作或将焦点返回到文本框。
- `Up Arrow`：向上移动一个单元格。如果焦点位于网格的第一行，则不执行任何操作或将焦点返回到文本框。
- `Page Down`（可选）：将焦点向下移动作者确定的行数，通常是滚动，以使当前可见行集中的底行成为第一个可见行之一。如果焦点位于网格的最后一行，则焦点不会移动。
- `Page Up`（可选）：将焦点向上移动作者确定的行数，通常是滚动，以便当前可见行集中的顶行成为最后一个可见行之一。如果焦点位于网格的第一行，则焦点不会移动。
- `Home`（可选）：要么：
  - 将焦点移动到包含焦点的行中的第一个单元格。或者，如果网格每行少于三个单元格或每行多个建议值，则焦点可能会移动到网格中的第一个单元格。
  - 将焦点返回到文本框并将光标放在第一个字符上。
- `End`（可选）：要么：
  - 将焦点移动到包含焦点的行中的最后一个单元格。或者，如果网格每行少于三个单元格或每行多个建议值，则焦点可能会移动到网格中的最后一个单元格。
  - 将焦点返回到文本框，并将光标放在最后一个字符之后。
- `Control + Home`（可选）：将焦点移动到第一行。
- `Control + End`（可选）：将焦点移动到最后一行。
>**注意**
>1. DOM Focus在组合框文本框中维护，辅助技术焦点使用aria-activedescendant在网格内移动，如使用aria-activedescendant管理复合材料中的焦点所述。
>2. 网格一次只允许为文本框值选择一个建议值。
>3. 在网格弹出窗口中，每个建议值可以由单个单元格或整行表示。
>这方面的设计影响焦点和选择运动：
> A.如果每个单元格包含不同的建议值：
> - 选择遵循焦点，以便选择包含焦点的细胞。
> - 水平箭头键导航通常从一行包装到另一行。
> - 垂直箭头键导航通常从一列包装到另一列。
> B.如果一行中的所有单元格都包含有关相同建议值的信息：
> - 选择包含焦点的行，或者当同一行中的任何单元格包含焦点时，选择包含建议值的单元格。
> - 水平键导航可以从一行换行到另一行。
> - 垂直箭头键导航不会从一列换行到另一列。

**树弹出键盘交互**
在树弹出窗口的一些实现中，一些或所有父节点可以用作建议类别标签，因此可能不是可选择的值。
请参阅下面的注释，了解设计的这一方面如何影响选择移动以响应焦点移动的方式。
当焦点位于垂直方向的树弹出窗口时：
- `Enter`：通过关闭弹出窗口并将所选值放在文本框中，并将输入光标放在值的末尾，接受当前选择的建议值。
- `Escape`：关闭弹出窗口并将焦点返回到文本框。（可选）清除文本框的内容。
- 任何可打印字符：将焦点返回到文本框而不关闭弹出窗口并键入字符。
- `Right Arrow`：
  - 当焦点在封闭节点上时，打开节点；焦点和选择不动。
  - 当焦点位于打开的节点上时，将焦点移动到第一个子节点，如果可选，则选择它。
  - 当焦点在终端节点上时，什么都不做。
- `Left Arrow`：
  - 当焦点在开放节点上时，关闭节点。
  - 当焦点位于也是末端节点或封闭节点的子节点上时，将焦点移动到其父节点并在可选择时选择它。
  - 当焦点位于也是末端节点或封闭节点的根节点上时，不执行任何操作。
- `Down Arrow`：将焦点移动到可聚焦的下一个节点，而无需打开或关闭节点，如果可选，则选择它。
- `Up Arrow`：将焦点移动到可关注的上一个节点，而无需打开或关闭节点，如果可选，则选择它。
- `Home`：将焦点移动到树中的第一个节点，而不打开或关闭节点，如果可选，则选择它。
- `End`：将焦点移动到树中可聚焦的最后一个节点，而不打开节点，如果可选，则选择它。

>**注意**
>1.DOM Focus在组合框文本框中维护，辅助技术焦点使用`aria-activedescendant`在树中移动，如[使用aria-activedescendant管理组合焦点](https://www.w3.org/TR/wai-aria-practices/#kbd_focus_activedescendant)所述。
>2.树只允许一次为文本框值选择一个建议值。
>3.在树弹出窗口中，部分或全部父节点可能不是可选值；它们可以作为建议值的类别标签。如果焦点移动到不是可选值的节点，则：
>  - 先前选择的节点（如果有）保持选中状态，直到焦点移动到可选择的节点。
>  - 没有选定的值。
>  - 在任何一种情况下，焦点在视觉上都与选择不同，因此用户可以很容易地看到是否选择了值。
>4.如果树中的节点水平排列：
>  A. 向下箭头执行右箭头如上所述，反之亦然。
>  B. 向上箭头执行为左箭头如上所述，反之亦然。

**对话框弹出键盘交互**
焦点在对话框弹出窗口中时：
- 有两种方法可以关闭弹出窗口并将焦点返回到文本框：
  - 1.在对话框中执行操作，例如激活按钮，指定文本框的值。
  - 2.取消退出对话框，例如，按Escape或激活对话框中的取消按钮。取消将返回焦点返回到文本框而不更改文本框值或将焦点返回到文本框并清除文本框。该对话框实现了模态对话框模式中定义的键盘交互。
>**注意**
>与其他组合框弹出窗口不同，对话框不支持aria-activedescendant，因此DOM焦点从文本框移动到对话框中。

**WAI-ARIA角色，状态和属性**
首先列出ARIA 1.1和ARIA 1.0模式不同的角色，状态和属性指南。随后的指导适用于这两种模式。
- 在实现ARIA 1.1模式的组合框中：
  - 用作组合框容器的元件具有角色组合框。
  - 具有角色组合框的元素包含或拥有具有角色文本框或角色搜索框的文本框元素。
  - 当组合框弹出窗口可见时，组合框元素包含或拥有具有角色列表框，树，网格或对话框的元素。
  - 如果组合框弹出窗口具有除列表框以外的角色，则具有角色组合框的元素将`aria-haspopup`设置为与弹出窗口类型对应的值。也就是说，`aria-haspopup`设置为网格，树或对话框。
  - 当组合框弹出窗口可见时，textbox元素的`aria-controls`设置为引用组合框弹出元素的值。
- 在实现ARIA 1.0模式的组合框中：
  - 用作文本框的元素具有角色组合框。
  - 当组合框弹出窗口可见时，具有角色组合框的元素将`aria-owns`设置为引用具有角色列表框的元素的值。
  - 具有角色组合框的元素具有列表框的`aria-haspopup`的值。请注意，具有角色组合框的元素具有listbox的隐式`aria-haspopup`值。
  - textbox元素的`aria-multiline`值为`false`。请注意，`aria-multiline`的默认值为`false`。
  - 当组合框弹出窗口不可见时，具有角色组合框的元素将`aria-expanded`设置为`false`。
  - 当弹出元素可见时，`aria-expanded`设置为`true`。请注意，具有角色组合框的元素具有`aria-expanded`为`false`的默认值。
  - 当组合框获得焦点时，DOM焦点放在文本框元素上。
  - 当聚焦列表框，网格或树弹出窗口的后代时，DOM焦点保留在文本框上，文本框将`aria-activedescendant`设置为引用弹出窗口中的焦点元素的值。
  - 在具有列表框，网格或树弹出窗口的组合框中，当建议值在视觉上指示为当前选定的值时，包含该值的选项，gridcell，row或treeitem将`aria-selected`设置为`true`。
  - 如果组合框具有可见标签，则具有角色组合框的元素将`aria-labelled`设置为引用标记元素的值。否则，组合框元素具有由`aria-label`提供的标签。
  - textbox元素的`aria-autocomplete`设置为与其自动完成行为相对应的值：
  - `none`：显示弹出窗口时，无论文本框中键入的字符如何，它包含的建议值都是相同的。
  - `list`：触发弹出窗口时，它会显示完成或逻辑上对应于文本框中键入的字符的建议值。
  - `both`：当触发弹出窗口时，它会显示完成或逻辑上对应于文本框中键入的字符的建议值。此外，所选建议的未被用户键入的部分（称为完成字符串）在文本框中的输入光标后显示为内联。内联完成字符串在视觉上突出显示并具有选定状态。
>**注意**
>1. 当引用用于弹出窗口的以下模式列表的角色，状态和属性文档时，请记住组合框是单​​选小部件，其中选择始终在弹出窗口中关注焦点。
>2. 弹出元素的角色，状态和属性在各自的设计模式中定义：
>- listbox 角色，状态和属性
>- grid 角色，状态和属性
>- tree 角色，状态和属性
>- dialog 角色，状态和属性

<span id="dialog_modal"></span>
## 对话框(模态) dialog modal

[对话框](#role_dialog) 是叠加在主窗口或另一个对话框上的窗口。Window下的模态对话框是惰性的。也就是说，用户不能与对话框之外的内容进行交互。当前活跃窗口之外的非活跃内容，一般是模糊不清或灰暗的，这样就让这些内容很难被辨别，并且在某些实现中，如果试图与非活跃内容进行交互将导致对话框被关闭。

与非模态对话框类型类似，模态对话框限制了TAB顺序。也就是说，`Tab` 和 `Shift + Tab` 不会把焦点移出对话框。但是，与非模态对话框不同的是，模态对话框没有提供在不关闭当前对话框的情况下，将键盘焦点移出对话框窗口的方法。

[alertdialog](#role_alertdialog) 角色是特殊情况的对话框角色，被专门设计用来将用户的注意力转移至简短、重要的信息上。其用法被描述在 警告对话框设置模块。

**示例**

[模态对话框示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/dialog-modal/dialog.html)

**键盘交互**

在以下的描述中，术语 tabbable element 是指 tabindex 值大于等于0的元素。注意：强烈不建议使用大于0的值。

- 当对话框被打开时，焦点移至对话框内的元素。请参阅下面关于初始焦点处理的注释。
- `Tab`:
  - 将焦点移至对话框内的下一个可聚焦元素。
  - 如果焦点是最后一个元素，将焦点移至对话框内的第一个可聚焦元素。
- `Shift + Tab`:
  - 将焦点移至对话框内的上一个可聚焦元素。
  - 如果焦点是在第一个元素，将焦点移至对话框内的最后一个可聚焦元素。
- `Escape`: 关闭对话框。

>**注意**
>1.  当对话框被打开时，根据内容的性质和大小放置焦点。
>  - 在任何情况下，焦点都应该移至对话框中的一个元素上。
>  - 除非建议某个操作的情况，焦点应该被初始设置在第一个可聚焦的元素上。
>  - 如果对话框里面的内容非常多，聚焦第一个交互元素会导致起始内容滚出视窗，建议给对话框顶部的静态元素添加 `tabindex="-1"`
>  - 如果对话框内容是一个不容易逆转的流程的最后一步，例如删除数据或者完成资金交易，建议将焦点设置在最小的破坏性操作上，特别是撤销比较困难或不可撤销的操作。通常这种情况下使用 警告对话框。
>  - 如果对话框内容仅包含提供额外信息或是继续处理的交互，则建议将焦点设置为最有可能使用的元素上，例如 "OK" 或 "Continue" 按钮。
>2.  当一个对话框关闭时，焦点返回到唤起该对话框的元素上，除了：
>  - 唤起元素不复存在，此时，焦点被设置在逻辑工作流程中的另一个元素上。
>  - 包含以下场景的工作流程设计，可以聚焦到一个更加符合逻辑的、不同的元素。
>    
>    1.  用户不太可能需要立即重新唤起对话框。
>    2.  对话框中完成的任务与工作流程中的后续步骤直接相关。
>    
>    例如，网格包含一个具有用于添加行的按钮的相关工具条。 `Add Row`按钮打开一个提示输入行数的对话框。对话框关闭以后，焦点应该放在新增行的第一个单元格中。
>    
>3.  强烈建议在所有对话框中的Tab序列中，包含一个具有 `button` 角色的可见元素来关闭对话框，例如一个关闭图标，或者取消按钮。

**WAI-ARIA 角色，状态和属性**

- 作为对话框容器的元素具有 [dialog](#role_dialog) 角色。
- 需要操作对话框的所有元素都是 `dialog` 角色元素的后代。
- 对话框容器元素的 [aria-modal](#aria-modal) 被设置为 `true`。
- 该对话框包括：
  - [aria-labelledby](#aria-labelledby) 属性的值指向可见的对话框标题。
  - 标签由 [aria-label](#aria-label) 属性指定。
-可选的，[aria-describedby](#aria-describedby) 属性被设置在具有 `dialog` 角色的元素上，指明对话框中的哪些元素包含描述对话框的主要目的或信息的内容。指定描述元素，当对话框打开时，能够让屏幕阅读器在朗读对话框标题和初始聚焦元素的同时，朗读该描述。

>**注意**
>
>- 通过将 [aria-modal](#aria-modal) 设置为 `true`，将对话框标记为模态对话框，可以防止某些辅助技术用户感知到对话框外的内容，如果一个对话框被标记为模态对话框，但对其他用户来说又不表现为模态对话框，这些辅助技术的用户将会得到不好的体验。所以， **以下两点同时出现时**，标记为模态对话框：
>  1.  应用程序代码防止所有用户以任何方式和对话框外的元素进行交互。
>  2.  视觉样式模糊了对话框外的内容。
>- ARIA1.1中引入的 `aria-modal` 属性替代了 [aria-hidden](#aria-hidden)，为了告知辅助技术对话框的内容是不可交互的。然而，但传统对话框的实现中，`aria-hidden`被用来让对话框外的内容变得让辅助技术用户不可访问，更重要的是：
>  1.  在每个包含无效内容的元素上都将 `aria-hidden` 设置为 `true`。
>  2.  对话框元素不是任何 `aria-hidden` 为 `true` 的元素的后代。

# 结构类控件

## 动态列表 feed

Feed是页面的一部分，可在用户滚动时自动加载新的内容部分。Feed中内容的各个部分以文章元素显示。因此，可以将Feed视为动态的文章列表，这些文章通常会无限滚动。

当用户滚动（例如网格）时，最能区分馈送与支持加载数据的其他ARIA模式的特征是馈送是结构而不是小部件。因此，具有阅读模式的辅助技术（例如屏幕阅读器）在与Feed内容交互时默认为阅读模式。但是，与大多数其他WAI-ARIA结构不同，Feed会在网页和辅助技术之间建立互操作性合同。合同管理滚动交互，以便辅助技术用户可以阅读文章，按文章向前和向后跳转，并在阅读模式下可靠地触发新文章加载。

例如，购物网站上的产品页面可能具有一次显示五个产品的相关产品部分。当用户滚动时，请求更多产品并将其加载到DOM中。虽然静态设计可能包含用于加载另外五个产品的下一个按钮，但是在用户滚动时自动加载更多数据的动态实现简化了用户体验并减少了与查看前五个产品建议相关的惯性。但是，遗憾的是，当网页基于滚动事件动态加载内容时，它可能会给辅助技术的用户带来可用性和互操作性困难。

通过在网页和辅助技术之间建立以下互操作性协议，馈送模式实现可靠的辅助技术阅读模式交互：

1. 在Feed的上下文中，网页代码负责：
- 基于哪个文章包含DOM焦点对内容进行适当的可视滚动。
- 根据哪篇文章包含DOM焦点来加载或删除Feed文章。
2.在feed上下文中，具有阅读模式的辅助技术负责：
- 通过确保article元素或其后代之一具有DOM焦点来指示哪个文章包含读取光标。
- 提供读取模式键，将DOM焦点移动到下一篇和前一篇文章。
- 提供读取模式键，用于将读取光标和DOM焦点移动到结束之前和开始之前。

因此，实现馈送模式允许屏幕阅读器在保持其读取模式的同时可靠地读取和触发馈送内容的加载。
feed模式的另一个特征是它有助于辅助技术用户的脱脂阅读。

网页作者可以为每篇文章提供可访问的名称和描述。通过识别提供标题和主要内容的文章内部的元素，辅助技术可以提供使用户能够从一篇文章跳到另一篇文章并有效地辨别哪些文章值得更多关注的功能。

**示例**
[Feed模式的示例实现](https://www.w3.org/TR/wai-aria-practices/examples/feed/feed.html)
**键盘交互**
Feed模式不基于桌面GUI小部件，因此feed角色与任何完善的键盘约定无关。建议支持以下或类似的界面。
当焦点位于Feed中时：
- `Page Down`：将焦点移至下一篇文章。
- `Page Up`：将焦点移至上一篇文章。
- `Control + End`：在焦点后将焦点移动到第一个可聚焦元素。
- `Control + Home`：在焦点前将焦点移动到第一个可聚焦元素。
>**注意**
>1. 由于缺乏惯例，提供易于发现的键盘界面文档尤为重要。
>2. 在某些情况下，Feed可能包含嵌套Feed。例如，社交媒体Feed中的文章可能包含该文章的评论摘要。要导航嵌套的Feed，用户首先将焦点移动到嵌套的Feed中。支持嵌套Feed导航的选项包括：
>  - 用户使用Tab将焦点移动到包含文章内容的嵌套订阅源中。如果文章包含大量链接，按钮或其他小部件，这可能会很慢。
>  - 提供一个键，用于将焦点从包含文章中的元素移动到嵌套Feed中的第一个项目，例如Alt + Page Down。
>  - 要继续阅读外部Feed，Control + End会将焦点移至外部Feed中的下一篇文章。
>3. 在极少数情况下，Feed文章包含使用上述建议键的小部件，Feed导航键将操作包含的小部件，并且用户需要将焦点移动到不使用Feed导航键以便导航的元素Feed。

**WAI-ARIA角色，状态和属性**
- 包含Feed文章集的元素具有角色Feed。
- 如果Feed具有可见标题，则feed元素通过引用包含标题的元素来标记`aria-labelledby`。否则，feed元素具有使用aria-label指定的标签。
- Feed中的每个内容单元都包含在带有角色aritcle的元素中。Feed中的所有内容都包含在article元素中。
- 每个article元素都有`aria-labelledby`，指的是文章中可以作为区别标签的元素。
- 它是可选的，但强烈建议每个article元素通过引用文章中作为文章主要内容的一个或多个元素来描述`aria-describedby` 。
- 每个article元素都将`aria-posinset`设置为一个值，该值表示其在Feed中的位置。
- 每个article元素都将`aria-setsize`设置为一个值，该值表示已加载的文章总数或Feed中的总数，具体取决于哪个值对用户更有帮助。如果Feed中的总数未确定，则可以用`aria-setsize`值-1表示。
- 将article元素添加到Feed容器或从Feed容器中删除时，如果操作需要多个DOM操作，则feed元素在更新操作期间将`aria-busy`设置为true。请注意，当操作完成或某些辅助技术用户可能无法看到更改时，将`aria-busy`设置为false非常重要。



## 网格 grid

[网格](#role_grid) 组件是一个容器，能够让用户使用方向导航键，例如 `arrow keys`、 `Home` 和 `End`，来浏览其包含的信息和与其包含的元素进行交互。作为提供灵活键盘导航的通用容器小部件，它可以满足各种各样的需求。它可以用于简单的组合复选框或导航链接的集合，也可用于复杂的目的，例如完整功能的电子应用表格。尽管 WAI-ARIA 属性和辅助技术使用"row" 和 "column" 的术语，描述和呈现 `grid` 角色元素的逻辑结构，但是在元素上使用 `grid` 角色，并不需要将其视觉呈现实现为表格。

当呈现的内容是表格时，从 `grid` 和 [table](#w-table) 中选择实现模式时，考虑以下因素。

- `grid` 是一个复合小部件，所以它：
  - 始终包含多个可聚焦元素。
  - 在页面Tab序列中只有一个可聚焦元素。
  - 需要作者提供 [manages focus movement inside it](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_general_within) 的代码。
- Table中的所有可聚焦元素均被包含在页面Tab序列中。

`grid` 模式的使用大致可分为两类：展示表格信息（数据表格）和集合其他部件（布局栅格）。尽管数据网格和布局栅格使用相同的ARIA角色、状态和属性，它们内容和目的中的不同是考虑键盘交互设计的重要因素。为了强调这些因素，以下两节分别介绍了数据网格和数据栅格的键盘交互模式。

**示例**

- [布局网格示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/grid/LayoutGrids.html): 用于布局窗口小部件的网格的三个示例实现，包括导航链接的集合，邮件收件人列表和一组搜索结果。
- [数据网格示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/grid/dataGrids.html): 网格的三个示例实现，包括与呈现表格信息（如内容编辑，排序和列隐藏）相关的功能。
- [高级数据网格示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/grid/advancedDataGrid.html): 具有类似于典型电子表格的行为和功能的网格示例，包括单元格和行选择。

**呈现表格信息的数据网格**

`grid` 可用于显示具有列标题，行标题或两者均有的表格信息。如果表格信息是可编辑的或可交互的， `grid` 模式特别有用。例如，当数据元素是更多信息的链接时，不是将它们呈现在静态表格中并在页面tab序列中包含所有链接，实现 `grid` 模式提供给用户更加直观和有效的键盘导航方式，同时缩短了页面的tab序列的长度。 `grid` 还可以提供诸如单元格内容编辑，选择，剪切，复制和粘贴等功能。

在一个呈现表格数据的 `grid` 中，每一个单元格都包含一个可聚焦的元素或其单元格本身可聚焦，无论单元格内容是否可编辑或可交互。有一个例外：如果行列的表头单元格没有提供功能，例如排序或过滤，它们不需要可聚焦。一个原因是当用户与 `grid` 交互时，屏幕阅读器需要处于应用阅读模式，而不是文档阅读模式，这非常重要。在应用阅读模式时，屏幕阅读器用户只能发现可聚焦的元素和标记可聚焦元素的内容。因此，屏幕阅读器用户可能会在不知情的情况下忽略网格中包含的元素，当它们不可聚焦或不用于标记列或行。

_数据网格键盘交互_

以下键通过在网格的单元格之间移动焦点来提供网格导航。默认情况下，这些键盘命令在网格元素接收到焦点后默认可用。例如，用户将焦点移动具有 Tab 的网格后。

- `Right Arrow`: 将焦点向右移动一个单元格。如果焦点位于行中最右侧的单元格，则焦点不会移动。
- `Left Arrow`: 将焦点向左移动一个单元格。如果焦点位于行中最左侧的单元格，则焦点不会移动。
- `Down Arrow`: 将焦点往下移动一个单元格。如果焦点位于列中的底部单元格上，则焦点不会移动。
- `Up Arrow`: 将焦点往下移动一个单元格。如果焦点位于列中的顶部单元格上，则焦点不会移动。
- `Page Down`: 以开发者设定的行数移动焦点，一般滚动时，当前可见行集合中的最后一行会变为第一次滚动后可见行中的一行。
- `Page Up`: 移动焦点到开发者设定的行数，一般滚动时，当前可见行集合中的第一行会变为滚动后可见行中的一行。
- `Home`: 将焦点移至包含焦点所在行的第一个单元格。
- `End`: 将焦点移至包含焦点所在行的最后一个单元格。
- `Control + Home`: 将焦点移至第一行中的第一个单元格。
- `Control + End`: 将焦点移至最后一行的最后一个单元格。

>**注意**
>
>- 当使用以上网格导航键移动焦点时，根据单元格内容，在单元格内元素或网格单元格上设置焦点。 请参阅 [Whether to Focus on a Cell or an Element Inside It](https://www.w3.org/TR/wai-aria-practices-1.1/#gridNav_focus)。
>- 当使用导航键在单元格间移动焦点，例如光标键，它们不能用于某些操作，例如操作组合框或在单元格内移动编辑光标。如果需要此功能，请参阅 [Editing and Navigating Inside a Cell](https://www.w3.org/TR/wai-aria-practices-1.1/#gridNav_inside)。
>- 如果导航功能可以动态地向DOM添加更多的行或列，则将焦点移至网格的开头或结尾的键盘事件（例如 `control + End` ），可将焦点移至DOM中的最后一行，而不是先前可用数据的最后一行。

如果网格支持单元格、行、列的选择，一般使用以下的键实现这些功能。

- `Control + Space`: 选择包含焦点的列。
- `Shift + Space`: 选择包含焦点的行。如果网格包含带有用于选择行的复选框的列，则该键可以用作在焦点不在复选框时勾选框的快捷方式。
- `Control + A`: 选择所有单元格。
- `Shift + Right Arrow`: 向右扩展选择一个单元格。
- `Shift + Left Arrow`: 向左扩展选择一个单元格。
- `Shift + Down Arrow`: 向下扩展选择一个单元格。
- `Shift + Up Arrow`: 向上扩展选择一个单元格。

>**注意** 有关剪切，复制和粘贴键的分配，请参阅 [Key Assignment Conventions for Common Functions](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_common_conventions)。

**组合部件的布局栅格**

`grid` 模式可被用于组合一组可交互元素，例如链接、按钮、和复选框。由于整个网格只有一个元素包含在tab序列中，所以使用网格进行分组可以显著减少页面上的tab步骤。如果滚动元素列表会从一个大数据集中动态地加载更多的元素，例如在购物类网站中的推荐产品的连续列表中，该模式尤其有用。如果像这样的列表元素都在tab序列中，键盘用户会被困在列表中。如果组中的任何元素在鼠标悬停时都会出现关联元素， `grid` 模式用来为用户界面的上下文元素提供键盘访问。

与用于呈现数据的网格不同，用于布局的 `grid` 不一定具有用于标记行或列的标题单元格，并且可能只包含单个行或单个列。即使有多个行和列，它也可能呈现一个独立、逻辑上相同的元素集合。例如，消息的收件人列表可能是个网格，其每个单元格包含一个代表收件人的链接。网格最初可能只有一行，但是随着收件人的添加，会变为多行。在这样的情况下，网格导航键也需要换行，以便用户可以使用 Right Arrow 和 Down Arrow 来从列表开头阅读到末尾。虽然在布局栅格中这种类型的焦点移动换行非常有用，但是如果在数据网格中使用就会让用户迷失方向，尤其是辅助技术的用户。

因为光标键被用来在 `grid` 中移动焦点，如果其包含的元素不需要光标键来操作， `grid` 将会更容器构建和使用。如果一个单元格包含类似listbox的元素，则需要额外的键盘命令来聚焦和激活 listbox，和恢复网格导航功能的命令。支持这个需求的方法在 [Editing and Navigating Inside a Cell](https://www.w3.org/TR/wai-aria-practices-1.1/#gridNav_inside)部分进行描述。

_布局栅格的键盘交互_

以下键通过在网格的单元格之间移动焦点来提供网格导航。这些键盘命令在 Tab 中的元素接收焦点后默认可用。

- `Right Arrow`: 将焦点向右移动一个单元格。可选，如果焦点位于行中最右侧的单元格上，则焦点可能会移至下一行中的第一个单元格。如果焦点位于网格中的最后一个单元格上，则焦点不会移动。
- `Left Arrow`: 将焦点向左移动一个单元格。可选，如果焦点位于行中最左侧的单元格上，则焦点可能会移至上一行中的最后一个单元格。如果焦点位于网格中的第一个单元格上，则焦点不会移动。
- `Down Arrow`: 将焦点向下移动一个单元格。可选，如果焦点位于列中的底部单元格上，则焦点可能会移至下一列的顶部单元格。如果焦点位于网格中的最后一个单元格上，则焦点不会移动。
- `Up Arrow`: 将焦点向上移动一个单元格。可选，如果焦点位于当前列的顶部单元格上，则焦点可能会移至前一列的最后一个单元格。如果焦点位于网格的第一个单元格上，则焦点不会移动。
- `Page Down` _(可选)_: 以开发者设定的行数向上移动焦点，一般情况下，当前可见行中的第一行会成为滚动后可见行中的一行。
- `Page Up` _(可选)_: 将对象移至作者确定的行数上，通常是滚动的，因此当前可见的行行中的顶行将成为最后一个可见行之一。如果焦点位于网格的第一行，则焦点不会移动。
- `Home`: 将焦点移至包含焦点的行中的第一个单元格。可选，如果网格具有单列或每行少于三个单元格，则焦点可以替代地移至网格中的第一单元格。
- `End`: 将焦点移至包含焦点的行中的最后一个单元格。可选，如果网格具有单个列或每行少于三个单元格，则焦点可以替代地移至网格中的最后一个单元格。
- `Control + Home` _(可选)_: 将焦点移至第一行中的第一个单元格。
- `Control + End` _(可选)_: 将焦点移至最后一行的最后一个单元格。

>**注意**
>
>- 当使用以上网格键移动焦点时，根据单元格内容，决定焦点是否设置在单元格内的元素上或网格单元格上。 请参阅 [Whether to Focus on a Cell or an Element Inside It](https://www.w3.org/TR/wai-aria-practices-1.1/#gridNav_focus).
>- 当使用导航键在单元格间移动焦点时，它们不可用于类似操作组合框或在单元格内移动输入光标等的事情。如果需要此功能，请参阅[Editing and Navigating Inside a Cell](https://www.w3.org/TR/wai-aria-practices-1.1/#gridNav_inside)。
>- 如果导航功能可以动态地向DOM中添加更多的行或列，则移动焦点到网格的开头或结尾的键盘事件（例如 `control + End` ），可将焦点移至DOM中的最后一行，而不是后端数据中可用的最后一行。

为栅格布局提供需要单元格选择功能，是不常见的。虽然如此，但当确实需要时，这些功能一般使用以下的键:

- `Control + Space`: 选择包含焦点的列。
- `Shift + Space`: 选择包含焦点的行。如果网格包含用于选择行的复选框的列，当焦点不在复选框上时，可作为选中复选框的快捷键。
- `Control + A`: 选择所有单元格。
- `Shift + Right Arrow`: 向右扩展选择一个单元格。
- `Shift + Left Arrow`: 向左扩展选择一个单元格。
- `Shift + Down Arrow`: 向下扩展选择一个单元格。
- `Shift + Up Arrow`: 向上扩展选择一个单元格。

>**注意** 有关剪切，复制和粘贴键的分配，请参阅 [Key Assignment Conventions for Common Functions](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_common_conventions)。

**键盘交互 — 设置焦点和导航单元格内容**

本节介绍了数据和布局网格模式共有的键盘交互设计的两个重要方面：

1、选择单元格或单元格内元素接收焦点，来响应网格导航键盘按键事件。 2、启用网格导航键，用来与单元格内元素进行交互。

_是否聚焦单元格或其包含的元素_

对于辅助技术用户，导航网格时的体验质量很大程度上取决于单元格包含的内容以及设置键盘焦点的位置。例如如果一个单元格包含一个按钮，网格导航键在单元格上放置焦点，而不是按钮上，屏幕阅读器会朗读出按钮的标签，但不会告知用户存在一个按钮。

有两种最佳的单元格设计和聚焦行为组合：

1.  一个单元格包含一个组件，其操作不需要光标键和网格导航键，在该组件上设置焦点。这些小部件的示例包括链接，按钮，菜单栏，切换按钮，单选按钮（不是单选按钮组），开关和复选框。
2.  一个单元格包含文本或一个单独的图形，网格导航键在单元格上设置焦点。

但是组件、文本和图像的任意组合都可能被包含在一个单元格中，不遵循以上两种设置和焦点移动模式的网格，会增加开发者或用户或两者的复杂性。下面样例部分中包含的参考实现，给出了让其他单元格设计尽可能可访问的一些策略，但是使用以上两种模式，才能获得最大程度的无障碍体验。

_在单元格内编辑和导航_

当使用导航键在单元格间移动焦点，它们不能用来执行像操作组合框或在单元格内移动光标的操作。用户可能需要用于网格导航的键来操作单元格内的元素，如果单元格包含：

1.  可编辑内容。
2.  多个小部件。
3.  在交互模式中使用光标键交互的组件，例如单选按钮或滑块。

以下为禁用和恢复网格导航功能的惯用键盘操作。

- `Enter`: 禁用网格导航以及：
  - 如果单元格包含可编辑内容，将焦点放置在输入框中，例如 textbox。如果输入框是个单行文本框，连续按 Enter ，会重置网格导航功能，或移动焦点到附近单元格的输入框中。
  - 如果单元格包含一个或多个组件，将焦点放置在第一个组件上。
- `F2`:
  - 如果单元格包含可编辑的内容，则会将焦点放在输入字段中，例如 textbox。随后按下 F2 恢复网格导航功能。
  - 如果单元格包含一个或多个组件，将焦点放置在第一个组件上。随后按下 F2 恢复网格导航功能。
- 字母数字键: 如果单元格包含可编辑的内容，则会将焦点放在输入框中，例如 textbox。

当网格导航被禁用时，导航行为的常规更改包括：

- `Escape`: 恢复网格导航。如果正在编辑内容，它也可能会撤消修改。
- `Right Arrow` 或者 `Down Arrow`: 如果单元格包含多个小组件，将焦点移至单元格的内下一个小组件，如果焦点在最后一个组件上，可选\`地，将焦点返回给第一个小组件，或者，传递按键事件到当前聚焦的组件。
- `Left Arrow` 或者 `Up Arrow`: 如果单元格包含多个小组件，将焦点移至单元格的内前一个小组件，如果焦点在最后一个组件上，可选，将焦点返回给第一个小组件，或者，传递按键事件到当前聚焦的组件。
- `Tab`: 将焦点移至网格中的下一个组件。可选，焦点可能会在一个单元格内循环，或在网格内循环。
- `Shift + Tab`: 将焦点移至网格中的上一个组件。可选，焦点可能会在一个单元格内循环，或在网格内循环。

**WAI-ARIA 角色，状态和属性**

- 网格容器具有角色 [grid](#role_grid)。
- 每个行容器都具有 [row](#role_row) 角色，并且是 grid 元素或 [rowgroup](#role_rowgroup) 角色元素的后代，或被其拥有。
- 每个单元格是 `row` 元素的DOM后代，或被row元素拥有，并且具有以下角色之一：
  - [columnheader](#role_columnheader) 如果单元格包含标题或列的标题信息。
  - [rowheader](#role_rowheader) 如果单元格包含标题或行的标题信息。
  - [gridcell](#role_gridcell) 如果单元格不包含列或行的标题信息。
- 如果在用户界面中有一个元素是网格的标签，在网格元素上设置 [aria-labelledby](#aria-labelledby) 属性，该属性的值指向该标签元素。否则，使用 [aria-label](#aria-label)为网格元素指定一个标签。
- 如果网格具有一个说明或描述，在网格元素上设置 [aria-describedby](#aria-describedby) 属性，其值指向包含描述的元素。
- 如果网格提供排序功能，则在头部单元格上为 [aria-sort](#aria-sort) 属性设置合适的值，来对行或列进行排序，如 [grid and table properties](https://www.w3.org/TR/wai-aria-practices-1.1/#gridAndTableProperties) 部分所述。
- 如果网格支持选择，当单元格或行被选择时，被选择元素的 [aria-selected](#aria-selected) 设置为 `true`。
- 如果网格提供内容编辑功能，并且包含在某些条件下禁用编辑功能的单元格，在编辑功能被禁用时，设置 `aria-readonly` 为 `true`。如果所有单元格的编辑功能都被禁用，在网格元素上设置 [aria-readonly](#aria-readonly) 为 `true`。不提供编辑功能的网格在任何元素上都不包含 `aria-readonly` 属性。
- 如果存在某些行或列在DOM中被隐藏或不存在的情况，例如当滚动时自动加载数据，或者网格提供了隐藏行或列的功能，使用以下属性，如[grid and table properties](https://www.w3.org/TR/wai-aria-practices-1.1/#gridAndTableProperties) 所述。
  - [aria-colcount](#aria-colcount) 或 [aria-rowcount](#aria-rowcount) 分别设置为列或行的总数。
  - [aria-colindex](#aria-colindex) 或 [aria-rowindex](#aria-rowindex) 设置为单元格在行或列中的位置。
- 如果网格包含跨多行或多列的单元格，并且如果 `grid` 角色未应用于HTML `table` 元素，则应用 [aria-rowspan](#aria-rowspan) 或 [aria-colspan](#aria-colspan)，如 [grid and table properties](https://www.w3.org/TR/wai-aria-practices-1.1/#gridAndTableProperties) 所述。

>**注意**
>
>- 如果具有 `grid` 角色的元素是HTML `table` 元素，那么不必为行和单元格使用ARIA角色，因为HTML元素暗含了ARIA语义。例如，HTML`TR` 具有隐含的ARIA角色 `row`。一个从HTML `table` 构建的 网格，包含跨越多行或多列的单元格，必须使用HTML `rowspan` 和 `colspan`属性，不能使用 `aria-rowspan` 或 `aria-colspan`。
>- 如果通过aria-owns属性将行或列包含在网格中，它们将在网格元素的DOM后代之后呈现给辅助技术，除非DOM后代也被包含在给 [aria-owns](#aria-owns) 属性中。请参阅使用 `aria-owns` 进行详细说明。

## 表格 table
与HTML表元素一样，WAI-ARIA表格是一个静态表格结构，包含一行或多行，每行包含一个或多个单元格；它不是一个交互式小部件。因此，其单元不可聚焦或可选择。网格图案用于制作具有表格结构的交互式窗口小部件。
但是，表通常用于呈现信息和交互式小部件的组合。由于表不是窗口小部件，因此表中包含的每个窗口小部件都是页面选项卡序列中的单独停靠点。如果窗口小部件的数量很大，则使用网格替换表可以显着减少页面选项卡序列的长度，因为网格是可以包含其他窗口小部件的复合窗口小部件。
>**注意**
>与具有本机宿主语言等效的其他WAI-ARIA角色一样，强烈建议作者尽可能使用本机HTML表格元素。这对角色表尤其重要，因为它是WAI-ARIA 1.1的新功能。因此，建议使用可供目标受众使用的每种浏览器和辅助技术组合彻底测试实施。

**示例**
- [table 示例](https://www.w3.org/TR/wai-aria-practices/examples/table/table.html)：使用HTML div和span元素创建的ARIA表。
- [Data Tables - Inclusive Components](https://inclusive-components.design/data-tables/)

**键盘交互**
不适用。

**WAI-ARIA角色，状态和属性**
- 表容器具有角色表。
- 每个行容器都有角色行，它是表元素的DOM后代或者由表元素拥有的元素或具有角色行组的元素。
- 每个单元格都是行元素的DOM后代或由行元素拥有，并具有以下角色之一：
 - 如果单元格包含列的标题或标题信息，则为columnheader。
 - 如果单元格包含行的标题或标题信息，则为rowheader。
 - 如果单元格不包含列或行标题信息,则为cell。
- 如果用户界面中有一个元素充当表的标签，则在table元素上设置aria-labelledby，其值为引用标签元素。否则，使用aria-label为表元素指定标签。
- 如果表具有标题或描述，则在table元素上设置aria-describedby，其值为引用包含描述的元素。
- 如果表包含可排序的列或行，则aria-sort将在有关排序列或行的标题单元格元素上设置为适当的值，如网格和表属性一节中所述。
- 如果存在某些行或列被隐藏或不存在于DOM中的情况，例如，页面上有用于隐藏行或列的小部件，则应用以下属性，如网格和表属性一节中所述。
 - aria-colcount或aria-rowcount分别设置为列或行的总数。
 - aria-colindex或aria-rowindex分别设置为行或列中单元格的位置。
- 如果表包含跨越多行或多列的单元格，则应用aria-rowspan或aria-colspan，如网格和表格属性中所述。

>**注意**
>如果行或单元格通过aria-owns包含在表中，则它们将在表元素的DOM后代之后呈现给辅助技术，除非DOM后代也包含在aria-owns属性中。

## 选项卡 tabs
选项卡是一个内容分层模块的集合，被称为选项卡面板，一次只能显示内容的一个面板。每个选项卡面板都有相关联选项卡元素，当被激活，显示其相关联面板。选项卡元素列表被排列在当前显示面板的边缘，大多数情况在顶部边缘。

用于描述选项卡的术语包含：

**选项卡或选项卡界面**

选项卡元素组合和它们相关联的内容面板。

**选项卡列表** 被包含在 [tablist](#role_tablist) 元素中的选项卡元素组合。

[选项卡](#role_tab) 选项卡列表中的一个元素，作为其中一个内容面板的标签，可以激活以显示对应的内容面板。

[内容面板](#role_tabpanel) 包含与选项卡元素相关联内容的元素。

当初始化一个选项卡界面，一个选项卡面板默认显示，其相关联选项卡元素使用样式来标识其当前活跃。当用户激活一个别的选项卡元素，先前显示的内容面板被隐藏，与被激活选项卡元素相关联的内容面板变为可见，且选项卡元素被认为当前“活跃”。

**示例**

- [自动激活的选项卡](https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-1/tabs.html): 一个选项卡小组件，当接收到焦点时选项卡标签会自动激活并显示对应的面板。
- [手动激活的选项卡](https://www.w3.org/TR/wai-aria-practices-1.1/examples/tabs/tabs-2/tabs.html): 一个选项卡小组件，用户通过点击 Space 或者 Enter来激活一个选项卡标签并显示它的面板。
- [Tabbed Interfaces - Inclusive Components](https://inclusive-components.design/tabbed-interfaces/)

- [a11y-选项卡示例](https://a11y-style-guide.com/style-guide/section-structure.html#kssref-structure-tabs)

**键盘交互**

对于选项卡列表：

- `Tab`: 当焦点进入选项卡列表，将焦点放置在当前活跃 选项卡 元素上。当选项卡列表包含焦点，移动焦点到当前页面 `tab` 序列中的选项卡列表外的下一个元素，一般情况是内容面板的第一个可聚焦元素，或内容面板本身。
- 当焦点在水平选项卡列表中的一个选项卡元素上时：
  - `Left Arrow`: 移动焦点到上一个选项卡元素；如果焦点在第一个选项卡元素上，移动焦点到最后一个选项卡元素。
  - `Right Arrow`: 移动焦点到下一个选项卡元素。如果焦点在最后一个选项卡元素上，移动焦点到第一个选项卡元素。
- 当焦点在水平或垂直选项卡列表中的一个选项卡元素上时：
  - `Space or Enter`: 如果获取焦点的选项卡不会自动激活，则激活该选项卡元素。
  - `Home` _(可选)_: 移动焦点到第一个选项卡元素上。
  - `End` _(可选)_: 移动焦点到最后一个选项卡元素上。
  - `Shift + F10`: 如果选项卡有关联的弹出菜单，则打开菜单。
  - `Delete` _(可选)_: 如果允许删除操作，删除（关闭）当前选项卡元素和其相关联选项卡面板。如果还有任何选项卡元素，将焦点设置在已关闭选项卡元素的下一个元素上，并且激活新聚焦的选项卡元素。

>**注意**
>
>1.  建议当选项卡元素接收到焦点时自动激活，只要它们相关的选项卡面板显示时没有明显的延迟。这种做法需要提前加载选项卡内容面板的内容。否则，自动激活标签会延缓焦点移动，这也会降低用户有效浏览选项卡列表的效率。更多相关指导，可以阅读 [Deciding When to Make Selection Automatically Follow Focus](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_selection_follows_focus)
>2.  如果选项卡列表中的选项卡元素垂直排列：
>  1.  `Down Arrow` 与 `Right Arrow` 执行一样的操作。
>  2.  `Up Arrow` 与 `Left Arrow` 执行一样的操作。
>3.  如果选项卡列表是水平的，它不会监听 `Down Arrow` 或 `Up Arrow` 光标键，即使焦点在选项卡列表内，使用这些键仍会提供浏览器的常规滚动功能。
>4. 如果您有三个以上的选项卡，请务必更新aria-posinset和aria-setsize属性的值。

**WAI-ARIA 角色，状态和属性**

- 选项卡组合的容器元素具有角色 [tablist](#role_tablist)。
- 每个选项卡元素都有 [tab](#role_tab) 角色，并且被包含在具有 `tablistl` 角色的元素里。
- 每个 选项卡 拥有角色 [tabpanel](#role_tabpanel)。
- 每个具有 `tab` 角色的元素，具有 [aria-controls](#aria-controls) 属性来索引其相关联 `tabpanel` 元素。
- 当前活跃 `tab` 元素具有 [aria-selected](#aria-selected) 状态且设置为 `true` ，所有其他 `tab` 元素为 `false`。
- 每个具有角色 `tabpanel` 的元素有 [aria-labelledby](#aria-labelledby) 属性，来索引其相关联 `tab` 元素。
- 如果一个 `tab` 元素有弹出菜单 ，则它的属性 [aria-haspopup](#aria-haspopup) 设置为 `true`。
- 如果 `tablist` 元素是垂直排布，那么它应该设置 [aria-orientation](#aria-orientation) 属性值为 `vertical`。`tablist` 元素的 `aria-orientation` 默认值为`horizontall`。



## 树 tree view

一个树视图呈现为一个分层列表。层次结构中的任何项目都可能有子项，并且有子项的元素，可以展开或折叠来显示或隐藏子项。例如，在使用树视图显示文件夹和文件的文件系统导航器中，代表文件夹的项目能够被展开文件夹中的内容，这些内容可能是文件、文件夹，或两者都有。

理解的树视图的一些术语包括：

**节点**
 在树结构中的项目。 

**根结点**

在树结构根部的节点；它可以具有一个或多个子节点，但不具有父节点。

**子节点**

有一个父节点的节点；任意节点如果不是根节点，那它就是一个子节点。

**终端节点**

不具有任何子节点的节点；一个终端节点要么是根节点要么是子节点。

**父节点**

有一个或多个子节点的节点。它可以是打开的（扩展）或关闭的（折叠）。

**开节点**

被展开以使其子节点可见的父节点。

**闭节点**

被折叠以使其子节点不可见的父节点。

当使用键盘来导航一个树结构，一个可见的键盘指示器告诉用户哪个节点被聚焦。如果树结构允许用户一个动作只选择一个项目，那么它被称为单选择树（single-select tree），而且被聚焦的项目还有一个被选中的状态。但是，在多选择树（multi-select trees）中，允许用户一次性选择多个项目，其选择状态与焦点无关。例如，在一个典型文件系统导航器中，用户可以一次性地移动焦点来选择任意数量的文件，例如复制或移动。为已选定和具有焦点的项目提供视觉上的设计区分，这非常重要。有关详细信息，请参阅 [this description of differences between focus and selection](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_focus_vs_selection)。

**示例**

- [使用计算属性的文件目录树视图示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/treeview/treeview-1/treeview-1a.html)：一个文件选择树，示范浏览器支持基于DOM 结构自动计算的 `aria-level`, `aria-posinset` 和`aria-setsize` 属性。
- [使用声明属性的文件目录树视图示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/treeview/treeview-1/treeview-1b.html): 文件选择树，示范如何明确地定义 `aria-level`, `aria-posinset` 和 `aria-setsize` 的值。
- [使用计算属性的导航树视图示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/treeview/treeview-2/treeview-2a.html): 一个树结构，提供一组网页的导航并示范浏览器支持基于DOM 结构自动计算的 `aria-level`, `aria-posinset`和 `aria-setsize` 属性。
- [使用声明属性的导航树视图示例](https://www.w3.org/TR/wai-aria-practices-1.1/examples/treeview/treeview-2/treeview-2b.html): 一个树结构，提供一组网页的导航并示范如何明确地定义 `aria-level`, `aria-posinset` 和 `aria-setsize` 的值。

**键盘交互**

对于垂直方向的树结构：

- 当单选树接收到焦点：
  - 如果树结构接收焦点之前没有任何节点被选择，则焦点设置在第一个节点上。
  - 如果树结构获得焦点之前有一个节点被选择，则焦点设置在被选择的节点上。
- 当多选树接收到焦点：
  - 如果树结构接收焦点之前没有任何一个节点被选择，则焦点设置在第一个节点上。
  - 如果树结构接收焦点之前有一个或多个节点被选择，则焦点设置在第一个被选择的节点上。
- `Right arrow`:
  - 当焦点在展开节点上，收起节点，焦点不移动。
  - 当焦点在展开节点上，将焦点移动第一个可聚焦节点上。
  - 当焦点在最后一个节点上，不响应事件。
- `Left arrow`:
  - 当焦点是在一个闭节点上，打开这个节点； 焦点不会移动。
  - 当焦点在一个同时也是终端节点或闭节点的子节点上，将焦点移至它的父节点。
  - 当焦点一个是同时也是终端节点或闭节点的根节点上，什么也不做。
- `Down Arrow`: 不打开或关闭节点，将焦点移至下一个可聚焦的节点。
- `Up Arrow`: 不打开或关闭节点，将焦点移至上一个可聚焦的节点。
- `Home`: 不打开或关闭节点，将焦点移至树结构中的第一个可聚焦的节点。
- `End`: 不打开或关闭节点，将焦点移至树结构的最后一个可聚焦的节点。
- `Enter`: 激活一个节点，即执行其默认操作。对于父节点，一个可能的默认动作是打开或关闭节点。在一个选项不跟随焦点（见下面的注释）的单选树，默认的操作通常是选择焦点节点。 +建议所有的树结构支持提前键入，特别是对于包含超过7个根节点的树结构：
  - 键入一个字符：焦点移至下一个名称以输入的字符开头的节点。
  - 快速连续键入多个字符：焦点移至下一个名称以输入的字符串开头的节点。
- _(可选)_: 展开与当前节点在同一层级的所有兄弟节点。
- **在多选树中选择**：作者可使用以下两种交互模式以支持多选：推荐的模式，用户正在浏览列表时不要求用户按住辅助键，如 Shift 或 Control ，或另一种模式，当浏览时要求按住辅助键，以避免丢失选择状态。
  - 推荐选择模型 - 当移动焦点时按住辅助键是没有必要的：
    - `Space`: 切换聚焦节点的选择状态。
    - `Shift + Down Arrow` _(可选)_: 将焦点移至下一个节点，并且切换下一个节点的选择状态。
    - `Shift + Up Arrow` _(可选)_: 将焦点移至上一个节点，并且切换上一个节点的选择状态。
    - `Shift + Space` _(可选)_: 选择从最后选择的节点到当前节点的相邻节点。
    - `Control + Shift + Home` _(可选)_: 选择具有焦点的节点以及它到第一个节点的所有节点。
    - `Control + Shift + End` _(可选)_: 选择具有焦点的节点以及它到最后一个节点的所有节点。
    - `Control + A` _(可选)_: 选择在树结构中的所有节点。根据需要，如果选择了所有的节点，它也可以取消选择所有节点。
  - 备选选择模型 - 移动焦点时不按住 `Shift` 或 `Control` 辅助键，会取消选中节点，聚焦的节点除外：
    - `Shift + Down Arrow`: 将焦点移至下一个节点，并且切换下一个节点的选择状态。
    - `Shift + Up Arrow`: 将焦点移至上一个节点，并且切换上一个节点的选择状态。
    - `Control + Down Arrow`: 不改变选择状态，将焦点移至下一个节点。
    - `Control + Up Arrow`: 不改变选择状态，将焦点移至前一个节点。
    - `Control + Space`: 切换聚焦节点的选择状态。
    - `Shift + Space` _(可选)_: 选择从最近选择的节点到当前节点的相邻节点。
    - `Control + Shift + Home` _(可选)_: 选择从焦点节点到第一个节点的所有节点。
    - `Control + Shift + End` _(可选)_: 选择焦点节点到最后一个节点的所有节点。
    - `Control + A` _(可选)_: 选择在树结构中的所有节点。根据需要，如果所有的节点都被选择了，它也可以取消选择所有节点。

>**注意**

1.  DOM焦点（激活的元素）与选择的状态在功能上是有区别的。有关详细信息，请参阅 [this description of differences between focus and selection](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_focus_vs_selection).。
2.  `tree` 角色支持 [aria-activedescendant](#aria-activedescendant) 属性，它提供了另一种使用键盘导航在 `treeitem` 元素间移动DOM焦点的方式。有关详细信息，请参阅 [Managing Focus in Composites Using aria-activedescendant](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_focus_activedescendant)。
3.  在单选树中，移动焦点可以取消选择之前选择的节点，并选择新聚焦的节点。这种选择模式被称为 "选择跟随焦点（selection follows focus）"。选择跟随焦点在某些情况下非常有用，在其他情况下则会严重降低可访问性。有关更多的指南，请参阅 [Deciding When to Make Selection Automatically Follow Focus](https://www.w3.org/TR/wai-aria-practices-1.1/#kbd_selection_follows_focus)。
4.  如果选择或取消选择所有节点是一个重要的功能，实现单独控制这些行为，如 "全选" 和 "取消全选" 按钮，可显著提高可用性。
5.  如果在一个树结构中的节点被水平地布置：
  1.  `Down Arrow` 的表现如上面描述的 `Right Arrow` 一样，反之亦然。
  2.  `Up Arrow` 的表现如上面描述的 `Left Arrow` 一样，反之亦然。

**WAI-ARIA 角色，状态和属性**

- 所有树节点都包含在或被角色为 [tree](#role_tree) 的元素所包含。
- 作为树节点的每个元素都有 [treeitem](#role_treeitem) 角色。
- 每一个根节点包含在角色为 `tree` 的元素或被设置了 [aria-owns](#aria-owns) 的属性的 `tree`元素引用。
- 每个父节点包含或拥有 [group](#role_group) 角色的元素。
- 每个子节点都包含在一个角色为 [group](#role_group) 的元素中，或者被其拥有，该元素包含在节点中，或者由作为该子节点的父节点的节点拥有。
- 每个作为父节点拥有 `treeitem` 的元素 [aria-expanded](#aria-expanded) 设置为 `false`，当节点处于关闭状态，并设置为 `true` 时，该节点是在打开状态。终端节点没有 `aria-expanded` 属性，因为，如果他们有，他们会被辅助技术错误地描述为父节点。
- 如果树支持多个节点的选择，拥有角色 `tree` 的元素拥有设置为 true 值的 [aria-multiselectable](#aria-multiselectable) 属性。否则，`aria-multiselectable` 要么是设置为 `false` 或使用默认值 `false`。
- 如果树不支持多选， 选中节点的 `aria-selected` 被设置为 `true` 并且该属性不存在于树中的任何其它节点。
- 如果树支持多种选择：
  - 所有选定的节点的 [aria-selected](#aria-selected) 设置为 `true`。
  - 所有未选择的节点的 [aria-selected](#aria-selected) 设置为 `false`。
- 拥有角色 `tree` 的元素拥有被 [aria-labelledby](#aria-labelledby) 引用的可见标签或拥有指定值的 [aria-label](#aria-label) 属性 。
- 如果由于用户移动焦点或滚动树结构引起的动态加载，DOM中不存在完整的可用节点集合，每个节点拥有指定值的 [aria-level](#aria-level)， [aria-setsize](#aria-setsize)和 [aria-posinset](#aria-posinset)。
- 如果 `tree` 元素是水平方向的，它的 [aria-orientation](#aria-orientation) 设置为 `horizontal`。一个树结构的 `aria-orientation` 默认值是 `vertical`。

>**注意** 如果 [aria-owns](#aria-owns) 设置在树容器上，以包含不是该容器DOM子元素的元素，这些元素会按它们被引用的顺序出现在读取序列中，并且在所有属于该容器的DOM子元素之后。用于管理焦点的脚本需要确保视觉焦点与这个辅助技术读取顺序相匹配。

## 树型网格 treegrid

treegrid呈现分层数据网格，该网格由可编辑或交互的表格信息组成。层次结构中的任何行都可以具有子行，并且可以展开或折叠具有子项的行以显示或隐藏子项。例如，在用于显示电子邮件讨论列表的消息和消息响应的treegrid中，具有响应的消息将在行中，可以展开以显示响应消息。

在树形网格中，行和单元格都是可聚焦的。无论单个单元格内容是可编辑的还是交互式的，每个行和单元格都包含一个可聚焦元素或者本身是可聚焦的。有一个例外：如果列标题单元格不提供排序或过滤等功能，则它们不需要是可聚焦的。对于所有单元能够接收或包含键盘焦点而言重要的一个原因是，当用户与网格交互时，屏幕阅读器通常将处于其应用程序读取模式，而不是其文档读取模式。在应用程序模式下，屏幕阅读器用户只能听到可聚焦元素和标记可聚焦元素的内容。因此，屏幕阅读器用户可能会在不知不觉中忽略树格中包含的元素，这些元素要么不可聚焦，要么不用于标记列或行。

当使用键盘导航树形网格时，可视键盘指示器通知用户哪个行或单元格被聚焦。如果treegrid允许用户仅为一个动作选择一个项目，则它被称为单选树格，而具有焦点的项目也具有选定状态。但是，在多选树格中，使用户能够为操作选择多个行或单元格，所选状态与焦点无关。例如，在分层电子邮件讨论网格中，用户可以移动焦点以为操作选择任意数量的行，例如删除或移动。视觉设计必须区分所选项目和具有焦点的项目。有关更多详细信息，请参阅[焦点和选择之间差异的此描述](https://www.w3.org/TR/wai-aria-practices/#kbd_focus_vs_selection)。

**示例**
[电子邮件收件箱treegrid示例](https://www.w3.org/TR/wai-aria-practices/examples/treegrid/treegrid-1.html)：用于导航电子邮件收件箱的树形网格，演示三种键盘导航模型 - 第一行，单元格第一，单元格。
**键盘交互**
以下键通过在网格的行和单元格之间移动焦点来提供treegrid导航。当网格中的元素已经获得焦点时，例如在用户使用Tab将焦点移动到网格之后，treegrid的实现使这些键命令可用。将焦点移动到网格中可能导致第一个单元格或第一个行被聚焦。焦点是转到单元格还是行取决于作者首选项以及是否支持行焦点，因为某些treegrids可能无法为行提供焦点。
- `Enter`：如果启用了仅单元格焦点并且焦点位于具有aria-expanded属性的第一个单元格上，则打开或关闭子行。否则，执行单元格的默认操作。
-`Tab`：如果包含焦点的行包含可聚焦元素（例如，输入，按钮，链接等），则将焦点移动到行中的下一个输入。如果焦点位于行中的最后一个可聚焦元素，则将焦点从treegrid小部件移动到下一个可聚焦元素。
- `Right Arrow`：
 - 如果焦点位于折叠的行上，则展开该行。
 - 如果焦点位于展开的行上或位于没有子行的行上，则将焦点移动到行中的第一个单元格。
 - 如果焦点位于连续的最右侧单元格上，则焦点不会移动。
 - 如果焦点在任何其他单元格上，则将一个单元格移动到右侧。
- `Left Arrow`：如果焦点位于展开的行上，则折叠该行。
 - 如果焦点位于折叠的行或没有子行的行上，则焦点不会移动。
 - 如果焦点位于行中的第一个单元格并且支持行焦点，则将焦点移动到该行。
 - 如果焦点位于行中的第一个单元格并且不支持行焦点，则焦点不会移动。
 - 如果焦点在任何其他单元格上，则将一个单元格移动到左侧。
- `Down Arrow`：
 - 如果焦点在一行上，则将焦点向下移动一行。
- 如果焦点位于单元格上，则将焦点向下移动一个单元格。如果焦点位于列中的底部单元格，则焦点不会移动。
- `Up Arrow`：
 - 如果焦点在一行上，则将焦点向上移动一行。
 - 如果焦点在一个单元格上，则向上移动一个单元格。
 - 如果焦点位于列中的顶部单元格，则焦点不会移动。
- `Page Down`：
 - 如果焦点在一行上，则将焦点向下移动作者确定的行数，通常是滚动，以使当前可见行集中的底行成为第一个可见行之一。
 - 如果焦点位于单元格上，则将焦点向下移动作者确定的单元格数量，通常是滚动，以使当前可见行集中的底行成为第一个可见行之一。
 - 如果焦点位于最后一行，则焦点不会移动。
-`Page Up`：
- 如果焦点位于一行上，则将焦点向上移动作者确定的行数，通常是滚动，以便当前可见行集中的顶行成为最后一个可见行之一。
- 如果焦点位于单元格上，则将焦点向上移动作者确定的单元格数量，通常是滚动，以使当前可见行集中的顶行成为最后一个可见行之一。如果焦点位于第一行，则焦点不会移动。
- `Home`：
 - 如果焦点在单元格上，则将焦点移动到行中的第一个单元格。
 - 如果焦点位于行的第一个单元格中，则焦点不会移动。
- `End`：
 - 如果焦点在单元格上，则将焦点移动到行中的最后一个单元格。
 - 如果焦点位于行的最后一个单元格中，则焦点不会移动。
- `Control + Home`：
- 如果焦点在一行上，则将焦点移动到第一行。
- 如果焦点位于单元格上，则将焦点移动到列中的第一个单元格。如果焦点位于第一行，则焦点不会移动。
- `Control + End`：
- 如果焦点在一行上，则将焦点移至最后一行。
- 如果焦点位于单元格上，则将焦点移动到列中的最后一个单元格。如果焦点位于最后一行，则焦点不会移动。

>**注意**
>- 当上述treegrid导航键移动焦点时，焦点是设置在单元格内还是单元格上的元素上取决于单元格内容。查看是否关注单元格或其中的元素。
>- 虽然导航键（例如箭头键）正在将焦点从一个单元移动到另一个单元格，但它们不能用于操作组合框或在单元格内移动编辑插入符。如果需要此功能，请参阅编辑和在单元格内导航。
>- 如果导航功能可以动态地向DOM添加更多行或列，则将焦点移动到网格的开头或结尾的键事件（例如control + End）可能会将焦点移动到DOM中的最后一行而不是最后一行在后端数据中。

如果treegrid支持选择单元格，行或列，则以下键通常用于这些函数。
- `Control + Space`：
 - 如果焦点在一行上，则选择所有单元格。
 - 如果焦点位于单元格上，请选择包含焦点的列。
- `Shift + Space`：
 - 如果焦点在一行上，则选择该行。
 - 如果焦点位于单元格上，请选择包含焦点的行。如果treegrid包含一个带有用于选择行的复选框的列，则此键可以作为在焦点不在复选框上时检查框的快捷方式。
- `Control + A`：选择所有单元格。
- `Shift + Right Arrow`：
 - 如果焦点在一行，则不会更改选择。
 - 如果焦点在一个单元格上，则选择一个单元格向右。
- `Shift +Left Arow`：
 - 如果焦点在一行，则不会更改选择。
 - 如果焦点在一个单元格上，则选择一个单元格向左。
- `Shift +Down Arrow`：
 - 如果焦点在一行上，则将选择范围扩展到下一行中的所有单元格。
 - 如果焦点在单元格上，则向下选择一个单元格。
- `Shift +Up Arrow`：
 - 如果焦点在一行上，则将选择范围扩展到上一行中的所有单元格。
 - 如果焦点在一个单元格上，则选择一个单元格。
>**注意**
>有关剪切，复制和粘贴键分配的常用功能，请参见[键分配约定](https://www.w3.org/TR/wai-aria-practices/#kbd_common_conventions)。

**WAI-ARIA 角色，状态和属性**
-   treegrid容器具有角色[treegrid](#role_treegrid)。
-   每个行容器都有角色[行，](#role_row)并且是`treegrid`元素的DOM后代或元素拥有的元素或具有角色[rowgroup](#role_rowgroup)的元素。
-   每个单元格都是`row`元素的DOM后代或由元素拥有，并具有以下角色之一：
    -   如果单元格包含列的标题或标题信息，则为[columnheader](#role_columnheader)。
    -   如果单元格包含行的标题或标题信息，则为[rowheader](#role_rowheader)。
    -   如果单元格不包含列或行标题信息，则为[gridcell](#role_gridcell)。
-   一个`row`可以展开或折叠，以显示或隐藏一组子行是父行。每个父元素都在元素或包含在元素中的单元格上设置`row`了[aria扩展](#aria-expanded)状态。将状态设置为当子行不显示，而且设置为显示子行的时候。不控制子行显示的行没有该属性，因为如果它们具有该属性，则它们将被错误地描述为辅助技术作为父行。 `row``row``aria-expanded``false``true``aria-expanded`
-   如果treegrid支持选择多个行或单元格，则它是一个多选择的树网格，具有角色的元素`treegrid`将[aria-multiselectable](#aria-multiselectable)设置为`true`。否则，它是单选树格，并且`aria-multiselectable`设置为`false`或默认值为`false`隐含值。
-   如果treegrid是单选树格，则在所选行或单元格上将[aria-selected](#aria-selected)设置为`true`，并且它不存在于treegrid中的任何其他行或单元格上。
-   如果treegrid是多选树格：
    -   所有被选中的行或单元格有[唱段选择](#aria-selected)设置为`true`。
    -   未选择的所有行和细胞有[唱段选择](#aria-selected)设置为`false`。
-   如果用户界面中有一个元素充当treegrid的标签，则在grid元素上设置[aria-](#aria-labelledby) labelledby，其值为引用标签元素。否则，使用[aria-label](#aria-label)为grid元素指定[标签](#aria-label)。
-   如果treegrid具有标题或描述，则在网格元素上设置[aria-describedby](#aria-describedby)，其值为引用包含描述的元素。
-   如果treegrid提供排序函数，则[aria-sort](#aria-sort)将在有关排序列或行的标题单元格元素上设置为适当的值，如[网格和表属性](#gridAndTableProperties)一节中所述。
-   如果treegrid提供内容编辑功能并包含可能在某些条件下禁用编辑功能的单元格，则[aria-readonly](#aria-readonly)将设置`true`为禁用编辑的单元格。如果对所有单元格禁用编辑功能，则可以在元素上设置`aria-readonly`为`true`不对每个单元格`aria-readonly`设置为`true`on `treegrid`。不提供单元格内容编辑功能的Treegrids不包含`aria-readonly`任何元素的属性。
-   如果存在某些行或列被隐藏或不存在于DOM中的情况，例如，在滚动时动态加载数据或网格提供隐藏行或列的函数，则应用以下属性，如[网格和表属性](#gridAndTableProperties)。
    -   [aria-colcount](#aria-colcount)或[aria-rowcount分别](#aria-rowcount)设置为列或行的总数。
    -   [aria-colindex](#aria-colindex)或[aria-rowindex分别](#aria-rowindex)设置为行或列中单元格的位置。
-   如果treegrid包含跨多行或多列的单元格，并且该`treegrid`角色未应用于HTML `table`元素，则应用[aria-rowspan](#aria-rowspan)或[aria-colspan](#aria-colspan)，如[网格和表格属性中所述](#gridAndTableProperties)。

## 窗口拆分 window splitter

窗口分割器是窗口的两个部分或窗格之间的可移动分隔符，其允许用户改变窗格的相对大小。Window Splitter可以是可变的也可以是固定的。固定分离器在两个位置之间切换，而可变分离器可以调整到允许范围内的任何位置。

窗口拆分器的值表示其中一个窗格的大小，在此模式中，窗格称为主窗格。当拆分器具有其最小值时，主窗格具有其最小尺寸，并且辅助窗格具有其最大尺寸。拆分器还具有与主窗格名称匹配的可访问名称。

例如，考虑具有用于目录的主窗格的书籍阅读应用程序和用于显示书籍的一部分的内容的辅助窗格。两个窗格被标记为“目录”的垂直分割器分开。当目录窗格具有其最大大小时，拆分器的值为`100`，当内容表完全折叠时，拆分器的值为`0`。

请注意，术语“主窗格”未描述窗格内的内容的重要性或目的。

**键盘交互**

-   `Left Arrow`：将垂直分割器向左移动。
-   `Right Arrow`：将垂直分割器向右移动。
-   `Up Arrow`：向上移动水平分割器。
-   `Down Arrow`：向下移动水平分割器。
-   `Enter`：如果主窗格未折叠，则折叠窗格。如果窗格已折叠，请将拆分器恢复到先前的位置。
-   `Home`（可选）：将拆分器移动到为主窗格提供允许的最小大小的位置。这可能会完全折叠主窗格。
-   `End`（可选）：将拆分器移动到为主窗格提供最大允许大小的位置。这可能会完全折叠辅助窗格。
-   `F6` （可选）：在窗格中循环。

>**注意**
>固定大小的分离器省略了箭头键的实现。

**WAI-ARIA角色，状态和属性**

-   用作可聚焦分离器的元素具有角色[分离器](#role_separator)。
-   separator元素的[aria-valuenow](#aria-valuenow)属性设置为表示分隔符当前位置的十进制值。
-   separator元素的[aria-valuemin](#aria-valuemin)属性设置为十进制值，表示主窗格的最小大小。这通常是`0`。
-   separator元素的[aria-valuemax](#aria-valuemax)属性设置为十进制值，表示主窗格具有其最大大小的位置。这通常是`100`。
-   如果主窗格具有可见标签，则它将由分隔符元素上的[aria-labelledby](#aria-labelledby)引用 。否则，分隔符元素具有由[aria-label](#aria-label)提供 [的标签](#aria-label)。
-   separator元素具有引用主窗格的[aria-controls](#aria-controls)。

# 总结

![黑熊抱着饮料瓶用嘴拧盖子](https://pic4.zhimg.com/80/v2-42a46324b67bccca60a62cd79743590c_hd.jpg)




# 参考资料

[包容性设计(inclusive design)和通用设计(universal design)的区别是什么？-知乎](https://www.zhihu.com/question/26045305)

[我国网站信息无障碍技术标准现状与发展-《信息化研究》](http://xxhyj.njcit.cn/oa/darticle.aspx?type=view&id=201504003)

[无障碍设计 - ANN 的设计笔记](https://zhuanlan.zhihu.com/p/31657525)

[WAI-ARIA无障碍网页应用属性完全展示 - 张鑫旭](https://www.zhangxinxu.com/wordpress/2012/03/wai-aria-%E6%97%A0%E9%9A%9C%E7%A2%8D%E9%98%85%E8%AF%BB/)

[What You’re Getting Wrong About Inclusive Design-Kat Holmes](https://www.fastcompany.com/90166413/what-youre-getting-wrong-about-inclusive-design)

[5 Digital Accessibility Myths Busted - Carie Fisher](https://medium.com/@cariefisher/5-digital-accessibility-myths-busted-8d845ff0df9c)

[Accessibility First: Rethinking the Way We Approach Website Design and Development - Carie Fisher](https://medium.com/@cariefisher/accessibility-first-76c570ad1b2c)



[Designing Accessible Content: Typography, Font Styling, and Structure- Carie Fisher](https://medium.com/@cariefisher/designing-accessible-content-typography-font-styling-and-structure-d3a77d948e75)

[Checklist of Federal and State Requirements for Developing an Accessible Website in Washington- Jeff Jimerson](https://medium.com/madison-ave-collective/checklist-of-federal-and-state-requirements-for-developing-an-accessible-website-in-washington-10862272a95b)

[How to Boost Your Website’s Accessibility + SEO](https://medium.com/swlh/how-to-boost-both-your-website-accessibility-seo-c7ee63625cdd)

[pointnorth.io](http://pointnorth.io)

[WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices)

[Deque's Accessibility Heuristics](https://drive.google.com/file/d/1GYlEqdOxq7RdKxG_Od7GzrBh_iYEfNBY/view)

[a11y style guide](https://a11y-style-guide.com)

[The Accessibility of Styled Form Controls](https://scottaohara.github.io/a11y_styled_form_controls/)

[a list apart - accessibility](https://alistapart.com/topic/accessibility/)

[the paciello group](https://developer.paciellogroup.com/blog/?s=accessibility)

---

# 更多资料
- 
[aria解析-google developers](https://developers.google.com/WEB/fundamentals/accessibility/semantics-aria/aria-labels-and-relationships)
- [Parctical ARIA Examples - heydonworks](https://heydonworks.com/practical_aria_examples/)
- [高效设计UI 状态、以及无痛与工程师沟通的FSM 表格](https://medium.com/@vinceshao/better-way-of-designing-ui-states-chinese-a5c43e46d391)
- [更好的网页开发流程：学会运用Confluence, Airtable, Jira 与 Abstract](https://medium.com/as-a-product-designer/a-better-WEB-development-workflow-confluence-airtable-jira-abstract-zh-24fc8d5b8329)
- [包容性web设计](http://e.dangdang.com/pc/reader/index.html?id=1901123316)
- [WEB应用程序通用设计](http://www.amazon.cn/WEB%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E9%80%9A%E7%94%A8%E8%AE%BE%E8%AE%A1-Wensy-Cbisbolm/dp/B002IIDICE/ref=sr_1_2?ie=UTF8&qid=1446345863&sr=8-2) 
- [兼济天下·用户无障碍体验的可访问性设计](http://www.amazon.cn/UI-UE%E7%B3%BB%E5%88%97%E4%B8%9B%E4%B9%A6-%E5%85%BC%E6%B5%8E%E5%A4%A9%E4%B8%8B%C2%B7%E7%94%A8%E6%88%B7%E6%97%A0%E9%9A%9C%E7%A2%8D%E4%BD%93%E9%AA%8C%E7%9A%84%E5%8F%AF%E8%AE%BF%E9%97%AE%E6%80%A7%E8%AE%BE%E8%AE%A1-%E9%9C%8D%E5%B0%94%E9%A1%BF/dp/B00UT03YEU/ref=sr_1_1?ie=UTF8&qid=1446346063&sr=8-1)