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
    "nav.blog": { zh: "博客", en: "Blog" },
    "nav.business": { zh: "商业思维", en: "Business Thinking" },
    "nav.aiSkill": { zh: "AI技能包实战", en: "AI Skill Practice" },
    "nav.archive": { zh: "全部文章", en: "All Posts" },
    "nav.contact": { zh: "联系", en: "Contact" },
    "lang.btn": { zh: "EN", en: "中文" },
    "theme.toggle": { zh: "切换明暗主题", en: "Toggle light/dark theme" },
    "logo": { zh: "扶摇", en: "FY·XM" },

    // ---- 页脚 ----
    "footer.copyright": { zh: "© 2026 泫溟 · Powered by GitHub Pages", en: "© 2026 Xuanming · Powered by GitHub Pages" },

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
    "about.eyebrow": { zh: "Resume", en: "Resume" },
    "about.title": { zh: "个人简历", en: "Resume" },
    "about.p1": { zh: "我是泫溟，万世康伦（KONLLEN）集团高级运营负责人，常住江苏南京。集团电商营收中心团队 15 人以上，覆盖 49 个店铺、9+ 国内平台与多个海外平台，国内海外业务向 50/50 结构调整。", en: "I'm Xuanming, senior operations lead at KONLLEN Group, based in Nanjing, Jiangsu. Our e-commerce revenue hub team has 15+ members across 49 stores, 9+ domestic platforms and multiple overseas platforms, restructuring toward a 50/50 domestic-overseas mix." },
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
    "business.allCount": { zh: "27 篇 · 按日期倒序", en: "27 Posts · Reverse Chronological" },
    "business.update": { zh: "以上为本站全部文章，覆盖 7 个主题分类；新文章将每周补充到本列表顶部，并与归档、RSS、sitemap 同步。", en: "All site posts above, covering 7 topic categories; new posts are added to the top weekly and synced with the archive, RSS and sitemap." },
    "business.footerIntro": { zh: "记录真实业务里的 AI 应用与商业操盘方法，所有案例基于公开可验证的实操过程。", en: "Documenting AI applications and business operations methods from real work — every case is based on publicly verifiable practice." },

    // ---- AI技能包实战专题页 ----
    "aiSkill.eyebrow": { zh: "AI技能包专题", en: "AI Skill Pack" },
    "aiSkill.title": { zh: "AI技能包实战", en: "AI Skill Practice" },
    "aiSkill.sub": { zh: "汇集泫溟鲲鹏堂博客标注 AI 技能包属性的实战文章：从零基础上手、审批自动化到接口合同、版本门禁与技能矩阵落地，按日期倒序收录，每周更新。", en: "A collection of AI skill pack practice articles from the blog: zero-baseline onboarding, approval automation, interface contracts, version gates and skill matrix implementation — in reverse chronological order, updated weekly." },
    "aiSkill.count": { zh: "篇文章", en: "Posts" },
    "aiSkill.cats": { zh: "个主题分类", en: "Category" },
    "aiSkill.weekly": { zh: "篇/每周更新", en: "Posts / Week" },
    "aiSkill.allTitle": { zh: "AI技能包 · 全部实战文章", en: "AI Skill Pack · All Practice Posts" },
    "aiSkill.allCount": { zh: "9 篇 · 按日期倒序", en: "9 Posts · Reverse Chronological" },
    "aiSkill.update": { zh: "以上为本站全部 AI 技能包属性文章；新文章将每周补充到本列表顶部，并与归档、RSS、sitemap 同步。", en: "All AI skill pack posts above; new posts are added to the top weekly and synced with the archive, RSS and sitemap." },
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
