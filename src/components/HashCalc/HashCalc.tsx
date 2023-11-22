import { useState } from 'react';
//import cryptoJS from 'crypto-js';
import s from './HashCalc.module.css';
import { InputFile } from '../InputFile/InputFile';
import { CopyButton } from '../CopyButton/CopyButton';

export function HashCalc() {
  const [hash, setHash] = useState('');

  async function digestMessage(data: string | ArrayBuffer) {
    let hash;
    if (typeof data === 'string') {
      const encoder = new TextEncoder();
      const message = encoder.encode(data);
      hash = await crypto.subtle.digest('SHA-1', message);
    } else {
      hash = await crypto.subtle.digest('SHA-1', data);
    }
    const hashArray = Array.from(new Uint8Array(hash));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }

  const handleFileInput = (file: File) => {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      const data = reader.result;
      if (data === null) return;
      digestMessage(data).then((hash) => setHash(hash));
      /*       const enc = new TextDecoder('utf-8');
      if (data instanceof ArrayBuffer) {
        const hash = cryptoJS.SHA1(cryptoJS.lib.WordArray.create(data)).toString();
        console.log('Checksum', hash);
      } */
    };
  };

  return (
    <div className={s.container}>
      <InputFile onInputChange={handleFileInput} />
      <div className={`${s.hashContainer} ${hash ? s.grid : ''}`}>
        {hash ? (
          <>
            <p>
              SHA1 hash: <span className={s.highlighted}>{hash}</span>
            </p>
            <CopyButton textToCopy={hash} />
          </>
        ) : (
          <p>
            SHA1 hash will be calculated <span className={s.highlighted}>here</span>
          </p>
        )}
      </div>
    </div>
  );
}
