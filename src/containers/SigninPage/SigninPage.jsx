import './SigninPage.css';
import { useRef } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './SignUp';

const SigninPage = () => {
  return (
    <div>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}
      >
        <div className='w-100' style={{ maxWidth: '400px' }}>
          <SignUp />
        </div>
      </Container>
    </div>
  );
};

export default SigninPage;
