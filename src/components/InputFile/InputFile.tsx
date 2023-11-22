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
        onDragEnter={(e) => {
          e.stopPropagation();
          e.preventDefault();
          console.log('entering', isDrag, e.currentTarget, e.target);
          setIsDrag(true);
        }}
        onDragLeave={(e) => {
          e.stopPropagation();
          e.preventDefault();
          if (e.currentTarget.contains(e.relatedTarget as HTMLElement)) return;
          console.log('leaving', isDrag, e.currentTarget, e.target);
          setIsDrag(false);
        }}
        onDrop={(e) => {
          console.log('dropping', isDrag, e.currentTarget, e.target);
          setIsDrag(false);
        }}
      >
        <HardDriveUpload size={'60'} />
        {!fileName && !isDrag && <p>Click box to choose a file or place it here</p>}
        {isDrag && <p>Drop file here</p>}
        {fileName && !isDrag && <p>{fileName}</p>}
        <input type='file' onChange={handleFile} />
      </div>
    </div>
  );
}
