import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Loader2, CreditCard, Shield, AlertCircle } from 'lucide-react';

// This component shows how you would implement real Stripe integration
// You'll need to install: npm install @stripe/stripe-js @stripe/react-stripe-js

interface StripeCheckoutProps {
  amount: string;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function StripeCheckout({ amount, onSuccess, onCancel }: StripeCheckoutProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // This is what the real implementation would look like:
  const handleRealStripePayment = async () => {
    setIsLoading(true);
    setError('');

    try {
      // Step 1: Create payment intent on your backend
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: parseFloat(amount) * 100, // Stripe uses cents
          currency: 'usd',
          metadata: {
            organization: 'Chipata Girls FC',
            purpose: 'Donation'
          }
        }),
      });

      const { client_secret } = await response.json();

      // Step 2: Use Stripe Elements to confirm payment
      // const { error } = await stripe.confirmPayment({
      //   elements,
      //   clientSecret: client_secret,
      //   confirmParams: {
      //     return_url: `${window.location.origin}/thank-you`,
      //   },
      // });

      // if (error) {
      //   setError(error.message);
      // } else {
      //   onSuccess();
      // }

      // For demo purposes, simulate success after 2 seconds
      setTimeout(() => {
        setIsLoading(false);
        onSuccess();
      }, 2000);

    } catch (err) {
      setError('Payment failed. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <Card className="border-none shadow-lg max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <CreditCard className="w-5 h-5 mr-2 text-teal" />
          Secure Payment
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Payment Summary */}
        <div className="bg-light-gray p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="font-lato text-gray-600">Donation Amount:</span>
            <span className="font-montserrat font-bold text-2xl text-teal">${amount}</span>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <Alert className="border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription className="font-lato text-red-800">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Security Notice */}
        <div className="bg-teal/10 p-3 rounded-lg flex items-start space-x-2">
          <Shield className="w-4 h-4 text-teal mt-0.5 flex-shrink-0" />
          <p className="font-lato text-sm text-gray-700">
            Your payment is secured by Stripe's industry-leading encryption.
          </p>
        </div>

        {/* Demo Notice */}
        <Alert className="border-warm-orange/20 bg-warm-orange/10">
          <AlertCircle className="h-4 w-4 text-warm-orange" />
          <AlertDescription className="font-lato text-gray-700">
            <strong>Demo Mode:</strong> This simulates a real Stripe payment. No actual charges will be made.
          </AlertDescription>
        </Alert>

        {/* Payment Button */}
        <Button 
          onClick={handleRealStripePayment}
          disabled={isLoading}
          className="w-full bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium py-3"
        >
          {isLoading ? (
            <div className="flex items-center">
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Processing Payment...
            </div>
          ) : (
            `Donate $${amount} Now`
          )}
        </Button>

        <Button 
          onClick={onCancel}
          variant="outline"
          className="w-full"
          disabled={isLoading}
        >
          Cancel
        </Button>
      </CardContent>
    </Card>
  );
}