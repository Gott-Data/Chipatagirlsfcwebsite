import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { MapPin, Mail, Phone, Clock, Handshake, Facebook } from 'lucide-react';
import { CONTACT } from '../lib/stripe-config';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export default function ContactPage({ onPageChange }: ContactPageProps) {
  return (
    <div className="bg-off-white">
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="font-montserrat font-bold text-5xl text-gray-900 mb-5">Get in touch</h1>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            Donate. Partner. Send a word of encouragement to the girls. Every message reminds
            our players that a whole world is cheering them on.
          </p>
        </div>
      </section>

      {/* Contact tiles */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-none shadow-md">
            <CardContent className="p-7 text-center">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-montserrat font-medium text-lg mb-1">Visit</h3>
              <p className="font-lato text-gray-700">Chipata, Eastern Province, Zambia</p>
              <p className="font-lato text-sm text-muted-foreground mt-2">
                Chipata College Education Grounds
              </p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="p-7 text-center">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-montserrat font-medium text-lg mb-1">Email</h3>
              <a className="font-lato text-gray-700 hover:text-teal" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md">
            <CardContent className="p-7 text-center">
              <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-teal" />
              </div>
              <h3 className="font-montserrat font-medium text-lg mb-1">Phone</h3>
              <p className="font-lato text-gray-700">{CONTACT.phone}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Visit us */}
      <section className="px-4 pb-16 max-w-5xl mx-auto">
        <Card className="border-none shadow-md">
          <CardContent className="p-8 grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="font-montserrat font-bold text-2xl text-gray-900 mb-4">Come see a training session</h2>
              <p className="font-lato text-gray-700 mb-5">
                If you’re in Chipata, you’re welcome to join us for a training session or match day.
                See firsthand how your support changes lives.
              </p>
              <div className="space-y-3 font-lato text-gray-700">
                <div className="flex items-start gap-2"><MapPin className="w-5 h-5 text-teal mt-0.5" /> Chipata College Education Grounds</div>
                <div className="flex items-start gap-2"><Clock className="w-5 h-5 text-teal mt-0.5" /> Monday–Friday, 15:00–17:30</div>
              </div>
            </div>
            <div className="bg-off-white p-6 rounded-lg">
              <h3 className="font-montserrat font-medium text-lg text-gray-900 mb-3">Follow along online</h3>
              <p className="font-lato text-gray-700 mb-4">
                Live match updates, player stories, and behind-the-scenes moments.
              </p>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-montserrat font-medium text-teal hover:underline"
              >
                <Facebook className="w-4 h-4" />
                Chipata Girls FC on Facebook
              </a>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Partnerships */}
      <section className="px-4 pb-20 max-w-5xl mx-auto">
        <Card className="bg-warm-orange text-white border-none shadow-md">
          <CardContent className="p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-warm-orange" />
                  </div>
                  <h2 className="font-montserrat font-bold text-2xl">Partnerships & sponsorships</h2>
                </div>
                <p className="font-lato mb-5">
                  We welcome organisations, businesses, and individuals who share our vision —
                  equipment sponsors, education partners, facility builders, exchange
                  programmes. Let’s build this together.
                </p>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <a className="font-lato hover:underline" href="mailto:sponsorships@chipatagirlsfc.org">
                    sponsorships@chipatagirlsfc.org
                  </a>
                </div>
              </div>
              <div className="bg-white text-gray-800 rounded-lg p-6">
                <h3 className="font-montserrat font-medium text-lg mb-3">We’re looking for:</h3>
                <ul className="font-lato space-y-1.5">
                  <li>• Equipment sponsors (boots, kits, balls)</li>
                  <li>• Education scholarships for players</li>
                  <li>• Facility and pitch improvements</li>
                  <li>• Transport and travel funding</li>
                  <li>• Life-skills programme funding</li>
                  <li>• International exchange partners</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center max-w-3xl mx-auto">
        <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">Ready to help today?</h2>
        <p className="font-lato text-lg text-gray-700 mb-8">A donation is the fastest way to change a season for these girls.</p>
        <Button
          onClick={() => onPageChange('donate')}
          className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-lg px-10 py-5"
        >
          Donate Now
        </Button>
      </section>
    </div>
  );
}
