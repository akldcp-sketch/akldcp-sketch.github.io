/* ============================================
   i18n.js - 中英双语切换（v1.0.0）
   用法：HTML 元素加 data-i18n="key"，文本放 <span data-i18n="key">
   或 data-i18n-attr="placeholder:key"
   切换按钮：<button data-i18n-toggle> 自动切换并更新文案
   ============================================ */
(function () {
  var DICT = {
    // ---- 导航 ----
    "nav.home": { zh: "首页", en: "Home" },
    "nav.about": { zh: "关于", en: "About" },
    "nav.work": { zh: "作品集", en: "Work" },
    "nav.blog": { zh: "最新文章", en: "Latest" },
    "nav.business": { zh: "商业思维", en: "Business Thinking" },
    "nav.aiSkill": { zh: "AI技能包实战", en: "AI Skill Practice" },
    "nav.archive": { zh: "文汇", en: "Archive" },
    "nav.faq": { zh: "常见问题", en: "FAQ" },
    "nav.newsletter": { zh: "订阅", en: "Subscribe" },
    "nav.contact": { zh: "联系", en: "Contact" },
    "lang.btn": { zh: "EN", en: "中文" },
    "theme.toggle": { zh: "切换明暗主题", en: "Toggle light/dark theme" },
    "logo": { zh: "扶摇", en: "FY·XM" },

    // ---- 页脚 ----
    "footer.copyright": { zh: "© 2026 扶摇 · Powered by GitHub Pages", en: "© 2026 Fuyao · Powered by GitHub Pages" },

    // ---- 首页 hero ----
    "hero.eyebrow": { zh: "商业操盘手 · 技能包工程负责人", en: "Business Operator · AI Skill Pack Engineer" },
    "hero.title1": { zh: "让电商业务", en: "Scaling e-commerce operations" },
    "hero.run": { zh: "跑得", en: "go" },
    "hero.title2": { zh: "更快、更稳、更省人", en: "Faster, Steadier, Leaner" },
    "hero.sub": { zh: "专注国内 + 跨境多平台商业操盘，覆盖 9+ 国内平台与海外多平台，用 AI 技能包把重复工作自动化，让团队把时间花在增长上。", en: "Operating multi-platform e-commerce across 9+ domestic platforms and multiple overseas marketplaces, using AI skill packs to automate repetitive work so the team can focus on growth." },
    "hero.btn1": { zh: "看作品", en: "View Work" },
    "hero.btn2": { zh: "联系我", en: "Contact" },

    // ---- 首页数据卡 ----
    "stat.team": { zh: "团队规模", en: "Team Size" },
    "stat.shops": { zh: "店铺矩阵", en: "Store Matrix" },
    "stat.skills": { zh: "AI 技能包", en: "AI Skill Packs" },

    // ---- 首页核心能力 ----
    "cap.title": { zh: "核心能力", en: "Core Capabilities" },
    "cap1.title": { zh: "商业操盘", en: "Business Operations" },
    "cap1.desc": { zh: "抖音/天猫/京东/拼多多 + Amazon/TikTok 等跨境平台，国内海外 50/50 布局，年 GMV 已实现超千万美元。", en: "Douyin/Tmall/JD/PDD + Amazon/TikTok and more, 50/50 domestic & overseas, annual GMV now over USD 10 million." },
    "cap2.title": { zh: "AI 技能包工程", en: "AI Skill Pack Engineering" },
    "cap2.desc": { zh: "投流计划、达人分析、视觉生产、数据看板……把运营知识沉淀为可复用的 AI 技能，零基础同事一键使用。", en: "Ad planning, influencer analytics, visual production, dashboards... packaging operational know-how into reusable AI skills anyone can use." },
    "cap3.title": { zh: "数据驱动决策", en: "Data-Driven Decisions" },
    "cap3.desc": { zh: "ERP 数据中台、店铺看板、库存监控、低价预警，用数据代替拍脑袋。", en: "ERP data platform, store dashboards, inventory monitoring, price alerts — decisions backed by data, not gut feel." },

    // ---- 首页个人成长时间轴 ----
    "journey.title": { zh: "个人成长时间轴", en: "Growth Timeline" },
    "journey.tl1.date": { zh: "2026.06 - 至今", en: "2026.06 - Now" },
    "journey.tl1.tag": { zh: "现在", en: "Now" },
    "journey.tl1.title": { zh: "集团电商运营负责人 · 南京万世康伦体育用品有限公司", en: "Group Business Ops Lead · Nanjing Wanshi Kangllen Sports Goods" },
    "journey.tl1.desc": { zh: "搭建 15 人 6 岗电商团队与 49 店矩阵，主打品牌进入亚马逊 5 站类目榜（日 #5 / 德 #8 / 美 #11 / 加 #11），国内外业务向 50/50 调整。", en: "Built a 15-person, 6-role team and a 49-store matrix; flagship brands charted on Amazon category lists across 5 marketplaces (JP #5 / DE #8 / US #11 / CA #11); rebalancing domestic/overseas toward 50/50." },
    "journey.tl2.date": { zh: "2018.10 - 2025.10 · 7 年", en: "2018.10 - 2025.10 · 7yrs" },
    "journey.tl2.tag": { zh: "分公司管理", en: "Branch Ops" },
    "journey.tl2.title": { zh: "北京亚昆科技服务有限公司 · 南京分公司负责人", en: "Beijing Yakun Tech Services Co., Ltd. · Nanjing Branch Lead" },
    "journey.tl2.desc": { zh: "统筹南京罗技官方售后服务中心与天猫 / 京东自营店铺，搭建分公司组织与薪酬绩效体系；主导多个海外 3C 数码配件品牌的国内托盘托管引进。", en: "Ran the Nanjing Logitech official service centre plus Tmall/JD self-operated stores; built branch org, pay and performance systems; led the domestic pallet-trust import of several overseas 3C accessory brands." },
    "journey.tl3.date": { zh: "2005.11 - 2018.09 · 13 年", en: "2005.11 - 2018.09 · 13yrs" },
    "journey.tl3.tag": { zh: "商业操盘", en: "Business Ops" },
    "journey.tl3.title": { zh: "北京亚昆供应链管理有限公司 · 南京分公司负责人", en: "Beijing Yakun Supply Chain Management · Nanjing Branch Lead" },
    "journey.tl3.desc": { zh: "操盘罗技天猫旗舰店（首年 GMV 2171 万 / 次年 4897 万）、SanDisk 京东自营（7 千万 → 2.13 亿）、存储类目天猫专营店（首年破 3 千万）等全渠道项目。", en: "Ran the Logitech Tmall flagship (¥21.71M → ¥48.97M GMV), SanDisk JD self-operated store (¥70M → ¥213M) and a storage-category Tmall store (¥30M+ in year one) end-to-end." },
    "journey.tl4.date": { zh: "跨年度独立主线", en: "Cross-year track" },
    "journey.tl4.tag": { zh: "工程化", en: "Engineering" },
    "journey.tl4.title": { zh: "AI 技能包工程体系", en: "AI Skill Pack Engineering" },
    "journey.tl4.desc": { zh: "把投流、生图、达人分析、数据看板等运营知识封装为 20+ 可复用 AI 技能包，零基础同事一键使用。", en: "Packaging ad planning, imaging, influencer analytics and dashboards into 20+ reusable AI skills that non-technical teammates use with one click." },
    "journey.tl5.date": { zh: "2010 - 至今", en: "2010 - Present" },
    "journey.tl5.tag": { zh: "积累", en: "Foundation" },
    "journey.tl5.title": { zh: "多平台商业操盘积累", en: "Multi-platform Business" },
    "journey.tl5.desc": { zh: "国内兴趣电商 + 货架电商 + 跨境出海，从单店运营到多店铺矩阵。", en: "From single-store operations to a multi-store matrix across domestic interest/shelf commerce and overseas." },


    // ---- 关于页 ----
    "about.eyebrow": { zh: "About", en: "About" },
    "about.title": { zh: "关于我", en: "About Me" },
    "about.p1": { zh: "我是扶摇，万世康伦（KONLLEN）集团高级运营负责人，常住江苏南京。集团电商营收中心团队 15 人以上，覆盖 49 个店铺、9+ 国内平台与多个海外平台，国内海外业务向 50/50 结构调整。", en: "I'm Fuyao, senior operations lead at KONLLEN Group, based in Nanjing, Jiangsu. Our e-commerce revenue hub team has 15+ members across 49 stores, 9+ domestic platforms and multiple overseas platforms, restructuring toward a 50/50 domestic-overseas mix." },
    "about.p2": { zh: "除了传统商业操盘，我的另一个身份是技能包全栈工程负责人——把投流、生图、达人分析、数据看板等运营知识封装成 AI 技能包，让零基础的 HR、运营同事也能一键使用。", en: "Beyond classic e-commerce operations, I'm also a full-stack engineer of AI skill packs — packaging ad planning, image generation, influencer analytics and dashboards into skills that even non-technical colleagues can use with one click." },
    "about.timeline": { zh: "工作经历", en: "Experience" },
    "about.tl1.date": { zh: "2026", en: "2026" },
    "about.tl1.title": { zh: "集团电商运营负责人", en: "Group Business Operations Lead" },
    "about.tl1.desc": { zh: "负责多品牌电商业务，主打品牌进入亚马逊 5 站类目榜；搭建团队与店铺矩阵，国内海外双线推进。", en: "Leading multi-brand e-commerce with flagship brands on Amazon category lists across 5 marketplaces; built the team and store matrix across domestic and overseas tracks." },
    "about.tl2.date": { zh: "2025", en: "2025" },
    "about.tl2.title": { zh: "技能包工程体系搭建", en: "AI Skill Pack System" },
    "about.tl2.desc": { zh: "建立 WorkBuddy 业务技能矩阵，交付投流/生图/看板/OA 审批等 20+ 技能包。", en: "Built the WorkBuddy skill matrix, delivering 20+ packs for ads, imaging, dashboards and OA approvals." },
    "about.tl3.date": { zh: "更早", en: "Earlier" },
    "about.tl3.title": { zh: "多平台商业操盘积累", en: "Multi-platform Business" },
    "about.tl3.desc": { zh: "国内兴趣电商 + 货架电商 + 跨境出海，从单店运营到多店铺矩阵。", en: "From single-store operations to a brand matrix across domestic interest/shelf commerce and overseas." },

    "about.sub": { zh: "商业操盘 × 团队体系 × AI 技能包工程 —— 能用数字对账的落地者。", en: "Business operations × team building × AI skill-pack engineering — a builder whose numbers reconcile." },
    "resume.title": { zh: "商业操盘手 · 团队体系搭建 · AI 技能包工程负责人", en: "Business Operator · Team Builder · AI Skill-pack Engineer" },
    "resume.base": { zh: "深圳 / 南京", en: "Shenzhen / Nanjing" },
    "resume.brief": { zh: "集团电商负责人：管理 15 人 6 岗团队与 49 家店铺矩阵，国内 9+ 平台与海外多平台双线推进，推动业务结构向国内海外 50/50 调整。另一条主线是把运营知识工程化——沉淀为 20+ 可复用的 AI 技能包（投流、视觉、看板、审批自动化、内容生产），让零基础同事一键使用。", en: "Leads e-commerce for the group: a 15-person, 6-role team across a 49-store matrix spanning 9+ domestic platforms and multiple overseas marketplaces, pushing the mix toward a 50/50 domestic-overseas split. A parallel track: engineering operational know-how into 20+ reusable AI skill packs — ads, visuals, dashboards, approval automation, content — usable by non-technical teammates with one click." },
    "resume.s1": { zh: "店铺矩阵", en: "Store Matrix" },
    "resume.s2": { zh: "团队规模 · 6 岗", en: "Team · 6 Roles" },
    "resume.s3": { zh: "AI 技能包", en: "AI Skill Packs" },
    "resume.s4": { zh: "国内平台", en: "Domestic Platforms" },
    "resume.s5": { zh: "亚马逊站点类目榜", en: "Amazon Category Lists" },
    "resume.j1.title": { zh: "万世康伦（KONLLEN）集团 · 南京万世康伦体育用品有限公司 · 电商运营负责人", en: "KONLLEN Group · Nanjing Wanshi Kangllen Sports Goods · Business Operations Lead" },
    "resume.j1.p1": { zh: "搭建并管理电商团队：15 人、6 岗体系，配套岗位说明书与绩效考核标准", en: "Built and run an e-commerce team: 15 people across 6 roles, with job descriptions and performance standards." },
    "resume.j1.p2": { zh: "49 家店铺矩阵：覆盖国内 9+ 平台与海外多平台，推动国内外业务向 50/50 调整", en: "49-store matrix across 9+ domestic platforms and multiple overseas marketplaces, rebalancing toward 50/50." },
    "resume.j1.p3": { zh: "主打品牌进入亚马逊 5 站类目榜（日本 #5 / 德国 #8 / 美国 #11 / 加拿大 #11）", en: "Flagship brands on Amazon category lists across 5 marketplaces (JP #5 / DE #8 / US #11 / CA #11)." },
    "resume.j1.p4": { zh: "主导数据中台 / 财务 Agent / 审批自动化等工程化项目，用工具沉淀运营能力", en: "Led engineering projects — data platform, finance agent, approval automation — encoding operations into tooling." },
    "resume.j2.title": { zh: "北京亚昆科技服务有限公司 · 南京分公司负责人", en: "Beijing Yakun Tech Services Co., Ltd. · Nanjing Branch Lead" },
    "resume.j2.p1": { zh: "统筹南京罗技官方售后服务中心运营：年度服务量超万单、客户满意度 95%+、重大客诉 0，人效提升 20%", en: "Ran the Nanjing Logitech official service centre: 10k+ annual service orders, 95%+ satisfaction, zero major complaints, +20% labour efficiency." },
    "resume.j2.p2": { zh: "独立操盘天猫旗舰店与京东自营店全链路（商品 / 活动 / 数据 / 客服），活动 GMV 提升 15%–30%", en: "Independently ran Tmall flagship and JD self-operated stores end-to-end (goods / campaigns / data / service); promo GMV up 15%–30%." },
    "resume.j2.p3": { zh: "搭建分公司组织架构与薪酬绩效考核体系，管理 10–20 人团队、骨干留存率 90%+；主导海外 3C 数码配件品牌托盘托管引进（2019.01–2021.07）", en: "Built branch org, pay and performance systems; led a 10–20 person team with 90%+ key-staff retention; led overseas 3C accessory brand pallet-trust imports (2019.01–2021.07)." },
    "resume.j3.title": { zh: "北京亚昆供应链管理有限公司 · 南京分公司负责人", en: "Beijing Yakun Supply Chain Management Co., Ltd. · Nanjing Branch Lead" },
    "resume.j3.p1": { zh: "2005.11 - 2018.09 共 13 年，负责分公司 / 代表处全面运营与团队管理", en: "2005.11 - 2018.09 (13 years): full P&L and team management for the branch / representative office." },
    "resume.j3.p2": { zh: "落地罗技天猫旗舰店（首年 GMV 2171 万 / 次年 4897 万）、SanDisk 京东自营（7 千万 → 2.13 亿）、存储类目天猫专营店（首年破 3 千万）", en: "Delivered the Logitech Tmall flagship (¥21.71M → ¥48.97M), SanDisk JD self-operated store (¥70M → ¥213M) and a storage-category Tmall store (¥30M+ in year one)." },
    "resume.j3.p3": { zh: "从单店到多店铺矩阵，沉淀供应链协同与商业操盘基础能力", en: "Scaled from single stores to a multi-store matrix; built supply-chain coordination and e-commerce operations fundamentals." },
    "resume.j4.title": { zh: "AI 技能包工程体系 · 跨年度独立主线", en: "AI Skill-pack Engineering · Cross-year Independent Track" },
    "resume.j4.p1": { zh: "20+ 可复用技能包：投流计划与审核、视觉生产、数据看板、OA 审批、视频脚本等", en: "20+ reusable skill packs: ad planning & review, visual production, dashboards, OA approvals, video scripts." },
    "resume.j4.p2": { zh: "流水线化交付：分层开发 → 独立审计 → 版本化打包 → 按阶段回滚", en: "Pipeline delivery: layered dev → independent audit → versioned packaging → staged rollback." },
    "resume.j4.p3": { zh: "通用母版 + 业务分支双轨，既跨项目复用，又隔离业务敏感逻辑", en: "Generic template + business branch dual-track: reusable across projects while isolating sensitive logic." },
    "resume.j5.title": { zh: "多平台商业操盘积累 · 2010 - 至今", en: "Multi-platform Business Track · 2010 - Present" },
    "resume.j5.p1": { zh: "国内兴趣电商 + 货架电商 + 跨境出海，从单店运营到多店铺矩阵", en: "Interest + shelf e-commerce domestically, going global; scaled from single stores to a multi-store matrix." },
    "resume.j5.p2": { zh: "经营数据中台：国内 ERP + 跨境财务双源，统一口径辅助决策", en: "Operational data platform combining domestic ERP and cross-border finance sources with reconciled metrics." },
    "resume.skills.title": { zh: "核心能力", en: "Core Skills" },
    "resume.sk.1": { zh: "商业操盘（国内 + 跨境）", en: "Business Ops (CN + Global)" },
    "resume.sk.2": { zh: "团队体系与绩效搭建", en: "Team & Performance Systems" },
    "resume.sk.3": { zh: "AI 技能包工程", en: "AI Skill-pack Engineering" },
    "resume.sk.4": { zh: "数据中台（Flask · ECharts · SQLite）", en: "Data Platform (Flask · ECharts · SQLite)" },
    "resume.sk.5": { zh: "ERP 数据对接", en: "ERP Data Integration" },
    "resume.sk.6": { zh: "投放计划与审核", en: "Ad Planning & Review" },
    "resume.sk.7": { zh: "视觉与内容生产管线", en: "Visual & Content Pipelines" },
    "resume.sk.8": { zh: "流程自动化（审批 · 看板推送）", en: "Process Automation (OA · Dashboards)" },
    "resume.sk.9": { zh: "双语运营（中 / 英）", en: "Bilingual (ZH / EN)" },
    "resume.sk.10": { zh: "普通话甲级", en: "Mandarin (Grade A)" },
    "resume.sk.11": { zh: "海关报关与国际贸易", en: "Customs Declaration & International Trade" },
    "resume.education.title": { zh: "教育背景", en: "Education" },
    "resume.edu.1.school": { zh: "金陵科技学院", en: "Jinling Institute of Technology" },
    "resume.edu.1.degree": { zh: "大专 · 海关报关与国际运输", en: "Junior College · Customs Declaration & International Transportation" },
    "resume.edu.2.school": { zh: "南京理工大学", en: "Nanjing University of Science and Technology" },
    "resume.edu.2.degree": { zh: "大专 · 计算机网络信息管理", en: "Junior College · Computer Network Information Management" },
    "resume.certs.title": { zh: "证书 · 驾照", en: "Certifications · License" },
    "resume.cert.1": { zh: "C1 驾照", en: "C1 Driver's License" },
    "resume.cert.2": { zh: "计算机二级", en: "Computer Level 2 Certificate" },
    "resume.note": { zh: "本页为双语简历版，与投递用的 PDF 简历口径一致：工作年限、各段时间线、学历与证书字段均已对齐；邮箱显示已对齐公开联系邮箱（表单转发仍走站内邮箱）。", en: "This page is the bilingual resume and matches the PDF version word for word: tenure, per-role timelines, education and certifications are aligned; the public contact email is shown (form forwarding still uses the on-site inbox)." },
    'resume.related': { zh: '延伸阅读：通用型方法论手册 —— 换项目、换业务线都能直接套用的组织能力沉淀。', en: 'Related: Generic Methodology Handbook — reusable organizational leverage across projects and lines of business.' },

    // ---- 作品集页 ----
    "work.eyebrow": { zh: "Work", en: "Work" },
    "work.title": { zh: "作品集", en: "Portfolio" },
    "work.sub": { zh: "从操盘到工程，从店铺到中台——这些年落地的代表项目。", en: "From operations to engineering, from stores to platforms — representative projects." },
    "work.w1.title": { zh: "品牌电商运营体系", en: "Brand Business Operations" },
    "work.w1.desc": { zh: "多品牌进入亚马逊 5 站类目榜，国内 9+ 平台店铺矩阵。从单品到矩阵的运营操盘。", en: "Dual brands ranked on Amazon across 5 marketplaces, 9+ domestic platform stores. From single products to a brand matrix." },
    "work.w2.title": { zh: "数据中台与自动化看板", en: "Data Platform & Auto Dashboards" },
    "work.w2.desc": { zh: "聚水潭库存看板、店铺每日数据看板、AI Agent 监控仪表盘——用数据替代拍脑袋。", en: "Jushuitan inventory board, daily store dashboards, AI agent monitoring — data over gut feel." },
    "work.w3.title": { zh: "投流计划生成与审核", en: "Ad Plan Generation & Audit" },
    "work.w3.desc": { zh: "台球专版投流生成器 + 7 维审核器 + 执行方案，覆盖 12 个投放平台，扫描需求自动出计划。", en: "Billiards-specific ad generator + 7-dimension auditor + execution plans across 12 platforms." },
    "work.w4.title": { zh: "Agent 技能中台", en: "Agent Skill Platform" },
    "work.w4.desc": { zh: "五层架构业务 Agent：整合 10 个 Skill、10 项自动化、监控仪表盘与 API 扩展框架。", en: "5-layer brand agent: 10 skills, 10 automations, monitoring dashboard and API framework." },
    "work.w5.title": { zh: "AI 视觉生产", en: "AI Visual Production" },
    "work.w5.desc": { zh: "Agnes 视觉生产管线：批量生图、PSD 素材包、钉钉流转，统一输出品牌视觉规范。", en: "Agnes visual production pipeline: batch imaging, PSD asset packs, DingTalk workflow, with unified brand visual standards." },
    "work.w6.title": { zh: "品牌官网建设", en: "Brand Website" },
    "work.w6.desc": { zh: "霓虹暗黑潮牌风格静态站点，产品图逐张替换为真实产品照，已上线可访问。", en: "Neon-dark street-style static site with real product photos, live and accessible." },
    "work.pending": { zh: "案例截图补充中", en: "Screenshots coming soon" },

    // ---- 博客页 ----
    "blog.eyebrow": { zh: "Blog", en: "Blog" },
    "blog.title": { zh: "博客", en: "Blog" },
    "blog.sub": { zh: "商业操盘与 AI 技能包的实战记录。", en: "Notes on brand business and AI skill packs." },
    "blog.search": { zh: "搜索文章关键词…", en: "Search articles..." },
    "blog.all": { zh: "全部", en: "All" },
    "blog.empty": { zh: "没有找到匹配的文章。", en: "No matching articles found." },
    "blog.count": { zh: "共 {n} 篇", en: "{n} articles" },
    "blog.views": { zh: "阅读 {n}", en: "{n} views" },
    "blog.readmore": { zh: "阅读全文", en: "Read more" },

    // ---- Newsletter 订阅 ----
    "newsletter.title": { zh: "订阅博客更新", en: "Subscribe to Updates" },
    "newsletter.sub": { zh: "新文章、复盘与实战记录，第一时间送达邮箱。", en: "New articles, postmortems and field notes delivered straight to your inbox." },
    "newsletter.ph": { zh: "你的邮箱地址", en: "Your email address" },
    "newsletter.send": { zh: "订阅", en: "Subscribe" },
    "newsletter.success": { zh: "订阅成功！新文章会通过邮件通知你。", en: "Subscribed! You'll get an email when new articles drop." },
    "newsletter.err.email": { zh: "请填写有效邮箱", en: "Please enter a valid email" },
    "newsletter.cooldown": { zh: "刚刚已订阅，请稍候再试", en: "Just subscribed, please wait a moment" },
    "newsletter.nochannel": { zh: "暂未配置订阅通道，请直接发邮件联系。", en: "Subscription channel not configured — please email me directly." },
    "newsletter.fail": { zh: "提交失败，请直接发邮件到 {mail}", en: "Submission failed. Please email me at {mail}" },
    "newsletter.privacy": { zh: "只用于订阅通知，不对外共享、不做营销推送。", en: "Used only for subscription notifications. Never shared, never used for marketing." },

    // ---- 联系页 ----
    "contact.eyebrow": { zh: "Contact", en: "Contact" },
    "contact.title": { zh: "联系我", en: "Contact Me" },
    "contact.info.title": { zh: "合作与交流", en: "Collaboration & Exchange" },
    "contact.info.desc": { zh: "商业操盘咨询、AI 技能包合作、行业交流，欢迎联系。", en: "Brand business consulting, AI skill pack cooperation, industry exchange — reach out." },
    "contact.email": { zh: "邮箱", en: "Email" },
    "contact.github": { zh: "GitHub", en: "GitHub" },
    "contact.form.name": { zh: "称呼", en: "Name" },
    "contact.form.name.ph": { zh: "怎么称呼你", en: "Your name" },
    "contact.form.email": { zh: "邮箱", en: "Email" },
    "contact.form.email.ph": { zh: "你的邮箱", en: "Your email" },
    "contact.form.msg": { zh: "内容", en: "Message" },
    "contact.form.msg.ph": { zh: "想聊什么", en: "What's on your mind" },
    "contact.form.send": { zh: "发送", en: "Send" },

    // ---- 文章页公共 ----
    "post.back": { zh: "← 返回博客", en: "← Back to blog" },
    "post.toc": { zh: "目录", en: "Contents" },
    "post.prev": { zh: "← 上一篇", en: "← Previous" },
    "post.next": { zh: "下一篇 →", en: "Next →" },
    "post.related": { zh: "相关阅读", en: "Related" },
    // ---- 文章内文：现金转换周期 CCC（2026-11-04） ----
    "post.ccc.title": { zh: "现金转换周期 CCC：DSO、DIO、DPO 三条时间线的操盘口径", en: "Cash Conversion Cycle: How DSO, DIO and DPO Turn Operating Reality into a Number" },
    "post.ccc.lead": { zh: "现金转换周期 CCC 描述的是一件很朴素的事：钱花出去到钱回来，中间隔了多少天。它由三段构成——应收账款周转天数 DSO、存货周转天数 DIO、应付账款周转天数 DPO，CCC = DSO + DIO − DPO。这套公式在财务教材里只有三行，落到多店铺矩阵里却每天都在变：平台结算周期、在途海运、供应商月结、海外仓备货，四条节奏互相错位。本文用一个月度真实量级的算例，把 CCC 从报表数字变成可执行的操盘口径。", en: "The cash conversion cycle describes something plain: the days between money going out and money coming back. It has three parts — days sales outstanding (DSO), days inventory outstanding (DIO) and days payable outstanding (DPO), so CCC = DSO + DIO − DPO. The formula is three lines in any finance textbook, yet inside a multi-store matrix it moves every month: platform settlement cycles, ocean transit, supplier monthly terms and overseas-warehouse stocking keep four rhythms out of step. This article works one realistic monthly case and turns CCC from a report number into an operating convention a team can execute." },
    "post.ccc.h1": { zh: "一、现金转换周期 CCC 的三个误判", en: "1. Three Misreadings of the Cash Conversion Cycle" },
    "post.ccc.p1a": { zh: "第一个误判是把毛利率当现金能力。毛利 30% 的生意，如果 CCC 长达 90 天，按年化 8% 的资金成本折算，光资金占用就吃掉约 2 个百分点的净利；反过来，毛利 20%、CCC 45 天的生意，单位资本回报可能更高。看毛利不看 CCC，等于只看单价不看周转，这在旺季最容易出事——账上赚着钱，工资发不出来。", en: "The first misreading treats gross margin as cash capability. A 30% margin business running a 90-day CCC burns roughly two points of net margin on an 8% annual cost of capital; a 20% margin business at 45 days can earn a better return on capital employed. Reading margin without CCC is reading unit price without turns, and it fails hardest in peak season — the books show profit while payroll cannot be paid." },
    "post.ccc.p1b": { zh: "第二个误判是把 DPO 压到最短当美德。现款现货确实干净，但供应商给的账期本质是一笔无息贷款。取消了账期，等于把无息短贷换成自有资金，采购单价却不一定降。判断 DPO 好坏的标准不是天数长短，而是“延账期时让出的单价”与“省下的资金成本”谁大——后面第五节的算例会给出具体数字。", en: "The second misreading treats the shortest possible DPO as a virtue. Cash on delivery is clean, but supplier terms are effectively an interest-free loan. Giving up terms swaps free short-term credit for your own cash, without necessarily lowering the purchase price. The test is not how many days, but whether the unit-price concession given up exceeds the cost of capital saved — section five runs the numbers." },
    "post.ccc.p1c": { zh: "第三个误判是用平均库存掩盖长尾。矩阵整体 DIO 26.3 天看起来健康，但这个数字被头部店铺摊薄了：真正的资金沉淀在几个 DIO 超过 80 天的测试店身上。平均值不是给操盘手看的，是给外部看的；内部必须切到店铺层、品类层，再切到 SKU 层。", en: "The third misreading hides the long tail behind an average inventory. A matrix-wide DIO of 26.3 days looks healthy, but the number is diluted by the top stores; the cash actually sits in a few test stores running DIO above 80 days. Averages are for outsiders. Operators slice by store, by category, then by SKU." },
    "post.ccc.h2": { zh: "二、CCC 口径定义：三个公式 + 四个取数坑", en: "2. CCC Definitions: Three Formulas and Four Data Traps" },
    "post.ccc.p2a": { zh: "口径先定死，否则每个月的数据都对不上。观察窗取自然月 30 天，资产负债表项取期末余额，利润表项取当月发生额：", en: "Fix the convention first, or the months will never reconcile. Use a 30-day natural month; balance-sheet items at period-end, income-statement items as the month's flow:" },
    "post.ccc.p2b": { zh: "DIO 和 DPO 的分母为什么必须用销货成本而不是销售额？因为存货和应付账款对的是商品的成本价值，不是含毛利的售价。用销售额当分母，30% 毛利会把 DIO 凭空缩短近三分之一，算出 18 天，实际压了 26 天，决策直接跑偏。DSO 例外——应收账款是含毛利的售价口径，分母只能用销售额，这是公式里唯一不对称的地方。", en: "Why must DIO and DPO be divided by cost of goods sold rather than revenue? Because inventory and payables are carried at cost, not at a marked-up selling price. Using revenue shrinks DIO by roughly a third at a 30% margin — you compute 18 days while 26 days of stock is actually sitting there, and every decision downstream drifts. DSO is the exception: receivables are booked at selling price, so revenue is the only valid denominator. That asymmetry is the one thing to remember in this formula set." },
    "post.ccc.p2c": { zh: "四个取数坑，每个都能让结论反号：一是含税销售额，平台结算单多为含税价，直接进分母会让 DSO 偏低约 11%，取数前先剥税；二是在途库存，海运在途货既不在国内仓也不在海外仓，漏掉它 DIO 会虚低 3 到 5 天，本文算例把 86 万元在途单列并计入分子；三是预付账款，预付给工厂的定金已经付了现金却没形成存货，不能混进应付账款，否则 DPO 虚高、掩盖真实的账期能力；四是跨期结算，平台的预留金和延迟释放款项常记在次月，用账上余额直接算会让 DSO 少 1 到 2 天，需要按账单日还原。", en: "Four data traps, each able to flip the conclusion. First, tax-inclusive revenue: platform statements usually quote tax-inclusive amounts, which drags DSO about 11% low, so strip the tax before dividing. Second, in-transit inventory: goods on the water sit in neither the domestic nor the overseas warehouse, and omitting them understates DIO by 3 to 5 days, so this case lists 860,000 yuan in transit inside the numerator. Third, prepayments: deposits already paid to factories hold cash but form no inventory, and folding them into payables inflates DPO and hides the real negotiating position. Fourth, cross-period settlement: platform reserves and delayed releases often land in the following month, so reading the account balance directly understates DSO by 1 to 2 days and the statement date has to be restored." },
    "post.ccc.p2d": { zh: "另一条纪律是余额口径要固定：本文用期末余额，因为平台账单和财务总账都能在月初复核，可复现性优先。平均余额法能抹平 1 到 2 天的波动，但两种口径绝不能出现在同一张表里，否则趋势线会出现实际没发生的改善。还有两件容易被审稿人抓住的事：一是季节性，11 月到次年 1 月是备货季，DIO 天然比淡季高 6 到 9 天，跨月比较只做同比不做环比；二是口径错配，存货若含原材料和包材要单列出来，否则分子里躺着还没投产的料，分母只有已售商品的成本，算出来的天数既不是存货周转也不是产成品周转。", en: "One more discipline: fix the balance convention. This article uses period-end balances, because platform statements and the general ledger can both be checked at the start of the month and reproducibility comes first. Averages smooth 1 to 2 days of volatility, but the two conventions must never share one table, or the trend line will show an improvement that never happened. Two things a reviewer will also catch: seasonality — November through January is stocking season, so DIO naturally runs 6 to 9 days above the off-season, and cross-month comparison should be year-on-year, not month-on-month; and unit mismatch — if inventory includes raw materials and packaging, list them separately, otherwise the numerator holds material that is not yet in production while the denominator holds only the cost of goods already sold, and the resulting days are neither inventory turns nor finished-goods turns." },
    "post.ccc.h3": { zh: "三、一个矩阵的月度算例：CCC 27.4 天", en: "3. One Monthly Case in a Matrix: CCC at 27.4 Days" },
    "post.ccc.p3a": { zh: "数据口径：6 个店铺合计，月销售额 860 万元，销货成本 602 万元（毛利率 30.0%），期末应收账款 312 万元，存货合计 528 万元，应付账款合计 196 万元。下表是三项的结构拆解与换算。", en: "Basis: six stores combined, monthly revenue 8.60 million yuan, cost of goods sold 6.02 million (30.0% gross margin), period-end receivables 3.12 million, total inventory 5.28 million, total payables 1.96 million. The table below splits the three items and converts them into days." },
    "post.ccc.th0": { zh: "项目", en: "Item" },
    "post.ccc.th1": { zh: "金额（万元）", en: "Amount (10k yuan)" },
    "post.ccc.th2": { zh: "结构拆解", en: "Breakdown" },
    "post.ccc.th3": { zh: "换算天数", en: "Days" },
    "post.ccc.rowAr": { zh: "应收账款", en: "Accounts receivable" },
    "post.ccc.arSplit": { zh: "平台待结算 236 + B2B 账期 76", en: "Platform awaiting settlement 236 + B2B terms 76" },
    "post.ccc.rowInv": { zh: "存货", en: "Inventory" },
    "post.ccc.invSplit": { zh: "在途 86 + 海外仓现货 198 + 国内备货 244", en: "In transit 86 + overseas warehouse stock 198 + domestic stocking 244" },
    "post.ccc.rowAp": { zh: "应付账款", en: "Accounts payable" },
    "post.ccc.apSplit": { zh: "供应商月结 120 + 物流月结 76", en: "Supplier monthly terms 120 + logistics monthly terms 76" },
    "post.ccc.rowCcc": { zh: "现金转换周期", en: "Cash conversion cycle" },
    "post.ccc.dash": { zh: "—", en: "—" },
    "post.ccc.p3b": { zh: "换算下来：DSO 10.9 天、DIO 26.3 天、DPO 9.8 天、CCC 27.4 天，对应营运资金占用 786 万元（27.4 × 860 ÷ 30）。上季度同口径是 DSO 12.4、DIO 31.8、DPO 10.1，CCC 34.1 天。一个季度缩短 6.7 天，来源是两件事：国内备货砍掉一轮补货、物流月结从 45 天拉到 30 天以内。", en: "Converted: DSO 10.9 days, DIO 26.3 days, DPO 9.8 days, CCC 27.4 days, equal to 7.86 million yuan of working capital (27.4 × 860 ÷ 30). The same basis last quarter read DSO 12.4, DIO 31.8, DPO 10.1, CCC 34.1 days. A 6.7-day gain in one quarter came from two moves: one replenishment round cut from domestic stocking, and logistics terms pulled from 45 days down to 30." },
    "post.ccc.p3c": { zh: "这 6.7 天值多少钱，有两个口径，差 57 万元，必须说清楚用哪个：按销售额口径，860 ÷ 30 × 6.7 = 191.2 万元，这是对外解释营运资金需求时的数字，含毛利部分其实从未实付；按成本口径，602 ÷ 30 × 6.7 = 133.9 万元，这才是真正能回到银行账户的现金。做预算、做现金排期一律用成本口径，别拿销售额口径去承诺还款能力，这是很多操盘手在董事会现场被问住的地方。", en: "What those 6.7 days are worth depends on the convention you quote, and the two differ by 570,000 yuan, so state the convention every time. On revenue basis, 860 ÷ 30 × 6.7 = 1.912 million yuan — the figure for explaining working-capital needs externally, though the margin part was never actually paid out. On cost basis, 602 ÷ 30 × 6.7 = 1.339 million yuan — the cash that can genuinely return to the bank account. Budgets and cash scheduling always run on cost basis; quoting revenue basis as repayment capacity is where operators get caught in front of a board." },
    "post.ccc.h4": { zh: "四、按店铺分层看现金转换周期：谁在拖现金", en: "4. Layering the Cash Conversion Cycle by Store: Who Holds the Cash" },
    "post.ccc.p4a": { zh: "整体 CCC 27.4 天只是一个数。把它切到 6 个店铺，用“营运资金占用 = CCC × 月销售额 ÷ 30”还原每个店压了多少现金，结构立刻显形。", en: "A single CCC of 27.4 days is just a number. Slice it across six stores and restore working capital per store (CCC × monthly revenue ÷ 30), and the structure appears immediately." },
    "post.ccc.th4": { zh: "店铺", en: "Store" },
    "post.ccc.th5": { zh: "月销售额", en: "Revenue" },
    "post.ccc.th6": { zh: "营运资金占用", en: "Working capital" },
    "post.ccc.th7": { zh: "资金占比", en: "Share of cash" },
    "post.ccc.rowAll": { zh: "合计", en: "Total" },
    "post.ccc.p4b": { zh: "A 店卖 300 万元、占销售额 34.9%，只压了 19.6% 的资金；F 店卖 34 万元、占销售额 4.0%，却压了 14.1% 的资金。F 店 CCC 97.8 天，是 A 店的 6.3 倍。这就是平均数的欺骗性：整体 27.4 天看着舒服，实际是 A 店在用健康周转补贴 F 店的备货冲动。", en: "Store A sells 3.00 million, 34.9% of revenue, while holding only 19.6% of the cash. Store F sells 340,000, 4.0% of revenue, while holding 14.1% of the cash. Store F runs CCC at 97.8 days, 6.3 times store A. That is what averages hide: a comfortable 27.4 days overall is store A subsidising store F's stocking enthusiasm with healthy turns." },
    "post.ccc.p4c": { zh: "分层之后的判定规则要写死：CCC 高于整体 5 天以上的店铺进“资金拖累”名单，D、E、F 三个店在列，合计占用资金 364.7 万元，占总资金 46.4%。这类店铺要么收缩备货深度，要么提高周转定价，不能靠整体盈利去掩盖。", en: "The rule after layering must be written down: any store running CCC more than 5 days above the matrix average enters the cash-drag list. D, E and F qualify, together holding 3.647 million yuan, 46.4% of total working capital. Such stores either cut stocking depth or raise turnover-based pricing; group profitability must not be allowed to paper over them." },
    "post.ccc.h5": { zh: "五、三个杠杆：压 DIO、谈 DPO、调 DSO", en: "5. Three Levers: Cut DIO, Negotiate DPO, Restructure DSO" },
    "post.ccc.p5a": { zh: "杠杆一，压 DIO 先压长尾。规则定成“单店 DIO 上限 30 天，超出部分当月进清货通道”。按算例执行：D 店 30.9 天、E 店 42.5 天、F 店 85.0 天，三个店压到 30 天合计释放 67.4 万元（成本口径：2.3 + 21.5 + 43.6），存货从 528 万元降到 460.6 万元，整体 DIO 从 26.3 天降到 22.9 天，CCC 降到 24.0 天。注意这里释放的是成本口径现金，不是销售额——清货打折的毛利损失另算，本文算例按成本价出清，不重复计入。", en: "Lever one, cut DIO starting from the long tail. Write the rule as a hard cap: any store above 30 days of DIO sends the excess into clearance that same month. Run on the case: store D at 30.9 days, E at 42.5, F at 85.0; capping all three at 30 days releases 674,000 yuan on cost basis (2.3 + 21.5 + 43.6), taking inventory from 528 to 460.6 (10k yuan), matrix DIO from 26.3 to 22.9 days and CCC to 24.0 days. Note this is cost-basis cash, not revenue; the margin lost on clearance is counted separately, and this case clears at cost with no double counting." },
    "post.ccc.p5b": { zh: "杠杆二，谈 DPO 要算真实成本。算例：供应商货款月采购 200 万元，现为月结 30 天，若延到 60 天，按年化资金成本 8% 计，多占用的资金价值 = 200 × 30 ÷ 365 × 8% = 1.32 万元/月。如果供应商因此要求让价 2%，收益 4.00 万元/月，净收益 2.68 万元/月，这笔账成立；如果供应商只肯让 0.5%，收益 1.00 万元/月，反而不如 1.32 万元/月的资金价值，延账期就是亏的。结论很硬：不谈价的延账期，收益上限只有采购额的 0.66%，靠它省不出钱，靠它换单价折扣才有意义。", en: "Lever two, price the DPO negotiation honestly. Case: 2.00 million yuan of monthly purchases on 30-day terms. Extending to 60 days, at an 8% annual cost of capital, is worth 200 × 30 ÷ 365 × 8% = 13,200 yuan per month. If the supplier asks for a 2% price concession, you gain 40,000 yuan per month and net 26,800 — the deal works. If the supplier concedes only 0.5%, you gain 10,000 and lose the 13,200 of capital value — extending terms is a loss. The conclusion is blunt: extending terms without repricing caps your benefit at 0.66% of purchase value; it saves almost nothing on its own and only matters when traded for unit price." },
    "post.ccc.p5c": { zh: "杠杆三，DSO 在平台机制里只能靠结构调整。结算周期是平台定的，操盘手改不了，但可以改渠道占比。算例：把占销售额 30% 的 T+14 结算站点迁到 T+7 结算渠道，DSO 下降 0.3 × (14 − 7) = 2.1 天，按销售口径释放 60.2 万元、按成本口径释放 42.1 万元。代价是渠道迁移带来的佣金与流量波动，得一次性测算，但这是唯一能在不改合同的前提下动 DSO 的口子。", en: "Lever three, DSO can only move through channel mix. Settlement cycles belong to the platform; the operator cannot rewrite them, but can rewrite the mix. Case: moving the 30% of revenue settled on T+14 into T+7 channels lowers DSO by 0.3 × (14 − 7) = 2.1 days, releasing 602,000 yuan on revenue basis and 421,000 on cost basis. The price is commission and traffic volatility from migration, which deserves a one-off model — but it is the only door to DSO that does not require renegotiating a contract." },
    "post.ccc.h6": { zh: "六、可复现代码：一张 CSV 算出 CCC 与释放资金", en: "6. Reproducible Code: One CSV, CCC and Released Cash" },
    "post.ccc.p6a": { zh: "只用标准库。输入列固定为 store、month_sales、month_cogs、ar_end、inv_end、ap_end，金额单位统一万元。输出三块：各店天数、整体口径、压降模拟。", en: "Standard library only. Input columns are fixed as store, month_sales, month_cogs, ar_end, inv_end, ap_end, all amounts in ten-thousand yuan. Three output blocks: per-store days, matrix-level convention, and the reduction simulation." },
    "post.ccc.p6b": { zh: "配套 CSV 就是第四节那张表，六行数据。把源码和 CSV 放在同一目录，跑下面这条命令：", en: "The matching CSV is the table in section four, six rows. Put the source and the CSV in one folder and run:" },
    "post.ccc.p6c": { zh: "输出与本文表格逐格对得上：整体 DSO 10.9、DIO 26.3、DPO 9.8、CCC 27.4；D、E、F 三个店命中 DIO 超限，分别释放 2.3、21.5、43.6 万元，合计 67.4 万元。换数据集只要列名不变，脚本不用改；要按品类算，把 store 列换成品类名即可。", en: "The output matches the tables cell by cell: matrix DSO 10.9, DIO 26.3, DPO 9.8, CCC 27.4; stores D, E and F breach the DIO cap and release 23,000, 215,000 and 436,000 yuan — 674,000 in total. Change the dataset and the script stays as is, as long as column names hold; to work by category, replace the store column with category names." },
    "post.ccc.h7": { zh: "七、把现金转换周期做成月度考核口径", en: "7. Turning the Cash Conversion Cycle into a Monthly Operating Check" },
    "post.ccc.p7a": { zh: "CCC 之所以常年没人管，是因为它不挂在任何人头上。要落地就三件事写进月度节奏：每月 3 日财务出 CCC 表（期末余额口径），5 日运营审店铺分层，10 日前把“CCC 高于整体 5 天以上”的店铺处置单落到具体动作——要么压 DIO，要么调结构，不接受“下月再看”。同时把 DIO 上限 30 天、DPO 与采购单价的换算规则、DSO 的渠道占比上限写进技能包的 front matter，AI 每月只做取数、算天数、出清单，人只做两件：签处置单、谈供应商。", en: "The reason CCC goes unmanaged is that it sits on nobody's scorecard. Three steps put it into the monthly rhythm: finance issues the CCC table on the 3rd (period-end basis), operations reviews the store layering on the 5th, and by the 10th every store more than 5 days above the average gets a disposition ticket with a concrete action — cut DIO or change mix, never 'revisit next month'. Put the 30-day DIO cap, the DPO-to-unit-price conversion rule and the DSO channel-share ceiling into the skill pack's front matter; the model only pulls data, computes days and issues the list, while humans do two things: sign the ticket and talk to suppliers." },
    "post.ccc.p7b": { zh: "《孙子兵法·军形》讲“先为不可胜，以待敌之可胜”。CCC 就是那个“不可胜”：它不带来增长，它保证你在增长来时还有子弹。27.4 天这个数字本身没有意义，有意义的是下个月它是不是 24.0 天，以及那 67.4 万元是不是真的回到了账上。", en: "Sun Tzu's Art of War, on disposition: 'first make yourself invincible, then wait for the vulnerability.' CCC is that invincibility — it creates no growth, it guarantees ammunition when growth arrives. The number 27.4 means nothing on its own; what matters is whether it becomes 24.0 next month, and whether that 674,000 yuan actually lands in the account." },
    "post.cashflow.title": { zh: "现金流底线管理：跨境多店矩阵先算死线再谈增长", en: "Cash Flow Baseline Management: Stress-Test the Multi-Store Matrix Before Scaling" },
    "post.mroi.title": { zh: "广告预算再分配：按边际 ROI 把钱挪到刀刃上", en: "Dynamic Ad Budget Reallocation: Move Money by Marginal ROI" },
    "post.adcreative.title": { zh: "广告素材 A/B 测款：贝叶斯方法决定素材去留", en: "Ad Creative A/B Testing: Bayesian Decisions on Material Survival" },
    "post.returnrate.lead": { zh: "退货率是结果，净货值是账。很多操盘手把退货率压在 5% 以内就以为高枕无忧，却不知道退货一次的真实损耗，可能是客单价的 1.3 倍到 1.6 倍。本文用四款家居收纳 SKU 的月度数据，把退款、逆向物流、包装损耗、客服工时、二次销售折价五块钱加总，算出一个能直接进选品会的指标：净货值率。", en: "Return rate is an outcome; net goods value is the account. Many operators celebrate keeping returns under 5% without knowing that one return can cost 1.3 to 1.6 times the order value. Using monthly data from four home-storage SKUs, this post adds up five cost blocks — refund, reverse logistics, packaging loss, customer-service labor and resale markdown — into one metric that belongs in every assortment meeting: the net goods value rate." },
    "post.returnrate.h1": { zh: "一、退货率为什么不能当售后指标：三个口径陷阱", en: "1. Why Return Rate Fails as an After-Sales Metric: Three Definition Traps" },
    "post.returnrate.p1a": { zh: "第一个陷阱是分母错了。退货率的分母是订单，净货值的分母是成交金额；一件 89 元的压缩袋和一件 259 元的置物架，退一单的破坏力完全不同。拿订单数做分母，会把高客单 SKU 的退货损失摊薄成一个小数点。", en: "The first trap is the denominator. Return rate divides by orders; net goods value divides by revenue. One returned 89-yuan vacuum bag and one returned 259-yuan wall rack do very different damage. Using order count as the denominator flattens a high-ticket SKU's loss into a decimal point." },
    "post.returnrate.p1b": { zh: "第二个陷阱是只算退款。退款只是把钱退回去，逆向物流、拆包损耗、客服沟通、二次上架的折价，全都发生在退款之后。只盯退款金额，等于只看了冰山露出水面的一角。", en: "The second trap is counting only the refund. A refund merely sends the money back; reverse logistics, unpacking loss, customer-service time and resale markdown all happen after it. Watching refunds alone is watching the tip of the iceberg." },
    "post.returnrate.p1c": { zh: "第三个陷阱是只看单店。多店矩阵里同一个 SKU 跨店分布，A 店退货率 8%、B 店 15%，合并看是 11%，单独看谁都不及格；不看净货值率，就不知道该先治哪家店、该先砍哪款货。", en: "The third trap is looking at a single store. In a multi-store matrix the same SKU is spread across stores: store A returns 8%, store B returns 15%, the blended figure is 11%, and neither store passes on its own. Without a net goods value rate you cannot tell which store to fix first or which SKU to cut first." },
    "post.returnrate.h2": { zh: "二、逆向物流五块成本：净货值率的完整算法", en: "2. Five Cost Blocks in Reverse Logistics: The Full Net Goods Value Formula" },
    "post.returnrate.p2a": { zh: "把一次退货拆开，成本有五块：退款（客单价全额）、逆向物流（退回运费与分拣）、包装损耗（纸箱、缓冲材、二次打包工时）、客服工时（按分钟折算人力）、二次销售折价（退回品降级处理的差额）。", en: "Break one return apart and there are five cost blocks: the refund (full order value), reverse logistics (return freight and sorting), packaging loss (cartons, cushioning, repacking labor), customer-service labor (minutes converted into cost) and resale markdown (the gap when a returned unit is downgraded and resold)." },
    "post.returnrate.formula": { zh: "净货值率 = 1 − 退货率 × (客单价 + 单均逆向物流 + 单均包装损耗 + 客服分钟 × 0.8 + 单均二次销售折价) ÷ 客单价", en: "Net goods value rate = 1 − return rate × (order value + reverse logistics per return + packaging loss per return + service minutes × 0.8 + resale markdown per return) ÷ order value" },
    "post.returnrate.p2b": { zh: "客服工时按 0.8 元/分钟折算，是一线客服全成本（工资、社保、工位、系统）摊到有效工作分钟后的口径。二次销售折价按实际处理价与正价的差额计。本文采用最保守口径：退回品只计折价损失，不计二次销售收入；若退回品直接报废，真实损失只会更大，不会更小。", en: "Customer-service time is priced at 0.8 yuan per minute — the fully loaded cost of a front-line agent (salary, social insurance, desk, systems) spread across productive minutes. Resale markdown is the gap between the actual clearance price and the original price. This post uses the most conservative convention: returned units carry only the markdown loss, with no resale revenue counted. If a returned unit is scrapped outright, the real loss is larger, never smaller." },
    "post.returnrate.h3": { zh: "三、四款 SKU 实测：退货率差 11.7 个点，净货值率差 16.1 个点", en: "3. Four SKUs Measured: An 11.7-Point Return Gap Becomes a 16.1-Point Net Value Gap" },
    "post.returnrate.p3a": { zh: "下面是某家居收纳产品线 2026 年 9 月的脱敏月度数据，四家店铺合并口径，金额单位元。", en: "Below is anonymized September 2026 monthly data for a home-storage line, consolidated across four stores; amounts are in yuan." },
    "post.returnrate.th0": { zh: "SKU / 品类", en: "SKU / Category" },
    "post.returnrate.th1": { zh: "月销量", en: "Monthly units" },
    "post.returnrate.th2": { zh: "客单价", en: "Order value" },
    "post.returnrate.th3": { zh: "退货率", en: "Return rate" },
    "post.returnrate.th4": { zh: "单均退货成本", en: "Cost per return" },
    "post.returnrate.th5": { zh: "净货值率", en: "Net value rate" },
    "post.returnrate.skuA": { zh: "SKU-A · 折叠收纳箱", en: "SKU-A · Folding storage box" },
    "post.returnrate.skuB": { zh: "SKU-B · 抽屉分隔盒", en: "SKU-B · Drawer divider" },
    "post.returnrate.skuD": { zh: "SKU-D · 真空压缩袋", en: "SKU-D · Vacuum compression bag" },
    "post.returnrate.skuC": { zh: "SKU-C · 壁挂置物架", en: "SKU-C · Wall-mounted rack" },
    "post.returnrate.p3b": { zh: "壁挂置物架 GMV 119.1 万元，是四款里最高的；但 18.5% 的退货率、349.8 元的单均退货成本，把 29.8 万元打成了退货损耗，净货值率只有 75.0%。折叠收纳箱 GMV 63.7 万元，净货值率 91.1%，每 100 元成交真正留下 91.1 元。两者净货值率差 16.1 个百分点，退货率只差 11.7 个百分点——退货率的小差距，会被客单价放大成净货值的大差距。", en: "The wall rack leads with 1.191 million yuan of GMV, yet an 18.5% return rate and 349.8 yuan of cost per return turn 298,000 yuan into return leakage, leaving a 75.0% net goods value rate. The folding box generates 637,000 yuan of GMV at a 91.1% net goods value rate — 91.1 yuan kept from every 100 yuan sold. The net value gap is 16.1 points while the return gap is only 11.7 points: a small return-rate gap gets amplified by order value into a large net-value gap." },
    "post.returnrate.p3c": { zh: "四款合计 GMV 222.8 万元，退货损耗 40.9 万元，整体净货值率 81.7%。也就是说，每做 100 元生意，有 18.3 元在退货链路里蒸发。壁挂置物架退货率每降 1 个百分点，月净货值增加 1.61 万元；这是四个 SKU 里最高的边际收益，治理优先级应该排第一。", en: "Across the four SKUs, GMV totals 2.228 million yuan with 409,000 yuan of return leakage, an overall net goods value rate of 81.7%. In other words, 18.3 yuan of every 100 yuan sold evaporates inside the return chain. Each one-point reduction in the wall rack's return rate adds 16,100 yuan of monthly net value — the highest marginal return of the four, which makes it the first priority for remediation." },
    "post.returnrate.h4": { zh: "四、净货值率怎么算：零依赖 Python 脚本", en: "4. How to Compute the Net Goods Value Rate: Zero-Dependency Python" },
    "post.returnrate.p4a": { zh: "脚本只用 Python 标准库，改数据就能跑。输出按净货值率降序排列，同时给出退货率每降 1 个百分点带来的月净货值增量，方便直接排治理优先级。", en: "The script uses only the Python standard library; change the data and run it. Output is sorted by net goods value rate and also reports the monthly net-value gain from each one-point return-rate reduction, so remediation priorities fall out directly." },
    "post.returnrate.p4b": { zh: "用上面的四款 SKU 跑一遍，输出与文中表格一致：折叠收纳箱 91.10%、抽屉分隔盒 87.52%、真空压缩袋 84.11%、壁挂置物架 75.01%，整体 81.66%。数字对不上，先查三处：客服分钟有没有乘工时单价、二次销售折价有没有重复扣减、退货率有没有写成百分数又除以 100。", en: "Running the four SKUs above reproduces the table: folding box 91.10%, drawer divider 87.52%, vacuum bag 84.11%, wall rack 75.01%, overall 81.66%. If the numbers do not match, check three places first: whether service minutes were multiplied by the labor rate, whether the resale markdown was deducted twice, and whether a percentage return rate was divided by 100 twice." },
    "post.returnrate.h5": { zh: "五、退货归因标签：把退货率拆成可执行的原因", en: "5. Return Reason Tags: Splitting Return Rate into Actionable Causes" },
    "post.returnrate.p5a": { zh: "净货值率告诉你哪个 SKU 有问题，归因标签告诉你问题在哪。每条退货强制选择一级标签并补一段文字，月度汇总看 Top2 标签占比。", en: "The net goods value rate tells you which SKU is broken; reason tags tell you where. Every return must carry one primary tag plus a short note, and the monthly review looks at the share of the top two tags." },
    "post.returnrate.tag0": { zh: "尺寸/空间不符：详情页比例失真、缺少参照物，买家收到才发现放不下。", en: "Size or space mismatch: Distorted proportions and no reference object on the detail page; buyers find out it does not fit only after delivery." },
    "post.returnrate.tag1": { zh: "材质/做工落差：渲染过度、实物色差，预期被拉高后回落。", en: "Material or finish gap: Over-rendered visuals and color shift; expectations are raised, then fall." },
    "post.returnrate.tag2": { zh: "安装/使用门槛：结构复杂、说明缺失，装不上就退。", en: "Installation or usage barrier: Complex structure and missing instructions; if it cannot be assembled, it comes back." },
    "post.returnrate.tag3": { zh: "物流破损：包装抗压不足，运输途中变形、开裂。", en: "Transit damage: Insufficient packaging strength; deformation or cracking in transit." },
    "post.returnrate.tag4": { zh: "冲动购买：促销催单、预期管理缺失，收货后后悔。", en: "Impulse purchase: Promotion pressure and poor expectation management; regret after delivery." },
    "post.returnrate.p5b": { zh: "占退货量 50% 以上的标签，才是详情页、包装和说明书要改的地方；其余标签先不动。一次只改一个主因，改完看下月净货值率有没有抬起来，这比同时改十处、最后不知道哪处生效要可靠得多。", en: "Only a tag accounting for more than 50% of returns deserves changes to the detail page, packaging or manual; leave the rest alone for now. Fix one root cause at a time and check next month's net value rate — far more reliable than changing ten things at once and never knowing which one worked." },
    "post.returnrate.h6": { zh: "六、选品与详情页：把净货值率变成准入门槛", en: "6. Assortment and Detail Pages: Turning Net Goods Value into an Entry Threshold" },
    "post.returnrate.p6a": { zh: "把净货值率写进选品门槛：新品试销 30 天，净货值率低于 80% 不进主推池；低于 70% 直接淘汰，不管 GMV 多好看。门槛要写在选品表里，不能只停在复盘会上。", en: "Write the net goods value rate into the assortment gate: after a 30-day trial, a new SKU below 80% does not enter the main push pool; below 70% it is cut regardless of how good GMV looks. The threshold belongs in the assortment sheet, not just in the post-mortem meeting." },
    "post.returnrate.act0": { zh: "定价补偿：按目标净货值率反推售价，退货成本高的品类把 8-12 个点写进价格，别用毛利补贴退货。", en: "Price compensation: Back-solve price from the target net goods value rate; high-return categories should carry 8-12 points in the price instead of funding returns out of gross margin." },
    "post.returnrate.act1": { zh: "详情页预期管理：尺寸参照物、材质实拍、安装步骤前置，先降“尺寸不符”和“材质落差”两类退货。", en: "Detail-page expectation management: Add size references, real material shots and upfront installation steps; cut size-mismatch and material-gap returns first." },
    "post.returnrate.act2": { zh: "包装加固：单均包装损耗超过 5 元的 SKU，先换抗压结构，再谈流量。", en: "Packaging reinforcement: For SKUs with more than 5 yuan of packaging loss per return, fix the protective structure before buying more traffic." },
    "post.returnrate.p6b": { zh: "《孙子兵法》讲“先为不可胜，以待敌之可胜”。净货值率就是那个“不可胜”——先把退货损耗关进笼子，增长才是真的增长。四款 SKU 的数据摆在这里，下一步不是加预算，而是把壁挂置物架那 1.61 万元/月的边际收益先拿回来。", en: "Sun Tzu said: make yourself invincible first, then wait for the enemy's vulnerability. The net goods value rate is that invincibility — cage the return leakage first, and only then is growth real growth. The four SKUs are on the table; the next move is not more budget, but reclaiming the 16,100 yuan per month sitting in the wall rack." },
    "post.returnrate.title": { zh: "退货率不是售后指标：把逆向物流算进净货值的操盘口径", en: "Return Rate Is Not an After-Sales Metric: Counting Reverse Logistics into Net Goods Value" },

    // ---- SKU 动销分层与尾部淘汰（2026-11-02） ----
    "post.promo.title": { zh: "满减不等于直降：等效折扣率与毛利稀释底线的测算口径", en: "A Discount Is Not a Discount: Equivalent Rate and the Margin Floor Behind Promo Spend" },
    "post.promo.lead": { zh: "满 100 减 25 的标称折扣是 25%，实际让掉的只有 18.9%；另一家店直降 12%，一分不少。这不是文字游戏——它决定你这个月是花 185.8 万元买到 2000.2 万元 GMV，还是按 260 万元做预算、只花出去 185.8 万元，然后在季末急急忙忙把钱补成一堆无效促销。本文用 6 家店、24 条订单档位、月 GMV 2000.2 万元的算例，把等效折扣率、毛利稀释底线与凑单的边际账拆成可执行口径，附零依赖脚本，输出与表格逐格对得上。", en: "A 100-yuan threshold with 25 off reads as 25%, yet it actually gives away 18.9%; another store takes a flat 12% cut and gives away every point of it. This is not wordplay — it decides whether you buy 20.00M yuan of monthly GMV for 1.858M yuan, or budget 2.60M, spend only 1.858M, then panic-spend the rest on promotions that do nothing at quarter end. Using six stores, 24 order tiers and 20.00M yuan of monthly GMV, this article turns the equivalent discount rate, the margin floor and the stack-up ledger into conventions a team can run, with a zero-dependency script whose output matches the tables cell by cell." },
    "post.promo.h1": { zh: "一、标称折扣率不能用来做预算：三个误判", en: "1. Three Misreadings That Start With the Nominal Discount" },
    "post.promo.p1a": { zh: "第一个误判是把“满 A 减 B”里的 B/A 当折扣率。它只在一种情况下成立：每笔订单金额恰好等于 A。真实订单分布里有两类反例——未达门槛的订单优惠为零，把整体等效折扣率往下拉；超出门槛的订单，溢出部分不享受额外优惠，同样稀释等效率。S1 店“满 1200 减 120”标称 10.0%，实际等效只有 6.54%，差 3.46 个百分点，折到 520.1 万元 GMV 上是 18.0 万元预算虚高。", en: "The first misreading treats B/A inside a spend-A-get-B-off rule as the discount rate. That holds only if every order lands exactly at A. Real order distributions break it two ways: orders below the threshold receive nothing and drag the effective rate down, and orders far above the threshold earn nothing extra on the excess, which dilutes it further. Store S1's spend 1,200 get 120 off reads as 10.0% but is worth 6.54% in practice — 3.46 points, or 180,000 yuan of phantom promotion budget on 5.201M yuan of GMV." },
    "post.promo.p1b": { zh: "第二个误判是把等效折扣率当让利幅度。折扣率不是成本，可控边际贡献（CM1）才是成本。同一个 18.87% 的等效折扣，把 S5 的 CM1 率从 24.00% 压到 9.34%，掉 14.65 个百分点；放到 S1 身上只从 47.00% 压到 38.16%，掉 8.84 个百分点。成本率越高，同样的折扣打得越深——因为折扣抬高了“成本 ÷ 实收”这个比值。", en: "The second misreading mistakes the equivalent rate for the cost of the promo. The discount rate is not the cost; controllable contribution margin (CM1) is. One identical 18.87% effective discount drives S5's CM1 rate from 24.00% to 9.34%, a 14.65-point drop, while on S1 it only moves 47.00% to 38.16%, a drop of 8.84 points. The higher the cost ratio, the deeper the same discount cuts, because a discount inflates the cost-over-net revenue ratio." },
    "post.promo.p1c": { zh: "第三个误判是把满减和直降放在同一把尺子上比。满减有稀释、也有凑单杠杆；直降没有稀释、也没有杠杆。S4 店直降 12%，等效就是 12.00%，一分不差——这既是“直降看起来更贵”的数学原因，也是它在低毛利店里反而更安全的理由。", en: "The third misreading puts threshold promos and flat cuts on one ruler. Threshold promos are diluted but carry a basket-building lever; flat cuts are neither diluted nor leveraged. Store S4's flat 12% cut is worth 12.00%, not a point less — which is both why flat cuts look expensive and why they are the safer tool in low-margin stores." },
    "post.promo.h2": { zh: "二、等效折扣率的算法：按订单档位加权", en: "2. How to Compute the Equivalent Rate: Weight It by Order Tier" },
    "post.promo.p2a": { zh: "定义很直白：等效折扣率 = 实际让出的优惠总额 ÷ 优惠前 GMV。满减按“每满 A 减 B”判定叠加档数，直降按比例计提。关键是分子必须来自订单金额分布，不能用标称值反推。", en: "The definition is plain: the equivalent discount rate equals the discount actually given divided by pre-promo GMV. Threshold promos count stacked tiers on a per-A-get-B-off basis; flat cuts accrue proportionally. The catch is that the numerator must come from the order-amount distribution, never back-solved from the nominal rate." },
    "post.promo.p2b": { zh: "两个细节决定结论。第一是叠加：S1 的 2680 元订单按“每满 1200 减 120”付两档、减 240 元，等效 8.96%，低于单档口径的 10.0%。第二是门槛达成：S1 有 18% 的订单落在 980 元档，一笔都没减。两个效应叠加，把 10.0% 压成 6.54%。所以等效折扣率不是运营拍出来的，是订单金额分布算出来的。", en: "Two details decide the answer. First, stacking: S1's 2,680-yuan order takes the 1,200-tier twice for 240 off, an effective 8.96%, below the 10.0% single-tier view. Second, threshold attainment: 18% of S1's orders sit in the 980-yuan band and receive nothing at all. Together those effects push 10.0% down to 6.54%. The effective rate is not something operations decides; it is something the order-amount distribution computes." },
    "post.promo.p2c": { zh: "口径上还有一条必须钉死：分母是“优惠前 GMV”，不是实收。不少团队用实收做分母，等效折扣率会被系统性高估——同一个 S5 会从 18.87% 变成 23.26%，判定立刻失真，处置动作也会跟着做错。", en: "One convention must be nailed down: the denominator is pre-promo GMV, not net revenue. Teams that divide by net revenue systematically overstate the rate — store S5 moves from 18.87% to 23.26%, the verdict flips, and the remediation that follows is wrong." },
    "post.promo.h3": { zh: "三、六个月度算例：2000 万 GMV 的折扣真相", en: "3. A Six-Store Case: What 20 Million Yuan of GMV Really Costs" },
    "post.promo.p3a": { zh: "数据是 24 条订单档位（6 店 × 4 档），每档含订单数、单笔均价、促销类型、成本率与变动费用率。表 1 是脚本跑出来的店铺级结果，合计行是加总后的整体口径。", en: "The dataset is 24 order tiers, six stores by four bands, each with order count, average order value, promo type, cost ratio and variable fee rate. Table 1 is the store-level output of the script; the total row aggregates everything to the portfolio level." },
    "post.promo.p3b": { zh: "三个结论。第一，全店等效折扣率 9.29%，不等于任何一家店的标称值；实付优惠 185.8 万元，若按标称折算会算成 260 万元以上，预算虚高四成。第二，标称最高的 S5（25.0%）实付优惠 54.7 万元，标称只有 10.0% 的 S1 实付 34.0 万元——花多少钱由 GMV 决定，不由标称决定。第三，六家里只有 S5 击穿：等效 18.87% 比该店 16.00% 的上限高出 2.87 个百分点，CM1 率被压到 9.34%，低于 12% 的经营底线；其余五家还有 6 到 41 个点的缓冲。", en: "Three conclusions. First, the portfolio effective rate is 9.29%, which matches no store's nominal number; the discount actually paid is 1.858M yuan, while a nominal-rate calculation would book 2.60M or more — forty percent of phantom budget. Second, the highest nominal rate (S5 at 25.0%) pays 547,000 yuan while S1 at a 10.0% nominal pays 340,000; GMV decides the money, not the label. Third, only S5 breaches: its 18.87% effective rate sits 2.87 points above its 16.00% ceiling and CM1 is squeezed to 9.34%, under the 12% operating floor. The other five carry buffers between 6 and 41 points." },
    "post.promo.h4": { zh: "四、毛利稀释底线：把折扣率上限反解出来", en: "4. The Margin Floor: Solve for the Discount Ceiling Instead of Guessing It" },
    "post.promo.p4a": { zh: "底线不该拍成“折扣不超过 X%”，而应按成本结构反解。CM1 率（对实收）= (1 − 变动费用率) − 成本率 ÷ (1 − 等效折扣率)，注意分母是实收不是 GMV，成本率越高，折扣对它的放大越明显。给定期望的 CM1 率 m（本文取 12%），就能解出该店能承受的等效折扣率上限。", en: "A floor should never be hand-set as a flat discount cap; it should be solved from the cost structure. The CM1 rate on net revenue equals (1 − variable fee rate) minus the cost ratio divided by (1 − effective rate). Note that the denominator is net revenue, not GMV; the higher the cost ratio, the harder a discount inflates it. Set the desired CM1 rate m (12% here) and the ceiling on the effective rate falls out." },
    "post.promo.p4b": { zh: "这个式子把责任分清了：成本率高的店，上限自动收紧。S5 成本率 0.63、变动费用率 0.13，在 12% 的 CM1 底线口径下上限只有 16.00%；S1 成本率 0.38、变动费用率 0.15，上限 47.95%。同一个 18.87% 的等效折扣，放在 S1 是毛毛雨，放在 S5 就是击穿。", en: "The formula assigns responsibility cleanly: a high cost ratio tightens the ceiling automatically. Store S5 at a 0.63 cost ratio and 0.13 variable fee rate can carry only 16.00% against a 12% CM1 floor; S1 at 0.38 and 0.15 can carry 47.95%. The same 18.87% effective discount is a drizzle for S1 and a breach for S5." },
    "post.promo.p4c": { zh: "看表 2 时注意两列不能混：上限是折扣率，实际等效也是折扣率，缓冲是两者之差，单位是百分点。S5 的缓冲是 −2.87 个百分点，这不是一个抽象符号，它对应“每多卖一块钱实收，边际贡献就往回退”的具体处境。", en: "Read Table 2 carefully: the ceiling and the actual rate are both discount rates, and the buffer is their difference in percentage points. S5's buffer of −2.87 points is not an abstraction; it is the concrete position of a store where every extra yuan of net revenue steps contribution backward." },
    "post.promo.h5": { zh: "五、凑单的边际账：低毛利店凑单等于送钱", en: "5. The Stack-Up Ledger: Why Basket-Building Gives Money Away in Low-Margin Stores" },
    "post.promo.p5a": { zh: "满减真正的作用是抬客单，但抬客单不等于赚。以 S5 的“满 100 减 25”为例：一笔 88 元的订单不享优惠，实收 88.00 元，成本 55.44 元，变动费用 11.44 元，CM1 = 21.12 元；顾客为凑门槛加到 105 元，减 25 元后实收 80.00 元，成本 66.15 元，变动费用 10.40 元，CM1 = 3.45 元。GMV 涨了 19.3%，CM1 少了 17.67 元。", en: "The real job of a threshold promo is to lift basket size, but a bigger basket is not profit. Take S5's spend 100 get 25 off: an 88-yuan order earns nothing, nets 88.00, costs 55.44, carries 11.44 of variable fees and leaves CM1 of 21.12. If the customer adds 17 yuan to clear the bar, the 25 off leaves 80.00 net, cost rises to 66.15, fees fall to 10.40 and CM1 collapses to 3.45. GMV is up 19.3% and CM1 is down 17.67 yuan." },
    "post.promo.p5b": { zh: "同样的动作放到 S1 就成立：980 元订单凑到 1450 元，实收从 980.00 涨到 1330.00，成本从 372.40 涨到 551.00，变动费用从 147.00 涨到 199.50，CM1 从 460.60 涨到 579.50，增量 +118.90 元。差别不在门槛设计，在成本率——凑单加的是“增量实收 × (1 − 变动费用率) − 增量成本”，成本率高的店，这个式子天然为负。", en: "The same move works at S1: an order stacked from 980 to 1,450 lifts net from 980.00 to 1,330.00, cost from 372.40 to 551.00 and fees from 147.00 to 199.50, taking CM1 from 460.60 to 579.50 for a gain of 118.90. The difference is not threshold design but the cost ratio: stacking adds incremental net revenue times (1 − variable fee rate) minus incremental cost, and in a high-cost-ratio store that expression is negative by nature." },
    "post.promo.p5c": { zh: "所以门槛不是越低越好，也不是越高越好，而是要让“跨过门槛后的实收”仍高于“不凑单时的实收 + 增量成本”。S5 的 100 元门槛跨过去，实收反而从 88.00 掉到 80.00——这是结构错了，不是运营不努力。", en: "So a threshold is neither better low nor better high; it must leave post-threshold net revenue above no-threshold net revenue plus incremental cost. At S5, crossing the 100-yuan bar drops net revenue from 88.00 to 80.00 — the structure is wrong, not the operator's effort." },
    "post.promo.h6": { zh: "六、四种该立刻改掉的促销结构", en: "6. Four Promo Structures to Change Right Now" },
    "post.promo.p6a": { zh: "第一种，用标称折扣率做预算。六店逐个比对：S2 高估 19.2 万元、S1 高估 18.0 万元、S5 高估 17.8 万元、S3 高估 12.3 万元、S6 高估 11.2 万元，合计 78.5 万元。按这个数字申请预算，要么花不出去，要么在季末被“冲促销”乱花掉——两种结局都难看，且都会在下个月的报表上追责到运营头上。", en: "First, budgeting on the nominal rate. Store by store the overstatement runs 192,000 at S2, 180,000 at S1, 178,000 at S5, 123,000 at S3 and 112,000 at S6 — 785,000 in total. Ask for budget on those numbers and it either sits unused or gets dumped into quarter-end filler promos. Both endings look bad, and both come back to operations in the next month's report." },
    "post.promo.p6b": { zh: "第二种，用统一折扣率管全店。同一条 12% 的折扣线，S1 还有 41.4 个点缓冲，S5 已经翻负 2.87 个点。折扣权限必须按店给，按职级给等于让高毛利店替低毛利店背锅。", en: "Second, governing every store with one discount line. On a flat 12% ceiling, S1 still holds 41.4 points of buffer while S5 is already 2.87 points under. Discount authority must be granted per store; granting it per job grade makes high-margin stores carry the low-margin ones." },
    "post.promo.p6c": { zh: "第三种，拿 GMV 当促销成功指标。S5 月 GMV 290.0 万元，在矩阵里排第四，CM1 只有 22.0 万元——它用 14.5% 的 GMV 只贡献了 3.7% 的 CM1。促销考核只看 GMV，等于奖励把钱花得最狠的那家店。", en: "Third, scoring promos on GMV. S5 books 2.900M yuan of monthly GMV, fourth in the matrix, on just 220,000 yuan of CM1 — 14.5% of GMV delivering 3.7% of contribution. Judging promos on GMV rewards whichever store spends hardest." },
    "post.promo.p6d": { zh: "第四种，不做结构替换。把 S5 从“满 100 减 25”换成直降 12%：实收 255.2 万元（+19.9 万元），CM1 39.3 万元（15.4%），比现状多 17.3 万元/月，年化 207.8 万元。代价是客单价会掉、凑单效应消失；但只要该店客单价本来就低、凑单增量为负，这个代价就是假代价。", en: "Fourth, refusing to swap the structure. Move S5 from spend 100 get 25 off to a flat 12% cut: net revenue becomes 2.552M (+199,000), CM1 reaches 393,000 at 15.4%, an extra 173,000 a month and 2.078M annualized. The trade is a lower average basket and no stacking effect — but if the basket was already small and stacking contributes negatively, that trade is imaginary." },
    "post.promo.h7": { zh: "七、脚本与月度落地口径", en: "7. The Script and the Monthly Operating Cadence" },
    "post.promo.p7a": { zh: "脚本只用标准库。输入列固定：store、tier、orders、avg_amount、promo_type、threshold、reduction、discount_rate、cost_rate、vfee_rate。promo_type 取 MB（满减）或 DR（直降），直降填写 discount_rate，满减填写 threshold 与 reduction。", en: "The script uses the standard library only. The input columns are fixed: store, tier, orders, avg_amount, promo_type, threshold, reduction, discount_rate, cost_rate and vfee_rate. promo_type is MB for a threshold promo or DR for a flat cut; flat cuts fill discount_rate, threshold promos fill threshold and reduction." },
    "post.promo.p7b": { zh: "跑法：python3 promo_eq.py promo.csv。用本文 24 行数据跑，输出与表 1、表 2 逐格对得上：合计 GMV 2000.2 万元、优惠 185.8 万元、等效 9.29%、实收 1814.4 万元、成本 954.9 万元、CM1 602.3 万元（33.20%），S5 唯一击穿。换数据源只要列名不变，脚本一个字不用改。", en: "Run it with python3 promo_eq.py promo.csv. On the 24 rows used here the output matches Tables 1 and 2 cell by cell: GMV 20.002M, discounts 1.858M, effective rate 9.29%, net revenue 18.144M, cost 9.549M, CM1 6.023M at 33.20%, with S5 the only breach. Point it at another source with the same column names and not a line changes." },
    "post.promo.p7c": { zh: "月度节奏就三件事：每月 2 日拉上月订单金额分布（店铺 × 金额档），3 日出等效折扣率与上限对照表，5 日处置击穿店——只有三个选项：改结构（满减换直降）、降档（门槛上调）、收窄适用（限品类或限会员），不接受“下月再看”。把公式、判定规则、输出格式写进技能包的 front matter，AI 每月只做取数、算率、出清单；人只做两件：签处置单、跟平台谈资源置换。", en: "The monthly cadence is three moves: pull last month's order-amount distribution by store and band on the 2nd, publish the effective-rate-versus-ceiling table on the 3rd, and act on breaching stores by the 5th with exactly three options — change the structure (threshold to flat), raise the bar, or narrow eligibility to categories or members. Next month is not an option. Put the formula, the verdict rules and the output format into the skill pack's front matter; AI pulls data, computes rates and produces the list, while people sign the remediation sheet and negotiate resource swaps with the platforms." },
    "post.promo.h8": { zh: "八、结语：促销是对现金的支取", en: "8. Closing: A Promo Is a Withdrawal Against Cash" },
    "post.promo.p8a": { zh: "《孙子兵法·计篇》讲“夫未战而庙算胜者，得算多也”。促销既是给顾客的承诺，也是一次对现金的支取；庙算不细，月底账上就只剩一句“我们做了活动”。2000.2 万元的 GMV 里，让出去的 185.8 万元是能一笔一笔算出来的——算不清的那部分，才是真正贵的那部分。", en: "Sun Tzu's Calculations opens: those who win before the battle begin win because they counted more in the temple. A promo is a promise to the customer and a withdrawal against cash at the same time; count carelessly and all the month-end books hold is the sentence “we ran a campaign”. Inside 20.002M yuan of GMV, the 1.858M given away can be counted yuan by yuan — the part you cannot count is the expensive part." },
    "t1h0": { zh: "店铺", en: "Store" },
    "t1h1": { zh: "GMV（万元）", en: "GMV (10k)" },
    "t1h2": { zh: "标称折扣率", en: "Nominal" },
    "t1h3": { zh: "等效折扣率", en: "Effective" },
    "t1h4": { zh: "优惠额（万元）", en: "Discount (10k)" },
    "t1h5": { zh: "实收（万元）", en: "Net (10k)" },
    "t1h6": { zh: "CM1 率", en: "CM1 rate" },
    "t1h7": { zh: "折扣上限", en: "Ceiling" },
    "t1h8": { zh: "判定", en: "Verdict" },
    "t2h0": { zh: "店铺", en: "Store" },
    "t2h1": { zh: "成本率", en: "Cost ratio" },
    "t2h2": { zh: "变动费用率", en: "Variable fee rate" },
    "t2h3": { zh: "折扣上限", en: "Ceiling" },
    "t2h4": { zh: "实际等效", en: "Actual effective" },
    "t2h5": { zh: "缓冲（百分点）", en: "Buffer (pp)" },
    "t3h0": { zh: "场景", en: "Case" },
    "t3h1": { zh: "订单金额", en: "Order amount" },
    "t3h2": { zh: "优惠", en: "Discount" },
    "t3h3": { zh: "实收", en: "Net revenue" },
    "t3h4": { zh: "成本", en: "Cost" },
    "t3h5": { zh: "变动费用", en: "Variable fee" },
    "t3h6": { zh: "CM1", en: "CM1" },
    "post.promo.safe": { zh: "安全", en: "Safe" },
    "post.promo.breach": { zh: "击穿", en: "Breach" },
    "post.skulayer.title": { zh: "SKU 动销分层：先分层再砍货的尾部治理口径", en: "SKU Turnover Layering: Layer First, Cut Later When Pruning the Long Tail" },
    "post.skulayer.lead": { zh: "库存是已经花掉的现金，货架上的每一件都对应一张已经付过的发票。SKU 动销分层和砍货经常被当成同一件事，其实是两个口径：分层决定流量和补货往哪放，砍货决定现金从哪收回来。口径混用的后果很具体——正在爬坡的新品被当滞销清掉，动销慢却压着大额库存的老货反而留着。本文用 30 个在售 SKU 的月度数据，把两个口径拆开算一遍。", en: "Inventory is cash already spent; every unit on the shelf maps to an invoice already paid. SKU turnover layering and SKU cutting are treated as one job, but they are two: layering decides where traffic and replenishment go, cutting decides where cash comes back from. Mixing them has a specific cost: new items still climbing get cleared as dead stock, while slow movers holding large inventory stay. This post separates the two with monthly data from 30 live SKUs." },
    "post.skulayer.h1": { zh: "一、SKU 动销分层与砍货是两件事：三个口径错位", en: "1. SKU turnover layering and cutting are two jobs: three common mismatches" },
    "post.skulayer.p1a": { zh: "第一个错位是拿销售额占比直接定生死。帕累托分层回答的是“资源该往哪投”，不是“哪款该下架”。按累计销售额划线，低单价、高出货的款会被划进 C 层，它的周转并不慢，砍掉只会白丢毛利。", en: "The first mismatch is using revenue share to decide life or death. Pareto layering answers where resources should go, not which SKU should be delisted. Slice by cumulative revenue and a high-volume, low-price item lands in layer C even though it turns fast; cutting it only throws away gross margin." },
    "post.skulayer.p1b": { zh: "第二个错位是只看销量不看库存。月销 8 件和月销 800 件的两个 SKU，如果前者压了 700 件、后者只有 200 件，占款上完全不是一回事。销量是流量指标，占款才是现金指标，淘汰必须用现金指标。", en: "The second mismatch is looking at sales without inventory. Two SKUs selling 8 and 800 units a month look worlds apart until you notice the first holds 700 units and the second 200. Sales is a traffic metric; tied-up stock is a cash metric, and pruning must use the cash metric." },
    "post.skulayer.p1c": { zh: "第三个错位是不设观察期。本月零销量的 SKU 可能 20 天前才上架，直接进淘汰池，等于用上架时间惩罚新品。这条错位在每个旺季前都会重演一次。", en: "The third mismatch is having no observation window. A SKU at zero sales this month may have launched 20 days ago; sending it straight to the cut list punishes new items for being new. This one repeats before every peak season." },
    "post.skulayer.h2": { zh: "二、SKU 动销分层：累计销售额 70 / 90 / 99 三条线", en: "2. How to layer SKU turnover: cumulative revenue at 70 / 90 / 99" },
    "post.skulayer.p2a": { zh: "口径先定死：观察窗 30 天，销售额＝售价 × 30 天销量，占款＝库存件数 × 单位成本，按销售额降序累计划线。A 层到累计 70%，B 层 70%—90%，C 层 90%—99%，D 层 99% 以上或 30 天零销量。层均周转＝该层 30 天销量 ÷ 该层库存件数。", en: "Fix the conventions first: a 30-day window, revenue = price x 30-day units, tied-up stock = stock units x unit cost, sorted by revenue and sliced on the cumulative curve. Layer A to 70%, layer B from 70% to 90%, layer C from 90% to 99%, layer D beyond 99% or zero sales in 30 days. Layer turns = 30-day units divided by stock units." },
    "post.skulayer.th0": { zh: "层级", en: "Layer" },
    "post.skulayer.th1": { zh: "SKU 数", en: "SKUs" },
    "post.skulayer.th2": { zh: "月销售额（元）", en: "Monthly revenue (yuan)" },
    "post.skulayer.th3": { zh: "销售占比", en: "Revenue share" },
    "post.skulayer.th4": { zh: "库存占款（元）", en: "Inventory value (yuan)" },
    "post.skulayer.th5": { zh: "占款占比", en: "Value share" },
    "post.skulayer.th6": { zh: "层均月周转", en: "Avg monthly turns" },
    "post.skulayer.rowA": { zh: "A 层", en: "Layer A" },
    "post.skulayer.rowB": { zh: "B 层", en: "Layer B" },
    "post.skulayer.rowC": { zh: "C 层", en: "Layer C" },
    "post.skulayer.rowD": { zh: "D 层", en: "Layer D" },
    "post.skulayer.rowSum": { zh: "合计", en: "Total" },
    "post.skulayer.p2b": { zh: "A 层 5 个 SKU，占宽度 16.7%，吃掉 71.2% 销售额，层均月周转 0.74 次，折合库存 40 天卖完。D 层 12 个 SKU 只出 0.9% 销售额，层均月周转 0.03 次，折合 1000 天。C 层加 D 层共 20 个 SKU、占宽度 66.7%，销售贡献 9.1%，却压着 23.0% 的占款。", en: "Five SKUs in layer A cover 16.7% of the assortment width and take 71.2% of revenue; average monthly turns are 0.74, or about 40 days of stock. Twelve SKUs in layer D produce 0.9% of revenue at 0.03 turns, roughly 1,000 days of stock. Layers C and D together hold 20 SKUs, 66.7% of the width and 9.1% of revenue, while tying up 23.0% of inventory value." },
    "post.skulayer.p2c": { zh: "这组数字的正确用法不是“砍 20 个”，而是两个动作：A 层保供、不断货、优先配流量；C 层停止补货，让库存自然出清。分层只负责分配资源，别让它越权去决定生死。", en: "The right use of these numbers is not cut 20 SKUs. It is two moves: keep layer A supplied, never out of stock, with traffic priority; stop replenishing layer C and let the stock drain. Layering allocates resources; do not let it overreach into life-or-death calls." },
    "post.skulayer.h3": { zh: "三、砍货口径：周转 0.3 次 + 占款 3000 元双门槛", en: "3. The cutting gate: 0.3 monthly turns plus 3,000 yuan of tied-up stock" },
    "post.skulayer.p3a": { zh: "月周转次数＝30 天销量 ÷ 当前库存件数。门槛定 0.3 次，等于现有库存够卖 100 天以上；再叠加占款不低于 3000 元——占款太小的款即使周转慢，处理它耗掉的沟通和物流成本比收回的钱还多，不值得上会。两条同时满足才进候选池。", en: "Monthly turns = 30-day units divided by current stock units. A 0.3 gate means existing stock covers more than 100 days of sales. Add a floor of 3,000 yuan tied up: for a tiny amount, the handling and logistics cost of clearing it exceeds the cash recovered, so it does not belong in the review. Both conditions must hold to enter the candidate pool." },
    "post.skulayer.th7": { zh: "SKU", en: "SKU" },
    "post.skulayer.th8": { zh: "类目", en: "Category" },
    "post.skulayer.th9": { zh: "30 天销量", en: "30-day units" },
    "post.skulayer.th10": { zh: "库存件数", en: "Stock units" },
    "post.skulayer.th11": { zh: "占款（元）", en: "Value (yuan)" },
    "post.skulayer.th12": { zh: "月周转", en: "Monthly turns" },
    "post.skulayer.th13": { zh: "判定", en: "Verdict" },
    "post.skulayer.catHw": { zh: "五金", en: "Hardware" },
    "post.skulayer.kill": { zh: "淘汰", en: "Cut" },
    "post.skulayer.catClean": { zh: "清洁", en: "Cleaning" },
    "post.skulayer.holdNew": { zh: "豁免·培育期 26 天", en: "Exempt: new item, day 26" },
    "post.skulayer.catStore": { zh: "收纳", en: "Storage" },
    "post.skulayer.holdNew2": { zh: "豁免·培育期 41 天", en: "Exempt: new item, day 41" },
    "post.skulayer.p3b": { zh: "17 条命中双门槛，其中 10 条被豁免，真正可执行的是 7 个：C03、C05、C04、C08、C02、C07、C06，合计释放 54,515 元占款，占总占款 9.4%。这个数字回答的是“这个月能从货架上收回多少现金”，不是“砍了多少款”的成绩单。", en: "Seventeen SKUs hit both gates, ten are exempt, and seven are actually executable: C03, C05, C04, C08, C02, C07 and C06, releasing 54,515 yuan of tied-up stock, 9.4% of the total. That figure answers how much cash can come back off the shelves this month, not how many SKUs you cut as a scoreboard." },
    "post.skulayer.h4": { zh: "四、可复现代码：一张 CSV 进，分层表与处置清单出", en: "4. Reproducible code: one CSV in, layer table and disposal list out" },
    "post.skulayer.p4a": { zh: "只用标准库，不需要 pandas。输入列固定为 sku、cat、days_listed、sales_30d、stock_qty、unit_cost、price、role，role 用来标记配件引流或共用包装，没标记留空。", en: "Standard library only, no pandas. The input columns are fixed: sku, cat, days_listed, sales_30d, stock_qty, unit_cost, price and role; role flags accessory traffic drivers or shared packaging, and stays empty otherwise." },
    "post.skulayer.p4b": { zh: "用本文的 30 行数据跑一遍，输出与前面的表格逐格对得上：总销售额 863,540 元、总占款 579,765 元、命中 17 条、可执行释放 54,515 元。换数据源只要列名不变，脚本一个字都不用改。", en: "Run it on the 30 rows used here and the output matches the tables above cell by cell: 863,540 yuan of revenue, 579,765 yuan tied up, 17 hits, 54,515 yuan releasable. Point it at another source with the same column names and not a line of the script changes." },
    "post.skulayer.h5": { zh: "五、三个不能一刀切的尾部 SKU", en: "5. Three long-tail SKUs you must not cut blindly" },
    "post.skulayer.li0": { zh: "新品培育期。上架不足 90 天的 SKU 不进淘汰池，只监控环比增速。SKU-D10 零销量但只上架 26 天，占款 7,560 元，砍掉等于放弃一个还没跑完的测试。", en: "New items in their incubation window. SKUs listed less than 90 days stay out of the pool and are tracked only on month-over-month growth. SKU-D10 sells nothing but has been live 26 days with 7,560 yuan tied up; cutting it abandons a test that has not finished running." },
    "post.skulayer.li1": { zh: "配件引流。SKU-D06、D07 月周转 0.05，单独看是死货，但它们撑起主款的连带率和客单价；砍掉配件，A 层主款的转化会跟着掉。", en: "Accessories that drive traffic. SKU-D06 and D07 turn at 0.05 and look dead on their own, but they carry the attachment rate and basket size of the main items; cut the accessories and conversion on layer A drops with them." },
    "post.skulayer.li2": { zh: "共用包装耗材。SKU-D01 与 A 层主力款共用内衬和纸箱，砍掉它，主力款的包材采购量下滑、单价上升，省下的占款会从别处漏回去。", en: "Shared packaging and consumables. SKU-D01 shares liners and cartons with a layer A hero SKU; cutting it shrinks packaging purchase volume, raises unit price, and leaks the saved cash back out somewhere else." },
    "post.skulayer.p5b": { zh: "豁免不是免死金牌，是给期限：培育期满 90 天复盘一次，配件与共用包装每季度复核一次，复核不过照样进池。没有期限的豁免，三个月后就会变成新的库存黑洞。", en: "An exemption is not a lifetime pass, it is a deadline: incubating items get reviewed at day 90, accessories and shared packaging once a quarter, and failing review still sends them to the pool. An exemption without a deadline becomes the next inventory black hole within three months." },
    "post.skulayer.h6": { zh: "六、把 SKU 动销分层做成 AI 技能包", en: "6. Turning SKU turnover layering into an AI skill pack" },
    "post.skulayer.p6a": { zh: "固定输入、固定口径、固定输出，三件事凑齐就能交给 AI 跑。技能包只做三件：读表、判层、出清单；人只做两件：核豁免理由、签淘汰单。边界写清楚，它才不会自作主张把培育期新品也砍了。", en: "Fixed input, fixed conventions, fixed output: get all three and the work can go to AI. The skill pack does three things only: read the file, assign layers, produce the list. People do two: check exemption reasons and sign the cut sheet. Write the boundary clearly, or it will decide on its own to cut the incubating items too." },
    "post.skulayer.p6b": { zh: "技能包最容易塌的地方是“人话边界没写”。把门槛、豁免、输出格式写进 front matter，比在提示词里反复叮嘱可靠——它不靠记性，靠文件。", en: "The most fragile part of a skill pack is an unwritten human boundary. Put gates, exemptions and output format into the front matter; it is more reliable than repeating warnings in a prompt, because it relies on a file, not on memory." },
    "post.skulayer.h7": { zh: "七、结语：把库存当已花掉的现金看", en: "7. Closing: treat inventory as cash already spent" },
    "post.skulayer.p7a": { zh: "《管子》讲“仓廪实而知礼节”，仓里有货是底气；但压着不动的货不是底气，是账上的洞。SKU 动销分层的价值不在报表好看，而在于每月能把一笔具体金额的现金从货架上拿回来——这个月是 54,515 元，下个月取决于名单有没有真的执行掉。", en: "Guanzi says a full granary teaches people courtesy; a full warehouse is confidence, but stock that does not move is not confidence, it is a hole in the books. The value of SKU turnover layering is not a pretty report; it is pulling a specific amount of cash off the shelves every month. This month it is 54,515 yuan, and next month depends on whether the list actually gets executed." },
    // ---- 文章：运费从不按你称的重量收（2026-11-08） ----
    "post.dimwt.title": { zh: "运费从不按你称的重量收：体积重审计与包装改造的回本期", en: "Shipping Never Bills the Weight You Measure: A Dimensional-Weight Audit and the Repack Payback" },
    "post.dimwt.lead": { zh: "SKU-B 的实重是 0.90 公斤，计费重 12.50 公斤，单件运费 92.75 元——售价 299 元的 31.0%。它一个月出 1,460 件，吃掉 135,415 元，占整个仓运费的 40.7%，而报表上它只是一只轻飘飘的毛绒靠垫。本文用 6 个 SKU、8,740 单、月 GMV 1,762,460 元的算例，把体积重、0.5 公斤取整、首重续重与渠道抛比拆成可执行口径：按实重做的运费预算低估 117,130 元，偏差 54.39%；把 B 的箱规压到 50×50×12、再按货物密度分派三条渠道，月运费从 332,495 元压到 236,060 元，省下 96,435 元，等于 6% 净利率下净利的 91.2%。附零依赖脚本，输出与表格逐格对得上。", en: "Beware the quiet cushion: SKU-B weighs 0.90kg, bills at 12.50kg and costs 92.75 yuan a parcel, 31.0% of its 299-yuan price. It ships 1,460 units a month and burns 135,415 yuan, 40.7% of the warehouse freight bill, while the report shows nothing but a soft decorative item. Using six SKUs, 8,740 orders and 1,762,460 yuan of monthly GMV, this article turns volumetric weight, 0.5kg rounding, first-weight tiers and carrier divisors into operating conventions: a weight-only budget understates freight by 117,130 yuan, a 54.39% gap; shrink the SKU-B carton to 50x50x12 and split volume across three carriers, and monthly freight falls from 332,495 to 236,060 yuan, saving 96,435 yuan, which is 91.2% of net profit at a 6% net margin. A zero-dependency script is included, and its output matches the tables cell by cell." },
    "post.dimwt.h1": { zh: "一、按实重做的运费预算，为什么会系统性偏乐观", en: "1. Why a Weight-Only Freight Budget Is Systematically Optimistic" },
    "post.dimwt.h2": { zh: "二、体积重与计费重的四步算法", en: "2. Volumetric Weight and Billable Weight in Four Steps" },
    "post.dimwt.h3": { zh: "三、六个 SKU 的月度算例：抛重吃掉了谁的利润", en: "3. Six SKUs for One Month: Whose Profit Does Dimensional Weight Eat" },
    "post.dimwt.h4": { zh: "四、判定用三条阈值，不用一条", en: "4. Three Thresholds, Not One" },
    "post.dimwt.h5": { zh: "五、包装改造：先看实重有没有托底", en: "5. Repacking: Check Whether Actual Weight Is the Floor" },
    "post.dimwt.h6": { zh: "六、渠道：抛比不是越松越好", en: "6. Carriers: A Looser Divisor Is Not Automatically Cheaper" },
    "post.dimwt.h7": { zh: "七、四个方案摆在一起，钱是谁挣的", en: "7. Four Scenarios Side by Side: Who Actually Earns the Money" },
    "post.dimwt.h8": { zh: "八、脚本与月度落地口径", en: "8. The Script and the Monthly Operating Rhythm" },
    "post.dimwt.h9": { zh: "九、结语：运费在你画刀模那天就定了", en: "9. Closing: Freight Is Decided the Day You Draw the Cutting Die" },
    "post.dimwt.p1a": { zh: "第一层误判是不上秤。产品净重 0.62 公斤的靠垫，包装后上秤 0.90 公斤，差 45%，这一层还能靠称补救；真正的问题是这个 0.90 公斤渠道根本不用——它用的是体积重。用净重、用毛重、用“大概一公斤”，三种做法在轻泡货上会得到三个都错的答案，而且都偏乐观。", en: "The first misreading is skipping the scale. A cushion with 0.62kg of product net weight hits the scale at 0.90kg once packed, a 45% gap, and that layer is still fixable by weighing. The real problem is that the carrier never uses that 0.90kg: it uses volumetric weight. Net weight, gross weight, and a rough guess of about one kilo give you three different answers on the same light, bulky item, and all three are optimistic." },
    "post.dimwt.p1b": { zh: "第二层误判是把抛比当行业常数。同一只 50×50×30 的箱子，抛比取 6000 算出体积重 12.50 公斤，取 8000 只算 9.38 公斤，计费重 12.5 对 9.5，一票差 17.25 元。抛比写在哪张合同上、旺季会不会被临时收紧，不先去问清楚，运费模型就是猜的。", en: "The second misreading treats the divisor as an industry constant. The same 50x50x30 carton yields 12.50kg of volumetric weight at a 6000 divisor and only 9.38kg at 8000, billable 12.5 against 9.5, a 17.25-yuan spread per parcel. If you have not confirmed which divisor sits in the contract and whether peak season tightens it, your freight model is a guess." },
    "post.dimwt.p1c": { zh: "第三层误判是把 0.5 公斤取整当零头。六个 SKU 全仓一个月，被取整吃掉的部分是 9,321 元，年化 111,852 元。这个数字不算大，可它是白付的：换不回任何交付、任何时效、任何客诉减少。", en: "The third misreading treats 0.5kg rounding as loose change. Across six SKUs for one month, rounding alone costs 9,321 yuan, or 111,852 yuan annualized. The number is not huge, but every yuan of it is paid for nothing: no delivery, no speed, no fewer complaints." },
    "post.dimwt.p2a": { zh: "口径是四步，缺一步就错，且四步的错误方向全部指向“低估”。第一步量外箱最大长宽高，不是产品尺寸，也不是内托尺寸；第二步算体积重；第三步取实重与体积重的较大值，再向上取整到渠道步长；第四步套首重续重。", en: "There are four steps, and skipping any one produces an error. All four errors point the same direction: understatement. First measure the outer carton at its largest length, width and height, not the product size and not the inner liner. Second compute volumetric weight. Third take the larger of actual and volumetric weight and round up to the carrier step. Fourth apply the first-weight and additional-weight rates." },
    "post.dimwt.p2b": { zh: "抛比换成密度更好记：6000 意味着每立方米按 166.7 公斤收费，5000 按 200 公斤，8000 按 125 公斤。渠道给你 8000，等于默许你的轻泡货按更低的等效密度过账；给你 5000，等于每立方米多收 33 公斤的钱。同一个箱子换一条渠道，运费能从 92.75 元变成 98.50 元，跟包装一点关系都没有。", en: "Divisors are easier as density: 6000 means 166.7kg per cubic meter, 5000 means 200kg, 8000 means 125kg. A carrier offering 8000 implicitly tolerates your light, bulky goods at a lower effective density; a 5000 divisor charges 33 extra kilos per cubic meter. Move the same carton to another carrier and freight can go from 92.75 to 98.50 yuan with no packaging change at all." },
    "post.dimwt.p2c": { zh: "取整只进不退，加上首重门槛，会把低单价轻小件的运费率顶到荒唐的位置：SKU-E 实重 0.45 公斤、体积重 0.88 公斤，计费重 1.0 公斤，18 元首重照付，占 79 元售价的 22.8%。它的病灶不是抛重，是首重。", en: "Rounding only goes up, and the first-weight threshold then pushes low-price, small items into absurd freight ratios: SKU-E weighs 0.45kg and measures 0.88kg volumetric, so it bills at 1.0kg and pays the full 18-yuan first-weight fee, 22.8% of its 79-yuan price. Its disease is not dimensional weight, it is the first-weight floor." },
    "post.dimwt.p3a": { zh: "数据是 6 个 SKU 的上秤毛重与外箱尺寸，渠道口径固定为抛比 6000、首重 1 公斤 18 元、续重每公斤 6.5 元、0.5 公斤取整。表 1 是脚本跑出来的结果，合计行是加总口径。", en: "The data are the weighed gross weight and outer carton dimensions of six SKUs, priced on one carrier convention: 6000 divisor, 1kg first weight at 18 yuan, 6.5 yuan per additional kilo, 0.5kg rounding. Table 1 is the script output, and the last row is the aggregate." },
    "post.dimwt.p3b": { zh: "三个结论。第一，全仓月运费 332,495 元、占 GMV 1,762,460 元的 18.87%、单均 38.04 元；其中 B 一家占 40.7%，它只出了 16.7% 的单。第二，按实重口径做的预算只有 215,365 元，低估 117,130 元、偏差 54.39%——这不是小数点的误差，是一个店在旺季能不能扛住现金流的问题。第三，抛重不是“轻货才有的问题”：A 的体积重 6.00 公斤超过实重 4.20 公斤，也在按体积付费，只是幅度还温和。", en: "Three conclusions. First, monthly freight is 332,495 yuan, 18.87% of 1,762,460 yuan of GMV, 38.04 yuan per order, and SKU-B alone accounts for 40.7% of it while shipping only 16.7% of the orders. Second, a weight-only budget comes to 215,365 yuan, understating cost by 117,130 yuan, a 54.39% gap. That is not a rounding error, it is whether a store survives peak-season cash flow. Third, dimensional weight is not only a light-goods problem: SKU-A bills 6.00kg volumetric against 4.20kg actual and already pays by volume, just at a milder amplitude." },
    "post.dimwt.p4a": { zh: "阈值一，体积重 ÷ 实重 ≥ 2.0，判抛货。B 是 13.89，E 是 1.94，A 是 1.43，C、D、F 都在 1 以下。这条线管的是“包材有没有救”。", en: "Threshold one: volumetric weight divided by actual weight at or above 2.0 means a dimensional-weight case. SKU-B is 13.89, SKU-E 1.94, SKU-A 1.43, and C, D and F sit below 1. This line answers whether packaging can save the item." },
    "post.dimwt.p4b": { zh: "阈值二，单件运费 ÷ 售价 ≥ 20%，判运费击穿。C 的抛比只有 0.29，按第一条判它是实重货，一票通过；但它的 31.00 元运费占 99 元售价的 31.3%，比 B 还高一点。这类问题改箱规无效，要改定价或包邮门槛。", en: "Threshold two: freight per unit divided by price at or above 20% means freight has broken the price. SKU-C has a ratio of only 0.29, so threshold one clears it as an actual-weight item, yet its 31.00 yuan freight is 31.3% of a 99-yuan price, slightly worse than SKU-B. Repacking will not fix this one; pricing or the free-shipping threshold will." },
    "post.dimwt.p4c": { zh: "阈值三，计费重 − 实重 ≥ 1.0 公斤，判处置优先级。B 差 11.60 公斤，改一次箱规省一半运费；C 差 0.40 公斤，那 0.40 公斤全是 0.5 取整与首重造成的地板，改包材白花钱。", en: "Threshold three: billable minus actual weight at or above 1.0kg sets priority. SKU-B differs by 11.60kg, so one carton change halves its freight; SKU-C differs by 0.40kg, which is entirely the floor created by 0.5kg rounding and the first-weight fee, so repacking wastes money." },
    "post.dimwt.p4d": { zh: "三条阈值各管一件事：抛重强度、定价空间、处置优先级。只用第一条会放过 C，把 31.3% 的运费率当正常；只用第二条会把 C 判成抛货，压箱规压到最后一分钱没省。", en: "Each threshold owns one question: dimensional intensity, pricing room, and priority. Use only the first and SKU-C slips through with a 31.3% freight ratio treated as normal. Use only the second and you will classify SKU-C as a bulky case and repack until not one yuan is saved." },
    "post.dimwt.p5a": { zh: "B 的箱规从 50×50×30 压到 50×50×12，体积重 12.50 降到 5.00 公斤，计费重 12.5 降到 5.0，单件运费 92.75 降到 44.00 元，降幅 52.6%，月省 71,175 元。真空压缩袋 1.2 元/件、月耗材成本 1,752 元，加一次性 8,000 元，回本期 3.4 天。", en: "Shrinking the SKU-B carton from 50x50x30 to 50x50x12 drops volumetric weight from 12.50 to 5.00kg, billable from 12.5 to 5.0, and freight per parcel from 92.75 to 44.00 yuan, a 52.6% cut worth 71,175 yuan a month. Vacuum bags cost 1.2 yuan per unit, 1,752 yuan a month, plus 8,000 yuan one-off, and payback takes 3.4 days." },
    "post.dimwt.p5b": { zh: "A 的箱规从 60×40×15 压到 60×40×10，体积重 6.00 降到 4.00 公斤，但实重 4.20 公斤托底，计费重只从 6.0 降到 4.5，单件运费 50.50 降到 40.75 元，省 9.75 元、月省 7,995 元；内托改模一次性 12,000 元，回本期 45 天。", en: "Shrinking the SKU-A carton from 60x40x15 to 60x40x10 drops volumetric weight from 6.00 to 4.00kg, but 4.20kg of actual weight sets the floor, so billable only moves from 6.0 to 4.5 and freight from 50.50 to 40.75 yuan: 9.75 yuan saved, 7,995 yuan a month, against 12,000 yuan of one-off tooling and a 45-day payback." },
    "post.dimwt.p5c": { zh: "同样是压箱规，一个 3.4 天回本，一个 45 天回本——差别不在包材工艺，在实重有没有托底。A 的收益天花板由 4.20 公斤锁死，把体积压到 4.00 公斤以下一分钱也不再多省。改造前先算这一步，能省掉一整轮无效打样。", en: "Same intervention, one payback in 3.4 days and the other in 45: the difference is not packaging craft, it is whether actual weight forms a floor. SKU-A's ceiling is locked at 4.20kg, and pressing volume below 4.00kg saves nothing more. Do this check before tooling, and you skip an entire round of pointless samples." },
    "post.dimwt.p6a": { zh: "三条渠道摆在一起看，最容易踩的坑是只看续重。CH-B 的续重 5.0 元是全仓最低，但抛比收紧到 5000，全量跑下来 341,950 元，比 CH-A 还贵 9,455 元——抛比收紧一档，续重省下来的钱全吐回去还不够。", en: "Line three carriers up and the easiest trap is reading only the additional-weight rate. CH-B has the cheapest at 5.0 yuan, but its divisor tightens to 5000, so full volume costs 341,950 yuan, 9,455 yuan more than CH-A. Tighten the divisor one notch and the savings on the additional rate are gone, with nothing left over." },
    "post.dimwt.p6b": { zh: "CH-C 抛比 8000、首重 15 元、续重 9.0 元，全量 323,160 元。它对轻泡货有利（B 91.50 对 92.75、E 15.00 对 18.00），对重货不利（C 33.00 对 31.00、D 37.50 对 34.25）。没有一条渠道在所有 SKU 上都赢，所以“统一走最便宜那条”本身就是错的。", en: "CH-C runs an 8000 divisor, a 15-yuan first weight and 9.0 yuan per additional kilo, costing 323,160 yuan at full volume. It helps light bulky items (SKU-B 91.50 against 92.75, SKU-E 15.00 against 18.00) and hurts heavy ones (SKU-C 33.00 against 31.00, SKU-D 37.50 against 34.25). No single carrier wins on every SKU, so sending everything down the cheapest lane is itself an error." },
    "post.dimwt.p6c": { zh: "分派规则一句话：看计费重由谁决定。由体积决定的 SKU 走松抛比渠道，由实重决定的 SKU 走低续重渠道。改造后 A、C、D 走 CH-B（单件 40.00、30.00、32.50 元），B、E、F 走 CH-C（42.00、15.00、19.50 元）。这不是拍脑袋的组合，是 6 个 SKU × 3 条渠道 18 个格子逐个比出来的最小值。", en: "The allocation rule in one line: ask what determines billable weight. SKUs determined by volume go to the looser divisor; SKUs determined by actual weight go to the lower additional rate. After repacking, SKU-A, C and D go to CH-B (40.00, 30.00 and 32.50 yuan per unit) and SKU-B, E and F go to CH-C (42.00, 15.00 and 19.50 yuan). This is not a hunch: it is the minimum of 18 cells across six SKUs and three carriers." },
    "post.dimwt.p7a": { zh: "只切渠道省 21,025 元（6.32%）；只改包装省 79,170 元（23.81%）；两件一起做省 96,435 元（29.00%）。包装改造贡献了 82.1%，渠道分派贡献 17.9%。渠道是谈来的，箱规是自己能定的——先做能定的那件。", en: "Switching carriers alone saves 21,025 yuan (6.32%); repacking alone saves 79,170 yuan (23.81%); doing both saves 96,435 yuan (29.00%). Repacking contributes 82.1% and carrier allocation 17.9%. Carriers are negotiated, cartons are yours to decide, so do first the part you control." },
    "post.dimwt.p7b": { zh: "96,435 元放在 1,762,460 元 GMV、6.0% 净利率的盘子上，等于净利从 105,748 元抬到 202,183 元，涨幅 91.2%。运费率从 18.87% 降到 13.39%，靠的是两件都不性感的事：重打一张刀模、重排一张分派表。", en: "On 1,762,460 yuan of GMV at a 6.0% net margin, 96,435 yuan lifts net profit from 105,748 to 202,183 yuan, a 91.2% increase. Freight falls from 18.87% to 13.39% of GMV through two thoroughly unglamorous tasks: redrawing one cutting die and re-issuing one allocation table." },
    "post.dimwt.p8a": { zh: "脚本只用标准库。输入列固定：sku、L_cm、W_cm、H_cm、weight_kg（上秤毛重）、divisor、first_fee、addl_fee、orders、price。实重口径那一列是故意留的对照——它就是大多数团队现在用的算法，跑出来的差值就是被抛重吃掉的利润。", en: "The script uses the standard library only. The input columns are fixed: sku, L_cm, W_cm, H_cm, weight_kg (weighed gross weight), divisor, first_fee, addl_fee, orders and price. The weight-only column is a deliberate control: it is the algorithm most teams run today, and the spread it produces is the profit dimensional weight has been eating." },
    "post.dimwt.p8b": { zh: "跑法：python3 dim_weight_audit.py sku.csv。用本文 6 行数据跑，输出与表 1 逐格对得上：合计月运费 332,495 元、占 GMV 18.87%、实重口径低估 117,130 元（54.39%）。换渠道只要改 divisor、first_fee、addl_fee 三列，脚本一个字不用动。", en: "Run it as python3 dim_weight_audit.py sku.csv. With the six rows in this article, the output matches Table 1 cell by cell: 332,495 yuan of monthly freight, 18.87% of GMV, and a 117,130-yuan understatement (54.39%) under the weight-only convention. To switch carriers, change only divisor, first_fee and addl_fee; not one line of logic moves." },
    "post.dimwt.p8c": { zh: "月度节奏三件事：每月 3 日拉上月上秤毛重与外箱最大尺寸（不是产品规格书上的数字）；4 日出抛比、运费率、判定三张表；6 日处置——抛货改箱规、运费率击穿的改定价或包邮门槛、两样都不改的写进选品淘汰名单。把字段和阈值写进技能包的 front matter，AI 每月只做取数、算重、出清单；人只做两件：签包材改动单、带着计费重分布去找渠道谈抛比。", en: "The monthly rhythm has three beats. On day 3 pull last month's weighed gross weights and outer carton dimensions, not the numbers printed on the spec sheet. On day 4 produce the divisor, freight-ratio and verdict tables. On day 6 act: repack the dimensional cases, reprice or move the free-shipping threshold for items where freight breaks the price, and put the untouched ones on the assortment cut list. Write the fields and thresholds into a skill pack's front matter, so the AI only pulls data, computes weight and produces the list, while people do two things: sign the packaging change order, and walk into the carrier negotiation with the billable-weight distribution in hand." },
    "post.dimwt.p9a": { zh: "《孙子兵法·作战篇》讲“国之贫于师者远输，远输则百姓贫”。两千五百年前说的是粮道，今天说的是箱规与抛比。运费不是财务科目，是产品结构的一部分——它的高低在画包装刀模那一刻就定了，只是账单晚一个月才到。晚看一步，就是一个月 11.7 万元的差额。", en: "Sun Tzu's Operations chapter says a state is impoverished by distant transport, and distant transport impoverishes its people. Twenty-five centuries ago that described grain roads; today it describes cartons and divisors. Freight is not an accounting line, it is part of product structure. Its level is fixed the moment the packaging die is drawn, and only the invoice arrives a month later. Look one month late and you lose 117,000 yuan a month." },
    "post.dimwt.t1h0": { zh: "SKU", en: "SKU" },
    "post.dimwt.t1h1": { zh: "外箱尺寸（cm）", en: "Carton (cm)" },
    "post.dimwt.t1h2": { zh: "实重（kg）", en: "Actual weight (kg)" },
    "post.dimwt.t1h3": { zh: "体积重（kg）", en: "Volumetric (kg)" },
    "post.dimwt.t1h4": { zh: "计费重（kg）", en: "Billable (kg)" },
    "post.dimwt.t1h5": { zh: "单件运费（元）", en: "Freight per unit (yuan)" },
    "post.dimwt.t1h6": { zh: "月单量", en: "Units per month" },
    "post.dimwt.t1h7": { zh: "月运费（元）", en: "Monthly freight (yuan)" },
    "post.dimwt.t1h8": { zh: "运费/售价", en: "Freight to price" },
    "post.dimwt.t2h0": { zh: "SKU", en: "SKU" },
    "post.dimwt.t2h1": { zh: "体积重/实重", en: "Volumetric / actual" },
    "post.dimwt.t2h2": { zh: "运费占售价比", en: "Freight to price" },
    "post.dimwt.t2h3": { zh: "计费重−实重（kg）", en: "Billable minus actual (kg)" },
    "post.dimwt.t2h4": { zh: "判定", en: "Verdict" },
    "post.dimwt.t2h5": { zh: "处置动作", en: "Action" },
    "post.dimwt.t3h0": { zh: "SKU", en: "SKU" },
    "post.dimwt.t3h1": { zh: "改造前箱规", en: "Carton before" },
    "post.dimwt.t3h2": { zh: "改造后箱规", en: "Carton after" },
    "post.dimwt.t3h3": { zh: "体积重（kg）", en: "Volumetric (kg)" },
    "post.dimwt.t3h4": { zh: "计费重（kg）", en: "Billable (kg)" },
    "post.dimwt.t3h5": { zh: "单件运费（元）", en: "Freight per unit (yuan)" },
    "post.dimwt.t3h6": { zh: "月省（元）", en: "Monthly saving (yuan)" },
    "post.dimwt.t3h7": { zh: "回本期", en: "Payback" },
    "post.dimwt.t4h0": { zh: "渠道", en: "Carrier" },
    "post.dimwt.t4h1": { zh: "抛比", en: "Divisor" },
    "post.dimwt.t4h2": { zh: "首重费（1kg）", en: "First-kg fee" },
    "post.dimwt.t4h3": { zh: "续重费（元/kg）", en: "Additional per kg (yuan)" },
    "post.dimwt.t4h4": { zh: "全量月运费（元）", en: "Full-volume freight (yuan)" },
    "post.dimwt.t4h5": { zh: "占 GMV", en: "Share of GMV" },
    "post.dimwt.t4h6": { zh: "相对 CH-A", en: "vs CH-A" },
    "post.dimwt.t5h0": { zh: "方案", en: "Scenario" },
    "post.dimwt.t5h1": { zh: "月运费（元）", en: "Monthly freight (yuan)" },
    "post.dimwt.t5h2": { zh: "占 GMV", en: "Share of GMV" },
    "post.dimwt.t5h3": { zh: "月省（元）", en: "Monthly saving (yuan)" },
    "post.dimwt.t5h4": { zh: "降幅", en: "Reduction" },

    // ---- 页脚 ----
    "footer.rss": { zh: "RSS 订阅", en: "RSS" },
    "footer.site": { zh: "站点", en: "Site" },
    "footer.theme": { zh: "主题", en: "Topics" },

    // ---- 商业思维专题页 ----
    "business.eyebrow": { zh: "商业思维专题", en: "Business Thinking" },
    "business.title": { zh: "商业思维", en: "Business Thinking" },
    "business.sub": { zh: "汇集商业操盘与 AI 技能包的实战文章：库存、清仓、渠道、达人、品牌与自动化，按日期倒序收录全部文章，每周更新。", en: "Practical articles on business operations and AI skill packs: inventory, clearance, channels, influencers, branding and automation — all posts in reverse chronological order, updated weekly." },
    "business.count": { zh: "篇文章", en: "Posts" },
    "business.cats": { zh: "个主题分类", en: "Categories" },
    "business.weekly": { zh: "篇/每周更新", en: "Posts / Week" },
    "business.allTitle": { zh: "商业思维 · 全部文章", en: "Business Thinking · All Posts" },
    "business.allCount": { zh: "30 篇 · 按日期倒序", en: "30 Posts · Reverse Chronological" },
    "business.update": { zh: "以上为本站全部文章，覆盖 7 个主题分类；新文章将每周补充到本列表顶部，并与文汇、RSS、sitemap 同步。", en: "All site posts above, covering 7 topic categories; new posts are added to the top weekly and synced with the archive, RSS and sitemap." },
    "business.footerIntro": { zh: "记录真实业务里的 AI 应用与商业操盘方法，所有案例基于公开可验证的实操过程。", en: "Documenting AI applications and business operations methods from real work — every case is based on publicly verifiable practice." },

    // ---- AI技能包实战专题页 ----
    "aiSkill.eyebrow": { zh: "AI技能包专题", en: "AI Skill Pack" },
    "aiSkill.title": { zh: "AI技能包实战", en: "AI Skill Practice" },
    "aiSkill.sub": { zh: "汇集扶摇博客标注 AI 技能包属性的实战文章：从零基础上手、审批自动化到接口合同、版本门禁与技能矩阵落地，按日期倒序收录，每周更新。", en: "A collection of AI skill pack practice articles from the blog: zero-baseline onboarding, approval automation, interface contracts, version gates and skill matrix implementation — in reverse chronological order, updated weekly." },
    "aiSkill.count": { zh: "篇文章", en: "Posts" },
    "aiSkill.cats": { zh: "个主题分类", en: "Category" },
    "aiSkill.weekly": { zh: "篇/每周更新", en: "Posts / Week" },
    "aiSkill.allTitle": { zh: "AI技能包 · 全部实战文章", en: "AI Skill Pack · All Practice Posts" },
    "aiSkill.allCount": { zh: "12 篇 · 按日期倒序", en: "12 Posts · Reverse Chronological" },
    "aiSkill.update": { zh: "以上为本站全部 AI 技能包属性文章；新文章将每周补充到本列表顶部，并与文汇、RSS、sitemap 同步。", en: "All AI skill pack posts above; new posts are added to the top weekly and synced with the archive, RSS and sitemap." },
    "aiSkill.footerIntro": { zh: "记录真实业务里的 AI 技能包应用方法，所有案例基于公开可验证的实操过程。", en: "Documenting AI skill pack methods from real work — every case is based on publicly verifiable practice." },
    "index.biz.eyebrow": { zh: "商业思维专题", en: "Business Thinking" },
    "index.biz.desc": { zh: "商业操盘 × AI 技能包，专题汇集双数日自动发布的文章", en: "Business operations × AI skill packs — a special collection of articles auto-published on even-numbered days." },
    "index.biz.cta": { zh: "进入商业思维 →", en: "Enter Business Thinking →" },
    "index.biz.recent": { zh: "最近文章", en: "Recent Posts" },
    "offline.tip": { zh: "当前离线，正在显示缓存内容", en: "You're offline — showing cached content" },
    "comments.title": { zh: "评论", en: "Comments" },

    // ---- 新导航 ----
    "nav.projects": { zh: "项目经历", en: "Projects" },
    "nav.methods": { zh: "方法论", en: "Methods" },
    "nav.results": { zh: "成绩单", en: "Results" },
    "nav.careers": { zh: "加入我们", en: "Careers" },

    // ---- 联系页 ----
    "contact.sub": { zh: "项目合作、商业操盘咨询、AI 技能包合作，或只是聊聊行业——都可以从这里开始。", en: "Project collaboration, business consulting, AI skill pack projects — or just a chat about the industry. Start here." },
    "contact.response": { zh: "响应", en: "Response" },
    "contact.response.val": { zh: "1-2 个工作日内回复 · 正式合作走 OA 审批留痕", en: "Reply within 1-2 business days · formal deals logged via OA approval" },
    "contact.vcard": { zh: "保存电子名片", en: "Save Contact Card" },
    "contact.qr.todo": { zh: "微信二维码待补充", en: "WeChat QR pending" },
    "contact.qr.caption": { zh: "扫码加微信，备注来意", en: "Scan to add me on WeChat" },
    "contact.form.title": { zh: "合作咨询", en: "Partnership Inquiry" },
    "contact.form.company": { zh: "公司 / 渠道", en: "Company / Channel" },
    "contact.form.company.ph": { zh: "公司与主营渠道（选填）", en: "Company & main channel (optional)" },
    "contact.form.intent": { zh: "合作意向", en: "Inquiry Type" },
    "contact.form.privacy": { zh: "信息仅用于本次沟通，不对外共享、不做营销推送。", en: "Used only for this conversation. Never shared, never used for marketing." },
    "opt.b2b": { zh: "项目合作", en: "Project Collaboration" },
    "opt.brand": { zh: "项目 / 业务合作", en: "Project / Business" },
    "opt.skill": { zh: "AI 技能包合作", en: "AI Skill Pack" },
    "opt.consult": { zh: "咨询 / 培训", en: "Consulting / Training" },
    "opt.job": { zh: "应聘", en: "Job Application" },
    "opt.other": { zh: "其他", en: "Other" },

    // ---- 表单状态提示 ----
    "inquiry.err.name": { zh: "请填写称呼", en: "Please enter your name" },
    "inquiry.err.email": { zh: "请填写有效邮箱，方便回复你", en: "Please enter a valid email so I can reply" },
    "inquiry.err.msg": { zh: "内容请至少 10 个字，方便我判断需求", en: "Please write at least 10 characters" },
    "inquiry.sending": { zh: "提交中…", en: "Sending…" },
    "inquiry.success": { zh: "已收到，我会在 1-2 个工作日内回复你。", en: "Got it — I'll reply within 1-2 business days." },
    "inquiry.fail": { zh: "提交失败，请直接发邮件到 {mail}", en: "Submission failed. Please email {mail} directly." },
    "inquiry.mailto": { zh: "正在打开你的邮件客户端…", en: "Opening your mail client…" },
    "inquiry.cooldown": { zh: "刚刚已提交，请稍候再试", en: "Just submitted — please wait a moment" },
    "inquiry.nochannel": { zh: "暂未配置提交通道，请直接发邮件联系。", en: "No submission channel configured yet. Please email directly." },


    // ---- 成绩单页 ----
    "ach.eyebrow": { zh: "Results", en: "Results" },
    "ach.title": { zh: "成绩单", en: "Results" },
    "ach.sub": { zh: "只列能对账的数字：规模、排名、覆盖与沉淀。口径与集团内部统计一致。", en: "Only numbers that reconcile: scale, rankings, coverage, assets. Same basis as internal group reporting." },
    "ach.numbers": { zh: "核心数字", en: "Key Numbers" },
    "ach.gmv": { zh: "年 GMV（已实现）", en: "Annual GMV (achieved)" },
    "ach.gmv.note": { zh: "国内 + 海外合计，年度口径", en: "Domestic + overseas, annual basis" },
    "ach.stores": { zh: "店铺矩阵", en: "Store Matrix" },
    "ach.stores.note": { zh: "9+ 国内平台 + 多个海外平台", en: "9+ domestic platforms + multiple overseas" },
    "ach.brands": { zh: "多品牌运营", en: "Multi-brand Operations" },
    "ach.brands.note": { zh: "多品牌并行运营，覆盖不同价格带与人群", en: "Billiards, spanning multiple price tiers" },
    "ach.amazon": { zh: "亚马逊站点类目榜", en: "Amazon Category Rankings" },
    "ach.amazon.note": { zh: "日本 #5 / 德国 #8 · 美国 #11 / 加拿大 #11", en: "JP #5 / DE #8 / US #11 / CA #11" },
    "ach.skills": { zh: "AI 技能包", en: "AI Skill Packs" },
    "ach.skills.note": { zh: "投流 / 生图 / 看板 / 审批 / 脚本", en: "Ads / imaging / dashboards / approvals / scripts" },
    "ach.team": { zh: "团队规模", en: "Team Size" },
    "ach.team.note": { zh: "6 岗体系：平台 / 内容 / 客服 / 仓储 / 数据 / 行政", en: "Six functions: platform / content / service / warehouse / data / admin" },
    "ach.platforms": { zh: "平台覆盖", en: "Platform Coverage" },
    "ach.domestic": { zh: "国内", en: "Domestic" },
    "ach.overseas": { zh: "海外", en: "Overseas" },
    "ach.private": { zh: "私域", en: "Private domain" },
    "ach.dtc": { zh: "独立站", en: "DTC site" },
    "ach.timeline": { zh: "关键节点", en: "Milestones" },
    "ach.t1.date": { zh: "2026", en: "2026" },
    "ach.t1.title": { zh: "多品牌进入亚马逊 5 站类目榜", en: "Multiple brands ranked on Amazon across 5 marketplaces" },
    "ach.t1.desc": { zh: "日本站 #5、德国站 #8；美国站 #11、加拿大站 #11。海外多站点运营常态化推进。", en: "JP #5, DE #8, US #11 and CA #11. Multi-marketplace overseas operations running as business as usual." },
    "ach.t2.date": { zh: "2026", en: "2026" },
    "ach.t2.title": { zh: "年 GMV 突破千万美元", en: "Annual GMV passed USD 10 million" },
    "ach.t2.desc": { zh: "国内与海外业务向 50/50 结构调整，49 个店铺分布在 9+ 国内平台与多个海外平台。", en: "Restructuring toward a 50/50 domestic-overseas mix, with 49 stores across 9+ domestic and multiple overseas platforms." },
    "ach.t3.date": { zh: "2026", en: "2026" },
    "ach.t3.title": { zh: "AI 技能包体系成型", en: "AI skill pack system took shape" },
    "ach.t3.desc": { zh: "把投流审核、视觉生产、数据看板、OA 审批等沉淀为 20+ 可复用技能包，零基础同事一键使用。", en: "Ad review, visual production, dashboards and OA approvals packaged into 20+ reusable skills anyone can run with one click." },
    "ach.shots.todo": { zh: "类目榜 / 后台数据截图待补充", en: "Ranking / backend screenshots pending" },
    "ach.shots.caption": { zh: "补图后此处展示亚马逊类目榜与后台数据截图（assets/img/ 目录）", en: "Amazon rankings and backend screenshots will show here once added to assets/img/" },
    "ach.cta": { zh: "聊聊合作", en: "Talk Partnership" },
    "ach.hint": { zh: "数据口径以集团内部统计为准 · 对外披露以审批版本为准", en: "Figures follow internal group reporting · external disclosure follows the approved version" },

    // ---- 招聘页 ----
    "careers.eyebrow": { zh: "Careers", en: "Careers" },
    "careers.title": { zh: "加入我们", en: "Join Us" },
    "careers.sub": { zh: "15 人电商团队、49 个店铺、国内海外双线。这里不缺舞台，缺的是能把事做成的人。", en: "A 15-person team, 49 stores, 9 brands, domestic and overseas tracks. There's no shortage of stage here — only of people who get things done." },
    "careers.why": { zh: "为什么是我们", en: "Why Us" },
    "careers.why1.t": { zh: "真·多平台战场", en: "A real multi-platform battlefield" },
    "careers.why1.d": { zh: "国内 9+ 平台、海外 Amazon / Temu / TikTok Shop / 独立站，一个团队跑通两条增长曲线。", en: "9+ domestic platforms plus Amazon, Temu, TikTok Shop and DTC — one team running two growth curves." },
    "careers.why2.t": { zh: "AI 先行的团队", en: "An AI-first team" },
    "careers.why2.d": { zh: "20+ 技能包把重复劳动自动化，你带来的方法论也会被沉淀成技能包，团队一起复用。", en: "20+ skill packs automate the grunt work, and your playbook gets packaged too, so the whole team reuses it." },
    "careers.why3.t": { zh: "数据说了算", en: "Data has the final word" },
    "careers.why3.d": { zh: "看板、库存监控、价格预警都是现成的，决策不看资历看数字，试错成本团队扛。", en: "Dashboards, inventory monitoring and price alerts are already in place. Decisions follow numbers, not seniority." },
    "careers.open": { zh: "在招岗位", en: "Open Roles" },






































































    "job.report": { zh: "汇报对象", en: "Reports to" },
    "job.code": { zh: "岗位编码", en: "Job code" },
    "job.kpi": { zh: "考核口径（KPI）", en: "How you'll be measured (KPI)" },
    "job.sys": { zh: "常用系统", en: "Systems you'll use" },
    "job.red": { zh: "红线（一票否决）", en: "Red lines (auto-reject)" },
    "job1.title": { zh: "TK 跨境直播运营", en: "TikTok Cross-border Live Operations" },
    "job1.loc": { zh: "南京（江苏）· 深圳可选", en: "Nanjing (Jiangsu) · Shenzhen optional" },
    "job1.type": { zh: "全职", en: "Full-time" },
    "job1.dept": { zh: "跨境电商", en: "Cross-border E-commerce" },
    "job1.report.val": { zh: "跨境负责人 / 平台负责人", en: "Cross-border Lead / Platform Lead" },
    "job1.desc": { zh: "负责 TikTok Shop 小店运营，以短视频挂车 + 直播场控 + 达人联盟驱动 GMV，对店铺 GMV、直播间转化与联盟 ROI 负责。", en: "Own TikTok Shop operations — short-video tagging, live-room floor control and creator affiliate — accountable for shop GMV, live conversion and affiliate ROI." },
    "job1.d1": { zh: "短视频：挂车选品与转化，维护内容日历", en: "Short video: product tagging and conversion, maintain the content calendar" },
    "job1.d2": { zh: "直播：小店直播排期与场控，输出直播表", en: "Live: shop live scheduling and floor control, maintain the live calendar" },
    "job1.d3": { zh: "联盟：达人联盟带货与佣金管理，维护联盟台账", en: "Affiliate: creator partnership and commission management, maintain the affiliate ledger" },
    "job1.d4": { zh: "投流：Shop Ads 计划搭建与 ROI 优化，维护投流台账", en: "Ads: build Shop Ads campaigns and optimise ROI, maintain the spend ledger" },
    "job1.d5": { zh: "数据：罗盘复盘与优化，输出周报与下一步动作", en: "Data: review via analytics dashboard, ship weekly reports with next actions" },
    "job1.r1": { zh: "大专及以上，电子商务 / 市场营销优先", en: "College degree or above; e-commerce / marketing preferred" },
    "job1.r2": { zh: "2 年以上 TikTok Shop 或抖音直播运营经验，有台球 / 运动器材类目优先", en: "2+ years on TikTok Shop or Douyin live operations; billiards / sports equipment category a plus" },
    "job1.r3": { zh: "熟悉平台规则、流量与转化逻辑，英语能支撑基础商务沟通", en: "Solid grasp of platform rules, traffic and conversion logic; English sufficient for business communication" },
    "job1.r4": { zh: "会搭投放计划、控 ROI，能看懂转化漏斗并据此调整动作", en: "Can build ad campaigns and control ROI; reads the conversion funnel and acts on it" },
    "job1.r5": { zh: "数据敏感、执行强、抗压，能接受直播排班（晚间场次）", en: "Data-sensitive, strong execution, resilient; open to live-stream shifts (evening slots)" },
    "job1.k1": { zh: "GMV 达成率", en: "GMV attainment" },
    "job1.k2": { zh: "直播间转化", en: "Live-room conversion" },
    "job1.k3": { zh: "短视频转化", en: "Short-video conversion" },
    "job1.k4": { zh: "联盟 ROI", en: "Affiliate ROI" },
    "job1.k5": { zh: "店铺评分", en: "Shop rating" },
    "job1.sys.val": { zh: "TikTok Shop 后台（短视频 / 直播 / 联盟 / Shop Ads）", en: "TikTok Shop Seller Center (video / live / affiliate / Shop Ads)" },
    "job1.plus": { zh: "加分项：台球 / 运动器材类目经验、现有海外达人资源、基础剪辑、小语种（日 / 德）。", en: "Bonus: billiards / sports category experience, existing overseas creator network, basic video editing, extra language (JP / DE)." },
    "job1.red.val": { zh: "虚假宣传 / 绝对化用语 / 刷量刷单 / 违规带货 / 侵权仿牌", en: "False advertising, superlative claims, fake orders or traffic, non-compliant selling, counterfeit or IP infringement" },
    "job2.title": { zh: "跨境电商运营（Lazada / Shopee 东南亚）", en: "Cross-border E-commerce Operator (Lazada / Shopee SEA)" },
    "job2.loc": { zh: "南通（跨境主阵地）· 南京", en: "Nantong (cross-border hub) · Nanjing" },
    "job2.type": { zh: "全职", en: "Full-time" },
    "job2.dept": { zh: "跨境电商", en: "Cross-border E-commerce" },
    "job2.report.val": { zh: "跨境负责人 / 平台负责人", en: "Cross-border Lead / Platform Lead" },
    "job2.desc": { zh: "负责 Lazada / Shopee 东南亚站点从 0 起盘：开店合规 → 本地化选品上架 → 站内活动与大促 → 履约与评分，对站点 GMV、店铺评分与履约 SLA 负责。该岗位为储备状态，站点开通时开放，可先投简历进入人才池。", en: "Own the Lazada / Shopee SEA build-out from zero: onboarding compliance, localised listing, in-platform campaigns and mega-sales, fulfilment and ratings. Accountable for site GMV, shop rating and fulfilment SLA. Currently a talent-pool role: send your CV and we'll reach out when the sites go live." },
    "job2.d1": { zh: "起盘：站点开通与资质合规（执照 / 类目准入 / 税务与清关资料），按站点逐一落地", en: "Build-out: site onboarding and compliance (licence, category approval, tax and customs docs), rolled out site by site" },
    "job2.d2": { zh: "本地化：标题 / 主图 / 详情的多语种与币种本地化，维护 Listing 表与本地词库", en: "Localisation: multilingual and multi-currency titles, images and detail pages; maintain the listing sheet and local keyword bank" },
    "job2.d3": { zh: "选品：按站点需求选品与定价，算清头程 / 佣金 / 关税 / 汇率后的到手毛利", en: "Assortment: site-fit selection and pricing, with landed margin worked out after freight, commission, duty and FX" },
    "job2.d4": { zh: "活动：报名大促（9.9 / 10.10 / 11.11 / 12.12）与站内资源位，控折扣与毛利", en: "Campaigns: enter mega-sales (9.9 / 10.10 / 11.11 / 12.12) and in-platform placements; control discounting and margin" },
    "job2.d5": { zh: "履约与评分：发货时效、物流轨迹与售后响应，店铺评分与罚款项清零", en: "Fulfilment and ratings: dispatch SLAs, tracking and after-sales response; keep shop ratings up and penalties at zero" },
    "job2.d6": { zh: "竞品与复盘：维护五站竞品台账（销量 / 价格 / 评价 / 流量），输出周报与下一步动作", en: "Competitive review: maintain the five-site competitor ledger (sales / price / reviews / traffic), ship weekly reports with next actions" },
    "job2.r1": { zh: "大专及以上，电子商务 / 国际贸易 / 市场营销优先", en: "College degree or above; e-commerce / international trade / marketing preferred" },
    "job2.r2": { zh: "1 年以上 Lazada 或 Shopee 运营经验，有东南亚站点从 0 起盘经历优先", en: "1+ year on Lazada or Shopee; having launched a SEA site from zero is a strong plus" },
    "job2.r3": { zh: "熟悉东南亚市场差异：站点规则、币种与物流方案、大促节奏、消费习惯", en: "Knows how SEA markets differ: site rules, currency and logistics options, mega-sale cadence, buying habits" },
    "job2.r4": { zh: "会算跨境成本与到手毛利，能做本地化定价，不靠拍脑袋报价", en: "Can work landed cost and margin properly, price per market, and never quotes off the top of their head" },
    "job2.r5": { zh: "数据敏感、执行强，能自己搭表维护竞品与 Listing；英语可支撑商务沟通", en: "Data-sensitive and hands-on; builds their own sheets for listings and competitors; English sufficient for business communication" },
    "job2.k1": { zh: "新站起盘进度（开店 / 上架 / 首单）", en: "Site launch progress (onboarding / listing / first order)" },
    "job2.k2": { zh: "GMV 达成率", en: "GMV attainment" },
    "job2.k3": { zh: "店铺评分与履约 SLA", en: "Shop rating and fulfilment SLA" },
    "job2.k4": { zh: "竞品与选品台账质量", en: "Competitor and assortment ledger quality" },
    "job2.k5": { zh: "活动投产 ROI", en: "Campaign ROI" },
    "job2.sys.val": { zh: "Lazada Seller Center、Shopee 卖家中心（菲 / 马 / 泰 / 墨 / 阿）、lazada-data 与 shopee-data 看板、shopee-competitor-analysis 竞品台账", en: "Lazada Seller Center, Shopee Seller Centre (PH / MY / TH / MX / AR), lazada-data and shopee-data dashboards, shopee-competitor-analysis ledger" },
    "job2.plus": { zh: "加分项：泰语 / 马来语 / 印尼语 / 西语能力、东南亚海外仓或本地物流资源、台球 / 运动器材类目经验、跨境清关实操。", en: "Bonus: Thai / Malay / Indonesian / Spanish, SEA warehouse or local logistics resources, billiards or sports category experience, hands-on customs clearance." },
    "job2.red.val": { zh: "刷单刷评 / 侵权仿牌 / 虚假发货 / 恶意低价扰乱 / 用爬虫或自动化脚本违规采集平台数据", en: "Fake orders or reviews, counterfeit or IP infringement, fake shipping, malicious underpricing, scraping platform data with bots or automation" },
    "job3.title": { zh: "运营自动化 / AI 技能包工程", en: "Ops Automation / AI Skill Pack Engineering" },
    "job3.loc": { zh: "远程协作 · 南京", en: "Remote · Nanjing" },
    "job3.type": { zh: "全职 / 兼职", en: "Full-time / Part-time" },
    "job3.dept": { zh: "数据与增长（技术中台）", en: "Data & Growth (Tech Platform)" },
    "job3.report.val": { zh: "技术负责人 / 副总", en: "Tech Lead / VP" },
    "job3.desc": { zh: "技术 / 数据中台支撑岗。打通各平台 API → 沉淀数据底座 → 运维服务器 → 迭代 AI 需求，把投流审核、视觉生产、数据看板、OA 审批这类重复工作封装成可安装的 AI 技能包，交付给零基础同事使用。", en: "A tech / data-platform role. Wire up platform APIs, build the data foundation, run the servers, ship AI requests — turning repeated work (ad review, asset production, dashboards, OA approvals) into installable AI skill packs that non-technical colleagues can use." },
    "job3.d1": { zh: "API 打通：京东 / 天猫 / 抖音 / 拼多多 + Amazon / Shopify / Temu / 阿里国际站，建自动拉取与鉴权维护", en: "API integration: JD / Tmall / Douyin / PDD + Amazon / Shopify / Temu / Alibaba.com, with automated pulls and credential rotation" },
    "job3.d2": { zh: "数据底座：聚水潭 / 领星 / 钉钉多维表等异构数据归一化，统一指标口径与质量校验", en: "Data foundation: normalise Jushuitan / Lingxing / DingTalk tables, unify metric definitions and data quality checks" },
    "job3.d3": { zh: "AI 需求迭代：技能包开发（SKILL.md + run.py）、安全审计与 SHA 校验、语义化版本发布与回滚", en: "AI delivery: build skill packs (SKILL.md + run.py), security audit with SHA checks, semantic versioning and rollback" },
    "job3.d4": { zh: "服务器部署：云主机 / 容器环境搭建、应用发布与反向代理、公网暴露", en: "Deployment: cloud host / container setup, app release and reverse proxy, public exposure" },
    "job3.d5": { zh: "日常运维：监控告警、定期备份与恢复演练、日志巡检、安全加固", en: "Ops: monitoring and alerting, scheduled backup and restore drills, log patrol, security hardening" },
    "job3.r1": { zh: "大专及以上，统计 / 计算机 / 电商数据相关优先", en: "College degree or above; statistics / CS / e-commerce data background preferred" },
    "job3.r2": { zh: "2 年以上电商数据分析、投流或自动化工程经验", en: "2+ years in e-commerce data analysis, ad operations or automation engineering" },
    "job3.r3": { zh: "熟悉电商指标体、投放逻辑与 SQL / 表处理，能用 Python 或 Node 写脚本", en: "Fluent in e-commerce metrics, ad logic and SQL / spreadsheets; can script in Python or Node" },
    "job3.r4": { zh: "做过看板类应用（如 Flask API + ECharts + SQLite）或同等项目", en: "Has shipped dashboard-grade apps (e.g. Flask API + ECharts + SQLite) or equivalent" },
    "job3.r5": { zh: "逻辑清晰、有工作流洁癖，能把模糊需求拆成可交付的小步", en: "Clear logic and a workflow perfectionist — breaks vague requests into shippable steps" },
    "job3.k1": { zh: "各平台 API 打通", en: "Platform API integration" },
    "job3.k2": { zh: "AI 需求升级迭代", en: "AI delivery iteration" },
    "job3.k3": { zh: "数据底座维护", en: "Data foundation upkeep" },
    "job3.k4": { zh: "服务器部署能力", en: "Server deployment" },
    "job3.k5": { zh: "服务器日常维护", en: "Server maintenance" },
    "job3.sys.val": { zh: "ai-cockpit 看板、生意参谋、京东商智、蝉妈妈、各平台投流后台、billiards-trend-intel", en: "ai-cockpit dashboard, SYCM, JD Shangzhi, Chanmama, platform ad consoles, billiards-trend-intel" },
    "job3.plus": { zh: "加分项：有已发布的可安装技能包作品、熟悉钉钉 / DWS / Aitable 开放平台、做过 OCR 或图像链路。", en: "Bonus: published installable skill packs, familiar with DingTalk / DWS / Aitable open platforms, OCR or imaging pipelines." },
    "job3.red.val": { zh: "泄露经营数据 / 私自操作生产后台 / 敷衍错录造成资损 / 交付未过审的技能包", en: "Leaking business data, unauthorised production access, careless entry causing loss, shipping unaudited skill packs" },
    "job4.title": { zh: "跨境电商运营（Amazon / Temu）", en: "Cross-border E-commerce Operator (Amazon / Temu)" },
    "job4.loc": { zh: "南通（跨境主阵地）· 南京", en: "Nantong (cross-border hub) · Nanjing" },
    "job4.type": { zh: "全职", en: "Full-time" },
    "job4.dept": { zh: "跨境电商", en: "Cross-border E-commerce" },
    "job4.report.val": { zh: "跨境负责人 / 平台负责人", en: "Cross-border Lead / Platform Lead" },
    "job4.desc": { zh: "负责 Amazon 多站点与 Temu 半 / 全托管运营：以 Listing + 广告 + FBA 驱动 GMV 与排名，以备货履约与核价驱动走量与毛利。该岗位为储备状态，业务放量时开放，可先投简历进入人才池。", en: "Own Amazon multi-marketplace and Temu semi / fully-managed operations — Listing, ads and FBA drive GMV and rank; stock fulfilment and price negotiation drive volume and margin. Currently a talent-pool role: send your CV and we'll reach out when the business scales." },
    "job4.d1": { zh: "Listing：标题 / 图文 / A+ 优化与关键词，维护 Listing 表", en: "Listing: titles, images, A+ content and keywords; maintain the listing sheet" },
    "job4.d2": { zh: "广告：SP / SB / SD 结构与 ACOS 优化，做否定词与预算再分配", en: "Ads: SP / SB / SD structure and ACOS control; negative keywords and budget reallocation" },
    "job4.d3": { zh: "FBA 库存：补货计划与库存周转，控 IPI，不断货不积压", en: "FBA inventory: replenishment planning and turnover; keep IPI healthy, no stockouts or overhang" },
    "job4.d4": { zh: "合规与评分：合规索评、类目审核与账户健康维护", en: "Compliance and ratings: compliant review requests, category approvals and account health" },
    "job4.d5": { zh: "Temu 履约：国内仓备货、核价跟进与爆款选品，控退货率", en: "Temu fulfilment: domestic warehouse stocking, price negotiation and hit product selection; control return rate" },
    "job4.d6": { zh: "数据复盘：销量与毛利复盘，输出周报与迭代动作", en: "Review: sales and margin analysis, ship weekly reports with next actions" },
    "job4.r1": { zh: "大专及以上，电子商务 / 市场营销优先", en: "College degree or above; e-commerce / marketing preferred" },
    "job4.r2": { zh: "2 年以上 Amazon 或 Temu 运营经验，有台球 / 运动器材类目优先", en: "2+ years on Amazon or Temu; billiards / sports equipment category a plus" },
    "job4.r3": { zh: "Amazon：懂 A9 算法、关键词与转化逻辑、FBA 与自发货差异、Coupon / BD / LD 节奏", en: "Amazon: understands A9 ranking, keyword and conversion logic, FBA vs. FBM, and Coupon / BD / LD cadence" },
    "job4.r4": { zh: "Temu：懂核价逻辑与毛利空间，能推动备货节奏避免断货 / 积压", en: "Temu: understands price-negotiation logic and margin headroom; drives stocking cadence to avoid stockouts and overhang" },
    "job4.r5": { zh: "数据敏感、执行强、抗压，能用数据定位断点并迭代", en: "Data-sensitive, strong execution, resilient; locates funnel breakpoints with data and iterates" },
    "job4.k1": { zh: "GMV 达成率", en: "GMV attainment" },
    "job4.k2": { zh: "ACOS ≤ 红线（Amazon）/ 履约时效 ≤ SLA（Temu）", en: "ACOS ≤ threshold (Amazon) / fulfilment ≤ SLA (Temu)" },
    "job4.k3": { zh: "BSR 排名（Amazon）/ 毛利率 ≥ 红线（Temu）", en: "BSR ranking (Amazon) / gross margin ≥ threshold (Temu)" },
    "job4.k4": { zh: "库存周转（Amazon）/ 缺货率 ≤ 红线（Temu）", en: "Inventory turnover (Amazon) / stockout rate ≤ threshold (Temu)" },
    "job4.k5": { zh: "评分 ≥ 红线（Amazon）/ 退货率 ≤ 红线（Temu）", en: "Rating ≥ threshold (Amazon) / return rate ≤ threshold (Temu)" },
    "job4.sys.val": { zh: "Amazon Seller Central（美 / 加 / 英 / 德 / 日 5 站）、广告与品牌分析、Temu 半托管·全托管后台", en: "Amazon Seller Central (US / CA / UK / DE / JP), Ads and Brand Analytics, Temu semi- and fully-managed console" },
    "job4.plus": { zh: "加分项：Amazon 多站点（美 / 加 / 英 / 德 / 日）实操、海外仓资源、小语种。", en: "Bonus: hands-on Amazon multi-marketplace (US / CA / UK / DE / JP), overseas warehouse resources, extra languages." },
    "job4.red.val": { zh: "刷评 / 刷单 / 跟卖侵权 / 规避二审 / 虚假发货 / 货不对板 / 恶意低价扰乱", en: "Fake reviews, fake orders, hijacking or IP infringement, evading secondary verification, fake shipping, product mismatch, malicious underpricing" },
    "careers.culture": { zh: "团队汇报口径：不允许只报结果数字，须同步「原因 — 结论 — 下一步动作」；重大错价、处罚、库存异常须当天上报。", en: "How we report here: never just a number — always pair it with cause, conclusion and next action. Pricing errors, penalties and inventory anomalies are escalated the same day." },
    "careers.note": { zh: "薪资范围面议（按平台经验与操盘结果定级）。面试含平台实操笔试，会追问真实操盘数据：峰值月销、ACOS、最高场观、千川 ROI——我们只认跑出来的数。", en: "Salary is negotiable and banded by platform experience and track record. Expect a hands-on written test and direct questions about your real numbers — peak monthly sales, ACOS, highest live viewership, Qianchuan ROI. We go by results, not résumés." },
    "job.status.open": { zh: "在招", en: "Open" },
    "job.status.pool": { zh: "储备", en: "Talent pool" },
    "job.duty": { zh: "岗位职责", en: "What you'll do" },
    "job.req": { zh: "任职要求", en: "What we look for" },
    "job.apply": { zh: "投递这个岗位", en: "Apply for this role" },
    "job.apply.pool": { zh: "投简历进人才池", en: "Send your CV" },
























    "careers.how": { zh: "怎么投", en: "How to Apply" },
    "careers.how.desc": { zh: "把简历发到邮箱，邮件标题写「应聘 - 岗位名」，正文简单说三件事：做过什么、做成过什么、为什么想来。也可以直接在联系页填表单，选「应聘」。", en: "Email your CV with the subject \"Application - Role name\". In the body, three things: what you did, what you achieved, why here. Or use the contact form and pick \"Job Application\"." },
    "careers.how.cta": { zh: "发简历", en: "Send CV" },
    "careers.how.form": { zh: "用表单投递", en: "Use the form" }
  };

  var LANG_KEY = "site_lang";
  var stored = localStorage.getItem(LANG_KEY);
  // 首次访问按浏览器语言判定：非中文环境默认英文（海外访客默认英文），
  // 一旦用户手动切换过，就以手动选择为准。
  var detected = "zh";
  if (!stored) {
    var navLang = (
      navigator.language ||
      (navigator.languages && navigator.languages[0]) ||
      ""
    ).toLowerCase();
    detected = navLang.indexOf("zh") === 0 ? "zh" : "en";
  }
  var current = stored || detected;

  function t(key) {
    var e = DICT[key];
    return e ? (e[current] || e.zh) : key;
  }

  function apply() {
    document.documentElement.lang = current;
    // data-i18n 文本
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    // data-i18n-attr="attr:key"
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var parts = el.getAttribute("data-i18n-attr").split(":");
      if (parts.length === 2) {
        el.setAttribute(parts[0], t(parts[1]));
      }
    });
    // 切换按钮文案
    document.querySelectorAll("[data-i18n-toggle]").forEach(function (el) {
      el.textContent = t("lang.btn");
    });
    // 自定义事件：让 blog.js / post.js 重新渲染
    document.dispatchEvent(new CustomEvent("i18n-changed", { detail: { lang: current } }));
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest("[data-i18n-toggle]")) {
      current = current === "zh" ? "en" : "zh";
      localStorage.setItem(LANG_KEY, current);
      apply();
    }
  });

  // 暴露给其它脚本
  window.i18n = { t: t, lang: function () { return current; } };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply);
  } else {
    apply();
  }
})();
