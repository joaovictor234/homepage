import React from 'react'
import { useStyles } from './buttonStyles';

interface IButton {
  children: React.ReactNode
  onClick: () => void;
  disabled?: boolean;
  variant?: "outlined" | "contained" 
}

const Button = ({ children, onClick, disabled, variant = "contained"}: IButton) => {
  const classes = useStyles();

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={variant === "contained" ? classes.button : classes.outlinedButton}>
      {children}
    </button>
  )
}

export default Button;