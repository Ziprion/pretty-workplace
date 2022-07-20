import { useCallback, useEffect, useState } from 'react';

import { boardPlate } from '@style';

export const useColumnParameters = () => {
  const [ columnCount, setColumnCount ] = useState(null);
  const [ columnWidth, setColumnWidth ] = useState(null);

  const getCurrentColumnCount = useCallback(() => Math.trunc(window.innerWidth / boardPlate.minWidth.slice(0, 3)), []);
  const getCurrentColumnWidth = useCallback(() => (window.innerWidth - 47) / columnCount, [ columnCount ]);
  const setCurrentColumnCount = useCallback(() => setColumnCount(getCurrentColumnCount), [ getCurrentColumnCount ]);
  const setCurrentColumnWidth = useCallback(() => setColumnWidth(getCurrentColumnWidth), [ getCurrentColumnWidth ]);

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
