import { Info, CheckCircle, AlertCircle } from 'lucide-react';
import s from './Toast.module.css';
import { useEffect, useState } from 'react';

const SHOW_TOAST_DURATION = 10000;

export function Toast({
  trigger,
  message,
  status,
}: {
  trigger: string | number | boolean;
  message: string;
  status: 'success' | 'error' | 'info';
}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(Boolean(trigger));
    const timerId = setTimeout(() => setIsActive(false), SHOW_TOAST_DURATION);
    return () => clearTimeout(timerId);
  }, [trigger]);

  return (
    <div className={`${s.container} ${isActive ? s.active : ''}`}>
      {status === 'success' && <CheckCircle />}
      {status === 'error' && <AlertCircle />}
      {status === 'info' && <Info />}
      <p>{message}</p>
      <div className={s.progress} style={{ animationDuration: `${SHOW_TOAST_DURATION}ms` }} />
    </div>
  );
}
