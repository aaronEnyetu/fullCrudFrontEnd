import styles from './Layout.css';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
