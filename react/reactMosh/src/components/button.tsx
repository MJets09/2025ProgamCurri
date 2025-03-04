import { ReactNode } from 'react';
import styles from './button.module.css';

interface Props {
  children: ReactNode;
  //Question mark makes it optional, with values, can only accept values below
  color?: 'primary' | 'secondary';
  onClick: () => void;
}

export default function Button({ children, onClick, color = "primary"}: Props) {
  return (
    <>
      <button type="button" className={styles.red} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
