import { PropsWithChildren } from "react";
import cn from 'classnames';
import classes from './button.module.scss'

type ButtonProps = {
  disabled?: boolean;
  uppercase?: boolean;
  main?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void 
};

export const Button = ({ onClick, className, disabled=false, uppercase=false, main=false, children }: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(classes['button'], {
        [classes['button_disabled']]: disabled,
        [classes['button_uppercase']]: uppercase,
        [classes['button_main']]: main,
      },
      className)}
    >
      {children}
    </button>
  );
};

