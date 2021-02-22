import './WaiterPage.css';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tables from './Tables';

const WaiterPage = () => {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <Switch>
            <Route exact path='/waiter' component={Tables} />
          </Switch>
        </Router>
      </div>
    </Container>
  );
};

export default WaiterPage;
