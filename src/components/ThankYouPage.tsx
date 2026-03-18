import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Heart, CheckCircle, Share2, Mail, Facebook, Twitter, Download, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ThankYouPageProps {
  onPageChange: (page: string) => void;
}

export default function ThankYouPage({ onPageChange }: ThankYouPageProps) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Hide confetti effect after 3 seconds
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Mock donation data - in real app this would come from URL params or state
  const donationData = {
    amount: '100',
    donationType: 'one-time',
    donorName: 'John Doe',
    email: 'john.doe@example.com',
    transactionId: 'CGFC-' + Math.random().toString(36).substring(2, 8).toUpperCase(),
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  };

  const shareMessage = `I just donated $${donationData.amount} to Chipata Girls FC to help empower girls through football, education, and life skills in Zambia. Join me in supporting their amazing work! #ChipataGirlsFC`;

  const nextSteps = [
    {
      icon: Mail,
      title: 'Check Your Email',
      description: 'You\'ll receive a donation receipt and tax information shortly.',
      action: 'Expected within 5 minutes'
    },
    {
      icon: Heart,
      title: 'Follow Our Journey',
      description: 'Stay updated on how your donation is making a difference.',
      action: 'Follow on Social Media',
      onClick: () => onPageChange('contact')
    },
    {
      icon: Share2,
      title: 'Spread the Word',
      description: 'Help us reach more supporters by sharing our mission.',
      action: 'Share This Cause',
      onClick: () => {
        if (navigator.share) {
          navigator.share({
            title: 'Support Chipata Girls FC',
            text: shareMessage,
            url: window.location.origin
          });
        }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-off-white py-8 relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="confetti-animation">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-warm-orange rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h1 className="font-montserrat font-bold text-4xl lg:text-5xl text-gray-800 mb-4">
            Thank You for Your Generosity!
          </h1>
          <p className="font-lato text-xl text-gray-600 max-w-2xl mx-auto">
            Your donation of ${donationData.amount} will make a real difference in the lives of our girls. 
            You're now part of our mission to empower young women through football and education.
          </p>
        </div>

        {/* Donation Summary */}
        <Card className="border-none shadow-lg mb-12">
          <CardHeader className="bg-teal text-white">
            <CardTitle className="font-montserrat font-bold text-2xl text-center">
              Donation Confirmation
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-lato text-gray-600">Transaction ID</span>
                  <span className="font-montserrat font-medium">{donationData.transactionId}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-lato text-gray-600">Date</span>
                  <span className="font-montserrat font-medium">{donationData.date}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="font-lato text-gray-600">Donation Type</span>
                  <Badge className={donationData.donationType === 'monthly' ? 'bg-warm-orange' : 'bg-teal'}>
                    {donationData.donationType === 'monthly' ? 'Monthly' : 'One-time'}
                  </Badge>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-lato text-gray-600">Amount</span>
                  <span className="font-montserrat font-bold text-2xl text-teal">${donationData.amount}</span>
                </div>
              </div>
              
              <div className="bg-light-gray p-6 rounded-lg">
                <h3 className="font-montserrat font-medium text-lg mb-3">Your Impact</h3>
                <p className="font-lato text-gray-700 mb-4">
                  Your ${donationData.amount} donation pays for a full term's school fees for one player, 
                  keeping her on track for graduation and opening doors to higher education.
                </p>
                <div className="flex items-center text-warm-orange">
                  <Heart className="w-5 h-5 mr-2" />
                  <span className="font-lato font-medium">One girl's education secured</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What Happens Next */}
        <section className="mb-12">
          <h2 className="font-montserrat font-bold text-3xl text-center text-gray-800 mb-8">
            What Happens Next
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {nextSteps.map((step, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-medium text-xl mb-3">{step.title}</h3>
                  <p className="font-lato text-gray-600 mb-4">{step.description}</p>
                  {step.onClick ? (
                    <Button 
                      onClick={step.onClick}
                      variant="outline" 
                      className="border-teal text-teal hover:bg-teal hover:text-white"
                    >
                      {step.action}
                    </Button>
                  ) : (
                    <Badge className="bg-warm-orange text-white">{step.action}</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Share Section */}
        <Card className="bg-warm-orange text-white border-none shadow-lg mb-12">
          <CardContent className="p-8 text-center">
            <h2 className="font-montserrat font-bold text-3xl mb-4">Help Us Reach More Supporters</h2>
            <p className="font-lato text-lg mb-8 max-w-2xl mx-auto">
              Your voice can inspire others to join our mission. Share your support and help us empower more girls in Chipata.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-montserrat font-medium">
                <Facebook className="w-5 h-5 mr-2" />
                Share on Facebook
              </Button>
              <Button className="bg-blue-400 hover:bg-blue-500 text-white font-montserrat font-medium">
                <Twitter className="w-5 h-5 mr-2" />
                Share on Twitter
              </Button>
              <Button className="bg-white text-warm-orange hover:bg-gray-100 font-montserrat font-medium">
                <Share2 className="w-5 h-5 mr-2" />
                Share Link
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Continue Exploring */}
        <div className="text-center">
          <h2 className="font-montserrat font-bold text-2xl text-gray-800 mb-6">Continue Exploring</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => onPageChange('team')}
              className="bg-teal hover:bg-teal/90 text-white font-montserrat font-medium"
            >
              Follow Our Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              onClick={() => onPageChange('alumni')}
              variant="outline"
              className="border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white font-montserrat font-medium"
            >
              Alumni Success Stories
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button 
              onClick={() => onPageChange('home')}
              variant="outline"
              className="border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white font-montserrat font-medium"
            >
              Back to Home
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Receipt Download */}
        <div className="mt-12 text-center">
          <Card className="border-none shadow-lg bg-light-gray">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Download className="w-6 h-6 text-teal mr-2" />
                <h3 className="font-montserrat font-medium text-lg">Need a Receipt?</h3>
              </div>
              <p className="font-lato text-gray-600 mb-4">
                Download your donation receipt for tax purposes. You'll also receive a copy via email.
              </p>
              <Button 
                variant="outline" 
                className="border-teal text-teal hover:bg-teal hover:text-white"
              >
                Download Receipt (PDF)
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}