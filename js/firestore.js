import { db, collection, addDoc, getDocs } from '../firebase.js';

export async function saveSurgery(data) {
  return await addDoc(collection(db, 'surgeries'), data);
}

export async function fetchSurgeries() {
  const snapshot = await getDocs(collection(db, 'surgeries'));
  return snapshot.docs.map(doc => doc.data());
}
