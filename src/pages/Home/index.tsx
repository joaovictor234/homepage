import Anual from "../../components/Anual";
import Header from "../../components/Header";
import Informes from "../../components/Informes";
import { NewsBar } from "../../components/NewsBar";
import Warnings from "../../components/Warnings";
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <Header/>
      <div className={styles.main_content}>
        <div>
          <Warnings/>
          <Informes/>
        </div>
        <NewsBar/>
      </div>
      <Anual/>
    </div>
  )
}

export default Home;