// This file shows the configuration you'd need for real Stripe integration

// Frontend Stripe configuration
// You'll need to install: npm install @stripe/stripe-js @stripe/react-stripe-js

/*
import { loadStripe } from '@stripe/stripe-js';

// Make sure to use your publishable key (starts with pk_)
// Never put your secret key (starts with sk_) in frontend code!
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default stripePromise;
*/

// Backend API route example (if using Next.js)
// File: /pages/api/create-payment-intent.js or /app/api/create-payment-intent/route.ts

/*
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: Request) {
  try {
    const { amount, currency = 'usd', metadata } = await request.json();

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      metadata,
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return Response.json({
      client_secret: paymentIntent.client_secret,
    });
  } catch (err) {
    return Response.json(
      { error: err.message },
      { status: 400 }
    );
  }
}
*/

// Environment variables you'll need:
// STRIPE_SECRET_KEY=sk_test_... (or sk_live_... for production)
// NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_... (or pk_live_... for production)

export const STRIPE_CONFIG = {
  // Demo configuration
  publishableKey: 'pk_test_YOUR_PUBLISHABLE_KEY_HERE',
  
  // Supported payment methods
  paymentMethods: [
    'card',
    'google_pay', 
    'apple_pay',
    'link'
  ],
  
  // Currency settings
  currency: 'usd',
  
  // Appearance customization
  appearance: {
    theme: 'stripe' as const,
    variables: {
      colorPrimary: '#008080', // Teal color from your brand
      colorBackground: '#ffffff',
      colorText: '#333333',
      colorDanger: '#df1b41',
      fontFamily: 'Lato, system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '8px',
    },
  },
};

// Webhook configuration for handling successful payments
export const WEBHOOK_CONFIG = {
  // Events to listen for
  events: [
    'payment_intent.succeeded',
    'payment_intent.payment_failed',
    'customer.subscription.created',
    'invoice.payment_succeeded'
  ],
  
  // Endpoint: /api/webhooks/stripe
  // You'll need to verify webhook signatures for security
};