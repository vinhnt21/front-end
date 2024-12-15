import { loadCreateSlidePage } from './pages/createSlide.js';
import { loadManageFilesPage } from './pages/manageFiles.js';
import { loadUserGuidePage } from './pages/userGuide.js';

export function initializeRouter() {
    const routes = {
        '/': loadCreateSlidePage,
        '/manage': loadManageFilesPage,
        '/guide': loadUserGuidePage
    };

    function handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const page = routes[hash];
        
        if (page) {
            const mainContent = document.getElementById('main-content');
            page(mainContent);
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${hash}`) {
                    link.classList.add('active');
                }
            });
        }
    }

    window.addEventListener('hashchange', handleRoute);
    handleRoute(); // Handle initial route
}