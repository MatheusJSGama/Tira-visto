import { useEffect, useState } from 'react';

export function useIsLargeScreen() {
  const minWidth = 1440;
  const [isLarge, setIsLarge] = useState(() => window.innerWidth >= minWidth);

  useEffect(() => {
    const handler = () => setIsLarge(window.innerWidth >= minWidth);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, [minWidth]);

  return isLarge;
}
