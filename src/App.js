import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import useAuthListener from './hooks/useAuthListener';
import UserContext from './context/UserContext';

import ProtectedRoute from './helpers/protected-route';

const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/sign-up'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Profile = lazy(() => import('./pages/profile'));
const NotFound = lazy(() => import('./pages/not-found'));
const ForgotPassword = lazy(() => import('./pages/forgot-password'));

export default function App() {
  const { user } = useAuthListener();

  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.LOGIN} component={Login} />
            <Route path={ROUTES.FORGOT_PASSWORD} component={ForgotPassword} />
            <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoute user={user} exact path={ROUTES.DASHBOARD}>
              <Dashboard />
            </ProtectedRoute>
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}
