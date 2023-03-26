import { FiltrButton } from './Button.styled';

export const Button = ({
 selected = false,
  type = 'button',
  children,
  ...otherProps }) => {
  return <FiltrButton type={type} selected {...otherProps}>{children}</FiltrButton>;
};


      

      