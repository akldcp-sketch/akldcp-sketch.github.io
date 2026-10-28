/* 博客文章数据源：所有页面共享，新增文章只需在这里加一条 */
window.POSTS_DATA = [
  {
    file: "2026-10-28-ad-creative-bayesian-ab-test",
    en: { title: "Ad Creative A/B Testing: Bayesian Decisions on Material Survival", summary: "Ad creative testing should not be a gut call. AI-generated material variants, micro-budget 72-hour rapid tests, CTR decay rate and Bayesian A/B decisions: in 7 days one home-goods line tested 8 material sets; a high-contrast color block won with 3.2% CTR, 4.5 ROAS and 100% posterior win probability, while losers went into a negative-constraint library. Includes zero-dependency reproducible Python code.", tag: "AI Skills" },
    title: "广告素材 A/B 测款：贝叶斯方法决定素材去留",
    date: "2026-10-28",
    tag: "AI 技能包",
    summary: "素材测款别靠感觉。AI 素材变体批量衍生 + 微预算 72 小时快反 + CTR 衰减率与贝叶斯 A/B 判定：某家居产品线 7 天测 8 组素材，强烈对比色块 CTR 3.2%、ROAS 4.5、胜率 100% 胜出放量，淘汰素材进负向约束库。附零依赖可复现 Python 贝叶斯 A/B 测试代码与素材归档规范。"
  },
  {
    file: "2026-10-26-dynamic-ad-budget-reallocation-marginal-roi",
    en: { title: "Dynamic Ad Budget Reallocation: Move Money by Marginal ROI", summary: "An ad budget is not a one-time split. Reallocate by marginal ROI: a dynamic budget pool with 40/50/10 weights, 5 misallocation signals, and a reproducible Python simulator — same 50K daily budget, 5 iterations lift weighted mROI from 2.47 to 2.77, adding 14,900 RMB of daily profit.", tag: "AI Skills" },
    title: "广告预算再分配：按边际 ROI 把钱挪到刀刃上",
    date: "2026-10-26",
    tag: "AI 技能包",
    summary: "广告预算不是拍脑袋分完就不动。按边际 ROI 做动态预算再分配：预算流动性池 40/50/10 权重、5 个错配信号，附可复现 Python 再分配模拟器——总预算 5 万不变，5 轮迭代加权 mROI 从 2.47 提到 2.77，日增量利润 1.49 万元。"
  },
  {
    file: "2026-10-24-xian-jin-liu-di-xian",
    en: { title: "Cash Flow Baseline Management: Stress-Test the Multi-Store Matrix Before Scaling", summary: "Profit on paper is not cash in hand. Define the cash flow baseline as monthly rigid costs times safety months, compare sea vs air capital occupation, and stress-test 12 weeks with pandas — delayed logistics and lagged payments turn 7 of 12 weeks red before cash runs out. Full reproducible code included.", tag: "Business Operations" },
    title: "现金流底线管理：跨境多店矩阵先算死线再谈增长",
    date: "2026-10-24",
    tag: "商业操盘",
    summary: "账面赚钱不代表现金安全。月刚性支出×安全月数定出 384 万现金流底线，跨境海运空运资金占用对比，pandas 逐周滚动压力测试模型：模拟物流延误与回款滞后，12 周里 7 周跌破底线自动红灯预警，附完整可复现代码。"
  },
  {
    file: "2026-10-22-acos-skill-pack",
    en: { title: "ACOS Tiered Management for Amazon Ads: Turning Daily Bid Adjustments into an AI Skill", summary: "ACOS is not always lower-is-better. Sort SKUs into traffic, profit, clearance and defense tiers by gross margin, set a target ACOS per tier, scan the weekly ad report with reproducible Python, get over-threshold alerts and bid suggestions, then package the routine as an AI skill with a SKILL.md template.", tag: "AI Skills" },
    title: "亚马逊广告 ACOS 分层管理：把每日调价做成 AI 技能包",
    date: "2026-10-22",
    tag: "AI 技能包",
    summary: "ACOS 不是越低越好。按毛利率给 SKU 分冲量、利润、清仓、防守四档目标 ACOS，真实周报数据演示分层体检，附可复现 Python 脚本与 SKILL.md 模板，每天巡检从一小时缩到 10 分钟。"
  },
  {
    file: "2026-10-20-da-cu-fu-pan",
    en: { title: "Don't Just Review GMV: A Five-Layer Net Profit Breakdown as an AI Skill", summary: "GMV is an order metric, not cash. A five-layer net profit breakdown — refunds, take rate, logistics, ads, fixed cost — takes 860K GMV down to net profit with reproducible Python and a SKILL.md template.", tag: "AI Skills" },
    title: "大促复盘别只看 GMV：五层净利拆解做成 AI 技能包",
    date: "2026-10-20",
    tag: "AI 技能包",
    summary: "GMV 是下单口径不是到账口径。五层净利拆解（退款/扣点/物流/投放/固定成本）从 86 万 GMV 算到 50 万净利，附可复现 Python 代码与 SKILL.md 模板，复盘一次从半天缩到 15 分钟。"
  },
  {
    file: "2026-10-14-web-design-skill-matrix",
    en: { title: "Landing a Personal Blog with an AI Skill Matrix: web-design-skill-matrix Retrospective", summary: "web-design-skill-matrix upgraded to v0.6.4: added the C-009 dark RGB neon template, pairing with C-008 light as a light/dark duo; the 7-segment RGB marquee halved to 5px via the unified --marquee-width variable (bar visible, neon glow effective, clockwise flow confirmed on a 375px viewport); template previews are now protected as a commercial asset and no longer public.", tag: "AI Skills" },
    title: "用 AI 技能矩阵落地个人博客：web-design-skill-matrix 实战复盘",
    date: "2026-10-14",
    tag: "AI 技能包",
    summary: "web-design-skill-matrix 升级 v0.6.4：新增 C-009 暗色 RGB 幻彩霓虹模板，与 C-008 浅色版组成明暗双生；7 段红橙黄绿青蓝紫光柱顺时针跑马灯减半至 5px（--marquee-width 统一控制），375px 手机视口实测光柱可见、光晕生效、顺时针流动全部通过；模板预览已转为商业资产保护不对外公开。"
  },
  {
    file: "2026-09-02-tong-ji-san-lian-bai",
    en: { title: "Adding Site Analytics Failed Three Times: Test the Client First", summary: "Three analytics services unreachable while all servers returned 200. The problem wasn't the tools — it was the network layer in between.", tag: "Data & Automation" },
    title: "给网站接统计，连败三次后我学会了先测客户端",
    date: "2026-09-02",
    tag: "数据与自动化",
    summary: "Umami、GoatCounter、51.la 三次接入全部失败，服务端却都 200。问题不在工具，在用户够不到它的那层网络。"
  },
  {
    file: "2026-09-01-duo-sheet-fen-lei",
    en: { title: "Multi-Sheet Excel Reports: Classify Before You Process", summary: "Importing six sheets at once silently dropped half the data. The fix: identify each sheet's type first, then decide how to handle it.", tag: "Data & Automation" },
    title: "Excel 多 Sheet 报表，先分类再动手",
    date: "2026-09-01",
    tag: "数据与自动化",
    summary: "一张工作簿六个 sheet 一起导进脚本，一半解析失败还静默丢数。先识别每个 sheet 的类型，再决定怎么处理。"
  },
  {
    file: "2026-08-31-ku-cun-guard-rail",
    en: { title: "How to Set Inventory Alert Thresholds Without False Alarms", summary: "Three-tier thresholds based on sell-through speed, replenishment lead time and promo cycles.", tag: "Business" },
    title: "库存告警阈值怎么定，才不误报又不漏报",
    date: "2026-08-31",
    tag: "商业操盘",
    summary: "库存看板跑起来不难，难的是阈值设得准。怎么根据动销速度、在途周期和促销节点定三层阈值。"
  },
  {
    file: "2026-08-30-erp-403",
    en: { title: "403 Is Not Always a Wrong Key: One ERP API Debugging Session", summary: "Swapped AppIDs again and again, still 403. The key never even reached the server — an IP whitelist was blocking the request.", tag: "Data & Automation" },
    title: "403 不一定是密钥错了：一次 ERP 接口排查",
    date: "2026-08-30",
    tag: "数据与自动化",
    summary: "AppID 换了一个又一个，403 照旧。最后发现密钥根本没机会进服务器——是 IP 白名单把请求拦在了门外。"
  },
  {
    file: "2026-08-29-ban-ben-men-jin",
    en: { title: "22 Versions of a Personal Site, Zero Version Drift", summary: "Once I changed only CSS and forgot to bump the version — visitors kept seeing the old page. Now a CI gate checks it for me.", tag: "AI Skills" },
    title: "个人网站改了 22 版，版本号没乱过",
    date: "2026-08-29",
    tag: "AI 技能包",
    summary: "有一次只改了 CSS 忘了 bump 版本号，访客看到的还是旧页面。后来把版本检查做成了机器门禁，人肉记忆不再可信。"
  },
  {
    file: "2026-08-28-qing-cang",
    en: { title: "Clearing 14,000 Cues in 8 Weeks: A Liquidation Playbook", summary: "Pricing anchor, tiered launch, unified B/C pricing, SKU-level decomposition.", tag: "Business" },
    title: "8 周清掉 1.4 万支库存：一次清仓的拆解",
    date: "2026-08-28",
    tag: "商业操盘",
    summary: "整杆 7 SKU 约 13200 支 + 前肢 363 支，8 周清完。定价锚、阶梯首发、BC 同价、按 SKU 拆解。"
  },
  {
    file: "2026-08-27-kou-jing-tong-yi",
    en: { title: "Two Tables That Won't Reconcile: Fix the Definition, Not the Numbers", summary: "The calculator said 100, the rating sheet said 90. Nobody miscalculated — the two tables defined 'sales' differently.", tag: "Team" },
    title: "两套表对不上账，先别急着改数据",
    date: "2026-08-27",
    tag: "团队管理",
    summary: "绩效计算器算出 100，评级表却是 90。不是谁算错了，是两套表对\"销售额\"的定义不一样。"
  },
  {
    file: "2026-08-25-da-ren-roi",
    en: { title: "Influencer Campaigns Are ROI Management, Not Just Filming", summary: "Five-dimension scoring, S/A/B tiers, budget by tier, attribution after each run.", tag: "Influencer" },
    title: "达人投放不是请人拍视频，是 ROI 管理",
    date: "2026-08-25",
    tag: "达人运营",
    summary: "打分选人、事前定标、事后归因。五个维度给达人评分分层，预算跟着层级走，复盘落到下一个动作。"
  },
  {
    file: "2026-08-20-skill-contract",
    en: { title: "Signing 'Contracts' with AI Skills: From Usable to Reliable", summary: "Interface contracts, exit codes, idempotency — the details that make skills dependable.", tag: "AI Skills" },
    title: "给 AI 技能签\"合同\"：从能用到可靠",
    date: "2026-08-20",
    tag: "AI 技能包",
    summary: "技能包做了十几个之后，最大的教训是：能用和可靠是两回事。接口合同、退出码、幂等策略。"
  },
  {
    file: "2026-08-18-luan-jia",
    en: { title: "Price Chaos Is a Channel Signal, Not an Accident", summary: "Three sources of low prices: diversion, destocking, counterfeits. Monitor first, then act.", tag: "Business" },
    title: "乱价不是偶然，是渠道信号",
    date: "2026-08-18",
    tag: "商业操盘",
    summary: "低价店只有三个来源：窜货、清库存、假货。先判断属于哪类，再决定动作。"
  },
  {
    file: "2026-08-15-erp",
    en: { title: "ERP Integration: Jushuitan vs Lingxing", summary: "Jushuitan for domestic multi-platform, Lingxing for Amazon finance. Export-first, API later.", tag: "Data & Automation" },
    title: "ERP 对接实战：聚水潭和领星到底怎么选",
    date: "2026-08-15",
    tag: "数据与自动化",
    summary: "国内用聚水潭、跨境用领星，各管一摊。先\"导出+自动化\"跑起来，再上 API 做实时，最后灌进数据中台。"
  },
  {
    file: "2026-08-12-temu",
    en: { title: "Temu Semi-managed: How to Play Without Stocking", summary: "Price wins traffic, fulfillment keeps weight. Get pricing, selection and logistics right.", tag: "Cross-border" },
    title: "Temu 半托管运营：不备货怎么玩",
    date: "2026-08-12",
    tag: "跨境电商",
    summary: "半托管的本质是用价格换流量、用履约保权重。出价算准、选品挑对、履约别拖。"
  },
  {
    file: "2026-08-10-duo-platform-matrix",
    en: { title: "Managing 49 Stores Without Chaos", summary: "Unified metrics, tiered operations, automated dashboards — three levers that keep it sane.", tag: "Business" },
    title: "多平台矩阵：49 个店铺怎么管而不乱",
    date: "2026-08-10",
    tag: "商业操盘",
    summary: "店铺越多，越不能靠人肉盯。统一数据口径、分级运营、自动化看板——三个抓手。"
  },
  {
    file: "2026-08-08-oa",
    en: { title: "DingTalk OA Automation: Admin and Employee Versions Separately", summary: "Simple employee side, fast admin side, strict permission isolation, rapid iteration.", tag: "AI Skills" },
    title: "钉钉 OA 审批自动化：管理端和员工端分开做",
    date: "2026-08-08",
    tag: "AI 技能包",
    summary: "员工端极致简单、管理端要快要全、权限严格隔离、版本快速迭代。"
  },
  {
    file: "2026-08-08-pin-pai-ju-zhen",
    en: { title: "Multi-brand Matrix: Position, Price and Channel", summary: "Differentiate positioning, price bands and channels; concentrate resources on the lead brand.", tag: "Brand" },
    title: "多品牌矩阵怎么排兵布阵：定位、价格、渠道三错开",
    date: "2026-08-08",
    tag: "品牌操盘",
    summary: "品牌不能都是全能选手。定位错开、价格错开、渠道错开，资源向主品牌集中。"
  },
  {
    file: "2026-08-05-chu-hai",
    en: { title: "Going Global: From Zero to Amazon Brand Rankings", summary: "Choose markets, nail listings, grow reviews compliantly, layer ads.", tag: "Cross-border" },
    title: "品牌出海：从 0 到亚马逊品牌榜",
    date: "2026-08-05",
    tag: "跨境电商",
    summary: "KONLLEN 与 CRICAL 双品牌进亚马逊 5 站品牌榜的实操复盘：选站点、打 Listing、合规养评、分层投放。"
  },
  {
    file: "2026-08-03-shu-ju-zhong-tai",
    en: { title: "Data Platform: From Excel to Automated Dashboards", summary: "Define metrics, centralize data, dashboard it. Three steps away from Friday spreadsheet marathons.", tag: "Data & Automation" },
    title: "数据中台：从 Excel 到自动化看板",
    date: "2026-08-03",
    tag: "数据与自动化",
    summary: "先定口径，再集中数据，最后看板化。三步走完，从\"周五加班拼表\"进化到\"看板自动在群里等你\"。"
  },
  {
    file: "2026-07-30-tuan-dui",
    en: { title: "How to Staff a 15-Person E-commerce Team", summary: "Six roles, domestic/overseas split, assistants as reserves, one table to manage everyone.", tag: "Team" },
    title: "15 人电商团队怎么配：一张岗位地图",
    date: "2026-07-30",
    tag: "团队管理",
    summary: "六岗归位、国内外分流、助理做储备、一张表管人——团队不是凑人头，是排兵布阵。"
  },
  {
    file: "2026-07-28-b2b",
    en: { title: "Building a B2B Channel System: Tier, License, Support", summary: "Tier channels, license in writing, use joint warranty as a trust point. Signing is just the start.", tag: "Brand" },
    title: "B2B 渠道体系怎么搭：分层、授权、联保、跟进",
    date: "2026-07-28",
    tag: "品牌操盘",
    summary: "渠道分层给政策、品牌线错开不打架、授权联保写清楚。签约只是起点，养商才是增长。"
  },
  {
    file: "2026-07-25-ling-ji-chu",
    en: { title: "Getting Non-Technical Colleagues to Use AI Skills", summary: "Minimal input, friendly UI, graceful failure — three principles or nobody uses it.", tag: "AI Skills" },
    title: "让零基础同事用上 AI 技能包",
    date: "2026-07-25",
    tag: "AI 技能包",
    summary: "输入最少、界面友好、失败有兜底——三个设计原则，缺一个就没人用。"
  }
];
