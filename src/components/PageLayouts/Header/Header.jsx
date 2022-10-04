import Navigation from '../Navigation/Navigation';
import styles from './Header.css';

export default function Header() {
  return (
    <header className={styles.Header}>
      <Navigation />
    </header>
  );
}
