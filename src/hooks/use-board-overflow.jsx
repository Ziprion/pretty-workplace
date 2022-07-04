import { useEffect, useState } from 'react';

export const useBoardOverflow = (initialState) => {
  const [ isOverflow, setOverflow ] = useState(initialState);

  useEffect(() => {
    // eslint-disable-next-line functional/no-let
    let timer;

    if (initialState) {
      timer = setTimeout(() => setOverflow(false), 200);
    } else {
      clearTimeout(timer);
      setOverflow(true);
    }

    return () => clearTimeout(timer);
  }, [ initialState ]);

  return { isOverflow };
};
