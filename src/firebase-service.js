// Import only the required functions from the Firebase SDK
import { initializeApp } from 'firebase/app';
import { 
		getFirestore, doc, getDoc, 
		updateDoc, collection, setDoc,
		query, orderBy, limit, getDocs, 
		endBefore, startAfter, serverTimestamp,
		FieldValue
		} from 'firebase/firestore';

// Your Firebase config (replace with your actual config)
const firebaseConfig = {
    apiKey: "AIzaSyCU6FPAsQn7Qj5xBhkvHQQW0z5r7KKE0uI",
    authDomain: "caseprep-43d71.firebaseapp.com",
    projectId: "caseprep-43d71",
    storageBucket: "caseprep-43d71.appspot.com",
    messagingSenderId: "400728172075",
    appId: "1:400728172075:web:6da6c08655b9fe0a84ec6e",
    measurementId: "G-Y668NBRW9P"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// collectionPath '/cases/'+case_Name+'/Prompts/'
async function getNextDoc(db, collectionPath, currentDoc) {
    const colRef = collection(db, collectionPath);
    
    // Query the collection with ordering and pagination
    const q = query(colRef, orderBy('createdAt'), startAfter(currentDoc), limit(1));
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
        return querySnapshot.docs[0];
    } else {
        return null; // No next document found
    }
}

async function getPreviousDoc(db, collectionPath, currentDoc) {
    const colRef = collection(db, collectionPath);
    
    // Query the collection with ordering and pagination
    const q = query(colRef, orderBy('createdAt'), endBefore(currentDoc), limit(1));
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
		return querySnapshot.docs[0];
	} else {
        return null; // No previous document found
    }
}


// Function to create or edit a document
async function createOrEditDocument(db, collectionPath, docId, data) {
    const docRef = doc(db, collectionPath, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // Document exists, so we update it without altering the createdAt field
        await updateDoc(docRef, data);
    } else {
        // Document does not exist, so we create it and set the createdAt field to the server timestamp
        await setDoc(docRef, {
            ...data,
            createdAt: serverTimestamp(), // Set createdAt to the current server timestamp
        });
    }
}
// '/cases/'+caseName+'/Answers/'+'0thpromptresponse'
// Function to create or append specific fields in a document
async function createOrAppendDocument(db, collectionPath, docId, updateData) {
    const docRef = doc(db, collectionPath, docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // Document exists, so update it with the new data
        await updateDoc(docRef, {
            ...updateData,
            updatedAt: serverTimestamp() // Optionally add or update an updatedAt field
        });
    } else {
        // Document does not exist, so create it with the initial data
        await setDoc(docRef, {
            ...updateData,
            createdAt: serverTimestamp(), // Set createdAt to the current server timestamp
            updatedAt: serverTimestamp()  // Optionally add or update an updatedAt field
        });
    }
}

export {db, getNextDoc, getPreviousDoc, createOrEditDocument, createOrAppendDocument};