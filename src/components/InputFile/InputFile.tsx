import { useState } from 'react';
import { HardDriveUpload } from 'lucide-react';
import s from './InputFile.module.css';

export function InputFile({ onInputChange }: { onInputChange: (file: File) => void }) {
  const [fileName, setFileName] = useState('');
  const [isDrag, setIsDrag] = useState(false);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    setFileName(file.name);
    onInputChange(file);
  };

  return (
    <div className={s.container}>
      <div
        className={`${s.upload} ${isDrag ? s.uploadActive : ''}`}
        onDragEnter={() => setIsDrag(true)}
        onDragLeave={() => setIsDrag(false)}
        onDrop={() => setIsDrag(false)}
      >
        <HardDriveUpload size={'60'} />
        {!fileName && !isDrag && <h2>Click box to choose a file or place it here</h2>}
        {isDrag && <h2>Drop file here</h2>}
        {fileName && !isDrag && <h2>{fileName}</h2>}
        <input type='file' onChange={handleFile} />
      </div>
    </div>
  );
}
