import { useEffect, useState } from 'react';

export const useBoardOverflow = (isExpanded) => {
  const [ isOverflow, setOverflow ] = useState(!isExpanded);

  useEffect(() => {
    // eslint-disable-next-line functional/no-let
    let timer;

    if (isExpanded) {
      timer = setTimeout(() => setOverflow(false), 200);
    } else {
      clearTimeout(timer);
      setOverflow(true);
    }

    return () => clearTimeout(timer);
  }, [ isExpanded ]);

  return { isOverflow };
};
