// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "artvista-gallery-9695d.firebaseapp.com",
    projectId: "artvista-gallery-9695d",
    storageBucket: "artvista-gallery-9695d.appspot.com",
    messagingSenderId: "287063913989",
    appId: "1:287063913989:web:eb671dc73e275d1f6cce6c",
    measurementId: "G-52B0XP0P73"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAzizQ-bF-u_bTAqsVqAAfEYQoBtyCMrsA",
//   authDomain: "artvista-gallery-9695d.firebaseapp.com",
//   projectId: "artvista-gallery-9695d",
//   storageBucket: "artvista-gallery-9695d.appspot.com",
//   messagingSenderId: "287063913989",
//   appId: "1:287063913989:web:eb671dc73e275d1f6cce6c",
//   measurementId: "G-52B0XP0P73"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);