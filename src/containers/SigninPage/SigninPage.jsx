import './SigninPage.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import Login from './Login';
import Welcome from './Welcome';
import { AuthProvider } from '../../context/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const SigninPage = () => {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/signup' component={SignUp} />
              <PrivateRoute path='/welcome' component={Welcome} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default SigninPage;
