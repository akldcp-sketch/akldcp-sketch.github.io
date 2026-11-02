/* ============================================================
   theme.js v1.1.0 —— 明暗主题切换（配置零依赖）
   规则：
   1. 全站统一 localStorage 键 "theme"；旧键 "site_theme" 自动迁移回写
   2. 无记录时跟随系统 prefers-color-scheme（首次访问自动适配）
   3. 点击 .theme-toggle 按钮切换并持久化
   HTML 侧需在 <head> 顶部放内联防闪脚本（theme-init v1.9）先置 data-theme，
   本文件负责按钮交互与持久化；两者配合无闪烁、且与其他页面同键互通。
   ============================================================ */
(function () {
  var KEY = "theme";
  var LEGACY_KEY = "site_theme";
  var btn = document.querySelector(".theme-toggle");
  if (!btn) return;

  function apply(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0B1220" : "#FFFFFF");
  }

  function current() {
    return document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";
  }

  btn.addEventListener("click", function () {
    var next = current() === "light" ? "dark" : "light";
    try {
      localStorage.setItem(KEY, next);
      /* 旧键同步一份，兼容仍读 site_theme 的历史页面/缓存版本 */
      localStorage.setItem(LEGACY_KEY, next);
    } catch (e) { /* 隐私模式忽略 */ }
    apply(next);
    btn.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
    btn.textContent = next === "dark" ? "☀" : "☾";
  });
})();
