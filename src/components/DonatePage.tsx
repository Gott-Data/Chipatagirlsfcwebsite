import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Alert, AlertDescription } from './ui/alert';
import {
  Heart, BookOpen, Trophy, Users, Target, Shield, AlertCircle, ExternalLink,
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { getPaymentLink, isStripeConfigured } from '../lib/stripe-config';

interface DonatePageProps {
  onPageChange: (page: string) => void;
}

const tiers = [
  { amount: '25', icon: Target, impact: 'Training bibs for the squad' },
  { amount: '50', icon: Trophy, impact: 'Transport to an away match' },
  { amount: '100', icon: BookOpen, impact: 'One player’s school fees for a term' },
  { amount: '250', icon: Users, impact: 'Full season kit for the whole team' },
  { amount: '500', icon: Heart, impact: 'A year of life-skills programming' },
];

export default function DonatePage({ onPageChange }: DonatePageProps) {
  const [customAmount, setCustomAmount] = useState('');
  const stripeReady = isStripeConfigured();

  const openPaymentLink = (amount?: string) => {
    const link = getPaymentLink(amount);
    if (!link) return;
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleCustom = () => {
    const n = parseFloat(customAmount);
    if (!Number.isFinite(n) || n <= 0) return;
    openPaymentLink();
  };

  return (
    <div className="bg-off-white">
      {/* Hero */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-montserrat font-bold text-5xl text-gray-900 mb-5">
              Be part of her story.
            </h1>
            <p className="font-lato text-lg text-gray-700 mb-5">
              When you give to Chipata Girls FC, you’re buying boots for a girl playing barefoot,
              paying school fees for a teenage mother who thought her education was over, and
              funding the bus that gets our squad to the match.
            </p>
            <p className="font-lato text-lg text-gray-700">
              Every dollar — every kwacha — writes a new chapter in a girl’s life.
            </p>
          </div>
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?auto=format&fit=crop&w=1200&q=80"
              alt="Young footballers celebrating"
              className="w-full h-96 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Donate panel */}
      <section className="px-4 pb-16 max-w-7xl mx-auto">
        <Card className="border-none shadow-lg">
          <CardContent className="p-8 md:p-12">
            {!stripeReady && (
              <Alert className="mb-8 border-warm-orange/30 bg-warm-orange/10">
                <AlertCircle className="h-4 w-4 text-warm-orange" />
                <AlertDescription className="font-lato text-gray-800">
                  <strong>Stripe not yet configured.</strong> Add
                  <code className="mx-1 px-1.5 py-0.5 bg-white rounded border">VITE_STRIPE_PAYMENT_LINK</code>
                  (and optional per-tier links) to your <code>.env</code> file to enable checkout.
                  See <code>.env.example</code>.
                </AlertDescription>
              </Alert>
            )}

            <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-2">Choose an amount</h2>
            <p className="font-lato text-gray-600 mb-8">
              You’ll be redirected to Stripe’s secure hosted checkout. One-time or monthly — you decide there.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
              {tiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => openPaymentLink(tier.amount)}
                  disabled={!stripeReady}
                  className="group text-left rounded-xl border-2 border-gray-200 hover:border-warm-orange hover:shadow-md p-5 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                >
                  <tier.icon className="w-6 h-6 text-teal mb-3" />
                  <div className="font-montserrat font-bold text-3xl text-gray-900">${tier.amount}</div>
                  <p className="font-lato text-xs text-muted-foreground mt-2 leading-snug">{tier.impact}</p>
                </button>
              ))}
            </div>

            <div className="max-w-md">
              <label className="font-montserrat font-medium text-gray-900 block mb-2">Or give another amount</label>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <Input
                    type="number"
                    inputMode="decimal"
                    min="1"
                    placeholder="Amount in USD"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-7"
                  />
                </div>
                <Button
                  onClick={handleCustom}
                  disabled={!stripeReady || !customAmount || parseFloat(customAmount) <= 0}
                  className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium"
                >
                  Donate
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            <div className="mt-10 flex items-start gap-3 bg-teal/5 p-4 rounded-lg">
              <Shield className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
              <p className="font-lato text-sm text-gray-700">
                Payments are handled by <strong>Stripe</strong>. We never see or store your card details.
                100% of your donation funds our programmes, players, and community outreach.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Why give now */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 text-center mb-12">
            Why give now
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="font-lato text-lg text-gray-700 mb-5">
                We just earned promotion back to the Zambia Super League. It’s a huge opportunity
                to inspire more girls, reach more communities — and a more expensive season to run.
              </p>
              <p className="font-lato text-lg text-gray-700">
                More travel. More equipment. More school-fee support for players juggling league
                football with their studies. Without donors, these opportunities slip away.
              </p>
            </div>
            <blockquote className="bg-off-white rounded-xl p-8 border-l-4 border-warm-orange">
              <p className="font-lato italic text-xl text-gray-800 mb-4">
                “Football taught me I can do hard things. Donors taught me I matter.”
              </p>
              <p className="font-montserrat font-medium text-teal">— Ruth, Team Captain</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Alt support */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">Other ways to help</h2>
          <p className="font-lato text-gray-700 mb-8">
            Partnerships, sponsorships, volunteer coaching, equipment drives — we’d love to talk.
          </p>
          <Button
            onClick={() => onPageChange('contact')}
            variant="outline"
            className="border-teal text-teal hover:bg-teal hover:text-white font-montserrat font-medium text-lg px-8 py-5"
          >
            Partner with us
          </Button>
        </div>
      </section>
    </div>
  );
}
