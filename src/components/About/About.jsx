import { Link, Outlet } from 'react-router-dom';
import styles from './About.css';

export default function About() {
  return (
    <div className={styles.About}>
      <h2>About Page</h2>
      <nav className={styles.nav}>
        <Link to="">My Story</Link>
        <Link to="skills">Skills</Link>
        <Link to="mission">Mission</Link>
      </nav>
      <Outlet />
    </div>
  );
}
