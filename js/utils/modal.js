// modal.js
export function showLoadingModal(message) {
  // Create modal if it doesn't exist
  let modal = document.getElementById("loading-modal");
  if (!modal) {
    modal = createModalElement();
    document.body.appendChild(modal);
  }

  const modalMessage = document.getElementById("modal-message");
  modalMessage.textContent = message;

  // Create modal with specific options
  const bootstrapModal = new bootstrap.Modal(modal, {
    backdrop: "static",
    keyboard: false,
  });
  bootstrapModal.show();
}

export function hideLoadingModal() {
  const modal = document.getElementById("loading-modal");
  const bootstrapModal = bootstrap.Modal.getInstance(modal);
  if (bootstrapModal) {
    bootstrapModal.hide();
  }
}

function createModalElement() {
  const modalDiv = document.createElement("div");
  modalDiv.innerHTML = `
        <div class="modal fade" id="loading-modal" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-body text-center">
                        <div class="spinner-border text-primary mb-3" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        <p id="modal-message"></p>
                    </div>
                </div>
            </div>
        </div>
    `;
  return modalDiv.firstElementChild;
}

export function showErrorInModal(error, closeCallback = hideLoadingModal) {
  const modalMessage = document.getElementById("modal-message");
  modalMessage.innerHTML = `
        <div class="alert alert-danger">
            ${error}
            <br>
            <button class="btn btn-secondary mt-2" onclick="(${closeCallback.toString()})()">Close</button>
        </div>
    `;
}
