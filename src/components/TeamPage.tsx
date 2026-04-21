import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Quote, ArrowRight } from 'lucide-react';
import LocalImage from './LocalImage';
import { CONTACT } from '../lib/stripe-config';

interface TeamPageProps {
  onPageChange: (page: string) => void;
}

const seasonHeadline = [
  { label: 'Played', value: '19' },
  { label: 'Won', value: '17' },
  { label: 'Drawn', value: '2' },
  { label: 'Lost', value: '0' },
];

const detailedStats = [
  { label: 'Goals scored', value: '54' },
  { label: 'Goals conceded', value: '7' },
  { label: 'Clean sheets', value: '10' },
  { label: 'Provincial play-off', value: '2nd of 10' },
];

const players = [
  {
    name: 'Ruth Banda',
    position: 'Captain · Midfielder',
    image: '/images/player-1.jpg',
    fallback: 'https://images.unsplash.com/photo-1515355758951-b4b20b8a4544?auto=format&fit=crop&w=800&q=80',
    bio:
      'Calm under pressure. Ruth leads on the pitch and mentors the youngest players off it.',
  },
  {
    name: 'Mary Zulu',
    position: 'Striker',
    image: '/images/player-2.jpg',
    fallback: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=80',
    bio: 'Top scorer of the season with 18 goals. Pace and precision in equal measure.',
  },
  {
    name: 'Chipo Lungu',
    position: 'Goalkeeper',
    image: '/images/player-3.jpg',
    fallback: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80',
    bio: 'Our wall at the back — 10 clean sheets and match-saving moments by the dozen.',
  },
];

const upcomingMatches = [
  { date: 'Sep 14', opponent: 'Lusaka Queens', venue: 'Home' },
  { date: 'Sep 21', opponent: 'Ndola Stars', venue: 'Away' },
  { date: 'Sep 28', opponent: 'Kabwe Diamonds', venue: 'Home' },
];

const alumni = [
  {
    name: 'Martha',
    headline: 'From teenage mother to qualified teacher',
    story:
      'At 16, Martha thought her education was over. Through our program she returned to school, passed her exams, and is now training the next generation in a classroom of her own.',
    quote: 'Football gave me discipline and courage. Teaching lets me pass that on.',
  },
  {
    name: 'Grace',
    headline: 'From a dusty pitch to a University of Zambia scholarship',
    story:
      'Shy when she arrived, Grace grew into a fierce midfielder and a leader. Her dedication earned her a sports scholarship to study at the University of Zambia.',
    quote: 'Leadership isn’t the loudest voice. It’s lifting others up.',
  },
  {
    name: 'Lillian',
    headline: 'The coach who came back',
    story:
      'Lillian graduated from the programme, then returned as a youth coach. She’s now training 20+ young girls every week — proof that role models can come from right here.',
    quote: 'When the younger girls see me, they know the same path is possible.',
  },
];

const coach = {
  name: 'Coach M. J. Phiri',
  role: 'Head Coach & Mentor',
  image: '/images/coach.jpg',
  fallback: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80',
  quote:
    'I wanted to be what I didn’t have. We never had a female coach growing up. The relationships I build with these girls keep evolving — long after they stop being my players.',
};

export default function TeamPage({ onPageChange }: TeamPageProps) {
  return (
    <div className="bg-off-white">
      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <Badge className="bg-warm-orange text-white font-lato mb-5">2024/25 season · unbeaten</Badge>
          <h1 className="font-montserrat font-bold text-5xl text-gray-900 mb-5">The Team</h1>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            Over 100 girls train with us every week. Here’s the season so far, the players leading it,
            and the alumni who prove why this work matters.
          </p>
        </div>
      </section>

      {/* Season headline */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-4 gap-6 mb-10">
          {seasonHeadline.map((stat) => (
            <div key={stat.label} className="text-center bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
              <div className="font-montserrat font-bold text-4xl md:text-5xl text-teal">{stat.value}</div>
              <div className="font-lato text-muted-foreground mt-1 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
        <Card className="border-none shadow-md">
          <CardContent className="p-8 grid md:grid-cols-4 gap-6">
            {detailedStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-montserrat font-bold text-2xl text-gray-900">{stat.value}</div>
                <div className="font-lato text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </CardContent>
        </Card>
        <p className="font-lato text-gray-700 text-center mt-8 max-w-2xl mx-auto">
          Promoted back to the Zambia Super League — a statement that rural girls belong at the
          highest level in the country.
        </p>
      </section>

      {/* Players */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 text-center mb-12">Meet the players</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {players.map((p) => (
              <Card key={p.name} className="border-none shadow-md overflow-hidden">
                <LocalImage src={p.image} fallbackSrc={p.fallback} alt={p.name} className="w-full h-72 object-cover" />
                <CardContent className="p-6">
                  <h3 className="font-montserrat font-medium text-xl text-gray-900">{p.name}</h3>
                  <Badge className="bg-teal text-white font-lato mt-2 mb-3">{p.position}</Badge>
                  <p className="font-lato text-muted-foreground">{p.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Coach voice */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <Card className="border-none shadow-md overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-0">
            <LocalImage src={coach.image} fallbackSrc={coach.fallback} alt={coach.name} className="w-full h-80 lg:h-full object-cover" />
            <div className="lg:col-span-2 p-10 bg-white flex flex-col justify-center">
              <Quote className="w-10 h-10 text-warm-orange mb-5" />
              <p className="font-lato italic text-2xl text-gray-800 mb-6 leading-relaxed">
                “{coach.quote}”
              </p>
              <p className="font-montserrat font-medium text-gray-900">{coach.name}</p>
              <p className="font-lato text-muted-foreground">{coach.role}</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Alumni */}
      <section className="bg-gray-900 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl mb-3">Where they are now</h2>
            <p className="font-lato text-lg text-gray-300 max-w-2xl mx-auto">
              Our alumni are teachers, university students, coaches, and community leaders.
              Football was just the starting point.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {alumni.map((a) => (
              <div key={a.name} className="bg-white/5 border border-white/10 rounded-xl p-7">
                <h3 className="font-montserrat font-medium text-xl text-warm-orange mb-1">{a.name}</h3>
                <p className="font-montserrat font-medium text-white mb-4">{a.headline}</p>
                <p className="font-lato text-gray-300 mb-5">{a.story}</p>
                <p className="font-lato italic text-gray-100 border-l-2 border-warm-orange pl-4">
                  “{a.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming fixtures */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 mb-3">Upcoming matches</h2>
          <p className="font-lato text-lg text-gray-600">Super League 2025 — cheer from wherever you are.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {upcomingMatches.map((m) => (
            <Card key={`${m.date}-${m.opponent}`} className="border-none shadow-md">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3 text-teal">
                  <Calendar className="w-5 h-5" />
                  <span className="font-montserrat font-medium text-lg">{m.date}</span>
                </div>
                <p className="font-montserrat font-medium text-xl text-gray-900 mb-3">
                  {m.venue === 'Home' ? `Chipata Girls FC vs ${m.opponent}` : `${m.opponent} vs Chipata Girls FC`}
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <Badge className={m.venue === 'Home' ? 'bg-teal text-white' : 'bg-warm-orange text-white'}>
                    {m.venue}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href={CONTACT.facebook}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-montserrat font-medium text-teal hover:underline"
          >
            Full fixtures & live updates on Facebook
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl shadow-md p-10 md:p-14">
          <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
            Every stat here was paid for by a donor.
          </h2>
          <p className="font-lato text-lg text-gray-700 mb-8">
            No donors, no bus rides to matches. No boots. No classroom fees. Your gift keeps
            the scoreboard moving — and keeps dreams alive.
          </p>
          <Button
            onClick={() => onPageChange('donate')}
            className="bg-warm-orange hover:bg-orange-600 text-white font-montserrat font-medium text-lg px-10 py-5"
          >
            Donate Now
          </Button>
        </div>
      </section>
    </div>
  );
}
