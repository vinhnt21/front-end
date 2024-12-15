export function initializeFooter() {
    const footer = document.getElementById('footer');
    footer.innerHTML = `
        <div class="footer">
            <p class="mb-0">Contact: support@example.com</p>
            <p class="mb-0">&copy; ${new Date().getFullYear()} DOCX to PowerPoint Converter. All rights reserved.</p>
        </div>
    `;
}