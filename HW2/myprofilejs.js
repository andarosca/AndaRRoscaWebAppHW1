// myprofilejs.js

// Function to toggle between view mode and edit mode
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

// Function to load user data into edit fields
function loadUserData() {
    const userData = getUserInformation();

    document.getElementById('editSubject').value = userData.subject || '';
    document.getElementById('editAddress').value = userData.address || '';
    document.getElementById('editPhone').value = userData.phone || '';
    document.getElementById('editDescription').value = userData.description || '';
}

// Function to save changes made in edit mode
function saveChanges() {
    const editedData = {
        subject: document.getElementById('editSubject').value,
        address: document.getElementById('editAddress').value,
        phone: document.getElementById('editPhone').value,
        description: document.getElementById('editDescription').value,
    };

    saveEditedUserData(editedData);

    // Switch back to view mode
    toggleEditMode();
}

// Replace this function with the actual function to retrieve user data from local storage
function getUserInformation() {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString) {
        return JSON.parse(userInfoString);
    } else {
        return {};
    }
}

// Replace this function with the actual function to save edited user data
function saveEditedUserData(editedData) {
    const userInfo = getUserInformation();
    Object.assign(userInfo, editedData);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
}
