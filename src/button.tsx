import React from 'react';
type Props = {
  disabled: boolean;
  children: React.ReactNode;
};
export const Button: React.FC<Props> = ({ disabled, children }) => {
  return <button disabled={disabled}>{children}</button>;
};
