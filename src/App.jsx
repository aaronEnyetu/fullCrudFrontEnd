import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Layout from './components/PageLayouts/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import MyStory from './components/About/MyStory';
import Mission from './components/About/Mission';
import Skills from './components/About/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />}>
            <Route index element={<MyStory />} />
            <Route path="mission" element={<Mission />} />
            <Route path="skills" element={<Skills />} />
          </Route>

          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
