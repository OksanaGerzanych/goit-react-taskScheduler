import { FiltrButton } from './Button.styled';
//import clsx from "clsx";


export const Button = ({
 selected = false,
  type = 'button',
  children,
  ...otherProps }) => {
  return <FiltrButton type={type}  {...otherProps}>{children}</FiltrButton>;
};


      

      