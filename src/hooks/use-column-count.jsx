import { useEffect, useState } from 'react';

import { boardPlate } from '@style';

export const useColumnCount = () => {
  const [ columnCount, setColumnCount ] = useState(null);

  const getCurrentColumnCount = () => Math.trunc(window.innerWidth / boardPlate.minWidth.slice(0, 3));
  const setCurrentColumnCount = () => setColumnCount(getCurrentColumnCount);

  useEffect(() => {
    setCurrentColumnCount();

    window.addEventListener('resize', setCurrentColumnCount);

    return () => window.removeEventListener('resize', setCurrentColumnCount);
  }, []);

  return { columnCount };
};
