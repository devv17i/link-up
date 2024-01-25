
async function fetchCodeforcesUser(username) {
    
    const apiUrl = `https://codeforces.com/api/user.info?handles=${username}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.status === 'OK' && data.result.length > 0) {
            return data.result[0];
        } else {
            throw new Error('User not found on Codeforces');
        }
    } catch (error) {
        console.error('Error fetching Codeforces user data:', error);
        throw error;
    }
}


async function searchUser() {
    const usernameInput = document.getElementById('username');
    const username = usernameInput.value.trim();

    if (username === '') {
        alert('Please enter a Codeforces username');
        return;
    }

    try {
        const user = await fetchCodeforcesUser(username);
        // Save user data to local storage
        localStorage.setItem('userDetails', JSON.stringify(user));
        
        // Open user details page in a new tab
        window.open('userDetails.html', '_blank');
    } catch (error) {
        alert('User not found on Codeforces');
    }
}

