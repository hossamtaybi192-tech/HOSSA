/*
  إعدادات مشروع Firebase الخاص بـ NOIR & OR
*/
const firebaseConfig = {
  apiKey: "AIzaSyCfpdapi3WyC--Dn5iFAEFEbdt7w1XiFvM",
  authDomain: "noir-et-or-9dc4f.firebaseapp.com",
  projectId: "noir-et-or-9dc4f",
  storageBucket: "noir-et-or-9dc4f.firebasestorage.app",
  messagingSenderId: "942748208381",
  appId: "1:942748208381:web:5e25d4f641c1c546adc294"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
