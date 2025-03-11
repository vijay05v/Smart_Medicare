let uploadedFiles = [];

// Menu toggle
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Show Medical Card
function showMedicalCard() {
    document.getElementById('medical-card').classList.remove('hidden');
    document.getElementById('nav-menu').style.display = 'none';
}

// Close Medical Card
function closeMedicalCard() {
    document.getElementById('medical-card').classList.add('hidden');
}

// Upload file
function uploadFile(event) {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);
        uploadedFiles.push({ name: file.name, url: fileURL });
        renderFileList();
    }
}

// Render file list
function renderFileList() {
    const list = document.getElementById('uploadedItems');
    list.innerHTML = '';
    uploadedFiles.forEach((file, index) => {
        const item = document.createElement('div');
        item.className = 'file-item';
        item.innerHTML = `
            <div class="serial-number">${index + 1}</div>
            <div class="file-name">${file.name}</div>
        `;
        item.onclick = () => viewFile(file);
        list.appendChild(item);
    });
}

// View file in modal
function viewFile(file) {
    const displayArea = document.getElementById('file-display-area');
    const viewer = document.getElementById('file-viewer');
    displayArea.innerHTML = file.url.match(/\.(png|jpg|jpeg)$/i) ?
        `<img src="${file.url}" alt="Uploaded Image">` :
        `<iframe src="${file.url}" width="100%" height="500px"></iframe>`;
    viewer.classList.remove('hidden');
}

// Close viewer
function closeFileViewer() {
    document.getElementById('file-viewer').classList.add('hidden');
}
