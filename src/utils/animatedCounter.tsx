import { useEffect, useState } from 'react';

interface AnimatedCounterProps {
  targetNumber: number;
}

export function AnimatedCounter({ targetNumber }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetNumber / (3000 / 16);

    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(interval);
  }, [targetNumber]);

  return <>{count}</>;
}
