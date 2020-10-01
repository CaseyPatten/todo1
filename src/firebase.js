import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyAqaSdu9_1ubwyVUtYP5uaJtB2IVeW9ewo",
	authDomain: "cp-yt-todo1.firebaseapp.com",
	databaseURL: "https://cp-yt-todo1.firebaseio.com",
	projectId: "cp-yt-todo1",
	storageBucket: "cp-yt-todo1.appspot.com",
	messagingSenderId: "710398444170",
	appId: "1:710398444170:web:0d2e0e348d0dd30a27a373",
	measurementId: "G-HF3EGT3N0Y",
});

const db = firebaseApp.firestore();
//const auth = firebase.auth();

export default db;
//export { db }; other way of writing same thing
