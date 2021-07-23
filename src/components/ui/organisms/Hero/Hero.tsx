import styles from './Hero.module.scss';

export interface HeroProps {
  codename: string;
}

function Hero({ codename }: HeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h2>{codename}</h2>
      </div>
    </div>
  );
}

export default Hero;
