import Anual from "../../components/Anual";
import Header from "../../components/Header";
import Informes from "../../components/Informes";
import { NewsBar } from "../../components/NewsBar";
import Warnings from "../../components/Warnings";
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div>
        <Header />
        <div className={styles.main_content}>
          <div className={styles.content}>
            <div>
              <Warnings />
              <Informes />
            </div>
            <div className={styles.newsbar}>
              <NewsBar />
            </div>
          </div>
        </div>
      </div>
      <Anual />
    </div>
  )
}

export default Home;