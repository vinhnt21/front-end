export function loadUserGuidePage(container) {
    container.innerHTML = `
        <div class="user-guide-container">
            <h2 class="mb-4">User Guide</h2>
            
            <div class="accordion" id="userGuideAccordion">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#createSlideGuide">
                            Creating Slides
                        </button>
                    </h2>
                    <div id="createSlideGuide" class="accordion-collapse collapse show" data-bs-parent="#userGuideAccordion">
                        <div class="accordion-body">
                            <ol>
                                <li>Navigate to the "Create Slide" page</li>
                                <li>Click the "Choose File" button and select your DOCX file</li>
                                <li>Click "Upload and Process" to convert your document</li>
                                <li>Edit the generated slide content as needed</li>
                                <li>Click "Generate Slides" to create your PowerPoint presentation</li>
                                <li>Download your presentation using the "Download" button</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#manageFilesGuide">
                            Managing Files
                        </button>
                    </h2>
                    <div id="manageFilesGuide" class="accordion-collapse collapse" data-bs-parent="#userGuideAccordion">
                        <div class="accordion-body">
                            <ul>
                                <li>View all your created presentations in the "Manage Files" section</li>
                                <li>Download any previously created presentation</li>
                                <li>See when each presentation was created</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#tipsGuide">
                            Tips and Best Practices
                        </button>
                    </h2>
                    <div id="tipsGuide" class="accordion-collapse collapse" data-bs-parent="#userGuideAccordion">
                        <div class="accordion-body">
                            <ul>
                                <li>Use clear and concise text in your DOCX file</li>
                                <li>Review and edit generated slides before final conversion</li>
                                <li>Keep your presentations organized by using descriptive names</li>
                                <li>Download your presentations right after creation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}