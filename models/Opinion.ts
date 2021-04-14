import firebase from 'firebase/app';

export interface Opinion {
  id: string;
  body: string;
  createdAt: firebase.firestore.Timestamp;
  isReplied: boolean;
}

export interface OpinionForm {
  body: string;
  createdAt: firebase.firestore.FieldValue;
  isReplied: boolean;
}
