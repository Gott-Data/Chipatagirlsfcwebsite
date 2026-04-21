import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Trophy, BookOpen, Users, Heart, Target, Quote } from 'lucide-react';
import LocalImage from './LocalImage';

interface AboutPageProps {
  onPageChange: (page: string) => void;
}

const mission = [
  'Keep girls off the streets and away from early marriage.',
  'Empower them through sport, education, and life skills.',
  'Send them back to school — and help them finish.',
  'Build confident, compassionate leaders for Eastern Province and beyond.',
];

const programs = [
  {
    icon: Trophy,
    title: 'Competitive football',
    body:
      'Weekly training and league play — unbeaten in the 2024/25 Eastern Women Provincial League, now back in the Zambia Super League.',
  },
  {
    icon: BookOpen,
    title: 'Education support',
    body:
      'School fees, materials, and mentoring so teenage mothers and dropouts can return to the classroom and graduate.',
  },
  {
    icon: Users,
    title: 'Life skills & mentoring',
    body:
      'Leadership, financial literacy, health, faith-based guidance, and gender-based-violence sensitisation workshops.',
  },
  {
    icon: Heart,
    title: 'Community outreach',
    body:
      'Our girls visit schools, mentor younger players, and lead community clean-ups and awareness drives.',
  },
];

const visionGoals = [
  'Serve 300+ girls annually across Eastern Province.',
  'Build a permanent training facility with pitches, classrooms, and community space.',
  'Launch a youth academy for girls from age 8.',
  'Put every player through a finished school career.',
  'Compete at Zambia’s top level and qualify for international tournaments.',
  'Run exchange programmes with clubs outside Zambia.',
];

export default function AboutPage({ onPageChange }: AboutPageProps) {
  return (
    <div className="bg-off-white">
      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <h1 className="font-montserrat font-bold text-5xl text-gray-900 mb-5">Our Story</h1>
          <p className="font-lato text-xl text-gray-600 max-w-3xl mx-auto">
            We are Chipata Girls FC — a community-driven football club in Eastern Province,
            Zambia, using sport to keep girls in school and change what’s possible for them.
          </p>
        </div>
      </section>

      {/* Founding */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-6">It started on a dusty field in 2019</h2>
            <div className="space-y-4 font-lato text-gray-700 text-lg leading-relaxed">
              <p>
                Founders Mr. C. Dube and Mr. M. J. Phiri met a group of girls playing
                barefoot at the Chipata College Education grounds. No kits. No equipment.
                No league. Just determination.
              </p>
              <p>
                Instead of walking away, they stepped in — as coaches, mentors, guardians,
                and sometimes parents. Chipata Girls FC was born: a football club, yes,
                but more importantly, a lifeline.
              </p>
              <p>
                Six years later, over 100 girls train with us every week. Some came from
                early teenage marriages. Some had dropped out of school. All of them now
                have a team that believes in them, and a path they get to choose.
              </p>
            </div>
          </div>
          <div>
            <LocalImage
              src="/images/about.jpg"
              fallbackSrc="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80"
              alt="Chipata Girls FC training"
              className="w-full h-96 object-cover rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">Our mission</h2>
          <p className="font-lato text-xl text-gray-700 mb-12">
            We teach the game. We change the life.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-3xl mx-auto">
            {mission.map((point) => (
              <div key={point} className="flex items-start gap-3 bg-off-white rounded-lg p-5">
                <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-3 h-3 text-white" />
                </div>
                <p className="font-lato text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-montserrat font-bold text-4xl text-gray-900 mb-4">What we do</h2>
          <p className="font-lato text-lg text-gray-700">
            Football is the doorway. Everything behind it is the real work.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((p) => (
            <Card key={p.title} className="border-none shadow-md">
              <CardContent className="p-7 flex gap-5">
                <div className="w-12 h-12 bg-teal rounded-lg flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-medium text-xl text-gray-900 mb-2">{p.title}</h3>
                  <p className="font-lato text-muted-foreground">{p.body}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Letter from the director */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Quote className="w-10 h-10 text-teal mr-3" />
                <h2 className="font-montserrat font-bold text-3xl text-gray-900">A letter from our director</h2>
              </div>
              <div className="space-y-5 font-lato text-lg text-gray-700 leading-relaxed">
                <p className="font-montserrat font-medium text-gray-900">Dear friends and supporters,</p>
                <p>
                  I started Chipata Girls FC to curb early marriage in our community and to
                  take the girl child back to school. I have always seen myself as a tool of
                  change — and football has been the easiest way to reach her.
                </p>
                <p>
                  Our biggest challenge has been finances. Equipment, transport, school fees —
                  every kwacha stretched. The girls, though, have given me courage that one day
                  things will be better. Many of those I have groomed now play for bigger clubs
                  in the premier league. Others I took back to school are in full employment
                  through football.
                </p>
                <p>
                  One story I will always carry: my goalkeeper, now with the Zambia Army.
                  She could hardly eat some days, her family struggled with rent — but she
                  never missed a training. Today she has built her parents a house. I am proud
                  of her.
                </p>
                <p>
                  Do not take these girls as kitchen helpers. Take them as pioneers of change.
                  Give them serious programmes, and stand with us.
                </p>
                <p className="font-montserrat font-medium text-teal">
                  — Chipangula Dube, Club Director & Founder
                </p>
              </div>
            </div>
            <div>
              <LocalImage
                src="/images/director.jpg"
                fallbackSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Chipangula Dube, Club Director"
                className="w-full aspect-square object-cover rounded-xl shadow-md"
              />
              <p className="font-lato text-sm text-muted-foreground text-center mt-3">
                Chipangula Dube · Club Director & Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="bg-teal text-white rounded-2xl p-10 md:p-14">
          <div className="max-w-3xl mb-10">
            <h2 className="font-montserrat font-bold text-4xl mb-4">Where we’re going</h2>
            <p className="font-lato text-lg text-teal-50">
              Over the next five years we want every girl in Eastern Province — and beyond —
              to know she has a choice. Here is what we’re building toward:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {visionGoals.map((goal) => (
              <div key={goal} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Target className="w-3 h-3 text-white" />
                </div>
                <p className="font-lato text-white">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center max-w-3xl mx-auto">
        <h2 className="font-montserrat font-bold text-3xl text-gray-900 mb-4">
          Join us in making that vision real.
        </h2>
        <p className="font-lato text-lg text-gray-700 mb-8">
          When you donate, you’re not funding a game. You’re investing in a future leader.
        </p>
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
