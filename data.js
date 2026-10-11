/* 408四件套 · 卡片数据（速查 + 挖空 + 例题共用）
   freq: 考频 2-5（★越多越常考，依据 2010-2025 年 408 真题统计）
   tier: 难度档 1低 2中 3高（按普遍得分率）
   约定：占位符 {{n}} 必须独立出现，不嵌进 \frac{}{} 的花括号；中文一律包在 \text{} */
window.MATH2_DATA = {
  title: "408四件套",
  subtitle: "考研计算机408 · 高频抓分记忆",
  skip: "数据结构 45 · 组成原理 45 · 操作系统 35 · 计网 25（满分 150）",
  modules: [
    {
      id: "ds",
      no: "一",
      name: "数据结构",
      blurb: "复杂度 · 树 · 图 · 排序查找",
      exam: "45 分",
      cards: [
        {
          id: "ds-complexity",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "时间复杂度量级",
          hint: "选择题第一题常客：给程序段比量级，先数循环。",
          reveal: [
            { tex: "O(1)<O(\\log n)<O(n)<O(n\\log n)<O(n^{2})<O(2^{n})<O(n!)", display: true },
            { tex: "\\text{循环变量每次翻倍 }i\\leftarrow 2i\\ \\Rightarrow\\ O(\\log n)", display: true },
            { tex: "\\text{相邻双重循环（各跑 }n\\text{）}\\Rightarrow O(n^{2})", display: true }
          ],
          holes: ["\\log n", "n\\log n", "2^{n}", "O(\\log n)", "O(n^{2})"],
          mask: [
            "O(1)<O({{1}})<O(n)<O({{2}})<O(n^{2})<O({{3}})<O(n!)",
            "i\\leftarrow 2i\\Rightarrow {{4}};\\quad \\text{双重循环}\\Rightarrow {{5}}"
          ],
          notes: [
            "加法规则取最大量级；乘法规则量级相乘。",
            "嵌套循环内层上界依赖外层时，列和式求总次数。"
          ],
          warning: "递归复杂度先写递推式再展开，别凭感觉。"
        },
        {
          id: "ds-linear",
          kind: "cloze",
          freq: 4,
          tier: 1,
          title: "顺序表与链表",
          hint: "一个下标直达，一个顺藤摸瓜。",
          reveal: [
            { tex: "\\text{顺序表：随机访问 }O(1);\\ \\text{插入/删除平均移动 }\\tfrac{n}{2}\\ \\text{个元素}", display: true },
            { tex: "\\text{链表：已知位置插入/删除 }O(1);\\ \\text{按值/按位查找 }O(n)", display: true }
          ],
          holes: ["O(1)", "\\tfrac{n}{2}", "O(1)", "O(n)"],
          mask: [
            "\\text{顺序表随机访问}{{1}}，\\text{插删平均移动}{{2}}\\ \\text{个}",
            "\\text{链表已知位置插删}{{3}}，\\text{查找}{{4}}"
          ],
          notes: [
            "顺序表适合多读少写；链表适合频繁插删。",
            "带头结点：空表判定统一，插入删除不用特判头指针。"
          ]
        },
        {
          id: "ds-stack-queue",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "栈、队列与循环队列",
          hint: "栈是弹夹，队列是排队；循环队列牺牲一格判满。",
          reveal: [
            { tex: "\\text{栈：先进后出；队列：先进先出}", display: true },
            { tex: "\\text{循环队列判空：}front=rear;\\quad \\text{判满：}(rear+1)\\bmod m=front", display: true },
            { tex: "\\text{队列长度：}(rear-front+m)\\bmod m", display: true }
          ],
          holes: [
            "\\text{先进后出}",
            "\\text{先进先出}",
            "front=rear",
            "(rear+1)\\bmod m=front",
            "(rear-front+m)\\bmod m"
          ],
          mask: [
            "\\text{栈}{{1}}；\\text{队列}{{2}}",
            "\\text{判空}{{3}}；\\text{判满}{{4}}",
            "\\text{长度}{{5}}"
          ],
          notes: [
            "牺牲一个存储单元区分空与满。",
            "栈的应用：括号匹配、表达式求值、递归；队列：层次遍历、缓冲。"
          ]
        },
        {
          id: "ds-catalan",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "出栈序列数（Catalan）",
          hint: "n 个元素依次入栈，问合法出栈序列有几种。",
          reveal: [
            { tex: "C_n=\\frac{1}{n+1}\\dbinom{2n}{n}", display: true },
            { tex: "n=3\\Rightarrow 5\\ \\text{种};\\quad n=4\\Rightarrow 14\\ \\text{种}", display: true }
          ],
          holes: ["\\frac{1}{n+1}\\dbinom{2n}{n}", "5", "14"],
          mask: [
            "C_n={{1}}",
            "n=3\\Rightarrow {{2}}\\ \\text{种};\\quad n=4\\Rightarrow {{3}}\\ \\text{种}"
          ],
          notes: [
            "判断序列合法性：扫描时任何位置出栈数不能超过入栈数。",
            "入栈顺序固定为 1,2,…,n。"
          ]
        },
        {
          id: "ds-kmp",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "KMP 与 next 数组",
          hint: "408 几乎隔年就考手算 next/nextval。",
          reveal: [
            { tex: "next[j]:\\ \\text{模式串前 }j-1\\ \\text{个字符的最长相等前后缀长度}+1", display: true },
            { tex: "next[1]=0,\\quad next[2]=1", display: true },
            { tex: "p_j=p_{next[j]}\\ \\text{时}\\ nextval[j]=nextval[next[j]]", display: true },
            { tex: "\\text{KMP 时间复杂度 }O(m+n)，\\text{主串指针不回退}", display: true }
          ],
          holes: ["j-1", "+1", "0", "1", "nextval[next[j]]", "O(m+n)"],
          mask: [
            "next[j]:\\ \\text{前}{{1}}\\ \\text{个字符最长相等前后缀}{{2}}",
            "next[1]={{3}},\\quad next[2]={{4}}",
            "nextval[j]={{5}};\\quad \\text{复杂度}{{6}}"
          ],
          notes: [
            "手算：把前缀写出来，逐位找最长相等前后缀再加 1。",
            "失配时模式串右滑 j-next[j] 位，主串 i 不动。"
          ]
        },
        {
          id: "ds-btree-prop",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "二叉树五个性质",
          hint: "选择题每年稳定送分，背到条件反射。",
          reveal: [
            { tex: "\\text{第 }i\\ \\text{层至多 }2^{i-1}\\ \\text{个结点};\\quad \\text{深度 }k\\ \\text{至多 }2^{k}-1\\ \\text{个}", display: true },
            { tex: "n_0=n_2+1", display: true },
            { tex: "\\text{完全二叉树深度 }\\lfloor\\log_2 n\\rfloor+1;\\quad \\text{结点 }i\\ \\text{的父结点 }\\lfloor i/2\\rfloor", display: true }
          ],
          holes: ["2^{i-1}", "2^{k}-1", "n_2+1", "\\lfloor\\log_2 n\\rfloor+1", "\\lfloor i/2\\rfloor"],
          mask: [
            "\\text{第 }i\\ \\text{层至多}{{1}};\\quad \\text{深度 }k\\ \\text{至多}{{2}}",
            "n_0={{3}}",
            "\\text{深度}{{4}};\\quad \\text{父结点}{{5}}"
          ],
          notes: [
            "完全二叉树编号 i>n/2 的结点都是叶子。",
            "n1 只能是 0 或 1：有 n1 时总结点数偶奇可互推。"
          ]
        },
        {
          id: "ds-traversal",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "遍历序列与还原",
          hint: "给两个序列还原二叉树，先定根再分左右。",
          reveal: [
            { tex: "\\text{先序+中序、后序+中序、层序+中序：可唯一确定二叉树}", display: true },
            { tex: "\\text{先序+后序：不能唯一确定（分不清左右单支）}", display: true },
            { tex: "\\text{还原：先/后序定根 }\\to\\ \\text{中序切左右 }\\to\\ \\text{递归}", display: true }
          ],
          holes: ["\\text{中序}", "\\text{不能}", "\\text{定根}"],
          mask: [
            "\\text{可唯一确定的组合都含}{{1}}\\ \\text{序}",
            "\\text{先序+后序}{{2}}\\ \\text{唯一确定}",
            "\\text{还原第一步}{{3}}"
          ],
          notes: [
            "先序与后序序列互为逆序 ⇒ 树是单支树。",
            "线索二叉树：空左指针指前驱，空右指针指后继。"
          ]
        },
        {
          id: "ds-avl",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "AVL 平衡与旋转",
          hint: "平衡因子超 1 就转；最少结点数是斐波那契形。",
          reveal: [
            { tex: "\\text{平衡因子}=h_L-h_R\\in\\{-1,0,1\\};\\quad \\text{四种调整 }LL,RR,LR,RL", display: true },
            { tex: "\\text{深度 }h\\ \\text{的最少结点数：}N_h=N_{h-1}+N_{h-2}+1,\\ N_1=1,\\ N_2=2", display: true }
          ],
          holes: ["h_L-h_R", "LL,RR,LR,RL", "N_{h-1}+N_{h-2}+1", "1", "2"],
          mask: [
            "\\text{平衡因子}={{1}};\\quad \\text{旋转}{{2}}",
            "N_h={{3}},\\ N_1={{4}},\\ N_2={{5}}"
          ],
          notes: [
            "LL 右旋、RR 左旋、LR 先左后右、RL 先右后左。",
            "408 爱考：深度 h 的 AVL 最少/最多结点数。"
          ]
        },
        {
          id: "ds-btree",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "B 树性质与高度",
          hint: "阶数、最少子树、高度上下限，三件套一起考。",
          reveal: [
            { tex: "m\\ \\text{阶 B 树：结点至多 }m\\ \\text{棵子树；非根结点至少 }\\lceil m/2\\rceil\\ \\text{棵}", display: true },
            { tex: "\\text{根至少 }2\\ \\text{棵子树；关键字数}=\\text{子树数}-1", display: true },
            { tex: "n\\ \\text{个关键字：}h\\le\\log_{\\lceil m/2\\rceil}\\frac{n+1}{2}+1", display: true }
          ],
          holes: ["m", "\\lceil m/2\\rceil", "2", "\\text{子树数}-1", "\\log_{\\lceil m/2\\rceil}\\frac{n+1}{2}+1"],
          mask: [
            "\\text{至多}{{1}}\\ \\text{棵子树；非根至少}{{2}}\\ \\text{棵}",
            "\\text{根至少}{{3}}\\ \\text{棵；关键字数}={{4}}",
            "h\\le {{5}}"
          ],
          notes: [
            "所有叶子在同一层；插入溢出则分裂，中位关键字上提。",
            "B+ 树：关键字数=子树数，叶子成链，支持范围查询。"
          ]
        },
        {
          id: "ds-graph",
          kind: "cloze",
          freq: 4,
          tier: 1,
          title: "图的存储与遍历",
          hint: "复杂度结论 + 度数性质，小题高频。",
          reveal: [
            { tex: "\\text{DFS/BFS：邻接矩阵 }O(n^{2});\\quad \\text{邻接表 }O(n+e)", display: true },
            { tex: "\\text{DFS 借助栈，BFS 借助队列}", display: true },
            { tex: "\\text{连通图 }e\\ge n-1;\\quad \\text{无向完全图 }e=\\tfrac{n(n-1)}{2}", display: true }
          ],
          holes: ["O(n^{2})", "O(n+e)", "\\text{栈}", "\\text{队列}", "n-1", "\\tfrac{n(n-1)}{2}"],
          mask: [
            "\\text{邻接矩阵}{{1}};\\quad \\text{邻接表}{{2}}",
            "\\text{DFS 用}{{3}};\\quad \\text{BFS 用}{{4}}",
            "e\\ge {{5}};\\quad \\text{完全图 }e={{6}}"
          ],
          notes: [
            "有向图：入度之和=出度之和=边数 e。",
            "生成树：n 个顶点恰好 n-1 条边。"
          ]
        },
        {
          id: "ds-mst",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "最小生成树 Prim 与 Kruskal",
          hint: "一个按点扩张，一个按边贪。",
          reveal: [
            { tex: "\\text{Prim：}O(n^{2})，\\text{适合稠密图}", display: true },
            { tex: "\\text{Kruskal：排序+并查集，}O(e\\log e)，\\text{适合稀疏图}", display: true },
            { tex: "\\text{MST 总权值唯一，形态可能不唯一}", display: true }
          ],
          holes: ["O(n^{2})", "\\text{稠密}", "O(e\\log e)", "\\text{稀疏}", "\\text{唯一}"],
          mask: [
            "\\text{Prim}{{1}}\\ \\text{适合}{{2}}\\ \\text{图}",
            "\\text{Kruskal}{{3}}\\ \\text{适合}{{4}}\\ \\text{图}",
            "\\text{MST 总权值}{{5}}"
          ],
          notes: [
            "Kruskal 用并查集判环：两端已连通就跳过。",
            "Prim 每轮把距集合最近的点拉进来。"
          ]
        },
        {
          id: "ds-shortest",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "最短路径与拓扑排序",
          hint: "Dijkstra 怕负权，Floyd 怕负环。",
          reveal: [
            { tex: "\\text{Dijkstra：单源 }O(n^{2})，\\text{不能处理负权边}", display: true },
            { tex: "\\text{Floyd：多源 }O(n^{3})，\\text{允许负权但禁止负环}", display: true },
            { tex: "\\text{拓扑排序排不满 }\\Rightarrow\\ \\text{图中必有环}", display: true }
          ],
          holes: ["O(n^{2})", "\\text{负权}", "O(n^{3})", "\\text{负环}", "\\text{环}"],
          mask: [
            "\\text{Dijkstra}{{1}}\\ \\text{不能}{{2}}\\ \\text{边}",
            "\\text{Floyd}{{3}}\\ \\text{禁止}{{4}}",
            "\\text{拓扑排不满}\\Rightarrow\\text{有}{{5}}"
          ],
          notes: [
            "Dijkstra 每轮选 dist 最小的未确定点并松弛邻边。",
            "关键路径：AOE 网，最早/最迟时间差为 0 的活动。"
          ]
        },
        {
          id: "ds-hash",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "哈希冲突与装填因子",
          hint: "冲突处理两大家族：开放定址与拉链。",
          reveal: [
            { tex: "\\text{装填因子 }\\alpha=\\tfrac{n}{m}，\\alpha\\ \\text{越小冲突越少}", display: true },
            { tex: "\\text{线性探测易堆积；二次探测缓解；拉链法无堆积}", display: true },
            { tex: "H(k)=k\\bmod p\\quad (p\\le m\\ \\text{且为质数}) ", display: true }
          ],
          holes: ["\\tfrac{n}{m}", "\\text{堆积}", "\\text{拉链}", "p\\le m\\ \\text{且为质数}"],
          mask: [
            "\\alpha={{1}};\\quad \\text{线性探测易}{{2}}",
            "{{3}}\\ \\text{法无堆积}",
            "\\text{除留余数取 }p: {{4}}"
          ],
          notes: [
            "成功 ASL 按比较次数平均；失败 ASL 数到空位/表尾。",
            "堆积是线性探测专有名词，二次探测与拉链都没有。"
          ]
        },
        {
          id: "ds-sort",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "内部排序对比表",
          hint: "复杂度、稳定性、辅助空间三列一起背。",
          reveal: [
            { tex: "\\text{快排：平均 }O(n\\log n)，\\text{最坏 }O(n^{2})，\\text{不稳定，空间 }O(\\log n)", display: true },
            { tex: "\\text{归并：}O(n\\log n)\\ \\text{稳定，空间 }O(n);\\quad \\text{堆排：}O(n\\log n)\\ \\text{不稳定，空间 }O(1)", display: true },
            { tex: "\\text{基数排序：}O(d(n+r))\\ \\text{稳定};\\quad \\text{插/冒/选：}O(n^{2})", display: true }
          ],
          holes: ["O(n\\log n)", "O(n^{2})", "O(\\log n)", "O(n)", "O(1)", "O(d(n+r))"],
          mask: [
            "\\text{快排平均}{{1}}，\\text{最坏}{{2}}，\\text{空间}{{3}}",
            "\\text{归并空间}{{4}};\\quad \\text{堆排空间}{{5}}",
            "\\text{基数}{{6}}"
          ],
          notes: [
            "稳定：冒泡、插入、归并、基数；不稳：选快希堆。",
            "快排最坏发生在基本有序且枢轴总取端点时。"
          ]
        },
        {
          id: "ds-ex-complexity",
          kind: "example",
          freq: 5,
          tier: 2,
          title: "程序段求复杂度",
          problem: "\\text{外层 }i\\ \\text{从 1 每次翻倍直到 }\\ge n，\\text{内层 }j\\ \\text{固定跑 }n\\ \\text{次，求总时间复杂度}",
          idea: "外层次数是对数级，内层每次 n 次，两层相乘。",
          steps: [
            { tex: "\\text{外层：}i=1,2,4,\\dots\\ \\Rightarrow\\ \\text{约 }\\lceil\\log_2 n\\rceil\\ \\text{次}" },
            { tex: "T(n)=n\\cdot\\log_2 n\\ \\text{量级}" }
          ],
          answer: "O(n\\log n)"
        },
        {
          id: "ds-ex-btree",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "B 树最大高度计算",
          problem: "\\text{含 }2047\\ \\text{个关键字的 }5\\ \\text{阶 B 树，最大高度是多少？}",
          idea: "要树最高，每个结点关键字取最少：非根结点至少 ⌈5/2⌉=3 棵子树。",
          steps: [
            { tex: "\\text{高度 }h\\ \\text{时最少关键字数：}2\\cdot 3^{h-1}-1" },
            { tex: "2\\cdot 3^{h-1}-1\\le 2047\\ \\Rightarrow\\ 3^{h-1}\\le 1024<3^{7}" },
            { tex: "h-1\\le 6\\ \\Rightarrow\\ h\\le 7" }
          ],
          answer: "h_{\\max}=7"
        },
        {
          id: "ds-bf",
          kind: "cloze",
          freq: 3,
          tier: 1,
          title: "BF 朴素匹配",
          hint: "和 KMP 对照记：BF 主串要回退。",
          reveal: [
            { tex: "\\text{BF 失配：主串回退到 }i-j+2，\\text{模式串回到 }1", display: true },
            { tex: "\\text{最坏 }O(m\\times n);\\quad \\text{最好 }O(n)", display: true }
          ],
          holes: ["i-j+2", "O(m\\times n)"],
          mask: [
            "\\text{BF 失配回退到}{{1}};\\quad \\text{最坏}{{2}}"
          ],
          notes: ["KMP 的全部价值就是让主串指针不回退。"]
        },
        {
          id: "ds-tree-forest",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "树、森林与二叉树转换",
          hint: "左孩子右兄弟，一根线串起三族。",
          reveal: [
            { tex: "\\text{树的结点数}=\\text{总度数}+1", display: true },
            { tex: "\\text{树转二叉树：左孩子右兄弟；森林把各树根当兄弟接入}", display: true },
            { tex: "\\text{树的先根}=\\text{二叉树先序};\\quad \\text{树的后根}=\\text{二叉树中序}", display: true }
          ],
          holes: ["\\text{总度数}+1", "\\text{左孩子右兄弟}", "\\text{中序}"],
          mask: [
            "\\text{结点数}={{1}}",
            "\\text{转换规则}{{2}}",
            "\\text{树后根}=\\text{二叉树}{{3}}\\ \\text{序}"
          ],
          notes: ["森林先序=二叉树先序，森林中序=二叉树中序。"]
        },
        {
          id: "ds-huffman",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "哈夫曼树与 WPL",
          hint: "贪心合并最小两棵，WPL 最小。",
          reveal: [
            { tex: "\\text{WPL}=\\sum w_i l_i;\\quad \\text{每次合并权值最小的两棵}", display: true },
            { tex: "n\\ \\text{个叶子的哈夫曼树共 }2n-1\\ \\text{个结点，无度为 }1\\ \\text{的结点}", display: true },
            { tex: "\\text{哈夫曼编码是前缀码：任一编码都不是另一个的前缀}", display: true }
          ],
          holes: ["\\sum w_i l_i", "\\text{最小的两棵}", "2n-1", "\\text{前缀}"],
          mask: [
            "\\text{WPL}={{1}};\\quad \\text{每次合}{{2}}",
            "\\text{总结点}{{3}};\\quad \\text{互为}{{4}}\\ \\text{码}"
          ],
          notes: ["WPL 也等于各次合并产生的新权值之和。", "前缀码保证译码唯一。"]
        },
        {
          id: "ds-bst",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "二叉排序树 BST",
          hint: "中序一刷就是排好序的序列。",
          reveal: [
            { tex: "\\text{左子树}<\\text{根}<\\text{右子树};\\quad \\text{中序遍历得到递增序列}", display: true },
            { tex: "\\text{查找/插入 }O(h);\\quad \\text{最坏（单支）}O(n)", display: true },
            { tex: "\\text{删双孩结点：用中序前驱（或后继）顶替后再删替身}", display: true }
          ],
          holes: ["\\text{递增}", "O(h)", "\\text{中序前驱}"],
          mask: [
            "\\text{中序得}{{1}}\\ \\text{序列;\\quad 查找}{{2}}",
            "\\text{删双孩用}{{3}}\\ \\text{顶替}"
          ],
          notes: ["BST 形态取决于插入顺序。"]
        },
        {
          id: "ds-heap",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "堆的定义与调整",
          hint: "建堆是线性的，插删才是对数。",
          reveal: [
            { tex: "\\text{大根堆：}a[i]\\ge a[\\text{孩子}];\\quad \\text{自底向上建堆 }O(n)", display: true },
            { tex: "\\text{插入（上滤）/删堆顶（下滤）}O(\\log n)", display: true },
            { tex: "\\text{堆顶即最大（小）值，适合做优先级队列}", display: true }
          ],
          holes: ["a[i]\\ge a[\\text{孩子}]", "O(n)", "O(\\log n)"],
          mask: [
            "\\text{大根堆}{{1}};\\quad \\text{建堆}{{2}}",
            "\\text{插删}{{3}}"
          ],
          notes: ["建堆从 ⌊n/2⌋ 开始逐结点下滤。", "删堆顶：末尾元素补位再下滤。"]
        },
        {
          id: "ds-critical",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "关键路径（AOE 网）",
          hint: "ve 顺推取大，vl 逆推取小，余量为零即关键。",
          reveal: [
            { tex: "ve(j)=\\max(ve(i)+w_{ij});\\quad vl(i)=\\min(vl(k)-w_{ik})", display: true },
            { tex: "\\text{活动余量 }l(a)-e(a)=0\\ \\Rightarrow\\ a\\ \\text{是关键活动}", display: true },
            { tex: "\\text{关键路径=源点到汇点的最长路径，可能有多条}", display: true }
          ],
          holes: ["\\max(ve(i)+w_{ij})", "\\min(vl(k)-w_{ik})", "l(a)-e(a)=0", "\\text{最长}"],
          mask: [
            "ve(j)={{1}}",
            "vl(i)={{2}}",
            "\\text{关键活动}{{3}};\\quad \\text{关键路径}{{4}}"
          ],
          notes: ["缩短任一关键路径上的公共关键活动才能缩工期。"]
        },
        {
          id: "ds-external",
          kind: "cloze",
          freq: 2,
          tier: 2,
          title: "外部排序",
          hint: "内存放不下，靠归并趟数论英雄。",
          reveal: [
            { tex: "\\text{外部排序基于归并；耗时主要在磁盘读写}", display: true },
            { tex: "\\text{置换-选择生成更长的初始归并段；败者树加速多路归并}", display: true },
            { tex: "\\text{最佳归并树按哈夫曼思想安排归并次序，WPL 最小}", display: true }
          ],
          holes: ["\\text{归并}", "\\text{置换-选择}", "\\text{败者树}", "\\text{哈夫曼}"],
          mask: [
            "\\text{外部排序基于}{{1}}",
            "{{2}}\\ \\text{造长段；}{{3}}\\ \\text{加速}",
            "\\text{最佳归并树用}{{4}}\\ \\text{思想}"
          ],
          notes: ["减少归并趟数=加大归并路数+拉长初始段。"]
        }
      ]
    },
    {
      id: "co",
      no: "二",
      name: "组成原理",
      blurb: "数据表示 · Cache · 指令 · 流水线",
      exam: "45 分",
      cards: [
        {
          id: "co-code",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "原码、反码、补码、移码",
          hint: "正数三码合一；负数记改造流程。",
          reveal: [
            { tex: "\\text{正数：原码=反码=补码；符号位 }0\\ \\text{正 }1\\ \\text{负}", display: true },
            { tex: "\\text{负数：反码=原码数值位取反；补码=反码}+1", display: true },
            { tex: "\\text{移码=补码符号位取反（用于表示阶码）}", display: true },
            { tex: "[-128]_{\\text{补}}\\ \\text{无对应原码；补码中 }0\\ \\text{表示唯一}", display: true }
          ],
          holes: ["\\text{原码数值位取反}", "\\text{反码}+1", "\\text{符号位取反}", "\\text{唯一}"],
          mask: [
            "\\text{负数反码}={{1}};\\quad \\text{补码}={{2}}",
            "\\text{移码=补码}{{3}};\\quad \\text{补码的 }0\\ {{4}}"
          ],
          notes: [
            "补码加减统一成加法，符号位直接参与运算。",
            "移码便于比较阶码大小（按无符号数比）。"
          ]
        },
        {
          id: "co-code-range",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "定点数表示范围",
          hint: "补码总比原码多装一个最小负数。",
          reveal: [
            { tex: "n+1\\ \\text{位补码整数：}-2^{n}\\le x\\le 2^{n}-1", display: true },
            { tex: "n+1\\ \\text{位原码整数：}-(2^{n}-1)\\le x\\le 2^{n}-1", display: true },
            { tex: "\\text{补码小数：}-1\\le x\\le 1-2^{-n}", display: true }
          ],
          holes: ["-2^{n}", "2^{n}-1", "-(2^{n}-1)", "-1", "1-2^{-n}"],
          mask: [
            "\\text{补码整数：}{{1}}\\le x\\le {{2}}",
            "\\text{原码整数：}{{3}}\\le x\\le {{2}}",
            "\\text{补码小数：}{{4}}\\le x\\le {{5}}"
          ],
          notes: [
            "8 位补码：-128~127；8 位原码：-127~127。",
            "补码多出来的那个值没有原码、没有反码。"
          ]
        },
        {
          id: "co-ieee754",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "IEEE 754 浮点数",
          hint: "1+8+23、偏置 127，规格化隐藏前导 1。",
          reveal: [
            { tex: "\\text{单精度：}1\\ \\text{位符号}+8\\ \\text{位阶码}+23\\ \\text{位尾数，偏置 }127", display: true },
            { tex: "x=(-1)^{S}\\times 1.M\\times 2^{E-127}", display: true },
            { tex: "\\text{双精度：}1+11+52，\\text{偏置 }1023", display: true }
          ],
          holes: ["8", "23", "127", "(-1)^{S}\\times 1.M\\times 2^{E-127}", "11", "52", "1023"],
          mask: [
            "\\text{单精度 }1+{{1}}+{{2}}，\\text{偏置 }{{3}}",
            "x={{4}}",
            "\\text{双精度 }1+{{5}}+{{6}}，\\text{偏置 }{{7}}"
          ],
          notes: [
            "规格化尾数隐藏最高位 1，等于白赚一位精度。",
            "阶码全 0：非规格化/零；全 1：无穷大或 NaN。"
          ]
        },
        {
          id: "co-cache-map",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "Cache 三种映射",
          hint: "先分地址段：标记 + 组号 + 块内地址。",
          reveal: [
            { tex: "\\text{直接映射：行号}=\\text{主存块号}\\bmod\\text{Cache 行数}", display: true },
            { tex: "\\text{全相联：任意行；组相联：组号}=\\text{块号}\\bmod\\text{组数}", display: true },
            { tex: "\\text{主存地址}=\\text{标记}+\\text{组号（行号）}+\\text{块内地址}", display: true }
          ],
          holes: [
            "\\text{主存块号}\\bmod\\text{Cache 行数}",
            "\\text{块号}\\bmod\\text{组数}",
            "\\text{标记}",
            "\\text{块内地址}"
          ],
          mask: [
            "\\text{直接映射行号}={{1}}",
            "\\text{组相联组号}={{2}}",
            "\\text{地址}={{3}}+\\text{组号}+{{4}}"
          ],
          notes: [
            "直接映射最快但易抖动；全相联相反；组相联折中。",
            "写策略：写直达/写回；替换常用 LRU。"
          ]
        },
        {
          id: "co-vmem",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "虚拟存储与 TLB",
          hint: "虚页号查页表拿块号，页内偏移原样拼接。",
          reveal: [
            { tex: "\\text{虚页号}\\xrightarrow{\\text{页表}}\\text{物理块号；页内偏移不变}", display: true },
            { tex: "\\text{TLB 命中访存 }1\\ \\text{次；未命中 }2\\ \\text{次（查页表+取数据）}", display: true },
            { tex: "\\text{缺页}\\Rightarrow\\text{缺页中断，调页后重新执行该指令}", display: true }
          ],
          holes: ["\\text{物理块号}", "1", "2", "\\text{缺页中断}"],
          mask: [
            "\\text{页表项给出}{{1}}",
            "\\text{TLB 命中}{{2}}\\ \\text{次，未命中}{{3}}\\ \\text{次}",
            "\\text{缺页触发}{{4}}"
          ],
          notes: [
            "TLB 是相联存储器，按虚页号并行匹配。",
            "页表在内存中，由页表基址寄存器定位。"
          ]
        },
        {
          id: "co-instr",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "指令格式与扩展操作码",
          hint: "地址码每少一位，操作码多一倍。",
          reveal: [
            { tex: "\\text{指令}=\\text{操作码}+\\text{地址码}", display: true },
            { tex: "\\text{扩展操作码：短码不能是长码的前缀}", display: true },
            { tex: "\\text{定长指令利于流水线；变长指令节省空间}", display: true }
          ],
          holes: ["\\text{操作码}+\\text{地址码}", "\\text{前缀}", "\\text{流水线}"],
          mask: [
            "\\text{指令}={{1}}",
            "\\text{短码不能是长码的}{{2}}",
            "\\text{定长指令利于}{{3}}"
          ],
          notes: [
            "每级可用状态数乘 2^k，再减去留给下一级扩展的条数。",
            "常考：给地址码格式，求各地址数指令的最多条数。"
          ]
        },
        {
          id: "co-addr-mode",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "七种寻址方式",
          hint: "有效地址 EA 公式挨个过。",
          reveal: [
            { tex: "\\text{直接：}EA=A;\\quad \\text{间接：}EA=(A);\\quad \\text{寄存器间接：}EA=(R)", display: true },
            { tex: "\\text{相对：}EA=(PC)+A;\\quad \\text{基址：}EA=(BR)+A;\\quad \\text{变址：}EA=(IX)+A", display: true },
            { tex: "\\text{基址面向程序浮动；变址面向数组循环}", display: true }
          ],
          holes: ["A", "(A)", "(R)", "(PC)+A", "(BR)+A", "(IX)+A"],
          mask: [
            "\\text{直接}{{1}};\\ \\text{间接}{{2}};\\ \\text{寄存器间接}{{3}}",
            "\\text{相对}{{4}};\\ \\text{基址}{{5}};\\ \\text{变址}{{6}}"
          ],
          notes: [
            "立即寻址操作数就在指令里，不访存。",
            "间接寻址扩大寻址范围，代价是多次访存。"
          ]
        },
        {
          id: "co-pipeline",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "流水线公式与冒险",
          hint: "第一条填满流水，后面每拍出一个。",
          reveal: [
            { tex: "k\\ \\text{段流水线跑 }n\\ \\text{条：}T=(k+n-1)\\Delta t", display: true },
            { tex: "\\text{加速比 }S=\\frac{kn}{k+n-1}\\to k\\ (n\\to\\infty)", display: true },
            { tex: "\\text{冒险：结构（争资源）、数据（RAW）、控制（转移）}", display: true }
          ],
          holes: ["(k+n-1)\\Delta t", "\\frac{kn}{k+n-1}", "\\text{结构}", "\\text{数据}", "\\text{控制}"],
          mask: [
            "T={{1}};\\quad S={{2}}",
            "\\text{冒险}{{3}}\\text{、}{{4}}\\text{、}{{5}}"
          ],
          notes: [
            "数据冒险用转发（旁路）；控制冒险用分支预测。",
            "最大吞吐率 TP_max = 1/Δt。"
          ]
        },
        {
          id: "co-interrupt",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "中断与 DMA",
          hint: "中断救场事事过 CPU，DMA 成批传送绕开 CPU。",
          reveal: [
            { tex: "\\text{中断隐指令：关中断、保存断点、引出服务程序（硬件完成）}", display: true },
            { tex: "\\text{DMA 访存方式：停止 CPU、周期挪用、交替访存}", display: true },
            { tex: "\\text{DMA 传送结束以中断方式报告 CPU}", display: true }
          ],
          holes: ["\\text{关中断、保存断点、引出服务程序}", "\\text{周期挪用}", "\\text{中断}"],
          mask: [
            "\\text{中断隐指令}{{1}}",
            "\\text{DMA：停止 CPU、}{{2}}\\text{、交替访存}",
            "\\text{DMA 结束用}{{3}}\\ \\text{报告}"
          ],
          notes: [
            "多重中断用屏蔽字决定处理优先级。",
            "DMA 预处理与后处理仍由 CPU 完成。"
          ]
        },
        {
          id: "co-ieee-ex",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "IEEE 754 转换",
          problem: "\\text{把 }-13.625\\ \\text{写成 IEEE 754 单精度，给出十六进制结果}",
          idea: "先转二进制规格化成 1.M×2^e，阶码=127+e，再拼 1+8+23 位。",
          steps: [
            { tex: "13.625=1101.101_{2}=1.101101\\times 2^{3}" },
            { tex: "S=1,\\quad E=127+3=130=10000010_{2}" },
            { tex: "\\text{拼接：}1\\ \\vert\\ 10000010\\ \\vert\\ 101101\\ 0\\cdots 0" },
            { tex: "\\text{按 4 位分组：}1100\\ 0001\\ 0101\\ 1010\\ 0000\\cdots" }
          ],
          answer: "\\texttt{C15A0000H}"
        },
        {
          id: "co-cache-hit",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "Cache 平均访问时间",
          problem: "\\text{Cache 命中率 }h=0.96，\\ t_c=10\\,\\text{ns}，\\ t_m=100\\,\\text{ns}，\\text{同时访问，求平均时间}",
          idea: "同时访问时：命中花 tc，不命中花 tm，按命中率加权。",
          steps: [
            { tex: "t_a=h\\cdot t_c+(1-h)\\cdot t_m" },
            { tex: "t_a=0.96\\times 10+0.04\\times 100=9.6+4" }
          ],
          answer: "t_a=13.6\\,\\text{ns}"
        },
        {
          id: "co-bus",
          kind: "cloze",
          freq: 3,
          tier: 1,
          title: "总线仲裁（集中式）",
          hint: "三兄弟：链式、计数器、独立请求。",
          reveal: [
            { tex: "\\text{链式查询：线少、优先级固定、对电路故障敏感}", display: true },
            { tex: "\\text{计数器定时查询：优先级可编程改变，线较多}", display: true },
            { tex: "\\text{独立请求：响应最快，控制线最多}", display: true }
          ],
          holes: ["\\text{固定}", "\\text{可编程}", "\\text{最快}"],
          mask: [
            "\\text{链式优先级}{{1}};\\quad \\text{计数器}{{2}}",
            "\\text{独立请求响应}{{3}}"
          ],
          notes: ["总线带宽=数据线宽度×总线频率。"]
        },
        {
          id: "co-disk",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "磁盘容量与存取时间",
          hint: "容量连乘，时间三段。",
          reveal: [
            { tex: "\\text{容量}=\\text{面数}\\times\\text{每面磁道数}\\times\\text{每道扇区数}\\times\\text{扇区字节数}", display: true },
            { tex: "\\text{平均存取时间}=\\text{寻道时间}+\\text{旋转延迟}+\\text{传输时间}", display: true },
            { tex: "\\text{转速 }r\\ \\text{转/分}\\Rightarrow\\text{平均旋转延迟}=\\tfrac{1}{2}\\times\\tfrac{60}{r}\\ \\text{s}", display: true }
          ],
          holes: ["\\text{扇区字节数}", "\\text{寻道时间}+\\text{旋转延迟}+\\text{传输时间}", "\\tfrac{1}{2}\\times\\tfrac{60}{r}"],
          mask: [
            "\\text{容量=面×道×扇区×}{{1}}",
            "\\text{平均存取}={{2}}",
            "\\text{旋转延迟}={{3}}\\ \\text{s}"
          ],
          notes: ["格式化容量小于非格式化容量（有间隔与标识开销）。"]
        },
        {
          id: "co-cpu",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "CPU 性能指标",
          hint: "CPI 是桥梁，一头指令数一头主频。",
          reveal: [
            { tex: "\\text{CPU 时间}=\\frac{\\text{指令条数}\\times CPI}{\\text{主频}}", display: true },
            { tex: "\\text{MIPS}=\\frac{\\text{主频}}{CPI\\times 10^{6}}", display: true },
            { tex: "CPI=\\sum(\\text{各类指令占比}\\times\\text{该类周期数})", display: true }
          ],
          holes: ["\\frac{\\text{指令条数}\\times CPI}{\\text{主频}}", "\\frac{\\text{主频}}{CPI\\times 10^{6}}", "\\sum(\\text{各类指令占比}\\times\\text{该类周期数})"],
          mask: [
            "\\text{CPU 时间}={{1}}",
            "\\text{MIPS}={{2}}",
            "CPI={{3}}"
          ],
          notes: ["主频=1/时钟周期；同主频下 CPI 越低机器越快。"]
        },
        {
          id: "co-datapath",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "数据通路与控制器",
          hint: "硬布线求快，微程序求稳。",
          reveal: [
            { tex: "\\text{单周期：时钟周期按最慢的指令定；多周期：每步一拍}", display: true },
            { tex: "\\text{硬布线控制器：快但难改；微程序控制器：慢但易扩展}", display: true },
            { tex: "\\text{微指令序列=微程序，存放在控制存储器中}", display: true }
          ],
          holes: ["\\text{最慢的指令}", "\\text{硬布线}", "\\text{微程序}", "\\text{控制存储器}"],
          mask: [
            "\\text{单周期时钟按}{{1}}\\ \\text{定}",
            "{{2}}\\ \\text{快难改；}{{3}}\\ \\text{慢易扩展}",
            "\\text{微程序存在}{{4}}"
          ],
          notes: ["所有指令取指周期相同；间址周期负责访存取有效地址。"]
        },
        {
          id: "co-io",
          kind: "cloze",
          freq: 3,
          tier: 1,
          title: "四种 I/O 控制方式",
          hint: "效率从低到高排一排。",
          reveal: [
            { tex: "\\text{程序查询：CPU 原地死等，效率最低}", display: true },
            { tex: "\\text{程序中断：设备就绪才打断 CPU，按字节}", display: true },
            { tex: "\\text{DMA：成批传送基本不经 CPU；通道：能执行通道程序}", display: true }
          ],
          holes: ["\\text{程序查询}", "\\text{程序中断}", "\\text{DMA}", "\\text{通道}"],
          mask: [
            "{{1}}\\ \\text{效率最低};\\quad {{2}}\\ \\text{就绪才打断}",
            "{{3}}\\ \\text{成批传送};\\quad {{4}}\\ \\text{执行通道程序}"
          ],
          notes: ["效率排序：程序查询 < 中断 < DMA < 通道。"]
        },
        {
          id: "co-memory",
          kind: "cloze",
          freq: 2,
          tier: 2,
          title: "存储器字位扩展",
          hint: "位扩拼宽度，字扩拼容量。",
          reveal: [
            { tex: "\\text{位扩展：扩数据位数，各芯片地址线并联}", display: true },
            { tex: "\\text{字扩展：扩容量，高位地址译码产生片选信号}", display: true },
            { tex: "\\text{芯片数}=\\frac{\\text{目标容量}}{\\text{单片容量}}", display: true }
          ],
          holes: ["\\text{位}", "\\text{字}", "\\text{片选信号}", "\\frac{\\text{目标容量}}{\\text{单片容量}}"],
          mask: [
            "\\text{扩数据位数叫}{{1}}\\ \\text{扩展；扩容量叫}{{2}}\\ \\text{扩展}",
            "\\text{高位地址译码产生}{{3}}",
            "\\text{芯片数}={{4}}"
          ],
          notes: ["字位同时扩展：先位扩展成组，再字扩展成体。"]
        }
      ]
    },
    {
      id: "os",
      no: "三",
      name: "操作系统",
      blurb: "进程 · PV · 死锁 · 存储 · 文件",
      exam: "35 分",
      cards: [
        {
          id: "os-state",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "进程状态转换",
          hint: "三条主转换 + 一条禁令。",
          reveal: [
            { tex: "\\text{运行}\\to\\text{就绪：时间片完或被抢占}", display: true },
            { tex: "\\text{运行}\\to\\text{阻塞：等待某事件；阻塞}\\to\\text{就绪：等待事件完成}", display: true },
            { tex: "\\text{阻塞不能直接进入运行；就绪}\\to\\text{运行靠调度}", display: true }
          ],
          holes: ["\\text{被抢占}", "\\text{等待某事件}", "\\text{等待事件完成}", "\\text{不能}"],
          mask: [
            "\\text{运行}\\to\\text{就绪：时间片完或}{{1}}",
            "\\text{运行}\\to\\text{阻塞：}{{2}};\\quad \\text{阻塞}\\to\\text{就绪：}{{3}}",
            "\\text{阻塞}{{4}}\\ \\text{直接进入运行}"
          ],
          notes: [
            "唤醒只能由别人完成（事件完成方）。",
            "进程切换要保存/恢复 PCB 中的现场。"
          ]
        },
        {
          id: "os-semaphore",
          kind: "cloze",
          freq: 5,
          tier: 3,
          title: "信号量 P/V 操作",
          hint: "P 减一可能睡，V 加一可能唤。",
          reveal: [
            { tex: "P(S):\\ S\\leftarrow S-1;\\ \\text{若 }S<0\\ \\text{则阻塞}", display: true },
            { tex: "V(S):\\ S\\leftarrow S+1;\\ \\text{若 }S\\le 0\\ \\text{则唤醒一个}", display: true },
            { tex: "\\text{初值：互斥}=1;\\quad \\text{资源计数}=n;\\quad \\text{同步（前驱）}=0", display: true }
          ],
          holes: ["S-1", "S<0", "S+1", "S\\le 0", "1", "0"],
          mask: [
            "P:\\ S\\leftarrow {{1}}，{{2}}\\ \\text{则阻塞}",
            "V:\\ S\\leftarrow {{3}}，{{4}}\\ \\text{则唤醒}",
            "\\text{互斥初值}{{5}};\\quad \\text{同步初值}{{6}}"
          ],
          notes: [
            "S<0 时 |S| 等于等待队列中的进程数。",
            "前驱图：每条边一个初值 0 的信号量，前行后 V、后行前 P。"
          ]
        },
        {
          id: "os-pv-classic",
          kind: "cloze",
          freq: 4,
          tier: 3,
          title: "生产者-消费者模板",
          hint: "大题直接套：先 P 资源，再 P 互斥。",
          reveal: [
            { tex: "mutex=1,\\quad empty=n,\\quad full=0", display: true },
            { tex: "\\text{生产者：}P(empty)\\to P(mutex)\\to\\text{放入}\\to V(mutex)\\to V(full)", display: true },
            { tex: "\\text{两个 P 的顺序不能颠倒（先资源后互斥），否则可能死锁}", display: true }
          ],
          holes: ["mutex=1", "empty=n", "full=0", "P(empty)", "P(mutex)", "V(full)", "\\text{不能}"],
          mask: [
            "{{1}},\\quad {{2}},\\quad {{3}}",
            "{{4}}\\to {{5}}\\to\\text{放入}\\to V(mutex)\\to {{6}}",
            "\\text{两个 P 顺序}{{7}}\\ \\text{颠倒}"
          ],
          notes: [
            "消费者对称：P(full)→P(mutex)→取→V(mutex)→V(empty)。",
            "哲学家问题防死锁：至多 n-1 人同时取筷，或左右都空才取。"
          ]
        },
        {
          id: "os-schedule",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "调度算法对比",
          hint: "记谁公平、谁最短、谁会饿。",
          reveal: [
            { tex: "\\text{FCFS：利于长作业；SJF：平均等待最短但可能饥饿}", display: true },
            { tex: "\\text{RR：时间片太大退化为 FCFS，太小切换开销大}", display: true },
            { tex: "\\text{多级反馈队列：时间片逐级加倍，优先级逐级降低}", display: true }
          ],
          holes: ["\\text{饥饿}", "\\text{FCFS}", "\\text{加倍}", "\\text{降低}"],
          mask: [
            "\\text{SJF 可能}{{1}};\\quad \\text{RR 太大退化为}{{2}}",
            "\\text{多级反馈：时间片逐级}{{3}}，\\text{优先级逐级}{{4}}"
          ],
          notes: [
            "高响应比优先：响应比=(等待时间+服务时间)/服务时间。",
            "大题画甘特图，算周转/带权周转/平均等待。"
          ]
        },
        {
          id: "os-deadlock",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "死锁条件与资源下界",
          hint: "四条件缺一不死；资源数有安全下界公式。",
          reveal: [
            { tex: "\\text{必要条件：互斥、占有且等待、不可剥夺、循环等待}", display: true },
            { tex: "n\\ \\text{个进程每个最多要 }k\\ \\text{个同类资源：}m\\ge n(k-1)+1\\ \\text{必不死锁}", display: true },
            { tex: "\\text{处理：预防（破坏条件）}\\to\\text{避免（银行家）}\\to\\text{检测与解除}", display: true }
          ],
          holes: ["\\text{互斥}", "\\text{占有且等待}", "\\text{不可剥夺}", "\\text{循环等待}", "n(k-1)+1"],
          mask: [
            "{{1}}\\text{、}{{2}}\\text{、}{{3}}\\text{、}{{4}}",
            "m\\ge {{5}}\\ \\text{必不死锁}"
          ],
          notes: [
            "安全状态一定无死锁；不安全状态只是可能死锁。",
            "银行家算法：试分配后做一次安全性检查。"
          ]
        },
        {
          id: "os-page",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "分页地址变换",
          hint: "高位页号低位偏移，页表把页号换成块号。",
          reveal: [
            { tex: "p=\\left\\lfloor\\frac{LA}{\\text{页长}}\\right\\rfloor,\\quad d=LA\\bmod\\text{页长}", display: true },
            { tex: "\\text{物理地址}=\\text{块号}b\\times\\text{页长}+d", display: true },
            { tex: "\\text{快表命中访存 }1\\ \\text{次；未命中 }2\\ \\text{次}", display: true }
          ],
          holes: ["\\left\\lfloor\\frac{LA}{\\text{页长}}\\right\\rfloor", "LA\\bmod\\text{页长}", "b\\times\\text{页长}+d", "1", "2"],
          mask: [
            "p={{1}},\\quad d={{2}}",
            "\\text{物理地址}={{3}}",
            "\\text{快表命中}{{4}}\\ \\text{次，未命中}{{5}}\\ \\text{次}"
          ],
          notes: [
            "页长为 2 的幂时：地址高位即页号、低位即偏移。",
            "页表项含块号、存在位、访问位、修改位。"
          ]
        },
        {
          id: "os-page-replace",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "页面置换算法",
          hint: "OPT 是天花板，FIFO 会反常，LRU 看历史。",
          reveal: [
            { tex: "\\text{OPT：换出未来最久不用的页}", display: true },
            { tex: "\\text{FIFO：换最早装入的页，可能出现 Belady 异常}", display: true },
            { tex: "\\text{LRU：换最久未使用的页；CLOCK：访问位 0 换出，1 清 0 再给机会}", display: true }
          ],
          holes: ["\\text{未来最久不用}", "\\text{Belady}", "\\text{最久未使用}", "0"],
          mask: [
            "\\text{OPT 换}{{1}};\\quad \\text{FIFO 有}{{2}}\\ \\text{异常}",
            "\\text{LRU 换}{{3}}",
            "\\text{CLOCK 访问位}{{4}}\\ \\text{换出}"
          ],
          notes: [
            "Belady：物理块变多缺页反而变多，FIFO 独有。",
            "LRU 实现开销大，工程用 CLOCK/改进型 CLOCK 近似。"
          ]
        },
        {
          id: "os-file",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "文件物理结构",
          hint: "索引分配 + 多级间接撑出大文件。",
          reveal: [
            { tex: "\\text{连续分配：支持随机访问，有外部碎片}", display: true },
            { tex: "\\text{链接分配：只能顺序访问；索引分配：直接块+一级/二级间接}", display: true },
            { tex: "\\text{块 }4\\,\\text{KB}、\\text{块号 }4\\,\\text{B}\\Rightarrow\\text{每块 }1K\\ \\text{项；二级间接达 }1K\\times1K\\times4\\,\\text{KB}=4\\,\\text{GB}", display: true }
          ],
          holes: ["\\text{随机}", "\\text{顺序}", "1K\\times1K\\times4\\,\\text{KB}", "4\\,\\text{GB}"],
          mask: [
            "\\text{连续分配支持}{{1}}\\ \\text{访问；链接只能}{{2}}\\ \\text{访问}",
            "\\text{二级间接}{{3}}={{4}}"
          ],
          notes: [
            "408 常考：给块大小与各级地址项数，算最大文件长度。",
            "一级间接先读出索引块，多一次访盘。"
          ]
        },
        {
          id: "os-disk",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "磁盘调度",
          hint: "电梯算法 SCAN，一圈到底才回头。",
          reveal: [
            { tex: "\\text{FCFS 公平但寻道长；SSTF 最短优先但可能饥饿}", display: true },
            { tex: "\\text{SCAN（电梯）：扫到端点才反向；C-SCAN：到端点直接回起点}", display: true },
            { tex: "\\text{平均寻道长度}=\\frac{\\text{总移动磁道数}}{\\text{请求数}}", display: true }
          ],
          holes: ["\\text{饥饿}", "\\text{扫到端点才反向}", "\\text{直接回起点}", "\\frac{\\text{总移动磁道数}}{\\text{请求数}}"],
          mask: [
            "\\text{SSTF 可能}{{1}};\\quad \\text{SCAN}{{2}}",
            "\\text{C-SCAN}{{3}}",
            "\\text{平均寻道长度}={{4}}"
          ],
          notes: [
            "LOOK/C-LOOK：不到物理端点，到最远请求即回头。",
            "磁盘访问时间=寻道时间+旋转延迟+传输时间。"
          ]
        },
        {
          id: "os-banker-ex",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "银行家算法安全性",
          problem: "\\text{资源共 }(9,6)；\\ P0\\ \\text{已占}(2,2)\\ \\text{还需}(1,1)；\\ P1\\ \\text{已占}(2,1)\\ \\text{还需}(2,2)；\\ P2\\ \\text{已占}(1,1)\\ \\text{还需}(2,1)。\\text{安全吗？}",
          idea: "算 Available，然后反复找 Need≤Available 的进程，假设它跑完归还资源。",
          steps: [
            { tex: "Available=(9,6)-(5,4)=(4,2)" },
            { tex: "P0\\ \\text{还需 }(1,1)\\le(4,2)\\Rightarrow\\text{放行，收回后 }(6,4)" },
            { tex: "P1\\ (2,2)\\le(6,4)\\Rightarrow(8,5);\\quad P2\\ (2,1)\\le(8,5)\\Rightarrow(9,6)" }
          ],
          answer: "\\text{安全，一个安全序列：}P0\\to P1\\to P2"
        },
        {
          id: "os-lru-ex",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "FIFO 与 LRU 缺页计算",
          problem: "\\text{物理块 }3\\ \\text{个，引用串 }7,0,1,2,0,3,0,4，\\text{分别求 FIFO 与 LRU 的缺页次数}",
          idea: "FIFO 换最早进来的；LRU 换最久没被引用的，逐格模拟。",
          steps: [
            { tex: "\\text{FIFO：}7^{*}\\ 0^{*}\\ 1^{*}\\ 2^{*}(\\text{换}7)\\ 0\\ 3^{*}(\\text{换}0)\\ 0^{*}(\\text{换}1)\\ 4^{*}(\\text{换}2)" },
            { tex: "\\text{LRU：}7^{*}\\ 0^{*}\\ 1^{*}\\ 2^{*}(\\text{换}7)\\ 0\\ 3^{*}(\\text{换}1)\\ 0\\ 4^{*}(\\text{换}2)" }
          ],
          answer: "\\text{FIFO 缺 }7\\ \\text{次，LRU 缺 }6\\ \\text{次}"
        },
        {
          id: "os-thread",
          kind: "cloze",
          freq: 3,
          tier: 1,
          title: "进程与线程",
          hint: "一个管资源，一个管调度。",
          reveal: [
            { tex: "\\text{进程是资源分配的基本单位；线程是独立调度的基本单位}", display: true },
            { tex: "\\text{同进程线程共享地址空间与打开文件；各有栈和寄存器现场}", display: true },
            { tex: "\\text{线程切换开销小于进程切换}", display: true }
          ],
          holes: ["\\text{资源分配}", "\\text{独立调度}", "\\text{共享}", "\\text{小}"],
          mask: [
            "\\text{进程}{{1}}\\ \\text{单位；线程}{{2}}\\ \\text{单位}",
            "\\text{线程间}{{3}}\\ \\text{地址空间；切换开销更}{{4}}"
          ],
          notes: ["引入线程后，进程退化为资源容器。"]
        },
        {
          id: "os-ipc",
          kind: "cloze",
          freq: 2,
          tier: 1,
          title: "进程通信三方式",
          hint: "共享最快，消息最稳，管道最家常。",
          reveal: [
            { tex: "\\text{共享存储：最快，需配合信号量做互斥}", display: true },
            { tex: "\\text{消息传递：直接通信 / 间接（信箱）通信}", display: true },
            { tex: "\\text{管道：半双工字节流，用于父子进程}", display: true }
          ],
          holes: ["\\text{共享存储}", "\\text{消息传递}", "\\text{管道}"],
          mask: [
            "{{1}}\\ \\text{最快};\\quad {{2}}\\ \\text{过内核}",
            "{{3}}\\ \\text{是半双工字节流}"
          ],
          notes: ["管道写满写者睡，读空读者睡。"]
        },
        {
          id: "os-mutex-hw",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "互斥的软硬件实现",
          hint: "单双标志有坑，硬件指令忙等。",
          reveal: [
            { tex: "\\text{软件：Peterson 算法；单标志会饥饿、双标志可能死锁}", display: true },
            { tex: "\\text{硬件：关中断、TestAndSet 指令、Swap 指令}", display: true },
            { tex: "\\text{TS/Swap 实现简单但忙等，违反让权等待}", display: true }
          ],
          holes: ["\\text{Peterson}", "\\text{TestAndSet}", "\\text{忙等}", "\\text{让权等待}"],
          mask: [
            "\\text{软件}{{1}};\\quad \\text{硬件关中断、}{{2}}",
            "{{3}}\\ \\text{违反}{{4}}"
          ],
          notes: ["关中断不适合多处理机，也不能下放给用户进程。"]
        },
        {
          id: "os-segment",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "分段与段页式",
          hint: "页对系统，段对人。",
          reveal: [
            { tex: "\\text{页是信息的物理单位，定长，对用户透明}", display: true },
            { tex: "\\text{段是逻辑单位，变长，用户可见；段表项=基址+段长}", display: true },
            { tex: "\\text{段页式：作业先分段、段内再分页；地址=段号+页号+页内偏移}", display: true }
          ],
          holes: ["\\text{物理}", "\\text{逻辑}", "\\text{基址}+\\text{段长}", "\\text{段号}+\\text{页号}+\\text{页内偏移}"],
          mask: [
            "\\text{页}{{1}}\\ \\text{单位定长；段}{{2}}\\ \\text{单位变长}",
            "\\text{段表项}={{3}}",
            "\\text{段页式地址}={{4}}"
          ],
          notes: ["分页有内部碎片无外部碎片；分段恰好相反。"]
        },
        {
          id: "os-frag",
          kind: "cloze",
          freq: 3,
          tier: 1,
          title: "动态分区分配与碎片",
          hint: "首次适应快，最佳适应碎。",
          reveal: [
            { tex: "\\text{首次适应：从头找第一个够大的空闲区}", display: true },
            { tex: "\\text{最佳适应：找最小的够用区，留下大量难用小碎片}", display: true },
            { tex: "\\text{外部碎片可用紧凑消除，需动态重定位支持}", display: true }
          ],
          holes: ["\\text{首次适应}", "\\text{最佳适应}", "\\text{紧凑}", "\\text{动态重定位}"],
          mask: [
            "{{1}}\\ \\text{从头找};\\quad {{2}}\\ \\text{留小碎}",
            "\\text{外部碎片用}{{3}}\\ \\text{消除，要}{{4}}\\ \\text{支持}"
          ],
          notes: ["内部碎片=分到手却用不完的部分，分页式才有。"]
        },
        {
          id: "os-spool",
          kind: "cloze",
          freq: 2,
          tier: 2,
          title: "SPOOLing 与缓冲",
          hint: "磁盘挖两口井，独占变共享。",
          reveal: [
            { tex: "\\text{SPOOLing：磁盘输入井/输出井模拟脱机，独占设备变共享设备}", display: true },
            { tex: "\\text{打印机例：进程只写输出井，守护进程慢慢打}", display: true },
            { tex: "\\text{缓冲：单缓冲、双缓冲、循环缓冲、缓冲池，平滑速度差}", display: true }
          ],
          holes: ["\\text{输入井/输出井}", "\\text{共享}", "\\text{缓冲池}"],
          mask: [
            "\\text{SPOOLing 用}{{1}}，\\text{独占变}{{2}}",
            "\\text{缓冲最高形式是}{{3}}"
          ],
          notes: ["SPOOLing 提高了利用率，实现了虚拟设备。"]
        },
        {
          id: "os-ex-schedule",
          kind: "example",
          freq: 3,
          tier: 2,
          title: "SJF 平均周转时间",
          problem: "\\text{三作业同时到达，运行时间 }6,2,4。\\text{单道批处理按 SJF，求平均周转时间}",
          idea: "SJF 短的先跑：顺序 2→4→6，逐个算完成时刻再平均。",
          steps: [
            { tex: "\\text{完成时刻：}2,\\quad 2+4=6,\\quad 6+6=12" },
            { tex: "\\text{平均周转}=\\frac{2+6+12}{3}=\\frac{20}{3}" }
          ],
          answer: "\\frac{20}{3}\\approx 6.67"
        }
      ]
    },
    {
      id: "cn",
      no: "四",
      name: "计算机网络",
      blurb: "分层 · 速率 · IP · TCP",
      exam: "25 分",
      cards: [
        {
          id: "cn-layers",
          kind: "cloze",
          freq: 5,
          tier: 1,
          title: "OSI 与 TCP/IP 分层",
          hint: "层名、顺序、设备归属三件事。",
          reveal: [
            { tex: "\\text{OSI：物理}\\to\\text{数据链路}\\to\\text{网络}\\to\\text{传输}\\to\\text{会话}\\to\\text{表示}\\to\\text{应用}", display: true },
            { tex: "\\text{TCP/IP：网络接口}\\to\\text{网际}\\to\\text{传输}\\to\\text{应用}", display: true },
            { tex: "\\text{集线器=物理层；交换机=链路层；路由器=网络层}", display: true }
          ],
          holes: ["\\text{数据链路}", "\\text{网络}", "\\text{传输}", "\\text{应用}", "\\text{物理}", "\\text{链路}", "\\text{网络}"],
          mask: [
            "\\text{OSI：物理}\\to{{1}}\\to{{2}}\\to{{3}}\\to\\text{会话}\\to\\text{表示}\\to{{4}}",
            "\\text{集线器}{{5}}\\ \\text{层；交换机}{{6}}\\ \\text{层；路由器}{{7}}\\ \\text{层}"
          ],
          notes: [
            "端到端靠传输层；点到点靠链路层。",
            "IP/ICMP/ARP 在网际层；TCP/UDP 在传输层。"
          ]
        },
        {
          id: "cn-nyquist",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "奈奎斯特与香农公式",
          hint: "一个无噪看电平，一个有噪看信噪比。",
          reveal: [
            { tex: "\\text{奈奎斯特：}C=2W\\log_2 V\\ \\text{(b/s)}", display: true },
            { tex: "\\text{香农：}C=W\\log_2(1+S/N)", display: true },
            { tex: "\\text{信噪比（dB）}=10\\log_{10}(S/N)", display: true }
          ],
          holes: ["2W\\log_2 V", "W\\log_2(1+S/N)", "10\\log_{10}(S/N)"],
          mask: [
            "\\text{奈氏：}C={{1}}",
            "\\text{香农：}C={{2}}",
            "\\text{dB}={{3}}"
          ],
          notes: [
            "V 为码元离散电平数；实际极限取两式较小者。",
            "码元速率上限 2W 波特，与电平数无关。"
          ]
        },
        {
          id: "cn-csmacd",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "CSMA/CD 与最短帧长",
          hint: "听到碰撞的最晚时刻是 2τ。",
          reveal: [
            { tex: "\\text{争用期}=2\\tau\\ \\text{（以太网取 }51.2\\,\\mu\\text{s}）", display: true },
            { tex: "\\text{最短帧长}=2\\tau\\times\\text{发送速率；}10\\,\\text{Mb/s}\\ \\text{下为 }64\\,\\text{B}", display: true },
            { tex: "\\text{二进制指数退避：}k=\\min(\\text{重传次数},10),\\ r\\in[0,2^{k}-1]\\ \\text{个争用期}", display: true }
          ],
          holes: ["2\\tau", "2\\tau\\times\\text{发送速率}", "64\\,\\text{B}", "\\min(\\text{重传次数},10)"],
          mask: [
            "\\text{争用期}={{1}};\\quad \\text{最短帧长}={{2}}",
            "\\text{最短帧}{{3}};\\quad k={{4}}"
          ],
          notes: [
            "不足 64B 的帧视为冲突碎片直接丢弃。",
            "无线局域网用 CSMA/CA：不能边发边听，改为避免冲突。"
          ]
        },
        {
          id: "cn-window",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "滑动窗口 GBN 与 SR",
          hint: "窗口上限和序号位数绑死。",
          reveal: [
            { tex: "\\text{GBN（}n\\ \\text{位序号）：发送窗 }\\le 2^{n}-1,\\ \\text{接收窗 }=1", display: true },
            { tex: "\\text{SR：发送窗、接收窗均 }\\le 2^{n-1}", display: true },
            { tex: "\\text{停等利用率 }U=\\frac{T_D}{T_D+RTT+T_A}", display: true }
          ],
          holes: ["2^{n}-1", "1", "2^{n-1}", "\\frac{T_D}{T_D+RTT+T_A}"],
          mask: [
            "\\text{GBN 发送窗}\\le{{1}}，\\text{接收窗}={{2}}",
            "\\text{SR 两窗均}\\le{{3}}",
            "U={{4}}"
          ],
          notes: [
            "GBN 出错回退 N 帧全部重传；SR 只重传出错帧。",
            "窗口过小则信道利用率上不去。"
          ]
        },
        {
          id: "cn-subnet",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "子网划分与 CIDR",
          hint: "掩码切主机位，聚合取共同前缀。",
          reveal: [
            { tex: "\\text{可用主机数}=2^{h}-2\\ (h=\\text{主机位数})", display: true },
            { tex: "\\text{/}26\\Rightarrow\\text{掩码 }255.255.255.192，\\text{每子网可用 }62\\ \\text{台}", display: true },
            { tex: "\\text{CIDR 聚合取共同前缀；查表遵循最长前缀匹配}", display: true }
          ],
          holes: ["2^{h}-2", "255.255.255.192", "62", "\\text{共同前缀}", "\\text{最长前缀匹配}"],
          mask: [
            "\\text{可用主机}={{1}}",
            "\\text{/}26\\Rightarrow {{2}}，\\text{可用}{{3}}\\ \\text{台}",
            "\\text{聚合取}{{4}}；\\text{查表}{{5}}"
          ],
          notes: [
            "全 0 主机号=网络地址，全 1=广播地址，不可分配。",
            "私有地址段：10/8、172.16/12、192.168/16。"
          ]
        },
        {
          id: "cn-routing",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "RIP、OSPF、BGP 对比",
          hint: "距离向量、链路状态、路径向量各一词。",
          reveal: [
            { tex: "\\text{RIP：距离向量，跳数 }\\le 15，\\ 16=\\infty，\\text{UDP }520，\\text{每 }30\\,\\text{s}\\ \\text{交换全表}", display: true },
            { tex: "\\text{OSPF：链路状态，Dijkstra 算法，直接用 IP 封装，分区域}", display: true },
            { tex: "\\text{BGP：路径向量，TCP }179，eBGP\\ \\text{对外、}iBGP\\ \\text{对内}", display: true }
          ],
          holes: ["15", "16", "\\text{链路状态}", "\\text{Dijkstra}", "179"],
          mask: [
            "\\text{RIP 跳数}\\le{{1}}，{{2}}=\\infty",
            "\\text{OSPF}{{3}}\\ \\text{型，用}{{4}}",
            "\\text{BGP 用 TCP}{{5}}"
          ],
          notes: [
            "RIP 慢收敛：好消息传得快，坏消息传得慢。",
            "OSPF 用洪泛法同步 LSA，同区域数据库一致。"
          ]
        },
        {
          id: "cn-tcp-shake",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "TCP 三次握手与四次挥手",
          hint: "ack 永远是期望收到的下一字节。",
          reveal: [
            { tex: "\\text{握手：}SYN,seq=x\\ \\to\\ SYN,ACK,seq=y,ack=x+1\\ \\to\\ ACK,seq=x+1,ack=y+1", display: true },
            { tex: "\\text{挥手：}FIN\\to ACK\\to FIN\\to ACK;\\quad \\text{TIME\\_WAIT}=2\\,\\text{MSL}", display: true }
          ],
          holes: ["x+1", "y+1", "2\\,\\text{MSL}"],
          mask: [
            "\\text{第二次握手 }ack={{1}}，\\text{第三次 }ack={{2}}",
            "\\text{TIME\\_WAIT}={{3}}"
          ],
          notes: [
            "SYN 与 FIN 各占一个序号；纯 ACK 不占。",
            "2MSL 是为了让最后的 ACK 丢失时能等到重传 FIN。"
          ]
        },
        {
          id: "cn-congestion",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "TCP 拥塞控制",
          hint: "慢开始指数爬，超时回 1，快恢复腰斩。",
          reveal: [
            { tex: "\\text{慢开始：cwnd 每 RTT 翻倍；拥塞避免：每 RTT 加 }1", display: true },
            { tex: "\\text{超时：}ssthresh=cwnd/2,\\ cwnd=1，\\text{重新慢开始}", display: true },
            { tex: "\\text{快重传：3 个冗余 ACK 立即重传；快恢复：}cwnd=ssthresh=cwnd/2", display: true }
          ],
          holes: ["\\text{翻倍}", "cwnd/2", "1", "3", "cwnd=ssthresh=cwnd/2"],
          mask: [
            "\\text{慢开始每 RTT}{{1}}",
            "\\text{超时 }ssthresh={{2}}，cwnd={{3}}",
            "\\text{快重传}{{4}}\\ \\text{个冗余 ACK；快恢复}{{5}}"
          ],
          notes: [
            "cwnd 图像：超时跌回 1，快恢复跌到一半，锯齿上升。",
            "实际发送窗口 = min(cwnd, rwnd)。"
          ]
        },
        {
          id: "cn-dns-http",
          kind: "cloze",
          freq: 4,
          tier: 1,
          title: "DNS、HTTP 与常见端口",
          hint: "端口号和查询方式是小题高频。",
          reveal: [
            { tex: "\\text{DNS：UDP }53\\ \\text{（区域传送 TCP 53）；主机侧递归，本地侧迭代}", display: true },
            { tex: "\\text{HTTP：TCP }80；\\text{持续连接可复用同一连接}", display: true },
            { tex: "\\text{FTP：控制 }21\\ \\text{数据 }20;\\quad \\text{SMTP 推、POP3 拉}", display: true }
          ],
          holes: ["53", "\\text{递归}", "\\text{迭代}", "80", "21", "20"],
          mask: [
            "\\text{DNS UDP}{{1}}；\\text{主机}{{2}}\\ \\text{查询，本地}{{3}}\\ \\text{查询}",
            "\\text{HTTP TCP}{{4}};\\quad \\text{FTP 控制}{{5}}\\ \\text{数据}{{6}}"
          ],
          notes: [
            "递归=替我问到底；迭代=告诉我下一步问谁。",
            "HTTP/1.1 默认持续连接，支持流水线。"
          ]
        },
        {
          id: "cn-shannon-ex",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "香农公式求极限速率",
          problem: "\\text{带宽 }W=3000\\,\\text{Hz}，\\text{信噪比 }30\\,\\text{dB}，\\text{求极限信息速率}",
          idea: "先把 dB 换成 S/N 真值，再代香农公式。",
          steps: [
            { tex: "30=10\\log_{10}(S/N)\\ \\Rightarrow\\ S/N=10^{3}=1000" },
            { tex: "C=3000\\times\\log_2(1+1000)\\approx 3000\\times 9.97" }
          ],
          answer: "C\\approx 30\\,\\text{kb/s}"
        },
        {
          id: "cn-subnet-ex",
          kind: "example",
          freq: 4,
          tier: 2,
          title: "求网络地址与可用范围",
          problem: "\\text{主机 }192.168.10.130\\text{/}26，\\text{求网络地址、广播地址与可用主机范围}",
          idea: "/26 主机位 6 位，块大小 64，看末字节落在哪个 64 的区间。",
          steps: [
            { tex: "\\text{块大小}=2^{6}=64;\\quad 130\\in[128,191]" },
            { tex: "\\text{网络地址 }192.168.10.128;\\quad \\text{广播地址 }192.168.10.191" },
            { tex: "\\text{可用 }192.168.10.129\\sim 192.168.10.190" }
          ],
          answer: "\\text{网络 }.128，\\text{广播 }.191，\\text{可用 }62\\ \\text{台}"
        },
        {
          id: "cn-mac",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "以太网帧与交换机",
          hint: "帧长上下界 + 自学习转发规则。",
          reveal: [
            { tex: "\\text{以太网帧：目的 MAC、源 MAC、类型、数据、FCS；长 }64\\sim 1518\\,\\text{B}", display: true },
            { tex: "\\text{交换机自学习：按源地址登记端口；按目的地址定向转发}", display: true },
            { tex: "\\text{未知目的或广播帧：向其余端口泛洪}", display: true }
          ],
          holes: ["\\text{源 MAC}", "64\\sim 1518\\,\\text{B}", "\\text{源地址}", "\\text{泛洪}"],
          mask: [
            "\\text{帧含目的 MAC、}{{1}}\\text{、类型、数据、FCS}",
            "\\text{帧长}{{2}};\\quad \\text{学习时登记}{{3}}",
            "\\text{未知目的}{{4}}"
          ],
          notes: ["集线器不学习，收到就广播，是一个冲突域；交换机每端口一个冲突域。"]
        },
        {
          id: "cn-ip-head",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "IP 首部与分片",
          hint: "长度单位各不同：4B、1B、8B。",
          reveal: [
            { tex: "\\text{首部长度单位 }4\\,\\text{B}，\\text{字段值 }5\\Rightarrow 20\\,\\text{B}", display: true },
            { tex: "\\text{总长度单位 }1\\,\\text{B}；\\text{片偏移单位 }8\\,\\text{B}；MF=1\\ \\text{后面还有片}", display: true },
            { tex: "\\text{协议字段：TCP}=6,\\ UDP=17;\\quad TTL\\ \\text{每跳减 }1", display: true }
          ],
          holes: ["4\\,\\text{B}", "20\\,\\text{B}", "8\\,\\text{B}", "6", "17"],
          mask: [
            "\\text{首部长度单位}{{1}}，\\text{最小}{{2}}",
            "\\text{片偏移单位}{{3}}",
            "\\text{TCP}={{4}},\\ UDP={{5}}"
          ],
          notes: ["分片只在最终目的主机重组；DF=1 不允许分片。"]
        },
        {
          id: "cn-arp",
          kind: "cloze",
          freq: 3,
          tier: 1,
          title: "ARP、NAT 与 DHCP",
          hint: "三个打杂协议，小题常合体。",
          reveal: [
            { tex: "\\text{ARP：IP}\\to\\text{MAC，广播请求、单播应答}", display: true },
            { tex: "\\text{NAT：私有地址}\\leftrightarrow\\text{公网地址；改端口叫 NAPT}", display: true },
            { tex: "\\text{DHCP：动态分配 IP，基于 UDP}", display: true }
          ],
          holes: ["\\text{MAC}", "\\text{广播}", "\\text{NAPT}", "\\text{UDP}"],
          mask: [
            "\\text{ARP 解}{{1}}，{{2}}\\ \\text{请求}",
            "\\text{改端口叫}{{3}};\\quad \\text{DHCP 基于}{{4}}"
          ],
          notes: ["跨网段通信时，目的 MAC 填的是网关的 MAC。"]
        },
        {
          id: "cn-udp",
          kind: "cloze",
          freq: 2,
          tier: 1,
          title: "TCP 与 UDP 对比",
          hint: "首部 20 对 8，可靠对尽力。",
          reveal: [
            { tex: "\\text{TCP：面向连接、可靠、字节流，首部 }20\\,\\text{B}", display: true },
            { tex: "\\text{UDP：无连接、尽最大努力、按报文发，首部 }8\\,\\text{B}", display: true },
            { tex: "\\text{实时音视频、DNS 用 UDP；文件传输用 TCP}", display: true }
          ],
          holes: ["\\text{字节流}", "20\\,\\text{B}", "8\\,\\text{B}", "\\text{UDP}"],
          mask: [
            "\\text{TCP}{{1}}，\\text{首部}{{2}}",
            "\\text{UDP 首部}{{3}};\\quad \\text{实时应用选}{{4}}"
          ],
          notes: ["UDP 要可靠得靠应用层自己加确认重传。"]
        },
        {
          id: "cn-email",
          kind: "cloze",
          freq: 2,
          tier: 1,
          title: "电子邮件与 WWW",
          hint: "SMTP 只管推，拉取另有人。",
          reveal: [
            { tex: "\\text{发件 SMTP（推，TCP 25）；收件 POP3 或 IMAP（拉）}", display: true },
            { tex: "\\text{MIME：扩展非 ASCII 内容与附件}", display: true },
            { tex: "\\text{URL}=\\text{协议}://\\text{主机}:\\text{端口}/\\text{路径}", display: true }
          ],
          holes: ["\\text{SMTP}", "\\text{POP3 或 IMAP}", "\\text{MIME}", "\\text{协议}://\\text{主机}:\\text{端口}/\\text{路径}"],
          mask: [
            "\\text{发件}{{1}}\\ \\text{推；收件}{{2}}\\ \\text{拉}",
            "{{3}}\\ \\text{传附件}",
            "\\text{URL}={{4}}"
          ],
          notes: ["SMTP 只能传 7 位 ASCII，附件靠 MIME 编码。"]
        },
        {
          id: "cn-manchester",
          kind: "cloze",
          freq: 2,
          tier: 1,
          title: "编码与物理层设备",
          hint: "曼彻斯特一比特一跳，自带时钟。",
          reveal: [
            { tex: "\\text{曼彻斯特：每比特中间都有跳变，自带时钟，10BASE-T 采用}", display: true },
            { tex: "\\text{差分曼彻斯特：看码元起点有无跳变区分 }0/1", display: true },
            { tex: "\\text{中继器/集线器：再生放大信号，属物理层}", display: true }
          ],
          holes: ["\\text{中间都有跳变}", "\\text{有无跳变}", "\\text{物理}"],
          mask: [
            "\\text{曼彻斯特}{{1}};\\quad \\text{差分看}{{2}}",
            "\\text{集线器属}{{3}}\\ \\text{层}"
          ],
          notes: ["曼彻斯特波特率是比特率的 2 倍，编码效率 50%。"]
        },
        {
          id: "cn-ex-window",
          kind: "example",
          freq: 3,
          tier: 2,
          title: "停等信道利用率",
          problem: "\\text{帧长 }1000\\,\\text{B}，\\text{速率 }10\\,\\text{Mb/s}，RTT=20\\,\\text{ms}，\\text{停等协议忽略确认帧，求利用率}",
          idea: "利用率 = 发一帧的时间 ÷ 一个完整周期（发送+往返）。",
          steps: [
            { tex: "T_D=\\frac{1000\\times 8}{10^{7}}=0.8\\,\\text{ms}" },
            { tex: "U=\\frac{T_D}{T_D+RTT}=\\frac{0.8}{0.8+20}" }
          ],
          answer: "U\\approx 3.8\\%"
        }
      ]
    },
    {
      id: "master",
      no: "五",
      name: "考点全表",
      blurb: "全部 408 考点 · 按档位过一遍",
      exam: "考前必过",
      virtual: true,
      cards: []
    },
    {
      id: "code",
      no: "六",
      name: "代码模板",
      blurb: "数据结构大题手写 C 代码",
      exam: "大题 15 分",
      soft: true,
      cards: [
        {
          id: "code-partition",
          kind: "cloze",
          freq: 5,
          tier: 3,
          title: "快速排序 partition",
          hint: "408 大题御用划分：基准先收好，双针向中间夹。",
          reveal: [
            { tex: "\\texttt{int partition(int a[], int l, int r) \\{}", display: true },
            { tex: "\\texttt{\\ \\ int x = a[l], i = l, j = r;}", display: true },
            { tex: "\\texttt{\\ \\ while (i < j) \\{}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ while (i < j \\&\\& a[j] >= x) j -= 1;}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ while (i < j \\&\\& a[i] <= x) i += 1;}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ if (i < j) swap(a[i], a[j]);}", display: true },
            { tex: "\\texttt{\\ \\ \\}}", display: true },
            { tex: "\\texttt{\\ \\ a[l] = a[i]; a[i] = x;}", display: true },
            { tex: "\\texttt{\\ \\ return i;}", display: true },
            { tex: "\\texttt{\\}}", display: true }
          ],
          holes: [
            "\\texttt{x = a[l]}",
            "\\texttt{a[j] >= x}",
            "\\texttt{a[i] <= x}",
            "\\texttt{swap(a[i], a[j]);}",
            "\\texttt{a[i] = x}"
          ],
          mask: [
            "\\texttt{int}{{1}}\\texttt{, i = l, j = r;}",
            "\\texttt{while (i < j \\&\\&}{{2}}\\texttt{) j -= 1;}",
            "\\texttt{while (i < j \\&\\&}{{3}}\\texttt{) i += 1;}",
            "\\texttt{if (i < j)}{{4}}",
            "\\texttt{a[l] = a[i];}{{5}}"
          ],
          notes: [
            "右针先动找小、左针后动找大，相等也要继续走（防死循环）。",
            "一趟划分后基准归位，左右递归。"
          ]
        },
        {
          id: "code-bsearch",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "二分查找（闭区间版）",
          hint: "不变量：答案永远在 [l, r] 里。",
          reveal: [
            { tex: "\\texttt{int bsearch(int a[], int n, int key) \\{}", display: true },
            { tex: "\\texttt{\\ \\ int l = 0, r = n - 1;}", display: true },
            { tex: "\\texttt{\\ \\ while (l <= r) \\{}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ int mid = (l + r) / 2;}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ if (a[mid] == key) return mid;}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ if (a[mid] < key) l = mid + 1;}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ else r = mid - 1;}", display: true },
            { tex: "\\texttt{\\ \\ \\}}", display: true },
            { tex: "\\texttt{\\ \\ return -1;}", display: true },
            { tex: "\\texttt{\\}}", display: true }
          ],
          holes: ["\\texttt{l <= r}", "\\texttt{(l + r) / 2}", "\\texttt{l = mid + 1}", "\\texttt{r = mid - 1}"],
          mask: [
            "\\texttt{while (}{{1}}\\texttt{) \\{}",
            "\\texttt{int mid =}{{2}}\\texttt{;}",
            "{{3}}\\texttt{;}",
            "{{4}}\\texttt{;}"
          ],
          notes: [
            "闭区间写法：while 带等号，收缩时 mid±1。",
            "防溢出写法：mid = l + (r - l) / 2。"
          ]
        },
        {
          id: "code-reverse",
          kind: "cloze",
          freq: 5,
          tier: 2,
          title: "单链表逆置（三指针）",
          hint: "先存后继，再掉头，最后整体前移。",
          reveal: [
            { tex: "\\texttt{ListNode* reverse(ListNode* head) \\{}", display: true },
            { tex: "\\texttt{\\ \\ ListNode *pre = NULL, *cur = head, *nxt;}", display: true },
            { tex: "\\texttt{\\ \\ while (cur != NULL) \\{}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ nxt = cur->next;}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ cur->next = pre;}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ pre = cur;}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ cur = nxt;}", display: true },
            { tex: "\\texttt{\\ \\ \\}}", display: true },
            { tex: "\\texttt{\\ \\ return pre;}", display: true },
            { tex: "\\texttt{\\}}", display: true }
          ],
          holes: [
            "\\texttt{nxt = cur->next;}",
            "\\texttt{cur->next = pre;}",
            "\\texttt{pre = cur;}",
            "\\texttt{cur = nxt;}",
            "\\texttt{return pre;}"
          ],
          mask: ["{{1}}", "{{2}}", "{{3}}", "{{4}}", "{{5}}"],
          notes: [
            "四步铁律：存后继 → 反转指向 → pre 前移 → cur 前移。",
            "头插法逆置与之一脉相承，考场二选一。"
          ]
        },
        {
          id: "code-tree",
          kind: "cloze",
          freq: 4,
          tier: 1,
          title: "二叉树先序遍历（递归）",
          hint: "大题常在遍历骨架里塞统计逻辑。",
          reveal: [
            { tex: "\\texttt{void preorder(BiTree t) \\{}", display: true },
            { tex: "\\texttt{\\ \\ if (t == NULL) return;}", display: true },
            { tex: "\\texttt{\\ \\ visit(t);}", display: true },
            { tex: "\\texttt{\\ \\ preorder(t->lchild);}", display: true },
            { tex: "\\texttt{\\ \\ preorder(t->rchild);}", display: true },
            { tex: "\\texttt{\\}}", display: true }
          ],
          holes: [
            "\\texttt{if (t == NULL) return;}",
            "\\texttt{visit(t);}",
            "\\texttt{preorder(t->lchild);}",
            "\\texttt{preorder(t->rchild);}"
          ],
          mask: ["{{1}}", "{{2}}", "{{3}}", "{{4}}"],
          notes: [
            "中序：visit 挪到两次递归之间；后序：挪到最后。",
            "非递归版本统一用栈；层次遍历用队列。"
          ]
        },
        {
          id: "code-uf",
          kind: "cloze",
          freq: 4,
          tier: 2,
          title: "并查集（路径压缩）",
          hint: "find 一路认祖，顺手把祖先换成根。",
          reveal: [
            { tex: "\\texttt{int fa[N];\\ \\ // 初始化 fa[i] = i}", display: true },
            { tex: "\\texttt{int find(int x) \\{}", display: true },
            { tex: "\\texttt{\\ \\ if (fa[x] != x) fa[x] = find(fa[x]);}", display: true },
            { tex: "\\texttt{\\ \\ return fa[x];}", display: true },
            { tex: "\\texttt{\\}}", display: true },
            { tex: "\\texttt{void uni(int x, int y) \\{ fa[find(x)] = find(y); \\}}", display: true }
          ],
          holes: [
            "\\texttt{fa[x] != x}",
            "\\texttt{fa[x] = find(fa[x]);}",
            "\\texttt{return fa[x];}",
            "\\texttt{fa[find(x)] = find(y);}"
          ],
          mask: [
            "\\texttt{if (}{{1}}\\texttt{)}",
            "{{2}}",
            "{{3}}",
            "{{4}}"
          ],
          notes: [
            "路径压缩后查找近似 O(1)。",
            "Kruskal 判环、连通块计数都靠它。"
          ]
        },
        {
          id: "code-dijkstra",
          kind: "cloze",
          freq: 3,
          tier: 2,
          title: "Dijkstra 主循环",
          hint: "每轮三件事：选最小、标确定、松弛邻边。",
          reveal: [
            { tex: "\\texttt{for (int k = 0; k < n; k += 1) \\{}", display: true },
            { tex: "\\texttt{\\ \\ u = argmin\\_unvisited\\_dist();}", display: true },
            { tex: "\\texttt{\\ \\ vis[u] = 1;}", display: true },
            { tex: "\\texttt{\\ \\ for each v:\\ \\ if (dist[u] + w[u][v] < dist[v])}", display: true },
            { tex: "\\texttt{\\ \\ \\ \\ dist[v] = dist[u] + w[u][v];}", display: true },
            { tex: "\\texttt{\\}}", display: true }
          ],
          holes: [
            "\\texttt{vis[u] = 1;}",
            "\\texttt{dist[u] + w[u][v] < dist[v]}",
            "\\texttt{dist[v] = dist[u] + w[u][v];}"
          ],
          mask: [
            "{{1}}",
            "\\texttt{if (}{{2}}\\texttt{)}",
            "{{3}}"
          ],
          notes: [
            "不能处理负权边；负权换 Bellman-Ford/SPFA。",
            "堆优化后 O(e log n)；path[] 数组记录前驱可还原路径。"
          ]
        }
      ]
    }
  ]
};
