import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircleOutlined";
import { useStyles } from "./headerStyle";
import Button from "../EditableBox/Button";
import { FormControlLabel, Switch } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface IHeader {
  admin: boolean;
  setAdmin: Dispatch<SetStateAction<boolean>>;
}

const Header = ({ admin, setAdmin }: IHeader) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <h1>Portal</h1>
        <FormControlLabel
          control={<Switch checked={admin} onChange={() => setAdmin(!admin)} />}
          label={admin ? "Administrador" : "Usuário"}
        />
      </div>
      <div className={classes.actionIcons}>
        <LocalPostOfficeIcon />
        <NotificationsIcon />
        <AccountCircleIcon />
        <Button variant="outlined" onClick={() => {}}>
          Sair
        </Button>
      </div>
    </div>
  );
};

export default Header;
