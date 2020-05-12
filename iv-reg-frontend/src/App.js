import React from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js'

// Call loadStripe with publishable key and pass returned Promise to Elements provider
const stripePromise = loadStripe('pk_test_IodD45CdjuwbgM02K66Tq1aU00eyrpvMiK');

function App() {
  return (
    <Elements stripe = {stripePromise} >
      <div className="App">
        <RegistrationForm />
      </div>
    </Elements>
  );
}

export default App;
