// server/Routers/PaymentIntentroute.js

const express = require('express');
const router = express.Router();
require('dotenv').config(); // Load environment variables from .env

// Initialize Stripe with secret key from environment
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("STRIPE_SECRET_KEY is not defined in .env file.");
}

const stripe = require('stripe')(stripeSecretKey);

// POST /api/stripe/pay
router.post('/pay', async (req, res) => {
  const { amount, payment_method } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method,
      confirm: true,
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never' // prevents return_url requirement
      }
    });

    res.json({ success: true, paymentIntent });
  } catch (error) {
    console.error('Payment failed:', error.message);
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;
