// firebase-config.js
// Firebase configuration. Replace these placeholders with your actual Firebase project credentials.
const firebaseConfig = {
  apiKey: "AIzaSyCesYxRbO-KKL3lVmCkPoj4UBSQDgETwwk",
  authDomain: "mohanport-aafa5.firebaseapp.com",
  projectId: "mohanport-aafa5",
  storageBucket: "mohanport-aafa5.firebasestorage.app",
  messagingSenderId: "649265485444",
  appId: "1:649265485444:web:508f00b063fc284734d4d1"
};

// Check if Firebase is configured
function isFirebaseConfigured() {
  return typeof firebase !== 'undefined' && 
         firebaseConfig && 
         firebaseConfig.projectId && 
         firebaseConfig.projectId !== 'YOUR_PROJECT_ID';
}

let db = null;
if (isFirebaseConfigured()) {
  try {
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    console.log("Firebase initialized successfully.");
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
} else {
  console.warn("Firebase not configured. Falling back to LocalStorage.");
}
