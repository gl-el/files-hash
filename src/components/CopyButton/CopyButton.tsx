import { Copy } from 'lucide-react';
import s from './CopyButton.module.css';
import { useState, useEffect } from 'react';

type CopyStatusType = 'idle' | 'success' | 'error';

export function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copyStatus, setCopyStatus] = useState<CopyStatusType>('idle');

  const handleCopy = () => {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => setCopyStatus('success'))
      .catch(() => setCopyStatus('error'));
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCopyStatus('idle');
    }, 2000);
    return () => clearTimeout(timerId);
  }, [copyStatus]);
  return (
    <div className={s.container}>
      <button className={s.button} onClick={handleCopy}>
        <Copy />
      </button>
      {copyStatus !== 'idle' && (
        <span className={s.label} role='tooltip'>
          {copyStatus === 'success' ? 'Successfully copied' : 'Error occurred'}
        </span>
      )}
    </div>
  );
}
