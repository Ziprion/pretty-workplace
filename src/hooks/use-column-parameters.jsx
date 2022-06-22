import { useEffect, useState } from 'react';

import { boardPlate } from '@style';

export const useColumnParameters = () => {
  const [ columnCount, setColumnCount ] = useState(null);
  const [ columnWidth, setColumnWidth ] = useState(null);

  const getCurrentColumnCount = () => Math.trunc(window.innerWidth / boardPlate.minWidth.slice(0, 3));
  const getCurrentColumnWidth = () => (window.innerWidth - 47) / columnCount;
  const setCurrentColumnCount = () => setColumnCount(getCurrentColumnCount);
  const setCurrentColumnWidth = () => setColumnWidth(getCurrentColumnWidth);

  useEffect(() => {
    setCurrentColumnCount();
    window.addEventListener('resize', setCurrentColumnCount);

    return () => window.removeEventListener('resize', setCurrentColumnCount);
  }, []);

  useEffect(() => {
    setCurrentColumnWidth();

    window.addEventListener('resize', setCurrentColumnWidth);

    return () => window.removeEventListener('resize', setCurrentColumnWidth);
  }, [ columnCount ]);

  return {
    columnCount,
    columnWidth,
  };
};
