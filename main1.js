function searchCodeforces(event) {
    if (event.key === "Enter") {
        var username = document.getElementById('searchInput').value;
        // Redirect to a new page with the Codeforces user information
        window.location.href = `codeforcesUserInfo.html?username=${username}`;
    }
}

document.getElementById('contest').addEventListener('click', function() {
    // Replace 'your-blog-page.html' with the actual URL of your blog page
    window.location.href = './contest.html';
});

document.getElementById('blog').addEventListener('click', function() {
    // Replace 'your-blog-page.html' with the actual URL of your blog page
    window.location.href = './uploadBlog.html';
});