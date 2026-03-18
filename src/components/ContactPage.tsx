import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { MapPin, Mail, Phone, Clock, Users, Handshake, Facebook, Instagram, Twitter } from 'lucide-react';

interface ContactPageProps {
  onPageChange: (page: string) => void;
}

export default function ContactPage({ onPageChange }: ContactPageProps) {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
    { name: 'Instagram', icon: Instagram, color: 'bg-pink-600' },
    { name: 'Twitter', icon: Twitter, color: 'bg-blue-400' }
  ];

  const contactInfo = [
    { icon: MapPin, label: 'Location', value: 'Chipata, Eastern Province, Zambia' },
    { icon: Mail, label: 'Email', value: 'info@chipatagirlsfc.org' },
    { icon: Phone, label: 'Phone', value: '+260 XXX XXX XXX' }
  ];

  return (
    <div className="min-h-screen bg-off-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-montserrat font-bold text-5xl text-gray-800 mb-6">Contact Us — Let's Talk</h1>
          <p className="font-lato text-xl text-muted-foreground max-w-4xl mx-auto">
            Whether you want to donate, partner with us, follow our progress, or simply send a word of encouragement 
            to our girls — we're here and ready to connect. Every email, call, or message reminds our players that 
            there's a whole world cheering them on.
          </p>
        </div>

        {/* We'd Love to Hear from You */}
        <section className="mb-20">
          <Card className="bg-teal text-white border-none shadow-lg">
            <CardContent className="p-8 text-center">
              <h2 className="font-montserrat font-bold text-4xl mb-6">We'd Love to Hear from You</h2>
              <p className="font-lato text-lg max-w-3xl mx-auto">
                Every email, call, or message reminds our players that there's a whole world cheering them on.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Get in Touch */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Get in Touch</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat font-medium text-xl text-gray-800 mb-2">{item.label}</h3>
                  <p className="font-lato text-lg text-gray-700">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Follow the Journey */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-gray-800 mb-6">Follow the Journey</h2>
            <p className="font-lato text-lg text-muted-foreground max-w-3xl mx-auto">
              Be part of the team wherever you are — follow us for live match updates, player stories, and behind-the-scenes moments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {socialLinks.map((social, index) => (
              <Button 
                key={index}
                className={`${social.color} hover:opacity-90 text-white font-montserrat font-medium text-lg px-8 py-4 flex items-center space-x-2`}
              >
                <social.icon className="w-5 h-5" />
                <span>{social.name}</span>
              </Button>
            ))}
          </div>
        </section>

        {/* Visit Us */}
        <section className="mb-20">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="font-montserrat font-bold text-3xl text-gray-800">Visit Us</h2>
                  </div>
                  
                  <p className="font-lato text-lg text-gray-700 mb-6">
                    If you're in Chipata, you're welcome to join us for a training session or match day. 
                    See firsthand how your support changes lives.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-montserrat font-medium text-gray-800">Training Ground:</p>
                        <p className="font-lato text-gray-700">Chipata College Education Grounds</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-teal flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-montserrat font-medium text-gray-800">Training Schedule:</p>
                        <p className="font-lato text-gray-700">Monday–Friday, 15:00–17:30</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-light-gray p-8 rounded-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-montserrat font-medium text-xl text-gray-800 mb-4">Come See Our Girls in Action</h3>
                    <p className="font-lato text-gray-700">
                      Experience the energy, determination, and joy of our training sessions and matches firsthand.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Partnerships & Sponsorships */}
        <section className="mb-20">
          <Card className="bg-warm-orange text-white border-none shadow-lg">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                      <Handshake className="w-6 h-6 text-warm-orange" />
                    </div>
                    <h2 className="font-montserrat font-bold text-3xl">Partnerships & Sponsorships</h2>
                  </div>
                  
                  <p className="font-lato text-lg mb-6">
                    We welcome collaboration with organisations, businesses, and individuals who share our vision. 
                    Let's work together to bring more opportunities to the girls of Eastern Province.
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <p className="font-lato text-lg">sponsorships@chipatagirlsfc.org</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-white p-8 rounded-lg text-gray-800">
                    <h3 className="font-montserrat font-medium text-xl mb-4">Partnership Opportunities</h3>
                    <ul className="font-lato text-left space-y-2">
                      <li>• Equipment sponsorships</li>
                      <li>• Educational scholarships</li>
                      <li>• Training facility improvements</li>
                      <li>• Transportation support</li>
                      <li>• Life skills program funding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Form */}
        <section className="mb-20">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle className="font-montserrat font-bold text-3xl text-center text-gray-800">Send Us a Message</CardTitle>
              <p className="font-lato text-lg text-center text-muted-foreground">
                Get in touch with us directly through this form
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="font-lato font-medium">Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your full name"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="font-lato font-medium">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com"
                      className="mt-2"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject" className="font-lato font-medium">Subject</Label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="What's this about?"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="font-lato font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you or how you'd like to support our girls..."
                    className="mt-2 min-h-32"
                  />
                </div>
                
                <div className="text-center">
                  <Button 
                    type="submit"
                    className="bg-teal hover:bg-teal/90 text-white font-montserrat font-medium text-lg px-12 py-3"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Barebone Version */}
        <section>
          <Card className="bg-light-gray border-none shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="font-montserrat font-medium text-2xl text-gray-800 mb-4">Quick Contact</h3>
              <div className="space-y-2 font-lato text-gray-700">
                <p>📍 Chipata, Eastern Province, Zambia</p>
                <p>📧 info@chipatagirlsfc.org</p>
                <p>📞 +260 XXX XXX XXX</p>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <Button variant="outline" size="sm">Facebook</Button>
                <Button variant="outline" size="sm">Instagram</Button>
                <Button variant="outline" size="sm">Twitter</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}