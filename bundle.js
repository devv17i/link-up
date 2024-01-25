function searchCodeforces(event) {
    if (event.key === "Enter") {
        var username = document.getElementById('searchInput').value;
       
        window.location.href = `codeforcesUserInfo.html?username=${username}`;
    }
}

function viewContest(){
    alert("please Login to continue");
    }
document.getElementById("contest").addEventListener("click", viewContest); 
document.getElementById("blog").addEventListener("click", viewContest); 
document.getElementById("stalk-list").addEventListener("click", viewContest); 


