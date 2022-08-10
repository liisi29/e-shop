import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import './button.styles.scss';

type ButtonType = 'google' | 'inverted';
const buttonTypes: { [K in ButtonType]: string } = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = (
  props: PropsWithChildren & {
    buttonType: ButtonType;
  } & ButtonHTMLAttributes<unknown>
) => {
  const { children, buttonType, ...rest } = props;
  return (
    <button className={`button-container ${buttonTypes[buttonType]}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
