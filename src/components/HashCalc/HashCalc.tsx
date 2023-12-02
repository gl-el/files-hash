import { InputFile } from '../InputFile/InputFile';
import { HashDisplay } from '../HashDisplay/HashDisplay';
import s from './HashCalc.module.css';
import { useFileHash } from '@/hooks/useFileHash';
import { Alert } from '../Alert/AlertMessage';
import { Box } from '../UI/Box/Box';

export function HashCalc() {
  const { hash, prevHash, fileName, handleFileInput } = useFileHash();

  return (
    <div className={s.container}>
      <Box>
        <InputFile fileName={fileName} onInputChange={handleFileInput} />
      </Box>
      <HashDisplay hash={hash} />
      {prevHash && (
        <Box>
          <Alert prevHash={prevHash} />
        </Box>
      )}
    </div>
  );
}
