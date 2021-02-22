import './SigninPage.css';
import { useRef } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';
import { AuthProvider } from '../../context/AuthContext';

const SigninPage = () => {
  return (
    <AuthProvider>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  );
};

export default SigninPage;
