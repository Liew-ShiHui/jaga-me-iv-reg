import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
          color: "#32325d",
          fontFamily: 'Courier, monospace',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#32325d"
          }
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a"
        }
    }
};

function CardSection() {
    return (
        <label>
            Card Details
            <br/>
            <CardElement id="card-element" options={CARD_ELEMENT_OPTIONS} />
        </label>
    );
};

export default CardSection;