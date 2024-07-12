import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHnTgu6Z1RoAIhGgR_KOKMcDoWsa8ksuU",
  authDomain: "bullsstoreeasy-3bcd5.firebaseapp.com",
  databaseURL: "https://bullsstoreeasy-3bcd5-default-rtdb.firebaseio.com",
  projectId: "bullsstoreeasy-3bcd5",
  storageBucket: "bullsstoreeasy-3bcd5.appspot.com",
  messagingSenderId: "723689229641",
  appId: "1:723689229641:web:11e134a1eadd1211c11e98",
  measurementId: "G-9FMJCKBKC3"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;