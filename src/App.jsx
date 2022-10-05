import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Layout from './components/PageLayouts/Layout';
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth.jsx';
import AuthForm from './components/Auth/AuthForm.jsx';
import UserProvider from './state/UserContext.jsx';

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="auth" element={<Auth />}>
            <Route index element={<AuthForm mode="signin" />} />
            <Route
              path="signup"
              element={<AuthForm mode="signup" />}
            />
          </Route>

          <Route element={<Layout />}>
            <Route index element={<Dashboard />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}
