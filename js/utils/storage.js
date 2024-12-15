export function saveFileToStorage(fileInfo) {
    const files = getFilesFromStorage();
    files.push(fileInfo);
    localStorage.setItem('presentation_files', JSON.stringify(files));
}

export function getFilesFromStorage() {
    const files = localStorage.getItem('presentation_files');
    return files ? JSON.parse(files) : [];
}