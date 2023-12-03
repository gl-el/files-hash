import { InputFile } from '../InputFile/InputFile';
import { HashDisplay } from '../HashDisplay/HashDisplay';
import s from './HashCalc.module.css';
import { useFileHash } from '@/hooks/useFileHash';
import { Toast } from '../UI/Toast/Toast';

export function HashCalc() {
  const { hash, prevHash, fileName, handleFileInput } = useFileHash();

  return (
    <div className={s.container}>
      <InputFile fileName={fileName} onInputChange={handleFileInput} />
      <HashDisplay hash={hash} />
      <Toast trigger={prevHash} message={'This file has changed since last check!'} status='error' />
    </div>
  );
}
