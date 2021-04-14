import firebase from 'firebase/app';

export interface Question {
  body: string;
  createdAt: firebase.firestore.FieldValue;
  isAnswered: boolean;
}
