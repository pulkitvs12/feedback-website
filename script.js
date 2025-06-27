// ✅ Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAGeigVUQqFgAMsp_IR-qX98fhe-LkU9qk",
  authDomain: "feedback-app-b4323.firebaseapp.com",
  databaseURL: "https://feedback-app-b4323-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "feedback-app-b4323",
  storageBucket: "feedback-app-b4323.appspot.com",
  messagingSenderId: "300777798025",
  appId: "1:300777798025:web:877dee3c28083822820958"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ✅ Wait for page to load
window.onload = function () {
  // Customer Page – Submit feedback
  const form = document.getElementById("feedbackForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;

      db.ref("feedbacks").push({
        name,
        message,
        timestamp: Date.now()
      }).then(() => {
        alert("Feedback submitted!");
        form.reset();
      }).catch((err) => {
        console.error("Error:", err);
      });
    });
  }

  // Admin Page – Show feedback
  const list = document.getElementById("feedbackList");
  if (list) {
    db.ref("feedbacks").on("value", function (snapshot) {
      list.innerHTML = "";
      snapshot.forEach(function (child) {
        const data = child.val();
        const li = document.createElement("li");
        li.textContent = `${data.name}: ${data.message}`;
        list.appendChild(li);
      });
    });
  }
};
