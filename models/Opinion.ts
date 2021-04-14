import firebase from 'firebase/app';

export interface OpinionForm {
  body: string;
  createdAt: firebase.firestore.FieldValue;
  isReplied: boolean;
}
