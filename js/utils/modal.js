export function showLoadingModal(message) {
    const modal = document.getElementById('loading-modal');
    const modalMessage = document.getElementById('modal-message');
    modalMessage.textContent = message;
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

export function hideLoadingModal() {
    const modal = document.getElementById('loading-modal');
    const bootstrapModal = bootstrap.Modal.getInstance(modal);
    if (bootstrapModal) {
        bootstrapModal.hide();
    }
}