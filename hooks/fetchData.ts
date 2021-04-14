import firebase from 'firebase/app';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { Opinion } from '../models/Opinion';
import { opinionsState } from '../store/state';

export const useFetch = () => {
  const [opinions, setOpinions] = useRecoilState(opinionsState);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    if (opinions) return setIsFetching(false);

    firebase
      .firestore()
      .collection('opinions')
      .orderBy('createdAt', 'desc')
      .get()
      .then((snapshot) => {
        if (snapshot.empty) return setOpinions([]);

        let results = [];

        snapshot.docs.forEach((doc) => {
          const data = doc.data() as Opinion;
          data.id = doc.id;
          results = [...results, data];
        });

        setOpinions(results);
      })
      .catch((err) => {
        alert('処理に失敗しました。');
        console.error(err);
      });
  }, [opinions]);

  return { opinions, isFetching };
};
