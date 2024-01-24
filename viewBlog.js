const firebaseConfig = {
    apiKey: "AIzaSyCR8FfTUGjiSXgN2XzSHjN9owwrbOX-Uss",
    authDomain: "oauth-ebafa.firebaseapp.com",
    projectId: "oauth-ebafa",
    storageBucket: "oauth-ebafa.appspot.com",
    messagingSenderId: "657639756347",
    appId: "1:657639756347:web:a3f1de3c56e42a45da821e"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {
    fetchBlogs();
});

async function fetchBlogs() {
    const blogsList = document.getElementById('blogs-list');
    blogsList.innerHTML = '';

    const querySnapshot = await db.collection('blogs').get();

    querySnapshot.forEach((doc) => {
        const blogData = doc.data();
        const blogId = doc.id;
        const blogDiv = createBlogDiv(blogId, blogData);
        blogsList.appendChild(blogDiv);
    });
}

function createBlogDiv(blogId, blogData) {
    const blogDiv = document.createElement('div');
    blogDiv.classList.add('blog');
    blogDiv.innerHTML = `
        <div class="blog-header">
            <div><h2>${blogData.title}</h2></div>
        </div>
        <div class="blog-content">
            ${blogData.fileUrl ? `<img src="${blogData.fileUrl}" alt="Blog Image">` : ''}
            <p>${blogData.content.replace(/\n/g, '<br>')}</p>
        </div>
        <div class="auther"><strong>${blogData.author}</strong></div>
    `;
    blogDiv.setAttribute('data-blog-id', blogId);
    return blogDiv;
}
