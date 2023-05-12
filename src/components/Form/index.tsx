import { ReactNode } from 'react'
import { useStyles } from './formStyle';

interface IForm {
  title: string;
  children: ReactNode;
}

const Form = ({ title, children }: IForm) => {
  const classes = useStyles();

  return (
    <div className={classes.form}>
      <h3 className={classes.title}>{title}</h3>
      {children}
    </div>
  )
}

export default Form;