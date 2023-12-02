import { Highlight } from '../UI/Highlight/Highlight';
import s from './Alert.module.css';
import { AlertTriangle } from 'lucide-react';

export function Alert({ prevHash }: { prevHash: string }) {
  return (
    <div className={s.container}>
      <AlertTriangle className={s.ico} size={40} />
      <p>Attention! File hash has changed since your last check!</p>
      <p>
        Previous hash was: <Highlight>{prevHash}</Highlight>
      </p>
    </div>
  );
}
