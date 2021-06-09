import firebase from './firebase';

const firestore = firebase.firestore();

export function createUser(uid, data) {
  return firestore
    .collection('users')
    .doc(uid)
    .set({ uid, ...data }, { merge: true });
}

export function createAdvice(data) {
  return firestore.collection('advices').add(data);
}

export function deleteAdvice(id) {
  return firestore.collection('advices').doc(id).delete();
}
