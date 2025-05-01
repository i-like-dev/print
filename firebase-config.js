const firebaseConfig = {
  apiKey: "你的API金鑰",
  authDomain: "你的專案.firebaseapp.com",
  projectId: "你的projectId",
  storageBucket: "你的專案.appspot.com",
  messagingSenderId: "xxxx",
  appId: "xxx"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();