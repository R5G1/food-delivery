import styles from '../home/Index.module.scss';
import HomeContentCard from './homeComponents/HomeContentCard';

function Home() {
  return (
    <div className={styles.conteiner}>
      <div className={styles.home}>
        <div>
          <div className={styles.homeContentConteiner}>
            <HomeContentCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
