import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CheckCircle, Heart, ArrowRight, Share2 } from 'lucide-react';
import { CONTACT } from '../lib/stripe-config';

interface ThankYouPageProps {
  onPageChange: (page: string) => void;
}

export default function ThankYouPage({ onPageChange }: ThankYouPageProps) {
  const shareMessage =
    'I just donated to Chipata Girls FC — empowering girls in Zambia through football and education. Join me: https://chipatagirlsfc.org';

  const share = () => {
    if (navigator.share) {
      navigator
        .share({ title: 'Support Chipata Girls FC', text: shareMessage, url: window.location.origin })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(shareMessage).catch(() => {});
    }
  };

  return (
    <div className="min-h-screen bg-off-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Card className="border-none shadow-lg">
          <CardContent className="p-10 md:p-14 text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">Thank you.</h1>
            <p className="font-lato text-lg text-gray-700 max-w-xl mx-auto mb-10">
              Your donation will make a real difference in the lives of our girls — more
              boots, more classrooms, more dreams. You’re part of the team now.
            </p>

            <div className="bg-off-white rounded-xl p-6 text-left mb-10">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-5 h-5 text-warm-orange" />
                <h2 className="font-montserrat font-medium text-lg text-gray-900">Your receipt</h2>
              </div>
              <p className="font-lato text-gray-700">
                Stripe will email your confirmation and receipt directly. If anything looks
                off, email us at <a className="text-teal hover:underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
              <Button
                onClick={share}
                className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Spread the word
              </Button>
              <Button
                onClick={() => onPageChange('team')}
                variant="outline"
                className="border-teal text-teal hover:bg-teal hover:text-white font-montserrat font-medium"
              >
                Follow the team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={() => onPageChange('home')}
                variant="outline"
                className="font-montserrat font-medium"
              >
                Back to home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
