function searchCodeforces(event) {
    if (event.key === "Enter") {
        var username = document.getElementById('searchInput').value;

        window.location.href = `codeforcesUserInfo.html?username=${username}`;
    }
}

document.getElementById('contest').addEventListener('click', function() {

    window.location.href = './contest.html';
});

document.getElementById('blog').addEventListener('click', function() {

    window.location.href = './uploadBlog.html';
});
