import { useState } from 'react';
import { HardDriveUpload } from 'lucide-react';
import s from './InputFile.module.css';

export function InputFile({ onInputChange }: { onInputChange: (file: File) => void }) {
  const [fileName, setFileName] = useState('');

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setFileName(file.name);
    onInputChange(file);
  };

  return (
    <div className={s.container}>
      <div className={s.upload}>
        <HardDriveUpload size={'60'} />
        <h2>{fileName ? fileName : 'Click box to choose a file'}</h2>
        <input type='file' onChange={handleFile} />
      </div>
    </div>
  );
}
