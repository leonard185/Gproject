
const profiles = [
    { id: 1, name: "John", profile: "John's profile" },
    { id: 2, name: "Alice", profile: "Alice's profile" },
    { id: 3, name: "Bob", profile: "Bob's profile" }
];

function createNotification(name, id, message, sentTime, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    const currentTime = new Date().toLocaleTimeString();
    notification.innerHTML = `
        <div class="notification-header">
            <span class="name">${name}</span>
            <span class="id">ID: ${id}</span>
            <span class="time">${sentTime || currentTime}</span>
        </div>
        <div class="notification-message">${message}</div>
    `;
    document.getElementById('notificationContainer').appendChild(notification);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);

    // Add click event listener to show profile when name is clicked
    notification.querySelector('.name').addEventListener('click', () => {
        showProfile(id);
    });
}

function searchProfile() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const profile = profiles.find(p => p.name.toLowerCase() === searchInput);
    if (profile) {
        showProfile(profile.id);
    } else {
        alert("Profile not found!");
    }
}

function showProfile(id) {
    const profile = profiles.find(p => p.id === id);
    if (profile) {
        alert(profile.profile);
    } else {
        alert("Profile not found!");
    }
}

// Usage examples
createNotification('John', 1, 'This is a success message', '10:00 AM', 'success');
createNotification('Alice', 2, 'This is an error message', '11:30 AM', 'error');
createNotification('Bob', 3, 'This is a warning message', '12:45 PM', 'warning');
