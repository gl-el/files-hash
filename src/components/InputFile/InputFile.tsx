import { useRef, useState } from 'react';
import { HardDriveUpload } from 'lucide-react';
import s from './InputFile.module.css';

export function InputFile({ onInputChange, fileName }: { onInputChange: (file: File) => void; fileName: string }) {
  const [isDrag, setIsDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    onInputChange(file);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const stopDragEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <div
      className={`${s.upload} ${isDrag ? s.uploadActive : ''}`}
      onDragEnter={(e) => {
        stopDragEvent(e);
        setIsDrag(true);
      }}
      onDragLeave={(e) => {
        stopDragEvent(e);
        if (e.currentTarget.contains(e.relatedTarget as HTMLElement)) return;
        setIsDrag(false);
      }}
      onDrop={() => {
        setIsDrag(false);
      }}
    >
      <HardDriveUpload size={'60'} />
      {!fileName && !isDrag && <p>Click box to choose a file or place it here</p>}
      {isDrag && <p>Drop file here</p>}
      {fileName && !isDrag && <p>{fileName}</p>}
      <input type='file' onChange={handleFile} ref={inputRef} />
    </div>
  );
}
