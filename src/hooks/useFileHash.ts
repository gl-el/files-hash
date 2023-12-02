import { useEffect, useState } from 'react';

async function calcHash(data: string | ArrayBuffer) {
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

export function useFileHash() {
  const [hash, setHash] = useState('');
  const [fileName, setFileName] = useState('');
  const [prevHash, setPrevHash] = useState('');

  useEffect(() => {
    if (!hash || !fileName) return;
    const saved = localStorage.getItem(`${fileName}`);
    if (saved) {
      const savedFileHashes = JSON.parse(saved);
      const lastSavedHash = savedFileHashes.at(-1);
      localStorage.setItem(`${fileName}`, JSON.stringify([lastSavedHash, hash]));
      if (lastSavedHash !== hash) {
        setPrevHash(lastSavedHash);
      }
    } else {
      localStorage.setItem(`${fileName}`, JSON.stringify([hash]));
    }
  }, [hash]);

  const handleFileInput = (file: File) => {
    setPrevHash('');
    setFileName(file.name);
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      const data = reader.result;
      if (data === null) return;
      calcHash(data).then((hash) => setHash(hash));
    };
  };

  return { hash, fileName, prevHash, handleFileInput };
}
