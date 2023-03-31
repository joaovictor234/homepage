import styles from './sidebar.module.css'

export const Sidebar = () => {

  return (
    <div className={styles.sidebar}>
      <img
        src="https://revistacipa.com.br/wp-content/uploads/2021/04/logo-social.png" alt="logo"
        className={styles.logo}
        height={100} />
      <div className={styles.tools}>
        <p>Ferramentas</p>
        <ul>
          <li>
            <i className="fa-sharp fa-solid fa-house"></i>Início
          </li>
          <li>
            <i className="fa-solid fa-user-pen"></i>Usuário
          </li>
          <li>
            <i className="fa-solid fa-circle-info"></i>Sobre
          </li>
          <li>
            <i className="fa-sharp fa-solid fa-gear"></i>Configurações
          </li>
        </ul>

        <p>Outros</p>

        <ul>
          <li>
            <i className="fa-solid fa-question"></i>Ajuda
          </li>
          <li>
          <i className="fa-solid fa-magnifying-glass"></i>Pesquisar
          </li>
          <li>
          <i className="fa-solid fa-circle-info"></i>Saiba mais
          </li>
          <li>
          <i className="fa-solid fa-arrow-left"></i>Sair
          </li>
        </ul>

        <div className={styles.chat}><i className="fa-solid fa-headset"></i></div>
      </div>
    </div>
  )
}
