import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button } from '@mui/material';
import styles from './header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <h1>Portal</h1>
      </div>
      <div className={styles.action_icons}>
        <LocalPostOfficeIcon />
        <NotificationsIcon />
        <AccountCircleIcon />
        <Button style={{color: '#fff'}}>SAIR</Button>
      </div>
    </div>
  )
}

export default Header