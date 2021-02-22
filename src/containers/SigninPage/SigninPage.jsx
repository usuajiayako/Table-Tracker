import React from 'react';
import { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import './SigninPage.scss';
import { useAuth } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

function SigninPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/admin');
    } catch {
      setError('Failed to sign in');
    }

    setLoading(false);
  }

  return (
    <div className="login-container">
      <Card>
        <Card.Body>
          <h2 className="title">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button type="submit" disabled={loading}>
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SigninPage;
