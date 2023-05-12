import { IHomeBox } from '../../interface/IHomeBox';
import { useStyles } from '../../styles/boxStyles';

const HomeBox = ({title, children}: IHomeBox) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={title && classes.header}>
        <h3 className={classes.title}>{title}</h3>
      </div>
      {children}
    </div>
  )
}

export default HomeBox;