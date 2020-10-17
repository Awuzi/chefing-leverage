import Firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAby44QOBL6SNtv6bMZW3BdOcNeKFxaI9o",
    authDomain: "chefing-leverage-app-75010.firebaseapp.com",
    databaseURL: "https://chefing-leverage-app-75010.firebaseio.com",
    projectId: "chefing-leverage-app-75010",
    storageBucket: "chefing-leverage-app-75010.appspot.com",
    messagingSenderId: "295907754387",
    appId: "1:295907754387:web:262cc43655e688b45c6866"
};
// Initialize Firebase
Firebase.initializeApp(firebaseConfig);


export const db = app.database();
