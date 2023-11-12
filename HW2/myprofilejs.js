
function toggleEditMode() {
    const profileInfo = document.querySelector('.profile-info');
    const editInfo = document.querySelector('.edit-info');
    const editBtn = document.getElementById('editBtn');

    if (profileInfo.style.display === 'block') {
        // Switch to edit mode
        profileInfo.style.display = 'none';
        editInfo.style.display = 'block';
        editBtn.textContent = 'Cancel';
        loadUserData(); // Load user data into edit fields
    } else {
        // Switch to view mode
        profileInfo.style.display = 'block';
        editInfo.style.display = 'none';
        editBtn.textContent = 'Edit';
    }
}

function loadUserData() {
    const userData = getUserInformation();

    document.getElementById('editSubject').value = userData.subject || '';
    document.getElementById('editAddress').value = userData.address || '';
    document.getElementById('editPhone').value = userData.phone || '';
    document.getElementById('editDescription').value = userData.description || '';
}

function saveChanges() {
    const editedData = {
        subject: document.getElementById('editSubject').value,
        address: document.getElementById('editAddress').value,
        phone: document.getElementById('editPhone').value,
        description: document.getElementById('editDescription').value,
    };

    saveEditedUserData(editedData);

    toggleEditMode();
}

function getUserInformation() {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
        return JSON.parse(userInfoString);
    } else {
        return {};
    }
}

function saveEditedUserData(editedData) {
    const userInfo = getUserInformation();
    Object.assign(userInfo, editedData);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}
