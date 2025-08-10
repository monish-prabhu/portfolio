import { useEffect, useRef, useState } from 'react';

function Typewriter({
  text,
  className,
  speed = 32, // average ms per character
  startDelay = 200,
  showCaret = true,
}) {
  const [output, setOutput] = useState('');
  const indexRef = useRef(0);
  const timerRef = useRef(0);

  useEffect(() => {
    setOutput('');
    indexRef.current = 0;

    const punctuationPauseMs = (ch) => {
      if (ch === '.' || ch === '!' || ch === '?') return 300;
      if (ch === ',') return 160;
      return 0;
    };

    const tick = () => {
      const i = indexRef.current;
      if (i >= text.length) return;
      const nextChar = text.charAt(i);
      setOutput((prev) => prev + nextChar);
      indexRef.current = i + 1;

      const jitter = Math.floor(Math.random() * 40) - 10; // -10..29ms
      const nextDelay = Math.max(8, speed + jitter + punctuationPauseMs(nextChar));
      timerRef.current = window.setTimeout(tick, nextDelay);
    };

    timerRef.current = window.setTimeout(tick, startDelay);
    return () => {
      window.clearTimeout(timerRef.current);
    };
  }, [text, speed, startDelay]);

  const done = output.length >= text.length;

  return (
    <span className={className} aria-live="polite">
      {output}
      {showCaret && !done && (
        <span className="type-caret" aria-hidden="true">▍</span>
      )}
    </span>
  );
}

export default Typewriter;


