import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Badge } from './ui/badge';
import { ArrowLeft, CreditCard, Shield, Heart, Lock } from 'lucide-react';

interface CheckoutPageProps {
  amount: string;
  onPageChange: (page: string) => void;
}

export default function CheckoutPage({ amount, onPageChange }: CheckoutPageProps) {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    country: '',
    donationType: 'one-time'
  });

  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      // Redirect to thank you page
      onPageChange('thank-you');
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const getDonationImpact = (amount: string) => {
    switch (amount) {
      case '25':
        return 'Buys a set of training bibs for the team';
      case '50':
        return 'Covers transport for an away match';
      case '100':
        return 'Pays a term\'s school fees for one player';
      case '250':
        return 'Fully equips an entire squad for the season';
      case '500':
        return 'Supports our life skills programs for a full year';
      default:
        return 'Makes a meaningful difference in a girl\'s life';
    }
  };

  return (
    <div className="min-h-screen bg-off-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Button 
            variant="ghost" 
            onClick={() => onPageChange('donate')}
            className="mr-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Donate
          </Button>
          <h1 className="font-montserrat font-bold text-3xl text-gray-800">Complete Your Donation</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-2xl flex items-center">
                  <CreditCard className="w-6 h-6 mr-3 text-teal" />
                  Payment Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Information */}
                  <div>
                    <h3 className="font-montserrat font-medium text-lg mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="email" className="font-lato font-medium">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="mt-2"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="font-lato font-medium">First Name</Label>
                          <Input
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="John"
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="font-lato font-medium">Last Name</Label>
                          <Input
                            id="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Doe"
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Donation Type */}
                  <div>
                    <h3 className="font-montserrat font-medium text-lg mb-4">Donation Type</h3>
                    <div className="flex space-x-4">
                      <Button
                        type="button"
                        variant={formData.donationType === 'one-time' ? 'default' : 'outline'}
                        onClick={() => handleInputChange('donationType', 'one-time')}
                        className={formData.donationType === 'one-time' ? 'bg-teal hover:bg-teal/90' : ''}
                      >
                        One-time
                      </Button>
                      <Button
                        type="button"
                        variant={formData.donationType === 'monthly' ? 'default' : 'outline'}
                        onClick={() => handleInputChange('donationType', 'monthly')}
                        className={formData.donationType === 'monthly' ? 'bg-teal hover:bg-teal/90' : ''}
                      >
                        Monthly
                      </Button>
                    </div>
                  </div>

                  <Separator />

                  {/* Payment Details */}
                  <div>
                    <h3 className="font-montserrat font-medium text-lg mb-4">Payment Details</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber" className="font-lato font-medium">Card Number</Label>
                        <Input
                          id="cardNumber"
                          type="text"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="mt-2"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate" className="font-lato font-medium">Expiry Date</Label>
                          <Input
                            id="expiryDate"
                            type="text"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            placeholder="MM/YY"
                            required
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvc" className="font-lato font-medium">CVC</Label>
                          <Input
                            id="cvc"
                            type="text"
                            value={formData.cvc}
                            onChange={(e) => handleInputChange('cvc', e.target.value)}
                            placeholder="123"
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="country" className="font-lato font-medium">Country</Label>
                        <Select onValueChange={(value) => handleInputChange('country', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="zm">Zambia</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Security Notice */}
                  <div className="bg-light-gray p-4 rounded-lg flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-lato text-sm text-gray-700">
                        <strong>Secure Payment:</strong> Your payment information is encrypted and secure. 
                        We use Stripe for processing donations, which meets the highest security standards.
                      </p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-lg py-4"
                  >
                    {isProcessing ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Processing Donation...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Lock className="w-5 h-5 mr-2" />
                        Donate ${amount} Now
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card className="border-none shadow-lg sticky top-8">
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-xl flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-warm-orange" />
                  Your Donation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-montserrat font-bold text-teal mb-2">${amount}</div>
                  {formData.donationType === 'monthly' && (
                    <Badge className="bg-warm-orange text-white">Monthly</Badge>
                  )}
                </div>

                <Separator />

                <div>
                  <h4 className="font-montserrat font-medium text-lg mb-3">Your Impact</h4>
                  <p className="font-lato text-gray-700">{getDonationImpact(amount)}</p>
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-lato text-gray-600">Donation Amount</span>
                    <span className="font-montserrat font-medium">${amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-lato text-gray-600">Processing Fee</span>
                    <span className="font-montserrat font-medium">$0.00</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg">
                    <span className="font-montserrat font-medium">Total</span>
                    <span className="font-montserrat font-bold text-teal">${amount}</span>
                  </div>
                </div>

                <div className="bg-teal/10 p-4 rounded-lg">
                  <p className="font-lato text-sm text-gray-700 text-center">
                    100% of your donation goes directly to supporting our girls and programs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}