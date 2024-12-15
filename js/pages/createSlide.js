import { showLoadingModal, hideLoadingModal } from "../utils/modal.js";
import { saveFileToStorage } from "../utils/storage.js";
const BASE_URL = "http://127.0.0.1:5000";

export function loadCreateSlidePage(container) {
  container.innerHTML = `
        <div class="create-slide-container">
            <h2 class="mb-4">Create New Presentation</h2>
            
            <form id="upload-form" class="mb-4">
                <div class="mb-3">
                    <label for="docx-file" class="form-label">Upload DOCX File</label>
                    <input type="file" class="form-control" id="docx-file" name="file" accept=".docx" required>
                </div>
                <button type="submit" class="btn btn-primary">
                    <i class="fas fa-upload me-2"></i>Upload and Process
                </button>
            </form>

            <div id="slides-editor" class="d-none">
                <div id="slides-container"></div>
                <div class="mt-3">
                    <button id="add-slide" class="btn btn-secondary me-2">
                        <i class="fas fa-plus me-2"></i>Add Slide
                    </button>
                    <div class="input-group" style="max-width: 500px; margin: 10px 0;">
                        <input type="text" id="slide-name-input" class="form-control" 
                               placeholder="Nhập tên file powerpoint bạn muốn lưu" value="presentation">
                        <button id="generate-slides" class="btn btn-primary">
                            <i class="fas fa-magic me-2"></i>Generate Slides
                        </button>
                    </div>
                </div>
            </div>

            <div id="download-section" class="mt-4 d-none">
                <a id="download-link" class="btn btn-success">
                    <i class="fas fa-download me-2"></i>Download PowerPoint
                </a>
            </div>
        </div>
    `;

  initializeCreateSlideHandlers();
}

function initializeCreateSlideHandlers() {
  const form = document.getElementById("upload-form");
  const slidesEditor = document.getElementById("slides-editor");
  const slidesContainer = document.getElementById("slides-container");
  const addSlideBtn = document.getElementById("add-slide");
  const generateSlidesBtn = document.getElementById("generate-slides");
  const slideNameInput = document.getElementById("slide-name-input");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      showLoadingModal(
        "Your file is being processed, please do not close the window"
      );
      const response = await fetch(`${BASE_URL}/upload-docx`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed");

      const data = await response.json();
      displaySlides(data.slides_content);

      form.classList.add("d-none");
      slidesEditor.classList.remove("d-none");
    } catch (error) {
      alert("Error processing file: " + error.message);
    } finally {
      hideLoadingModal();
    }
  });

  addSlideBtn.addEventListener("click", () => {
    addNewSlide();
  });

  generateSlidesBtn.addEventListener("click", async () => {
    try {
      // Validate slide name
      const randomeValue = `${Math.floor(Math.random() * 1000)}${Math.floor(
        Math.random() * 1000
      )}${new Date().getTime()}`;
      const slideName = `${slideNameInput.value.trim()}-${randomeValue}`;
      if (!slideName) {
        alert("Please enter a presentation name");
        return;
      }

      showLoadingModal("Creating slides...");
      const slidesContent = Array.from(slidesContainer.children).map(
        (slide) => slide.querySelector("textarea").value
      );

      const response = await fetch(`${BASE_URL}/create-powerpoint`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          slide_name: slideName,
          slides_content: slidesContent,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate slides");

      const data = await response.json();
      showDownloadLink(`${BASE_URL}/${data.link_to_download}`);

      // Save file information to storage with custom name
      saveFileToStorage({
        name: `${slideName}.pptx`,
        downloadLink: `${BASE_URL}/${data.link_to_download}`,
        createdAt: new Date().toISOString(),
      });
    } catch (error) {
      alert("Error generating slides: " + error.message);
    } finally {
      hideLoadingModal();
    }
  });
}
function displaySlides(slidesContent) {
  const slidesContainer = document.getElementById("slides-container");
  slidesContainer.innerHTML = "";

  slidesContent.forEach((content, index) => {
    const slideElement = createSlideElement(content, index + 1);
    slidesContainer.appendChild(slideElement);
  });
}

function createSlideElement(content, number) {
  const div = document.createElement("div");
  div.className = "slide-item mb-3";
  div.innerHTML = `
        <div class="card">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h5 class="mb-0">Slide ${number}</h5>
                <button class="btn btn-danger btn-sm delete-slide">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
            <div class="card-body">
                <textarea class="form-control" rows="4">${content}</textarea>
            </div>
        </div>
    `;

  div.querySelector(".delete-slide").addEventListener("click", () => {
    div.remove();
    updateSlideNumbers();
  });

  return div;
}

function addNewSlide() {
  const slidesContainer = document.getElementById("slides-container");
  const newSlideNumber = slidesContainer.children.length + 1;
  const newSlide = createSlideElement("", newSlideNumber);
  slidesContainer.appendChild(newSlide);
}

function updateSlideNumbers() {
  const slides = document.querySelectorAll(".slide-item");
  slides.forEach((slide, index) => {
    slide.querySelector("h5").textContent = `Slide ${index + 1}`;
  });
}

function showDownloadLink(downloadUrl) {
  const downloadSection = document.getElementById("download-section");
  const downloadLink = document.getElementById("download-link");

  downloadLink.href = downloadUrl;
  downloadSection.classList.remove("d-none");
}
