import { FC } from 'react';
import style from '../input/Input.module.scss';

interface childrenProps {
  children?: React.ReactChild | React.ReactNode;
  placeholder?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<childrenProps> = ({ children, onChange, ...props }) => {
  return <input {...props} required className={style.input} />;
};

export default Input;
