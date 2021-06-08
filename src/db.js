import firebase from "firebase";
const config = {
        apiKey: "AIzaSyDBkVkxF-nscrMMpdhLVqGJRXSgQZFdrQE",
        authDomain: "sipher-landingpage.firebaseapp.com",
        databaseURL: "https://sipher-landingpage-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "sipher-landingpage",
        storageBucket: "sipher-landingpage.appspot.com",
        messagingSenderId: "149018129956",
        appId: "1:149018129956:web:aad45777b4f0831b8e8ab1",
        measurementId: "G-PRW7NBKJDG"
      };
 
firebase.initializeApp(config);
export default firebase;