import s from './Box.module.css';

export function Box({ children }: { children: React.ReactNode }) {
  return <div className={s.container}>{children}</div>;
}
