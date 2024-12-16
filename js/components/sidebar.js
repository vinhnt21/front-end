export function initializeSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = `
        <nav class="nav flex-column">
            <a href="#/create-slide" class="nav-link" data-page="guide">
                <i class="fas fa-plus-circle me-2"></i>Create Slide
            </a>
            <a href="#/manage" class="nav-link" data-page="manage">
                <i class="fas fa-folder me-2"></i>Manage Files
            </a>
            <a href="#/" class="nav-link" data-page="create">
                <i class="fas fa-book me-2"></i>User Guide
            </a>        
        </nav>
    `;
}
