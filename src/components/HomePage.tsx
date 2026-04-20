import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Users, Trophy, Heart, Shield, GraduationCap, ArrowRight, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const impactStats = [
  { label: 'Girls in the program', value: '100+' },
  { label: '2024/25 wins', value: '17' },
  { label: 'Losses', value: '0' },
  { label: 'Clean sheets', value: '10' },
];

const voices = [
  {
    quote:
      'Being part of the team has given me a sense of purpose and confidence. I want to become a footballer — and a medical professional who comes back to mentor younger girls.',
    name: 'Team player, age 16',
    role: 'Chipata Girls FC',
  },
  {
    quote:
      'My role means a lot. I act like a motivator, coach, teacher, guardian, parent, preacher and organiser. We meet the girls where they are — and we walk with them.',
    name: 'Coach Phiri',
    role: 'Head Coach',
  },
  {
    quote:
      'I started Chipata Girls FC to curb early marriage and take the girl child back to school. One of my goalkeepers is now with the Zambia Army and has built her parents a home. I am proud of her.',
    name: 'Chipangula Dube',
    role: 'Club Director & Founder',
  },
];

const pillars = [
  {
    icon: Shield,
    title: 'A safe place to grow',
    body:
      'Training four afternoons a week keeps our girls out of bars, streets, and early marriages — and gives them a family that believes in them.',
  },
  {
    icon: GraduationCap,
    title: 'Education, always',
    body:
      'We pay school fees, re-enrol teenage mothers and dropouts, and expect every player to put the classroom first.',
  },
  {
    icon: Trophy,
    title: 'Football that changes lives',
    body:
      'Unbeaten in the Eastern Provincial League (17W-2D-0L) and back in the Zambia Super League — proof rural girls belong at the top.',
  },
];

export default function HomePage({ onPageChange }: HomePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center text-white">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?auto=format&fit=crop&w=1920&q=80"
            alt="Chipata Girls FC on the pitch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
          <Badge className="bg-warm-orange text-white font-lato mb-6">Chipata, Eastern Province · Zambia</Badge>
          <h1 className="font-montserrat font-bold text-4xl md:text-6xl leading-tight max-w-3xl mb-6">
            From barefoot on a dusty field to the Zambia Super League.
          </h1>
          <p className="font-lato text-lg md:text-2xl max-w-2xl mb-8 text-gray-100">
            Chipata Girls FC uses football to keep girls in school, out of early marriages,
            and on a path to lead their communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => onPageChange('donate')}
              className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-lg px-8 py-6"
            >
              Donate Now
            </Button>
            <Button
              onClick={() => onPageChange('about')}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 font-montserrat font-medium text-lg px-8 py-6"
            >
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Impact strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-montserrat font-bold text-4xl text-teal">{stat.value}</div>
              <div className="font-lato text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why we exist */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-14">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 mb-5">Why we exist</h2>
          <p className="font-lato text-lg text-gray-700 leading-relaxed">
            In our community, too many girls grow up believing their future is already decided:
            early marriage, school cut short, no safe place to gather. We are proof of the
            alternative. When a girl joins Chipata Girls FC, she gains more than a jersey. She
            gains a family, an education, and a future she gets to choose.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-7">
                <div className="w-12 h-12 bg-teal/10 rounded-lg flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6 text-teal" />
                </div>
                <h3 className="font-montserrat font-medium text-xl text-gray-900 mb-2">{pillar.title}</h3>
                <p className="font-lato text-muted-foreground">{pillar.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Voices */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl mb-12 text-center">In their own words</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {voices.map((v) => (
              <div key={v.name} className="bg-white/5 border border-white/10 rounded-xl p-7">
                <Quote className="w-8 h-8 text-warm-orange mb-4" />
                <p className="font-lato italic text-gray-100 mb-6 leading-relaxed">“{v.quote}”</p>
                <p className="font-montserrat font-medium text-warm-orange">{v.name}</p>
                <p className="font-lato text-sm text-gray-400">{v.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to help */}
      <section className="py-20 px-4 bg-off-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-montserrat font-bold text-4xl text-gray-900 mb-5">Your donation writes her next chapter</h2>
              <p className="font-lato text-lg text-gray-700 mb-6">
                Every ball, every bus ride, every school fee paid happens because of donors like you.
                When you give, you:
              </p>
              <ul className="space-y-3 font-lato text-gray-700 mb-8">
                <li className="flex gap-3"><Heart className="w-5 h-5 text-warm-orange flex-shrink-0 mt-1" /> Put boots on feet and uniforms on backs.</li>
                <li className="flex gap-3"><Heart className="w-5 h-5 text-warm-orange flex-shrink-0 mt-1" /> Send girls back to school with tuition and hope.</li>
                <li className="flex gap-3"><Heart className="w-5 h-5 text-warm-orange flex-shrink-0 mt-1" /> Fund travel to the matches that keep dreams alive.</li>
                <li className="flex gap-3"><Heart className="w-5 h-5 text-warm-orange flex-shrink-0 mt-1" /> Equip them with life skills that outlast football.</li>
              </ul>
              <Button
                onClick={() => onPageChange('donate')}
                className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-lg px-8 py-5"
              >
                Donate Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80"
                alt="Young footballers in training"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card
              className="border-none shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onPageChange('about')}
            >
              <CardContent className="p-7">
                <Heart className="w-8 h-8 text-teal mb-4" />
                <h3 className="font-montserrat font-medium text-xl mb-2">Our Story</h3>
                <p className="font-lato text-muted-foreground mb-4">How two coaches and a dusty pitch became a lifeline for 100+ girls.</p>
                <span className="font-montserrat text-teal text-sm">Learn more →</span>
              </CardContent>
            </Card>
            <Card
              className="border-none shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onPageChange('team')}
            >
              <CardContent className="p-7">
                <Users className="w-8 h-8 text-teal mb-4" />
                <h3 className="font-montserrat font-medium text-xl mb-2">The Team</h3>
                <p className="font-lato text-muted-foreground mb-4">Meet the players, follow the season, and see where alumni are now.</p>
                <span className="font-montserrat text-teal text-sm">Follow along →</span>
              </CardContent>
            </Card>
            <Card
              className="border-none shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => onPageChange('contact')}
            >
              <CardContent className="p-7">
                <Trophy className="w-8 h-8 text-teal mb-4" />
                <h3 className="font-montserrat font-medium text-xl mb-2">Partner with us</h3>
                <p className="font-lato text-muted-foreground mb-4">Sponsorships, exchange programmes, and volunteer coaching.</p>
                <span className="font-montserrat text-teal text-sm">Get in touch →</span>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
