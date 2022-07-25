import { useCallback, useEffect } from 'react';

export const useOutsideClick = (isShow, ref, callback, isDisabled) => {
  const handleClick = useCallback(
    (e) => !isDisabled && ref.current && !ref.current.contains(e.target) && callback(),
    [ ref, callback, isDisabled ],
  );

  const handleEscape = useCallback(
    (e) => !isDisabled && e.code === 'Escape' && callback(),
    [ ref, callback, isDisabled ],
  );

  useEffect(() => {
    if (isShow) {
      document.addEventListener('mousedown', handleClick);
      document.addEventListener('keydown', handleEscape);

      return () => {
        document.removeEventListener('mousedown', handleClick);
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [ ref, isShow ]);
};
