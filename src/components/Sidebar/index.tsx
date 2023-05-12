import { useStyles } from "./sidebarStyle";

const Sidebar = () => {
  const classes = useStyles();

  return (
    <div className={classes.sidebar}>
      <img
        src="https://revistacipa.com.br/wp-content/uploads/2021/04/logo-social.png"
        alt="logo"
        height={100}
        className={classes.logo}
      />
      <div className={classes.tools}>
        <p className={classes.toolsText}>Ferramentas</p>
        <ul className={classes.list}>
          <li className={classes.listItems}>
            <i className="fa-sharp fa-solid fa-house"></i>Início
          </li>
          <li className={classes.listItems}>
            <i className="fa-solid fa-user-pen"></i>Usuário
          </li>
          <li className={classes.listItems}>
            <i className="fa-solid fa-circle-info"></i>Sobre
          </li>
          <li className={classes.listItems}>
            <i className="fa-sharp fa-solid fa-gear"></i>Configurações
          </li>
        </ul>

        <p className={classes.toolsText}>Outros</p>

        <ul className={classes.list}>
          <li className={classes.listItems}>
            <i className="fa-solid fa-question"></i>Ajuda
          </li>
          <li className={classes.listItems}>
            <i className="fa-solid fa-magnifying-glass"></i>Pesquisar
          </li>
          <li className={classes.listItems}>
            <i className="fa-solid fa-circle-info"></i>Saiba mais
          </li>
          <li className={classes.listItems}>
            <i className="fa-solid fa-arrow-left"></i>Sair
          </li>
        </ul>

        <div className={classes.chat}>
          <i className="fa-solid fa-headset"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
