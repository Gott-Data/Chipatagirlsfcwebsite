import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useState } from 'react';
import { Heart, DollarSign, Users, BookOpen, Trophy, Target, Shield, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface DonatePageProps {
  onPageChange: (page: string, data?: any) => void;
}

export default function DonatePage({ onPageChange }: DonatePageProps) {
  const [customAmount, setCustomAmount] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');

  const donationTiers = [
    {
      amount: '25',
      icon: Target,
      impact: 'Buys a set of training bibs for the team',
      description: 'Help our girls train with proper equipment and team identity.'
    },
    {
      amount: '50',
      icon: Trophy,
      impact: 'Covers transport for an away match',
      description: 'Give girls the chance to compete beyond their hometown.'
    },
    {
      amount: '100',
      icon: BookOpen,
      impact: 'Pays a term\'s school fees for one player',
      description: 'Keep a girl in school and on track for graduation.'
    },
    {
      amount: '250',
      icon: Users,
      impact: 'Fully equips an entire squad for the season',
      description: 'Provide uniforms, boots, and gear for the whole team.'
    },
    {
      amount: '500',
      icon: Heart,
      impact: 'Supports our life skills programs for a full year',
      description: 'Fund comprehensive mentoring and leadership development.'
    }
  ];

  const urgencyPoints = [
    'We\'ve just returned to the Zambia Super League — a huge opportunity to inspire more girls',
    'Success brings bigger challenges: more travel, more equipment, more support needed',
    'More players balancing sport with school require additional educational support',
    'Without donor support, these opportunities could slip away'
  ];

  const donationImpacts = [
    'More girls on the field and off the streets',
    'More teenage mothers back in school',
    'More future leaders in Eastern Province and beyond'
  ];

  const handleDonateClick = (amount: string) => {
    onPageChange('checkout', { amount });
  };

  const handleCustomDonate = () => {
    if (customAmount && parseFloat(customAmount) > 0) {
      handleDonateClick(customAmount);
    }
  };

  return (
    <div className="min-h-screen bg-off-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <section className="relative mb-20">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center bg-teal text-white">
                <h1 className="font-montserrat font-bold text-4xl lg:text-5xl mb-6">Be Part of Her Story</h1>
                <p className="font-lato text-xl mb-8">
                  When you give to Chipata Girls FC, you're not just donating money. You're buying football boots for a girl 
                  who's been playing barefoot. You're paying school fees for a teenage mother who thought her education was over. 
                  You're funding a bus ride to the match where our girls prove they belong among Zambia's best.
                </p>
                <p className="font-lato text-lg">
                  Every kwacha, every dollar, every contribution writes a new chapter in a girl's story.
                </p>
              </div>
              <div>
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1501663888157-d13d2b51d954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Chipata Girls FC celebrating"
                  className="w-full h-80 lg:h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Quick Donate Section */}
        <section className="mb-20">
          <Card className="bg-warm-orange text-white border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="font-montserrat font-bold text-3xl mb-6">Donate Now — Every Dollar Counts</h2>
              <p className="font-lato text-lg mb-8 max-w-2xl mx-auto">
                Choose an amount below or enter a custom donation. Your support makes an immediate impact.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
                {donationTiers.map((tier, index) => (
                  <Button 
                    key={index}
                    onClick={() => handleDonateClick(tier.amount)}
                    className="bg-white text-warm-orange hover:bg-gray-100 font-montserrat font-medium text-lg py-6 flex flex-col"
                  >
                    <span className="text-2xl font-bold mb-1">${tier.amount}</span>
                    <span className="text-xs opacity-80">Donate</span>
                  </Button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <div className="flex-1">
                    <Input 
                      type="number"
                      placeholder="Enter custom amount"
                      value={customAmount}
                      onChange={(e) => setCustomAmount(e.target.value)}
                      className="bg-white text-gray-800 placeholder-gray-500"
                      min="1"
                    />
                  </div>
                  <Button 
                    onClick={handleCustomDonate}
                    disabled={!customAmount || parseFloat(customAmount) <= 0}
                    className="bg-teal hover:bg-teal/90 text-white font-montserrat font-medium px-8"
                  >
                    Donate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Power of Your Gift */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">The Power of Your Gift</h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-6">
            {donationTiers.map((tier, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={() => handleDonateClick(tier.amount)}>
                <CardHeader>
                  <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <tier.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-2xl text-teal">${tier.amount}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-montserrat font-medium text-lg text-gray-800 mb-3">{tier.impact}</p>
                  <p className="font-lato text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDonateClick(tier.amount);
                    }}
                    className="w-full bg-teal hover:bg-teal/90 text-white font-montserrat font-medium"
                  >
                    Donate ${tier.amount}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Give Now */}
        <section className="mb-20">
          <Card className="bg-light-gray border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Why Give Now?</h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-4 mb-8">
                  {urgencyPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                      <p className="font-lato text-lg text-gray-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Her Future Is Waiting */}
        <section className="mb-20">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Her Future Is Waiting</h2>
                  <blockquote className="border-l-4 border-teal pl-4 py-2 mb-6">
                    <p className="font-lato text-xl italic text-gray-600 mb-2">
                      "Football taught me I can do hard things. Donors taught me I matter."
                    </p>
                    <p className="font-montserrat font-medium text-teal">— Ruth, Team Captain</p>
                  </blockquote>
                  
                  <h3 className="font-montserrat font-medium text-2xl text-gray-800 mb-6">Your gift means:</h3>
                  <div className="space-y-4 mb-8">
                    {donationImpacts.map((impact, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-teal rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Heart className="w-3 h-3 text-white" />
                        </div>
                        <p className="font-lato text-lg text-gray-700">{impact}</p>
                      </div>
                    ))}
                  </div>

                  <Button 
                    onClick={() => handleDonateClick('100')}
                    className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-lg px-8 py-4"
                  >
                    Donate Now — Change a Life Today
                  </Button>
                </div>
                <div>
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1551241681-2aae145af5df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fDE3NTUwMDY0Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Student with bright future"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Alternative Support Options */}
        <section className="mb-20">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="font-montserrat font-bold text-3xl text-gray-800 mb-6">Other Ways to Support</h2>
                <p className="font-lato text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                  Your support turns a football dream into a life-changing opportunity.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <h3 className="font-montserrat font-medium text-2xl text-center text-gray-800 mb-8">Your donation helps us:</h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                      <p className="font-lato text-gray-700">Provide safe training spaces and equipment</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <BookOpen className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                      <p className="font-lato text-gray-700">Fund school fees for girls returning to education</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Trophy className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                      <p className="font-lato text-gray-700">Support travel to league matches and tournaments</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-6 h-6 text-teal flex-shrink-0 mt-1" />
                      <p className="font-lato text-gray-700">Expand life skills and mentoring programs</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button 
                  onClick={() => handleDonateClick('50')}
                  className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-xl px-10 py-4"
                >
                  Give Today — Change a Life
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Transparency */}
        <section>
          <Card className="bg-light-gray border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-teal mr-2" />
                <h3 className="font-montserrat font-medium text-lg">100% Transparency</h3>
              </div>
              <p className="font-lato text-gray-600">
                All donations are used directly to support our programs, players, and community outreach. 
                We provide regular updates on how your contribution makes a difference.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}