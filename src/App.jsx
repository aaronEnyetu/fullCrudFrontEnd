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
import ProtectedRoute from './components/Auth/ProtectedRoute.jsx';
import { ShoppingList } from './components/Lists/ShoppingList.jsx';
import { Lists } from './components/Lists/Lists.jsx';
import ListsProvider from './state/ListsContext.jsx';

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

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route element={<ListsProvider />}>
                <Route path="lists">
                  <Route index element={<Lists />} />
                  <Route path=":id" element={<ShoppingList />} />
                </Route>
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </UserProvider>
    </Router>
  );
}
