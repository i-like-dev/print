const firebaseConfig = {
  apiKey: "AIzaSyCFPtv-eValmarH9g96Ef-OdbwdYger6tE",
  authDomain: "x-tw-455de.firebaseapp.com",
  projectId: "x-tw-455de",
  storageBucket: "x-tw-455de.firebasestorage.app",
  messagingSenderId: "843984136113",
  appId: "1:843984136113:web:24a4bd793b1a6f7b813f90"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();
