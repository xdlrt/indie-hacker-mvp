import cn from 'classnames';
import React, { ChangeEvent, InputHTMLAttributes } from 'react';

import s from './Input.module.css';

interface Props extends Omit<InputHTMLAttributes<any>, 'onChange'> {
  className?: string;
  onChange: (value: string) => void;
}
const Input = (props: Props) => {
  const { className, onChange, ...rest } = props;

  const rootClassName = cn(s.root, {}, className);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
    return null;
  };

  return (
    <label>
      <input
        className={rootClassName}
        onChange={handleOnChange}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck="false"
        {...rest}
      />
    </label>
  );
};

export default Input;
