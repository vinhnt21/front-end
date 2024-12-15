import { initializeHeader } from "./components/header.js";
import { initializeSidebar } from "./components/sidebar.js";
import { initializeFooter } from "./components/footer.js";
import { initializeRouter } from "./router.js";
import { initializeTheme } from "./utils/theme.js";

// Initialize all components
document.addEventListener("DOMContentLoaded", () => {
  initializeHeader();
  initializeSidebar();
  initializeFooter();
  initializeTheme();
  initializeRouter();
});
