import React, { useState, useEffect } from 'react';
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import axios from '../axios';
import Button from '@material-ui/core/Button';

import CardSection from './CardSection';

export default function CardSetupForm(props) {
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const customer = props.customer;

    // create SetupIntent as soon as this page loads
    useEffect(() => {
        console.log('New customer created: ');
        console.log(customer);
        axios.post("/create-setup-intent", customer)
        .then(res => {         
            setClientSecret(res.data.clientSecret);
        });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // check if Stripe.js has loaded yet, before enabling form submission
        if (!stripe || !elements) {
            return;
        }       

        const result = await stripe.confirmCardSetup(clientSecret , {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    //name: customer.firstName,
                    email: customer.email
                },
            }
        });

        if (result.error) {
            setError('Unable to save credit card' + result.error.message);
            setProcessing(false);
        } else {
            // successful in saving card details
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };

    return (
        <form id="card-form" onSubmit={handleSubmit} >
            <CardSection/>
            <Button style={{ margin: "5px" }}
                        colour="default"
                        variant="contained"
                        type="submit"
                        disabled={!stripe}>
                        Save Card            
            <br />
            <span>
            { processing && (<div className="spinner" id="spinner"></div>) }
            </span>
            </Button>
            {/* Show any error that happens when saving card */}
            { error && (
                <div className="card-error" role="alert">
                    {error}
                </div>
            )}

            {/* Show a success message upon completion */}
            { succeeded && 
                <p>Credit Card saved successfully!</p>
            }
        </form>
    );
}