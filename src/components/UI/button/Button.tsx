import { FC } from 'react';
import style from '../button/Button.module.scss';

interface childrenProps {
  children?: React.ReactChild | React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: (e: unknown) => void;
}

const Button: FC<childrenProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={style.btn}>
      {children}
    </button>
  );
};

export default Button;
