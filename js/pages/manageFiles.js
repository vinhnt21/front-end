import { getFilesFromStorage } from "../utils/storage.js";
const BASE_URL = "http://127.0.0.1:5000";

export function loadManageFilesPage(container) {
  container.innerHTML = `
        <div class="manage-files-container">
            <h2 class="mb-4">Manage Files</h2>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>File Name</th>
                            <th>Creation Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody id="files-table-body"></tbody>
                </table>
            </div>
        </div>
    `;

  displayFiles();
}

function displayFiles() {
  const tableBody = document.getElementById("files-table-body");
  const files = getFilesFromStorage();

  if (files.length === 0) {
    tableBody.innerHTML = `
            <tr>
                <td colspan="3" class="text-center">No files found</td>
            </tr>
        `;
    return;
  }

  tableBody.innerHTML = files
    .map(
      (file) => `
        <tr>
            <td>${file.name}</td>
            <td>${new Date(file.createdAt).toLocaleString()}</td>
            <td>
                <a href="${file.downloadLink}" class="btn btn-primary btn-sm">
                    <i class="fas fa-download me-1"></i>Download
                </a>
            </td>
        </tr>
    `
    )
    .join("");
}
