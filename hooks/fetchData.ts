import firebase from 'firebase/app';
import { useEffect, useState } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import { Opinion } from '../models/Opinion';
import { opinionsState } from '../store/state';

const fetchOpinionData = async (setOpinions: SetterOrUpdater<Opinion[]>) => {
  try {
    const snapshot = await firebase
      .firestore()
      .collection('opinions')
      .orderBy('createdAt', 'desc')
      .get();

    if (snapshot.empty) return setOpinions([]);

    let results = [];

    snapshot.forEach((doc) => {
      const data = doc.data() as Opinion;
      data.id = doc.id;
      results = [...results, data];
    });

    setOpinions(results);
  } catch (err) {
    console.error(err);
  }
};

export const useFetch = () => {
  const [opinions, setOpinions] = useRecoilState(opinionsState);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    if (opinions) return setIsFetching(false);
    fetchOpinionData(setOpinions);
  }, [opinions]);

  return { opinions, isFetching };
};
