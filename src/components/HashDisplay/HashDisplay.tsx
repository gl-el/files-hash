import { CopyButton } from '../CopyButton/CopyButton';
import { Highlight } from '../UI/Highlight/Highlight';
import s from './HashDisplay.module.css';

export function HashDisplay({ hash }: { hash: string }) {
  return (
    <div className={`${hash ? s.grid : ''}`}>
      {hash ? (
        <>
          <p>
            SHA1 hash: <Highlight>{hash}</Highlight>
          </p>
          <CopyButton textToCopy={hash} />
        </>
      ) : (
        <p>
          SHA1 hash will be calculated <Highlight>here</Highlight>
        </p>
      )}
    </div>
  );
}
