import s from './Highlight.module.css';

export function Highlight({ children }: { children: React.ReactNode }) {
  return <span className={s.highlight}>{children}</span>;
}
