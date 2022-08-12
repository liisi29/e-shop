import './button.scss';

import { PropsWithChildren } from 'react';

type ButtonType = 'google' | 'inverted';
const buttonTypes: { [K in ButtonType]: string } = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

export default function Button({
  onClick,
  children,
  buttonType = 'inverted',
  type,
}: PropsWithChildren & {
  onClick?: any;
  buttonType?: ButtonType;
  type?: 'submit';
}) {
  return (
    <button
      className={`button-container ${buttonTypes[buttonType]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
