# Stripe Integration Setup Guide

## Prerequisites
1. Create a Stripe account at https://stripe.com
2. Get your API keys from the Stripe Dashboard
3. Set up a backend server (Node.js, Python, etc.)

## Frontend Setup

### 1. Install Stripe packages
```bash
npm install @stripe/stripe-js @stripe/react-stripe-js
```

### 2. Environment Variables
Create a `.env.local` file:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
```

### 3. Update CheckoutPage.tsx
Replace the mock checkout with real Stripe Elements:

```typescript
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

// Wrap your checkout form with Elements provider
<Elements stripe={stripePromise} options={options}>
  <CheckoutForm amount={amount} />
</Elements>
```

## Backend Setup

### 1. Create Payment Intent API
```javascript
// /api/create-payment-intent.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { amount } = req.body;
      
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount * 100, // Convert to cents
        currency: 'usd',
        metadata: {
          organization: 'Chipata Girls FC'
        }
      });

      res.status(200).json({
        client_secret: paymentIntent.client_secret
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
```

### 2. Set up Webhooks
```javascript
// /api/webhooks/stripe.js
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const sig = req.headers['stripe-signature'];
  
  try {
    const event = stripe.webhooks.constructEvent(
      req.body, 
      sig, 
      process.env.STRIPE_WEBHOOK_SECRET
    );
    
    switch (event.type) {
      case 'payment_intent.succeeded':
        // Handle successful payment
        console.log('Payment succeeded:', event.data.object);
        // Update your database, send confirmation emails, etc.
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    
    res.json({ received: true });
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
}
```

## Security Best Practices

1. **Never expose secret keys**: Only use publishable keys in frontend code
2. **Validate on backend**: Always verify payments server-side
3. **Use webhooks**: Handle post-payment actions via Stripe webhooks
4. **HTTPS required**: Stripe requires HTTPS in production
5. **Validate webhook signatures**: Verify webhook authenticity

## Testing

### Test Card Numbers
- Success: 4242 4242 4242 4242
- Declined: 4000 0000 0000 0002
- Requires 3D Secure: 4000 0027 6000 3184

### Test Flow
1. Use test API keys (pk_test_... and sk_test_...)
2. Use test card numbers
3. Test webhooks with Stripe CLI: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`

## Going Live

1. Switch to live API keys (pk_live_... and sk_live_...)
2. Update webhook endpoints in Stripe Dashboard
3. Enable required payment methods
4. Set up proper error handling and logging
5. Implement proper customer support flow

## Monthly Donations

For recurring donations, use Stripe Subscriptions:

```javascript
const subscription = await stripe.subscriptions.create({
  customer: customer.id,
  items: [{ price: 'price_monthly_donation' }],
  payment_behavior: 'default_incomplete',
  expand: ['latest_invoice.payment_intent'],
});
```

## Additional Features

- **Customer Portal**: Let donors manage their subscriptions
- **Donor Profiles**: Store customer information for repeat donations
- **Receipt Generation**: Automatic tax receipts via email
- **Reporting**: Track donation metrics and trends
- **Multi-currency**: Support international donations

Need help with implementation? Check Stripe's excellent documentation at https://stripe.com/docs