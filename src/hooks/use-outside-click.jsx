import { useCallback, useEffect } from 'react';

export const useOutsideClick = (ref, callback, isDisabled) => {
  const handleClick = useCallback(
    (e) => !isDisabled && ref.current && !ref.current.contains(e.target) && callback(),
    [ ref, callback, isDisabled ],
  );

  const handleEscape = useCallback(
    (e) => !isDisabled && e.code === 'Escape' && callback(),
    [ ref, callback, isDisabled ],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [ ref ]);
};
