// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import * as consts from "../../constants.js"


import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// alert('update firebaseconfig object in firebase.js file')

const firebaseConfig = {

  apiKey: consts.API_KEY,
  authDomain: consts.AUTHDOMAIN,
  projectId: consts.PROJECTID,
  storageBucket: consts.STORAGE_BUCKET,
  messagingSenderId: consts.MESSAGING_SENDER_ID,
  appId: consts.APP_ID,
  measurementId: consts.MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const GoogleAuth = new GoogleAuthProvider();