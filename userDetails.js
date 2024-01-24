// Retrieve user details from local storage
const userDetails = JSON.parse(localStorage.getItem('userDetails'));

if (userDetails) {
    displayUserProfile(userDetails);
} else {
    alert('User details not found');
}

// Function to display user profile
function displayUserProfile(user) {
    const userProfileContainer = document.getElementById('user-profile');
    userProfileContainer.innerHTML = `
        <h2 name="userName">${user.handle}</h2>
        <img src="${user.avatar}" alt="Profile Picture">
        <p name="rating">Rating: ${user.rating || 'Not rated'}</p>
        <p name="maxRating">Max Rating: ${user.maxRating || 'N/A'}</p>
        <p name="contribution">Contribution: ${user.contribution || 'N/A'}</p>
        <p name="country">Country: ${user.country || 'N/A'}</p>
        <p name="organisation">Organization: ${user.organization || 'N/A'}</p>
        <button id="add">stalk</button>
    `;
}
