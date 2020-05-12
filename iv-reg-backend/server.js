const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')

const port = process.env.PORT || 5000
app.use(bodyParser.json())
app.use(cors())

const stripe = require('stripe')('sk_test_Yu1aoCpfMvDBpmo7hp3Uc41c00bxyiSwUJ');

/*
const corsOptions = {
	origin: 'http://localhost:8081',
	optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
*/

const db = require('./app/config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true}');
	console.log('Creating initial entries for service consumable table');
	const ServiceConsumable = db.serviceConsumables;
	// Initialise entries
	const allServiceConsumables = ServiceConsumable.bulkCreate([
        { sku: "IV-013", itemName: "IV Infusomat Space Line", quantityPerDay: 1, price: 8.00 },
        { sku: "IV-012", itemName: "IV Infusion Filter", quantityPerDay: 1, price: 16.00 },
        { sku: "IV-005/IV-007", itemName: "18G Needle", quantityPerDay: 2, price: 0.20 },
        { sku: "ES-005", itemName: "NaCl 0.9% 20ml Solution (saline)", quantityPerDay: 2, price: 0.50 },
        { sku: "ES-002", itemName: "Alcohol Swabs", quantityPerDay: 10, price: 0.20},
        { sku: "IV-003/IV-004", itemName: "10ml Syringe - Luer Lock / Luer Slip", quantityPerDay: 2, price: 0.50 }
    ]);
});

require('./app/route/customer.route.js')(app);
require('./app/route/service-consumable.route.js')(app);

// Create a server
var server = app.listen(port, function() {
    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})

app.get("/", (req, res) => {
  res.send({ message: "We did it!" });
});

// Add endpoint to server that creates a SetupIntent
app.post("/api/create-setup-intent", async (req,res) => {
    // Need to create a Customer object on Stripe when a customer creates an account 
    const customer = await stripe.customers.create({
        name: req.body.firstName,
        email: req.body.email,
        phone: req.body.contactNumber
    });

    // Create a SetupIntent to represents intent to set up a customer’s card for future payments.
    const intent = await stripe.setupIntents.create({
        customer: customer.id,
    });

    res.send({
        clientSecret: intent.client_secret
    });
});