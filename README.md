# 🌐 Feedback Website using Google Cloud Platform + Firebase

This is a real-time, cloud-hosted feedback collection system that allows users to submit feedback anonymously and lets admins view it live. The system is built using **Firebase Realtime Database** for data storage and **Google Cloud Storage** for hosting the static site.

It’s a lightweight, serverless solution ideal for portfolios, personal websites, or events.

---

## 🚀 Live Project Demo

🌍 [Customer Page (Submit Feedback)](https://storage.googleapis.com/feedback-1/index.html)  
🔐 [Admin Page (View Feedback)](https://storage.googleapis.com/feedback-1/admin.html)  
📦 [GitHub Repository](https://github.com/pulkitvs12/feedback-website.git)

---

## 🧠 Tech Stack & GCP Services Used

| Service                   | Purpose                                       |
|---------------------------|-----------------------------------------------|
| **Cloud Storage**         | Hosts the static website files (HTML/CSS/JS) |
| **Firebase Realtime DB**  | Stores and syncs feedback instantly           |
| **HTML, CSS, JavaScript** | Handles frontend structure, styling & logic  |

---

## 🧠 Technologies & Cloud Services Used

| Service                          | Purpose                                       |
|----------------------------------|-----------------------------------------------|
| **Firebase Realtime Database**   | Stores feedback entries in real time          |
| **Firebase Console**             | Cloud management interface for Firebase       |
| **Google Cloud Storage (GCS)**   | Hosts the static website (HTML, CSS, JS)      |


## 🧩 Architecture Flow

1. User visits the feedback website hosted on Cloud Storage  
2. Submits feedback using a simple HTML form  
3. JavaScript uses Firebase SDK to push data to Realtime Database  
4. Admin opens `admin.html` which fetches and displays feedback live  

---

## 📁 Folder Structure

```
feedback-website/
├── index.html         # Feedback form (User)
├── admin.html         # Admin dashboard to view submissions
├── script.js          # JS logic for Firebase interaction
├── style.css          # Modern, responsive UI styling
├── README.md          # Documentation
```

---

## 💼 Use Cases

- ✅ **Portfolio Websites**: Collect anonymous feedback on your portfolio or projects  
- ✅ **Events & Workshops**: Gather quick feedback from attendees without login  
- ✅ **Public Kiosks / Surveys**: Lightweight survey or suggestion boxes  
- ✅ **Classroom Projects**: Simple real-time form submission without a backend  

---

## 🔭 Future Scope

- 🔐 **Add Authentication**: Secure admin page with Firebase Auth or a password prompt  
- 📊 **Analytics Dashboard**: Connect to Google Sheets or Looker Studio for visual stats  
- 📱 **Responsive Mobile UI**: Enhance CSS for mobile-first experience  
- 🌐 **Multi-language Support**: Support feedback in multiple languages  
- ✉️ **Email Notifications**: Notify admin on new feedback via Cloud Functions  

---

## 🛡️ Security & Access

- Firebase Realtime Database is currently in **test mode** (open read/write)  
- Admin page is public — can be protected using basic auth or Firebase Auth  
- Files are publicly accessible via **Google Cloud Storage bucket**

---

## 🧪 How to Run It Yourself

1. 🔥 Create a Firebase project and enable **Realtime Database**  
2. 🧠 Copy your Firebase config into `script.js`  
3. ☁️ Upload all files to your **Cloud Storage bucket**  
4. ⚙️ Enable static website hosting under bucket settings  
5. 🌍 Make the files public and visit the live URLs to test

---

## 📢 Credits

A cloud computing project  by **Pulkit Saini**  
🔗 [GitHub Repository](https://github.com/pulkitvs12/feedback-website.git)
