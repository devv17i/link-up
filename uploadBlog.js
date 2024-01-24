


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

// document.addEventListener('DOMContentLoaded', () => {
//     // Logic specific to the upload page (if any)
// });

async function publishBlog() {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const fileInput = document.getElementById('file-input');

    if (author && title && content) {
        let fileUrl = null;

        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const storageRef = firebase.storage().ref('blog-uploads/' + file.name);
            await storageRef.put(file);
            fileUrl = await storageRef.getDownloadURL();
        }

        const newBlogRef = await db.collection('blogs').add({
            author,
            title,
            content,
            fileUrl,
        });

        const newBlogDoc = await newBlogRef.get();
        const newBlogData = newBlogDoc.data();
        const newBlogId = newBlogDoc.id;

        // Additional logic specific to the upload page (if any)

        // Clear input fields after publishing
        document.getElementById('author').value = '';
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
        fileInput.value = ''; // Clear file input
    }
}