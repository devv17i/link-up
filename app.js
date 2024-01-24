// Function to fetch Codeforces user data
async function fetchCodeforcesUser(username) {
    const apiKey = 'YOUR_CODEFORCES_API_KEY';
    const apiUrl = `https://codeforces.com/api/user.info?handles=${username}&key=${apiKey}`;

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

// Function to handle user search

function search(){
    alert("please Login to continue");
    }

document.getElementById('username').addEventListener("click", search);    

