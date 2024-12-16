export function initializeHeader() {
  const header = document.getElementById("header");
  header.innerHTML = `
        <div class="header d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
                <button id="sidebar-toggle" class="btn btn-link">
                    <i class="fas fa-bars"></i>
                </button>
                <h1 class="h4 mb-0 ms-3">AI Quicker Slide</h1>
            </div>
            <button id="theme-toggle" class="btn btn-link">
                <i class="fas fa-moon"></i>
            </button>
        </div>
    `;

  // Sidebar toggle functionality
  const sidebarToggle = document.getElementById("sidebar-toggle");
  sidebarToggle.addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("sidebar-hidden");
  });
}
