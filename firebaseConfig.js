import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
  getStorage,
  // ref,
  // uploadBytesResumable,
  // getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoIvzGo9GgALKk11h9RwMfG8y_psieZ28",
  authDomain: "fix-r-us-1ed66.firebaseapp.com",
  projectId: "fix-r-us-1ed66",
  storageBucket: "fix-r-us-1ed66.appspot.com",
  messagingSenderId: "128894330001",
  appId: "1:128894330001:web:fcc1676fe97341cfc58b30",
  measurementId: "G-XWRTSXCYE8",
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const storage = getStorage(app);

// const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
// uploadTask.on(
//   "state_changed",
//   (snapshot) => {
//     // Observe state change events such as progress, pause, and resume
//     // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
//     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     console.log("Upload is " + progress + "% done");
//     switch (snapshot.state) {
//       case "paused":
//         console.log("Upload is paused");
//         break;
//       case "running":
//         console.log("Upload is running");
//         break;
//     }
//   },
//   (error) => {
//     // Handle unsuccessful uploads
//   },
//   () => {
//     // Handle successful uploads on complete
//     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
//     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//       console.log("File available at", downloadURL);
//     });
//   }
// );
