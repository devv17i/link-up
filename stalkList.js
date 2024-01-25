
const stalkListContainer = document.getElementById('stalk-list-container');


const firebaseConfig = {
    apiKey: "AIzaSyCR8FfTUGjiSXgN2XzSHjN9owwrbOX-Uss",
    authDomain: "oauth-ebafa.firebaseapp.com",
    projectId: "oauth-ebafa",
    storageBucket: "oauth-ebafa.appspot.com",
    messagingSenderId: "657639756347",
    appId: "1:657639756347:web:a3f1de3c56e42a45da821e"
  };
firebase.initializeApp(firebaseConfig);


const stalkListCollection = firebase.firestore().collection("YOUR_STALKLIST_COLLECTION");


async function displayStalkList() {
    try {
        const snapshot = await stalkListCollection.get();
        const stalkList = [];

        snapshot.forEach((doc) => {
            stalkList.push(doc.data());
        });

        stalkListContainer.innerHTML = `<h2>Your Stalk List</h2>`;

        if (stalkList.length === 0) {
            stalkListContainer.innerHTML += `<p>Your stalk list is empty.</p>`;
        } else {
            stalkList.forEach((user) => {
                stalkListContainer.innerHTML += `
                    <div class="stalked-user">
                        <h3>${user.handle}</h3>
                        <p>Rating: ${user.rating || 'Not rated'}</p>
                        <p>Country: ${user.country || 'N/A'}</p>
                    </div>
                `;
            });
        }
    } catch (error) {
        console.error('Error fetching stalk list:', error);
    }
}


displayStalkList();
