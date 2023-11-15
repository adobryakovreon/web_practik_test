import React from 'react';
import classes from './input.module.scss';
import cn from 'classnames'

type InputProps = {
  placeholder: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({placeholder, disabled, error, errorMessage, value, onChange}: InputProps): JSX.Element => {
  return (
    <label className={cn(classes["input__label"], {
      [classes["input__label_disabled"]]: disabled,
      [classes["input__label_error"]]: !!error, 
    })}>
      <input disabled={disabled} value={value} onChange={onChange} className={classes["input__input"]} placeholder=" "/>
      <span className={classes["input__span"]}>{placeholder}</span>
      {error && <span className={classes['input__error']}>{errorMessage}</span>}
    </label>
  );
};
