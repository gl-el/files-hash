import { ClipboardCopy } from 'lucide-react';
import s from './CopyButton.module.css';
import { useState, useEffect } from 'react';

export function CopyButton({ textToCopy }: { textToCopy: string }) {
  const [copyStatus, setCopyStatus] = useState('idle');

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
        <ClipboardCopy />
      </button>
      {copyStatus !== 'idle' && (
        <span className={s.label} role='tooltip'>
          {copyStatus === 'success' ? 'Successful copied' : 'Error occurred'}
        </span>
      )}
    </div>
  );
}
